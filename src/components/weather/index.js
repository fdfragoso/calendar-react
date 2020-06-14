import React, { useState } from 'react';
import moment from 'moment';
import apiConfig from '../../apiKeys.js'

import './weather.css';

const Weather = () => {
  
  let [city, setCity] = useState('Viborg');
  let [unit, setUnit] = useState('metric');
  let [responseObj, setResponseObj] = useState({});
  let [error, setError] = useState(false);
  let [loading, setLoading] = useState(false);
  let [weatherDesc, setWeatherDesc] = useState('');
  let [mainTemp, setMainTemp] = useState('');

  function getWeather(e) {
    
    e.preventDefault();

    if (city.length === 0) {
        return setError(true);
    }

    // Clear state in preparation for new data
    setError(false);
    setResponseObj({});
    
    setLoading(true);

    const weatherURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&APPID=${apiConfig.owmKey}`

    fetch(weatherURL)
    .then(response => response.json())
    .then(response => {
        if (response.cod !== 200) {
            throw new Error()
        }

        setResponseObj(response);

        console.log(response);
        setLoading(false);
        
        setWeatherDesc(response.weather[0].description);
        setMainTemp(response.main.temp);
        
    })
    .catch(err => {
        setError(true);
        setLoading(false);
        console.log(err.message);
    });
  }

  return (
    <div>
      <h1>hi!</h1>
      <div>
        {weatherDesc}, {mainTemp}
      </div>
      <button onClick={getWeather}>Get Forecast</button>
    </div>
  )
}

export default Weather;