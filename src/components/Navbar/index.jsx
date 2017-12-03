import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import NavigationMenu from './nav_menu.jsx';
import './nav.css';

class NavigationBar extends Component {
  constructor() {
    super();
    this.state = {
      isSlideOut: false,
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
      <div className={"nav-bar " + isMobile}>
        <FontAwesome
          className="nav-icon"
          name='bars'
          size='2x'
          onClick={this.slide}
          />
        <NavigationMenu links={NavbarLinks} isSlideOut={isSlideOut} />
      </div>
    );
  }
}

const NavbarLinks = [
  {
    'url': "/",
    'exact': true,
    'title': "Home"
  },
  {
    'url': "/about",
    'exact': false,
    'title': "About"
  },
  {
    'url': "/adopt",
    'exact': false,
    'title': "Adopt"
  },
  {
    'url': "/foster",
    'exact': false,
    'title': "Foster"
  },
  {
    'url': "/donate",
    'exact': false,
    'title': "Donate"
  },
  {
    'url': "/contact",
    'exact': false,
    'title': "Contact"
  },
];

export default NavigationBar;
