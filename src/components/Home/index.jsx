import React, { Component } from 'react';
import QuoteColumn from '../QuoteColumn';
import leash from './leash.png';
import cover from './dog-cover.jpg';
import './home.css';

export default class Home extends Component {
  render() {
    return(
      <div className="container">
        <div className="row home-header">
          <img src={cover} alt="Woofie's Rescue cover photo" />
        </div>
        <div className="row">
          <QuoteColumn />
          <div className="eight columns post">
            <div className="post-title">
              <img src={leash} alt="leash icon" />
              <h1>Upcoming Events</h1>
            </div>
            <div className="post-overview">
              <p>
                Hi everyone, please mark your calendars for these upcoming events
                with Woofie's Rescue.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
