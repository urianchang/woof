import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './dogPage.css';

import DOGS from '../Adopt/dogs.js';

export default class DogPage extends Component {
  render() {
    const reqDogName = this.props.match.params.name;
    let foundDog = null;
    for (let i=0; i < DOGS.length; i++) {
      if (DOGS[i]['name'].toLowerCase() === reqDogName.toLowerCase()) {
        foundDog = DOGS[i];
      }
    }
    if (foundDog) {
      let dogBreed = foundDog.breed.primary;
      if (foundDog.breed.additional.length > 0) {
        dogBreed += " / " + foundDog.breed.additional.join(' / ');
      }
      return(
        <div className="container">
          <div className="row dog-page-header">
            <h3>{foundDog.name}</h3>
          </div>
          <div className="row dog-page-content">
            <div className="one-half column photo-column">
              <img
                src={foundDog.profile_pic}
                alt={foundDog.name + ' photo'}
                className="dog-page-profile" />
              <p>More photos here: <a href={foundDog.photo_album}>Imgur</a></p>
            </div>
            <div className="one-half column">
              <p><span>Breed: </span>{dogBreed}</p>
              <p><span>Gender: </span>{foundDog.gender + (foundDog.spayed ? ' (spayed)' : ' (not spayed)') }</p>
              <p><span>Age: </span>{foundDog.age}</p>
              <p><span>Weight: </span>{foundDog.weight}</p>
              <div className="dog-description">
                <p>{foundDog.description}</p>
              </div>
              <AdoptionInfo />
            </div>
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

class AdoptionInfo extends Component {
  render() {
    return(
      <div className="adoption-info-container">
        <p>
          The adoption fee is $200, which includes the cost of vaccinations,
          spay/neuter, medical treatments (if any), and transport from the shelter.
          If you are interested in adopting, please download
          our <a href="/">Adoption Questionnaire</a> and e-mail it to us
          at <a href="mailto:woofiesrescue@gmail.com">woofiesrescue@gmail.com</a>. Thank you!
        </p>
      </div>
    );
  }
}
