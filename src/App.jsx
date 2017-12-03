import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

//: Import Page/Template components
import Navbar from './components/Navbar';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/:thing' component={Placeholder} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const Placeholder = ({ match }) => (
  <div>
    <h1>Placeholder for /{match.params.thing}</h1>
  </div>
)

export default App;
