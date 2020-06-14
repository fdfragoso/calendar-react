import React from 'react';
import Weather from '../weather/index.js';
import DatePicker from 'react-datepicker';

import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './reminder.css';
import './react-datapicker.css';

export default class Reminder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      startTime: new Date(),
      endTime: new Date()
    }
  }

  handleChange = date => {
    this.setState({date: date});
  };

  handleChangeStartTime = startTime => {
    this.setState({startTime: startTime});
  }

  handleChangeEndTime = endTime => {
    this.setState({endTime: endTime});
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
              className="DatePicker"
              dateFormat="dd/MM/yyyy" 
              selected={this.state.date} 
              onChange={this.handleChange}
            />
            <DatePicker
              selected={this.state.startTime}
              onChange={this.handleChangeStartTime}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="h:mm aa"
            />
            <DatePicker
              selected={this.state.endTime}
              onChange={this.handleChangeEndTime}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="h:mm aa"
            />
            {console.log('this.state.date',this.state.date)}
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