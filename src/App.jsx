import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';

//: Import Page/Template components
import Navbar from './components/NavBar';
import MainBody from './components/MainBody';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <MainBody />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
