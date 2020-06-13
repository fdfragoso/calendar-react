import React from 'react';
import moment from 'moment';

import './calendar.css';

export default class Calendar extends React.Component {
  weekdays = moment.weekdays();
  
  state = {
    showYearTable: false,
    showMonthTable: false,
    showDateTable: true,
    dateObject: moment(),
    allmonths: moment.months(),
  };

  //return the first day of the month
  firstDayOfMonth = () => {
    let dateObject = this.state.dateObject;
    let firstDay = moment(dateObject)
                 .startOf("month")
                 .format("d"); 
   return firstDay;
  };

  //return the current day
  currentDay = () => {  
    return this.state.dateObject.format("D");
  };

  //return the month name
  month = () => {
    return this.state.dateObject.format("MMMM");
  };

  setMonth = month => {
    let monthNo = this.state.allmonths.indexOf(month);
    let dateObject = Object.assign({}, this.state.dateObject);
    dateObject = moment(dateObject).set("month", monthNo);
    this.setState({
      dateObject: dateObject,
      showMonthTable: !this.state.showMonthTable,
      showDateTable: !this.state.showDateTable
    });
  };

  MonthList = props => {
    let months = [];
    props.data.forEach((data, i) => {
      months.push(
        <td
          key={data}
          className="calendar-month"
          onClick={e => {
              this.setMonth(data);
          }
        }> 
            <span>{data}</span> 
        </td>
      );
    });

    let rows = [];
    let cells = [];

    months.forEach((row, i) => { 
        if (i % 3 !== 0 || i === 0) { // except zero index 
            cells.push(row); 
        } else { 
            rows.push(cells); 
            cells = [];
            cells.push(row); 
        }
     });
     rows.push(cells); // add last row

     let monthlist = rows.map((d, i) => {
        return <tr>{d}</tr>;
     });

     return (
        <table className="calendar-month">
          <thead>
            <tr>
              <th colSpan="4">Select a Month</th>
            </tr>
          </thead>
          <tbody>{monthlist}</tbody>
        </table>
      );
  }

  showMonth = (e) => {   
    this.setState({  
       showMonthTable: !this.state.showMonthTable,
       showDateTable: !this.state.showDateTable   
    });
   };
 
  year = () => {    
    return this.state.dateObject.format("Y");
  };

  YearTable = props => {
    let months = [];
    let nextten = moment()
      .set("year", props)
      .add(12, "year")
      .format("Y");

    let tenyear = this.getDates(props, nextten);

    tenyear.forEach((data, i) => {
      months.push(
        <td
          key={data}
          className="calendar-month"
          onClick={e => {
            this.setYear(data);
          }}
        >
          <span>{data}</span>
        </td>
      );
    });
    let rows = [];
    let cells = [];

    months.forEach((row, i) => {
      if (i % 3 !== 0 || i === 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
    });
    rows.push(cells);
    let yearlist = rows.map((d, i) => {
      return <tr>{d}</tr>;
    });

    return (
      <table className="calendar-month">
        <thead>
          <tr>
            <th colSpan="4">Select a Year</th>
          </tr>
        </thead>
        <tbody>{yearlist}</tbody>
      </table>
    );
  };

  setYear = year => {
    let dateObject = Object.assign({}, this.state.dateObject);
    dateObject = moment(dateObject).set("year", year);
    this.setState({
      dateObject: dateObject,
      showMonthTable: !this.state.showMonthTable,
      showYearTable: !this.state.showYearTable });
  };

  showYearTable = (e) => {
    this.setState({
        showYearTable: !this.state.showYearTable,
        showDateTable: !this.state.showDateTable
    });
  };

  getDates(startDate, stopDate) {
    var dateArray = [];
    var currentDate = moment(startDate);
    stopDate = moment(stopDate);
    while (currentDate <= stopDate) {
      dateArray.push(moment(currentDate).format("YYYY"));
      currentDate = moment(currentDate).add(1, "year");
    }
    return dateArray;
  }

  render() {
    let weekdayname = this.weekdays.map(day => {
        return (
          <th key={day} className="week-day">
           {day}
          </th>
        );
     });
    
    // Add blank spaces to days of the week without any day in the month
    let blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(
        <td key={"blank"} className="calendar-day empty">{""}</td>
      );
    }

    /* SOME TESTS TO GET THE DAYS IN MONTH FROM MOMENT JS
    console.log(moment().month());
    console.log(moment().year());
    console.log(moment().toDate());
    console.log(moment().format("YYYY-MM"));
    console.log(moment("2020-06", "YYYY-MM").daysInMonth());
    console.log(moment().format("YYYY-MM"));

    let monthDuration = moment().format("YYYY-MM");
    console.log(moment(monthDuration).daysInMonth());
    */
    
    //Add the days of the current Month and highlight the current day
    let monthDays = moment().format("YYYY-MM");
    let daysInMonth = [];
    for (let d = 1; d <= moment(monthDays).daysInMonth(); d++) {
        let _currentDay = d.toString() === this.currentDay().toString() ? "today" : "";
        daysInMonth.push(
        <td key={d} className={`calendar-day ${_currentDay}`}> 
          {d}
        </td>
      );
    }

    //calendar struct of the week to create the table
    var totalSlots = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
        if (i % 7 !== 0) {
          cells.push(row); // if index not equal 7 that means not go to next week
        } else {
          rows.push(cells); // when reach next week we contain all td in last week to rows 
          cells = []; // empty container 
          cells.push(row); // in current loop we still push current row to new container
        }
        if (i === totalSlots.length - 1) { // when end loop we add remain date
          rows.push(cells);
        }
      });

    let daysinmonth = rows.map((d, i) => {
      return <tr key={i}>{d}</tr>;
    });
     
    return (
      <div>
        <h2>Calendar {this.year()}</h2>

        <div className="tail-datetime-calendar">
          <div className="calendar-navi">
            <span 
              data-tail-navi="switch" className="calendar-label"
              onClick={e => {
                this.showMonth();
              }}
            >
              {this.month()}
            </span>
            <span 
              data-tail-navi="switch"
              className="calendar-label" 
              onClick={(e) => {
                this.showYearTable()
              }} 
            >
              {this.year()}
            </span>
          </div>
          <div className="calendar-date">
            {this.state.showYearTable && (
              <this.YearTable props={this.year()} /> 
            )}

            {this.state.showMonthTable &&  
            < this.MonthList data = {moment.months()} />}
          </div>
          
          
          { !this.state.showDataTable && (
            <div className="calendar-date">
                <table className="calendar-day">
                    <thead>
                    <tr>{weekdayname}</tr>
                    </thead>
                    <tbody>{daysinmonth}</tbody>
                </table>
            </div>)}
        </div>
      </div>
    );
  }
}