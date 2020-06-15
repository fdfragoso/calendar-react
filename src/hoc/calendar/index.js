import React from "react";

export default class Calendar extends React.Component {
  render() {
    return <div className="calendar">{this.props.children}</div>;
  }
}