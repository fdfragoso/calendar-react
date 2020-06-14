import React from 'react';
import moment from 'moment';

import './calendar.css';

export default class Month extends React.Component {
    state = {
        dateObject: moment(),
        allmonths: moment.months()
    };
    
    MonthList = props => {
      let months = [];
      props.data.forEach((data, i) => {
          months.push(
          <td> <span>{data}</span> </td>
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
}