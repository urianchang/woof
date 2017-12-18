import React, { Component } from 'react';
import DOGS from './dogs.js';
import './adopt.css';

export default class Adopt extends Component {
  constructor() {
    super();
    this.makeDogProfiles = this.makeDogProfiles.bind(this);
  }

  makeDogProfiles(params, i) {
    return(
      <div key={i} className="dog-profile">
        <img src={params['profile_pic']}
          alt={params['name']  + ' photo'} />
        <h3>
          <a href={"#/adopt/"+params['name']}>
            {params['name']}
          </a>
        </h3>
        <ul>
          <li><span>Gender:</span> {params['gender']}</li>
          <li><span>Age:</span> {params['age']}</li>
          <li><span>Breed:</span> {params['breed']['primary']}</li>
          <li><span>Size:</span> {params['size']}</li>
        </ul>
      </div>
    );
  }

  render() {
    return(
      <div className="container">
        <div className="row adopt-title">
          <h1>Looking for a forever home</h1>
        </div>
        <div className="row">
          {DOGS.map(this.makeDogProfiles)}
        </div>
      </div>
    );
  }
}
