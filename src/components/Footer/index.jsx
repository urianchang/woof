import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import pf_icon from './pf_icon.png';
import './footer.css';

export default class Footer extends Component {
  render() {
    return(
      <div className="footer">
        <div className="left-foot">
          <a href="https://www.facebook.com/woofiesrescue/">
            <FontAwesome
              className="footer-fa-icon"
              name='facebook-official'
              size='2x'
              />
          </a>
          <a href="https://www.instagram.com/woofiesrescue/">
            <FontAwesome
              className="footer-fa-icon"
              name="instagram"
              size='2x'
              />
          </a>
          <a href="mailto:woofiesrescue@gmail.com">
            <FontAwesome
              className="footer-fa-icon"
              name="envelope"
              size='2x'
              />
          </a>
          <a href="https://www.petfinder.com/search/pets-for-adoption/?shelter_id%5B0%5D=CA2428">
            <img src={pf_icon} alt="PetFinder icon" className="footer-pf-icon" />
          </a>
        </div>
        <div className="right-foot">
          <a href="#/donate">
            <button className="footer-donate-button">
              <p>
                <FontAwesome className="button-icon" name="paw" size='2x' /> Give
              </p>
            </button>
          </a>
          <a href="#/adopt">
            <button className="footer-adopt-button">
              <p>
                <FontAwesome className="button-icon" name="paw" size='2x' /> Adopt
              </p>
            </button>
          </a>
        </div>
      </div>
    );
  }
}
