import React from 'react';

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
            <span>X</span>    
          </div>
        </div>
        <div className="reminder-center">
          <div className="reminder-time">
            <img src="" alt="time"/>
            <input value="Add time" type="text"/>
          </div>
          <div className="reminder-place">
            <img src="" alt="place"/>
            <input value="Add location" type="text"/>
          </div>
          <div className="reminder-weather">
            <img src="" alt="weather"/>
            <span>Weather</span>
          </div>
        </div>
      </div>
    );
  }
}