import React, { Component } from 'react';
import Calendar from 'react-calendar';


const disabledDates = [
  new Date(2020, 1, 1),
  new Date(2020,  1, 2),
];

class Calendarexample extends Component {
  state = {
    date: new Date(),

  }
  
  onChange = date => this.setState({ date })
 
  render() {
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
          tileDisabled={(date, view) =>
            (view === 'month') && 
            disabledDates.some(disabledDate =>
              date.getFullYear() === disabledDate.getFullYear() &&
              date.getMonth() === disabledDate.getMonth() &&
              date.getDate() === disabledDate.getDate()
            )}
        />
      </div>
    );
  }
}


export default Calendarexample





