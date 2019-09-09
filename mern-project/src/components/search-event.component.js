import React, { Component } from 'react';
import axios from 'axios';
import SearchForm from './search-form.component.js';
require('dotenv').config()

export default class SearchEvents extends Component {

    constructor(props) {
      super(props);
      this.state = {
        // error: null,
        // isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
    
    }

    saveEvent = (e, eventName) => {
        e.preventDefault();
        console.log(eventName);
        alert('YAY! 🎉 Event saved!');
        const newEvent = {
            eventname: eventName,
            atendees: ["Juliana"]
        };
        axios.post('http://localhost:5000/events/add', newEvent)
        .then(res => console.log(res.data));
    }

    performSearch = (query) => {
        axios.get(`https://www.eventbriteapi.com/v3/events/search/?location.address=San+Francisco&start_date.keyword=today&q=${query}&token=${process.env.REACT_APP_API_TOKEN}`)
            .then(response => {
                console.log(response.data.events);
                this.setState({
                    items: response.data.events
                })
            })
            .catch(error => {
                console.log(error);
        })
    }

    render() {
        
        const { items} = this.state;
        console.log(`*****${items}`);
        // if (!isLoaded){
        //     return <div>Loading ...</div>;
        // } else {
            return (
                <div>
                <h3>Events today in SF:</h3>
                <SearchForm onSearch={this.performSearch} />
                <ul>
                    {items.map(result => (
                        <li key={result.id}>
                            {result.name.text} <a href="#" onClick={ e => this.saveEvent(e, result.name.text)}>I'm going</a>
                        </li>
                    ))}
                </ul>

                


                </div>
            )
        }
        
      }
    //}
  
  