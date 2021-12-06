import React, {useState, useEffect} from 'react';
import SearchView from './views/SearchView';
import ResultView from './views/ResultView';
import * as Api from './api/api';
import { testData } from './util/constants';

const App = () => {
  const [result, setResult] = useState(null);
  const [city, setCity] = useState('Heidenheim');
  const [unit, setUnit] = useState('metric');

  const submitSearch = (data) => {
    setCity(data.searchInput);
    setUnit(data.unitSelect);
    Api.getWeather(data.searchInput, data.unitSelect)
      .then(response => {
        setResult(response);
      });
  }

  useEffect(() => {
    if(result===null) {
      // To use test data, comment out Api call
      // and remoce comment from set result

      setResult(testData);
      Api.getWeather(city, unit)
      .then(response => {
          setResult(response);
      })
      .catch(e => {
        console.error("Error ", e);
      });
    }
  })

  return(
    <div className="md:flex h-full grid grid-cols-1 h-1/3 bg-gradient-to-b from-blue-500">
      <div className="md:w-1/6 ms:h-1/6">
        <SearchView submitSearch={submitSearch} />
      </div>
      <div className="md:w-5/6">
        <ResultView weather={result} unit={unit}/>
      </div>
    </div>
  );
};

export default App;