import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';

//: Material-UI components
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';
import lime from '@material-ui/core/colors/lime';

//: FontAwesome icons
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faAt, faBone, faDog, faEnvelope, faGift, faHandHoldingHeart, faHome,
    faPaw,  faUsers,
} from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';

//: Custom components
import ScrollToTop from './components/ScrollToTop';
import NavigationBar from './components/Header';
import BodyRoutes from './components/MainBody';

//: Create library of FontAwesome icons for easier reference throughout the app
library.add(
    faAt, faBone, faDog, faEnvelope, faGift, faHandHoldingHeart,
    faHome, faPaw,  faUsers,
    fab
);

const theme = createMuiTheme({
    palette: {
        primary: lightBlue,
        secondary: lime,
    },
    typography: {
        useNextVariants: true,
    },
});

export default class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Router>
                    <ScrollToTop>
                        <div>
                            <NavigationBar />
                            <BodyRoutes />
                        </div>
                    </ScrollToTop>
                </Router>
            </MuiThemeProvider>
        );
    }
};
