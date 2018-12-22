import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import './NoMatch.css';

import HomeSheet from '../Home';
import AboutSheet from '../About';
import AdoptSheet from '../Adopt';
import DogPage from '../DogPage';
import DonateSheet from '../Donate';

export default class BodyRoutes extends Component {
  render() {
    return(
      <Switch>
        <Route exact path='/' component={HomeSheet} />
        <Route exact path='/about' component={AboutSheet} />
        <Route exact path='/adopt' component={AdoptSheet} />
        <Route path='/adopt/:name' component={DogPage} />
        <Route path='/donate' component={DonateSheet} />
        <Route path='/:route' component={NoMatch} />
      </Switch>
    );
  }
}

const NoMatch = ({ match }) => (
  <div className="NoMatch-body">
    <h1>(┛◉Д◉)┛彡┻━┻</h1>
    <h2>Page not found for /{match.params.route}!</h2>
    <p>Maybe the page you are looking for has been removed, or you typed the wrong URL.</p>
  </div>
);
