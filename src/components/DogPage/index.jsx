import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import DOGS from '../Adopt/dogs.js';

export default class DogPage extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const reqDogName = this.props.match.params.name;
    let foundDog = null;
    for (let i=0; i < DOGS.length; i++) {
      if (DOGS[i]['name'].toLowerCase() === reqDogName.toLowerCase()) {
        foundDog = DOGS[i];
      }
    }
    if (foundDog) {
      return(
        <div className="container">
          <div className="row">
            {foundDog.name}, {foundDog.gender}
          </div>
        </div>
      );
    } else {
      return(
        <Redirect to="/adopt" />
      );
    }
  }
}
