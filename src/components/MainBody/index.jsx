import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import Home from '../Home';

export default class MainBody extends Component {
  render() {
    return(
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/:thing' component={Placeholder} />
      </Switch>
    );
  }
}

const Placeholder = ({ match }) => (
  <div>
    <h1>Placeholder for /{match.params.thing}</h1>
  </div>
);
