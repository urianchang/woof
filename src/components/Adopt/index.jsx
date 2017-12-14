import React, { Component } from 'react';
import DOGS from './dogs.js';

export default class Adopt extends Component {
  render() {
    console.log(DOGS);
    return(
      <div className="container">
        <div className="row">
          <h1>Looking for a forever home</h1>
        </div>
      </div>
    );
  }
}
