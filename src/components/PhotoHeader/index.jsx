import React, { Component } from 'react';
import yawn from './yawn.jpg';

export default class PhotoHeader extends Component {
  render() {
    return(
      <div class="row">
        <img
          src={yawn}
          alt="yawning dog"
          className="u-max-full-width"
          />
      </div>
    );
  }
}
