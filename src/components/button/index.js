import React from "react";

import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

import Weather from '../weather/index.js';

import { faClock, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "bootstrap/dist/css/bootstrap.min.css";

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      date: new Date()
    }
  }

  handleChange = date => {
    this.setState({date: date});
    console.log(this.state.date);
  };
  
  showModal = () => {
    console.log(this.props.dateObject.format("DD-MM-YYYY"));
    this.setState({
      isOpen: true
    });
  };

  hideModal = () => {
    this.setState({
      isOpen: false
    });
  };

  render() {
    return (
      <>
        <button onClick={this.showModal}>+</button>
        <Modal show={this.state.isOpen} onHide={this.hideModal}>
          <ModalHeader>
            <ModalTitle>
              <input 
                type="text"
                placeholder="Add the reminder"
              />
            </ModalTitle>
            <button onClick={this.hideModal}>X</button>
          </ModalHeader>
          <ModalBody>
            <FontAwesomeIcon icon={faCalendarAlt} />
            <input 
              type="text"
              placeholder={this.props.dia}
            />
            <br/>
            <FontAwesomeIcon icon={faClock} />
            <input 
              type="text"
              placeholder="00:00"
            />
            <br/>
            <Weather />
          </ModalBody>
          <ModalFooter>
            <button onClick={this.hideModal}>Cancel</button>
            <button>Save</button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
