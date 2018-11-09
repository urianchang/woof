import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';

//: Import Page/Template components
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import BodyRoutes from './components/MainBody';
import Footer from './components/Footer';

export default class App extends Component {
    render() {
        return (
            <Router>
                <ScrollToTop>
                    <div>
                        <Header />
                        <BodyRoutes />
                        <Footer />
                    </div>
                </ScrollToTop>
            </Router>
        );
    }
};
