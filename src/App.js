import React from "react";
import {
  Route,
  Switch,
  HashRouter
} from "react-router-dom";

import Calendar from "./hoc/calendar/index.js";
import Month from "./containers/month/index.js";

export default class App extends React.Component {
  render() {
    return (

      <
      Calendar >
      <
      HashRouter >
      <
      Switch >
      <
      Route path = "/:year/:month"
      component = {
        Month
      }
      /> <
      Route path = "/"
      exact component = {
        Month
      }
      /> <
      /Switch> <
      /HashRouter> <
      /Calendar>
    );
  }
}