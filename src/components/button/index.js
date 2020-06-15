import React from "react";

import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

import reactCSS from 'reactcss'

import Weather from '../weather/index.js';

import { GithubPicker } from 'react-color';

import { faClock, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "bootstrap/dist/css/bootstrap.min.css";

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      backColor: '#fff',
      reminder: {
        title: 'Add a reminder',
        date: '01/01/1990',
        time: '00:00',
        place: 'New York',
        forecast: 'clear sky, 22',
        color: '#fff'
      }
    }
  }

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

  handleChangeComplete = (color) => {
    this.setState({ backColor: color.hex });
    console.log( "Color hex: " + color.hex );
    console.log( "Background: " + this.backColor);
  };

  render() {

    const styles = reactCSS({
      'default': {
        backColorHeader: {
          background: `${ this.state.backColor }`,
        },
      },
    });

    return (
      <>
        <button onClick={this.showModal}>+</button>
        <Modal show={this.state.isOpen} onHide={this.hideModal}>
          <ModalHeader style={ styles.backColorHeader }>
            <ModalTitle>
              <input 
                type="text"
                placeholder="Add the reminder"
              />
            </ModalTitle>
            <button onClick={this.hideModal}>X</button>
          </ModalHeader>
          <ModalBody>
          {this.state.backgroundColor}
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
            <GithubPicker 
              width="415px"
              triangle="hide"
              color={ this.state.backgroundColors }
              onChangeComplete={ this.handleChangeComplete }
            />
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
