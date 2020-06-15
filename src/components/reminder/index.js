import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import Weather from '../weather/index.js';
import DatePicker from 'react-datepicker';

import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './reminder.css';
import './react-datapicker.css';
import "bootstrap/dist/css/bootstrap.min.css";

export default class Reminder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      startTime: new Date(),
      endTime: new Date(),
      isOpen: false
    }
  }

  showModal = () => {
    this.setState( this.state.isOpen );
  };

  hideModal = () => {
    this.setState( !this.state.isOpen );
  };

  handleChange = date => {
    this.setState({date: date});
  };

  handleChangeStartTime = startTime => {
    this.setState({startTime: startTime});
  };

  handleChangeEndTime = endTime => {
    this.setState({endTime: endTime});
  };

  MyModalWithGrid = props => {
    
    console.log("reach here");
    
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter" nameClass="modalScreen">
        <ModalHeader closeButton>
          <ModalTitle id="contained-modal-title-vcenter">
            Using Grid in Modal
          </ModalTitle>
        </ModalHeader>
        <ModalBody className="show-grid">
          
        </ModalBody>
        <ModalFooter>
          <button onClick={props.onHide}>Close</button>
        </ModalFooter>
      </Modal>
    );
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
            <button variant="primary" onClick={() => this.MyModalWithGrid(true)}>
              Launch modal with grid
            </button>
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