import React from 'react';

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

    console.log(this.state.showModal);
    alert("TESTE");
  }

  getComponent() {
    if (this.state.showModal) {  // show the modal if state showModal is true
      console.log(this.state.showModal);
      return <Button />;
    } else {
      return null;
    }
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me!
      </button> 
    );
  }
}