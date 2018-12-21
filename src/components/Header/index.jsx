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
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    list: {
        width: 200,
    },
    navlink: {
        textDecoration: "none",
        color: "#03A9F4",  //: Changes the color when link is pressed
    }
};
const sidebarLinks = [
    {
        'url': '/',
        'name': "Main",
        'icon': "paw"
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
        'name': "About Us",
        'icon': "users"
    },
];

class NavigationBar extends React.Component {
    state = {
      left: false
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
                        <Link exact to={link.url} className={classes.navlink}>
                            <ListItem button key={index}>
                                <ListItemIcon>
                                    <FontAwesomeIcon icon={link.icon} size='lg'/>
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
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="Menu"
                            onClick={this.toggleDrawer('left', true)}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h5" color="inherit" className={classes.grow}>
                            Woofie's Rescue
                        </Typography>
                    </Toolbar>
                </AppBar>
                <SwipeableDrawer
                    open={this.state.left}
                    onClose={this.toggleDrawer('left', false)}
                    onOpen={this.toggleDrawer('left', true)}
                >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
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
