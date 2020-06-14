import React from 'react';
import Reminder from '../reminder/index.js';

import './button.css';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {  // switch the value of the showModal state
    this.setState({
      showModal: !this.state.showModal
    });

    this.getComponent();
  }

  getComponent() {
    if (this.state.showModal) {  // show the modal if state showModal is true
      console.log(this.state.showModal);
      return <Reminder />;
    } else {
      console.log(this.state.showModal);
      return null;
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>+</button>
        {this.getComponent()}
      </div>
    );
  }
}