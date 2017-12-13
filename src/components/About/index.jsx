import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import pf_icon from './pf_icon.png';
import './about.css';

export default class About extends Component {
  render() {
    return(
      <div className="container about-container">
        <div className="row">
          <h1>About Us</h1>
          <p>
            Woofie's Rescue in San Jose, CA is a non-profit 501(c)3, volunteer-driven
            organization devoted to rescuing dogs in high risk of euthanasia at overcrowded
            shelters. We provide in-home fostering for the rescued dogs, where they can play
            and socialize as well as be spayed/neutered, vaccinated, and treated for any
            medical conditions. While they are in our care, we seek out a match that suits
            the adopter and dog.
          </p>
        </div>

        <div className="row">
          <h1>Our Mission</h1>
          <p>
            To help dogs find their forever homes.
          </p>
        </div>

        <div className="row">
          <h1>Our Story</h1>
          <p>
            Story about how Woofie's rescue got started.
          </p>
        </div>

        <div className="row">
          <h1>Contact</h1>
          <p>
            <FontAwesome name="envelope" size="lg" className="contact-fa-icon" />
            <a href="mailto:woofiesrescue@gmail.com">
              woofiesrescue@gmail.com
            </a>
          </p>
        </div>

        <div className="row">
          <h1>Connect</h1>
          <a href="https://www.facebook.com/woofiesrescue/">
            <FontAwesome
              className="contact-fa-icon"
              name='facebook-official'
              size='2x'
              />
          </a>
          <a href="https://www.petfinder.com/search/pets-for-adoption/?shelter_id%5B0%5D=CA2428">
            <img src={pf_icon} alt="PetFinder icon" className="contact-pf-icon" />
          </a>
          <a href="https://www.instagram.com/woofiesrescue/">
            <FontAwesome
              className="contact-fa-icon"
              name="instagram"
              size='2x'
              />
          </a>
        </div>
      </div>
    );
  }
}
