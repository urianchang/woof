import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import Home from '../Home';
import About from '../About';
import Adopt from '../Adopt';
import DogPage from '../DogPage';

export default class BodyRoutes extends Component {
  render() {
    return(
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/adopt' component={Adopt} />
        <Route path='/adopt/:name' component={DogPage} />
        <Route path='/:route' component={Placeholder} />
      </Switch>
    );
  }
}

const Placeholder = ({ match }) => (
  <div className="container">
    <div className="row">
      <h1>Placeholder for /{match.params.route}</h1>
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </p>
    </div>
  </div>
);
