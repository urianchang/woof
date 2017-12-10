import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';

//: Import Page/Template components
import Navbar from './components/NavBar';
import MainBody from './components/MainBody';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <MainBody />
        </div>
      </Router>
    );
  }
}

export default App;
