import React from 'react';
import Weather from '../weather/index.js';

import { faClock, faMapMarkerAlt, faCloudSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './reminder.css';

export default class Reminder extends React.Component {
  
    render() {

    return (
      <div className="test">
        <div className="reminder-top">
          <div className="reminder-input">
            <input value="Add title" type="text"/>
          </div>
          <div className="reminder-close">
            <button>X</button>    
          </div>
        </div>
        <div className="reminder-center">
          <div className="reminder-time">
            <FontAwesomeIcon icon={faClock} />
            <input value="Add time" type="text"/>
          </div>
          <div className="reminder-place">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <input value="Add location" type="text"/>
          </div>
          <div className="reminder-weather">
            <FontAwesomeIcon icon={faCloudSun} />
            <span>Weather</span>
          </div>
          <div className="reminder-colorPicker">
            <span>Color Picker</span>
          </div>
        </div>
        <div className="reminder-bottom">
          <button>Save</button>
          <button>Close</button>
          <Weather />
        </div>
      </div>
    );
  }
}