import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';

const Event = props => (
    <tr>
      <td>{props.event.eventname}</td>
      
      <td>
        Atendees: {props.event.atendees.map(attendee => (
          <span>{attendee} </span>
        ))}
      </td>
    </tr>
  )

export default class EventsList extends Component {
    constructor(props) {
        super(props);
        this.state = {events: []};
    }
    componentDidMount() {
        axios.get('http://localhost:5000/events/')
         .then(response => {
           this.setState({ events: response.data });
         })
         .catch((error) => {
            console.log(error);
         })
    }
    eventList() {
        return this.state.events.map(currentevent => {
          return <Event event={currentevent} deleteEvent={this.deleteEvent} key={currentevent._id}/>;
        })
    }
    render() {
        return (
        <div>
            <h3>Events</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Event name</th>
                  
                </tr>
              </thead>
              <tbody>
                { this.eventList() }
              </tbody>
            </table>
          </div>
        )
    }
}