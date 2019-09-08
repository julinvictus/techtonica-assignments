import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-secondary navbar-expand-lg">
        <div className="container">
          <Link to="/" className="navbar-brand"><span role="img" aria-label="emoji">🤗</span> Eventonica</Link>
          <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
            <Link to="/event" className="nav-link">My Saved Events</Link>
            </li>
            <li className="navbar-item">
            <Link to="/user" className="nav-link">Create User</Link>
            </li>
          </ul>
          </div>
        </div>
      </nav>
    );
  }
}