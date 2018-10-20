import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import NavigationMenu from './nav_menu.jsx';
import './nav.css';
import logo from './logo.png';

class NavigationBar extends Component {
  constructor() {
    super();
    this.state = {
      isSlideOut: true,
      width: window.innerWidth,
      height: window.innerHeight,
    };
    this.slide = this.slide.bind(this);
    this.getDimensions = this.getDimensions.bind(this);
  }

  getDimensions(e) {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    // console.log(`Dimensions: ${this.state.width} W x ${this.state.height} H`);
  }

  componentDidMount() {
    window.addEventListener('resize', this.getDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.getDimensions);
  }

  slide() {
    let s = !this.state.isSlideOut;
    this.setState({ isSlideOut: s });
  }

  render() {
    const isSlideOut = this.state.isSlideOut;
    const isMobile = (this.state.width <= 600) ? "mobile" : "";
    return(
      <div className="header-top">
        <img src={logo} alt="Woofie's Rescue logo" className="logo-icon" />
        <div className={"nav-bar " + isMobile}>
          <FontAwesome
            className="nav-icon"
            name='bars'
            size='2x'
            onClick={this.slide}
            />
          <NavigationMenu links={NavbarLinks} isSlideOut={isSlideOut} />
        </div>
      </div>
    );
  }
}

const NavbarLinks = [
  {
    'url': '/',
    'exact': true,
    'title': "Main"
  },
  {
    'url': "/adopt",
    'exact': true,
    'title': "Adopt"
  },
  {
    'url': "/donate",
    'exact': true,
    'title': "Donate"
  },
  {
    'url': "/about",
    'exact': true,
    'title': "About"
  },
];

export default NavigationBar;