import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default class Navbar extends Component {
  render() {
    return(
      <div className="Navbar">
        <ul>
          <li><Link className="Navlink" to="/">Home</Link></li>
        </ul>
      </div>
    );
  }
}
