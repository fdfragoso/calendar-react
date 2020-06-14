import React from 'react';
import Weather from '../weather/index.js';
import DatePicker from 'react-datepicker';

import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './reminder.css';

export default class Reminder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    }
  }

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
            <DatePicker
              dateFormat="dd/MM/yyyy" 
              selected={this.state.startDate} 
              onChange={() => this.setState({ startDate: this.state.startDate.date })} 
            />
          </div>
          <Weather />
          <div className="reminder-colorPicker">
            <span>Color Picker</span>
          </div>
        </div>
        <div className="reminder-bottom">
          <button>Save</button>
          <button>Close</button>
        </div>
      </div>
    );
  }
}