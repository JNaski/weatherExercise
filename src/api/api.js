import * as Properties from '../properties';

const WEATHER_URL = 'https://api.openweathermap.org/data/2.5';

export function getWeather(city, unit) {
    return fetch(`${WEATHER_URL}/weather?q=${city}&appid=${Properties.api_key}&units=${unit}`, {
        method: 'get',
        headers: {
            'Accept': 'application/json'
        }
    })
      .then(response => response.json());
}

export function getForecast(lat, lon, unit) {
    return fetch(`${WEATHER_URL}/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&units=${unit}&appid=${Properties.api_key}`, {
        method: 'get',
        headers: {
            'Accept': 'application/json'
        }
    })
      .then(response => response.json());
}