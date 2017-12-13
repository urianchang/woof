import React, { Component } from 'react';
import QuoteColumn from '../QuoteColumn';
import leash from './leash.png';
import './home.css';

export default class Home extends Component {
  render() {
    return(
      <div className="container">
        <div className="row">
          <QuoteColumn />
          <div className="eight columns post">
            <div className="post-title">
              <img src={leash} alt="leash icon" />
              <h1>Unconditional love</h1>
            </div>
            <div className="post-overview">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
