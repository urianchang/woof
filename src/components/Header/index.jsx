import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//: Material-UI components
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import './header.css';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    titleText: {
        fontFamily: "Amaranth",
        marginBottom: -8
    },
    titleLabel: {
        width: 120,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    list: {
        width: 200,
    },
    navlink: {
        textDecoration: "none",
        color: "#8FC547",  //: Changes the color when link is pressed
    },
    navicon: {
        color: "#F48D2C",
    }
};
const sidebarLinks = [
    {
        'url': '/',
        'name': "Home",
        'icon': "home"
    },
    {
        'url': "/adopt",
        'name': "Adopt",
        'icon': "dog"
    },
    {
        'url': "/donate",
        'name': "Donate",
        'icon': "hand-holding-heart"
    },
    {
        'url': "/about",
        'name': "About",
        'icon': "users"
    },
];

class NavigationBar extends React.Component {
    state = {
      right: false
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        const { classes } = this.props;
        const sideList = (
            <div className={classes.list}>
                <List>
                    {sidebarLinks.map((link, index) => (
                        <Link to={link.url} className={classes.navlink} key={index}>
                            <ListItem button>
                                <ListItemIcon>
                                    <FontAwesomeIcon icon={link.icon} size='lg' className={classes.navicon} />
                                </ListItemIcon>
                                <ListItemText primary={link.name} className={"iconText" + link.icon} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </div>
        );

        return (
            <div className={classes.root}>
                <AppBar position="fixed" color="inherit">
                    <Toolbar>
                        <div className={classes.grow}>
                            <div className={classes.titleLabel}>
                                <Typography variant="h4" color='primary' className={classes.titleText}>
                                    woofie's
                                </Typography>
                                <Typography variant="body1" color='secondary' align={"right"} >
                                    rescue
                                </Typography>
                            </div>
                        </div>
                        <IconButton
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="Menu"
                            onClick={this.toggleDrawer('right', true)}
                        >
                            <MenuIcon/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <SwipeableDrawer
                    open={this.state.right}
                    onClose={this.toggleDrawer('right', false)}
                    onOpen={this.toggleDrawer('right', true)}
                    anchor="right"
                >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('right', false)}
                        onKeyDown={this.toggleDrawer('right', false)}
                    >
                        {sideList}
                    </div>
                </SwipeableDrawer>
            </div>
        );
    }
}

NavigationBar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavigationBar);
