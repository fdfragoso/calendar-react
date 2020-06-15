import React from 'react';

export default class Reminder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
      <div>
        {console.log(this.props.reminder.title)}
      </div>
    );
  }
}