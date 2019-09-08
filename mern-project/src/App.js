import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component"
import SearchEvents from "./components/search-event.component";
import EventsList from "./components/events-list.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <Navbar/>
      
      <div className="container">
        
        <br />
        <Route path="/" exact component={SearchEvents} />
        <Route path="/event" exact component={EventsList} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
 }
  
 export default App;