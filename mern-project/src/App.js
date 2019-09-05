import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component"
import EventsList from "./components/events-list.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={EventsList} />
        
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
 }
  
 export default App;