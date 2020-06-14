import React, { useState } from 'react';
import apiConfig from '../../apiKeys.js';

import { faMapMarkerAlt, faCloudSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './weather.css';

const Weather = (props) => {
  
  let [city, setCity] = useState('New York');
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
    setUnit('metric');
    
    setLoading(true);

    const weatherURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&APPID=${apiConfig.owmKey}`

    console.log(loading);

    fetch(weatherURL)
    .then(response => response.json())
    .then(response => {
        if (response.cod !== 200) {
            throw new Error()
        }

        setResponseObj(response);
        setLoading(false);
        
        setWeatherDesc(response.weather[0].description);
        setMainTemp(response.main.temp);

        console.log(responseObj);
        
    })
    .catch(err => {
        setError(true);
        setLoading(false);
        console.log(err.message);
        console.log(error);
    });
  }

  return (
    <div> 
      <div className="reminder-place">
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        <input
          type="text"
          placeholder="Add location"
          maxLength="50"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={getWeather}>Get Forecast</button>
      </div>
      <div className="reminder-weather">
        <FontAwesomeIcon icon={faCloudSun} />
        <span>
        {weatherDesc}, {mainTemp}
        </span>
      </div>
    </div>
  )
}

export default Weather;