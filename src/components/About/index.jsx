import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './about.css';

export default class About extends Component {
  render() {
    return(
      <div className="about-main">
        <h1>About us</h1>
        <h3>Contact</h3>
        <p>
          <FontAwesome name="envelope" size="1x" className="about-icon" />
          woofiesrescue@gmail.com
        </p>
        <h3>Connect</h3>
        <p>
          <a href="https://www.facebook.com/woofiesrescue/">
            <FontAwesome
              className="about-icon"
              name='facebook-official'
              size='2x'
              />
          </a>
          <a href="https://www.petfinder.com/search/pets-for-adoption/?shelter_id%5B0%5D=CA2428">
            <FontAwesome
              className="about-icon"
              name="paw"
              size='2x'
              />
          </a>
          <a href="https://www.instagram.com/woofiesrescue/">
            <FontAwesome
              className="about-icon"
              name="instagram"
              size='2x'
              />
          </a>
        </p>
      </div>
    );
  }
}
