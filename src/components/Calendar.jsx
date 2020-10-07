import React, { Component } from 'react';
import Calendar from 'react-calendar';

const disabledDates = [
];

class CalendarComp extends Component {
  state = {
    date: new Date(),

  }
 
  onChange = date => this.setState({ date })
 
  render() {
    const event =[
    ]
    for (let i = 0; i < this.props.list.length; i++) {
      
      let currMonth=new Date().getMonth()
      const dateObject = new Date(this.props.list[i].date*1000)

      if (currMonth === dateObject.getMonth()) {
        dateObject.setHours(0);
        dateObject.setMinutes(0);
        dateObject.setSeconds(0);
        dateObject.setMilliseconds(0);
        event.push(dateObject)

      }
    }
   
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
 
          minDate={new Date()}
     

          tileContent={({ date, view }) => view === 'month' && (date.getMonth() === 10 && (date.getDate() === 1 || date.getDate() === 15)) || (date.getMonth() === 9 && (date.getDate() === 10 ||date.getDate() === 20 || date.getDate() === 28 || date.getDate() === 30))?<p className="pin">1</p>:null }
       
          tileDisabled={({date, view}) =>
            (view === 'month') && 
            disabledDates.some(disabledDate =>
              date.getFullYear() === disabledDate.getFullYear() &&
              date.getMonth() === disabledDate.getMonth() 
            )}
        />
      </div>
    );
  }
}


export default CalendarComp





