import React from "react";
import { NavLink } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import Sidebar from "react-sidebar";

import './style.css';
import logo from './logo.png';

const SidebarLinks = [
    { 'url': '/', 'title': "Main" },
    { 'url': "/adopt", 'title': "Adopt" },
    { 'url': "/donate", 'title': "Donate" },
    { 'url': "/about", 'title': "About" },
];

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open});
    }

    makeLinks(params, i) {
        return (
            <div
                key={i}
                className={"nav-link-container"}
            >
                <NavLink
                    className="nav-link"
                    activeClassName="activated"
                    exact to={params['url']}>
                    {params['title']}
                </NavLink>
            </div>
        );
    }

    render() {
        return(
            <div className="header-top">
                <Sidebar
                    sidebar={
                        <div>
                            <div className={"sidebar-title-container"}>
                                Menu
                            </div>
                            { SidebarLinks.map(this.makeLinks) }
                        </div>
                    }
                    open={this.state.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    styles={{sidebar: { background: "white", textAlign: "left" }}}
                >
                    <FontAwesome
                        className="nav-icon"
                        name='bars'
                        size='2x'
                        onClick={() => this.onSetSidebarOpen(true)}
                    />
                </Sidebar>
                <img src={logo} alt="Woofie's Rescue logo" className="logo-icon" />
            </div>
        );
    }
}
