import React, { useEffect, useState } from 'react';
import { calculateDate, calculateTime, degToCompass } from '../util/calculations';
import * as Api from '../api/api';
import { testForecast } from '../util/constants';

const ResultView =({weather, unit}) => {

  const [forecast, setForecast] = useState(null);
  let date = null, time = null;
  let imageSource = null;
  let tempStyle = "red-300";
  let unitString = "°C";
  if(weather) {
    if(weather.dt) {
      date = calculateDate(weather.dt);
      time = calculateTime(weather.dt);
    }
    if(weather.weather[0]) {
      imageSource = "https://openweathermap.org/img/wn/" + weather.weather[0].icon + "@2x.png";
    }
    if(unit === 'metric') {
      if(weather.main.temp <= 0 && weather.main.temp >= -20) {
        tempStyle = "blue-300";
      } else if(weather.main.temp < -20) {
        tempStyle = "blue-600";
      } else if(weather.main.temp > 20) {
        tempStyle = "red-600";
      }
    } else if(unit === -'imperial') {
      unitString = '°F';
      if(weather.main.temp <= 32 && weather.main.temp >= -4) {
        tempStyle = "blue-300";
      } else if(weather.main.temp < -4) {
        tempStyle = "blue-600";
      } else if(weather.main.temp > 68) {
        tempStyle = "red-600";
      }
    } else if(unit === 'standard') {
      unitString = 'K';
      if(weather.main.temp <= 273.15 && weather.main.temp >= 253.15) {
        tempStyle = "blue-300";
      } else if(weather.main.temp < 253.15) {
        tempStyle = "blue-600";
      } else if(weather.main.temp > 293.15) {
        tempStyle = "red-600";
      }
    }
  }

  useEffect(() => {
   if(weather !== null ) {
    // To use test data, comment out Api call
    // and remoce comment from set forecast

    //setForecast(testForecast);
    Api.getForecast(weather.coord.lat, weather.coord.lon, unit)
      .then(response => {
        setForecast(response);
      })
      .catch(e => {
        console.error("Error ", e);
      });
    }
  });

  return (
    <div className="grid md:grid-cols-2 gap-2">
      <div>
        <h1 className="mt-5 mb-1 ml-5 text-4xl font-extrabold text-lg">{weather?.name || ''}</h1>
        {date !== null &&
          <p className="ml-5 mb-15">
            {date} - {time}
          </p>
        }
        <div className="ml-5 mr-5 mt-10 mb-2">
          <div className="grid md:grid-cols-3 gap-3 mb-10 bg-blue-100 rounded">
            <div>
            <p className={"text-3xl pt-4 text-center	 text-" + tempStyle}>{weather?.main.temp} {unitString}</p>
            <p className="text-xs ml-2 text-center	">Feels like: {weather?.main.feels_like} {unitString}</p>
            </div>
            <div>
            <img src={imageSource} className="-mt-3 -mb-3 mx-auto" />
            </div>
            <div className="text-center	">
              <p>Wind direction</p>
              <p className=""> {degToCompass(weather?.wind.deg)}</p>
              <p> {weather?.wind.speed} {unit === 'imperial' ? 'mi/h' : 'm/s'}</p>
            </div>
          </div>
          <p className="font-bold">Weather: </p>
          <div className="w-2/3 border bg-gray-100 rounded text-sm">
            <div className="grid grid-cols-2 gap-1">
              <p>{weather?.weather[0].description || ''}</p>
              <p />
              <p>Temperature min:</p>
              <p>{weather?.main.temp_min} {unitString}</p>
              <p>Temperature max:</p>
              <p>{weather?.main.temp_max} {unitString}</p>
              <p>Air pressure:</p>
              <p>{weather?.main.pressure} hPa</p>
              <p>Humidity:</p>
              <p>{weather?.main.humidity} %</p>
              <p>Sunrise: </p>
              <p>{calculateTime(weather?.sys.sunrise)}</p>
              <p>Sunset: </p>
              <p>{calculateTime(weather?.sys.sunset)}</p>
              <p>Day length: </p>
              <p>{calculateTime((weather?.sys.sunset - weather?.sys.sunrise))}</p>
            </div>
          </div>

        </div>
      </div>
      <div className="mb-4">
        {/*TODO implement weathermap here */}
      </div>
      <div className="ml-5 mr-5 mb-10 h-full">
        <h1 className="text-2xl text-bold mt-10 mb-5 underline">7 days forecast</h1>
        <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-2">
          {forecast?.daily.map((day, index) => 
            index !== 0 &&
            <div key={index} className={"border border-green-700 rounded text-center items-center bg-gradient-to-b from-" + tempStyle + " via-white"}>
              <p className="bg-green-400">{calculateDate(day.dt)}</p>
              <p className="items-center text-center mx-auto w-full">
                <img src={"https://openweathermap.org/img/wn/"+day.weather[0].icon+".png" } className="mx-auto" />
              </p>
              <p className="underline mt-2">Max temp.</p>
              <p className="text-sm">{day.temp.max} {unitString}</p>
              <p className="underline mt-2">Min temp.</p>
              <p className="text-sm">{day.temp.min} {unitString}</p>
              <p className="underline mt-2">Wind</p>
              <p className="text-sm">{day.wind_speed} {unit === 'imperial' ? 'mi/h' : 'm/s'}</p>
              <p className="text-sm">{degToCompass(day.wind_deg)}</p>
            </div>
          
          )
          }
        </div>
      </div>
    </div>
  );
}

export default ResultView;