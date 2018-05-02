import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavigationMenu extends Component {
  constructor(props){
    super(props);
    this.makeLinks = this.makeLinks.bind(this);
  }

  makeLinks(params, i) {
    if (params['exact']) {
      return(
        <li key={i}>
          <NavLink
            className="nav-link"
            activeClassName="activated"
            exact to={params['url']}>
            {params['title']}
          </NavLink>
        </li>
      );
    } else {
      return(
        <li key={i}>
          <NavLink
            className="nav-link"
            activeClassName="activated"
            to={params['url']}>
            {params['title']}
          </NavLink>
        </li>
      );
    }
  }

  render() {
    if (this.props.isSlideOut) {
      return(
        <div className="nav-menu">
          <ul className="nav-links">
            {this.props.links.map(this.makeLinks)}
          </ul>
        </div>
      );
    } else {
      return(<div></div>);
    }
  }
}
