import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//: Material UI components
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import home_hero_img from './animal-dog-pet-33273.jpg';
import './home.css';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        margin: 5,
    },
    heroImage: {
        height: 350,
        backgroundImage: `url(${home_hero_img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
    },
    heroText: {
        color: "white",
        bottom: 20,
        left: 20,
        position: "absolute",
        fontSize: 17,
        width: 275,
        lineHeight: 1,
        textShadow: "1px 1px 1px black",
    },
    quoteBody: {
        color: "#C0C0C0",
    },
    quoteStart: {
        color: "#F48D2C",
        fontSize: 20,
    },
    divider: {
        marginTop: 10,
        marginBottom: 30
    },
    buttonRow: {
        marginTop: 15
    }
});

class HomeSheet extends Component {
  render() {
      const {classes} = this.props;
      return(
          <div className="main-body">
              <Paper className={classes.heroImage} elevation={0}>
                  <Typography
                      variant={"overline"}
                      className={classes.heroText}
                      align={'left'}
                  >
                      Because Every Great Dog Deserves a Great Home
                  </Typography>
              </Paper>
              <Paper className={classes.root} elevation={0}>
                  <Grid container spacing={24} justify={'center'} alignItems={'center'}>
                      <Grid item xs={12} sm={3}>
                          <Typography variant={"body1"} className={classes.quoteBody}>
                              <span className={classes.quoteStart}>"</span>Dogs are not our whole life,
                              but they make our lives whole."
                          </Typography>
                          <Typography variant={"body2"} className={classes.quoteBody}>
                            - Roger Caras
                          </Typography>
                      </Grid>
                      <Grid item xs={12} sm={9}>
                          <Typography
                              variant={"h4"}
                              color={'primary'}
                              gutterBottom={true}
                          >
                              Woof woof!
                          </Typography>
                          <Typography variant={"body1"} gutterBottom={true}>
                              Welcome to Woofie's Rescue! We are a non-profit 501(c)3, volunteer-driven
                              organization in San Jose, CA devoted to rescuing dogs in high risk of euthanasia
                              at overcrowded shelters. We provide in-home fostering for the rescued dogs, where
                              they can play and socialize, be spayed/neutered, vaccinated, and treated for any
                              medical conditions. While they are in our care, we seek out a match that suits
                              the adopter and dog.
                          </Typography>
                      </Grid>
                      <Grid item xs={12}>
                          <Divider className={classes.divider} />
                          <Typography variant={"body1"} align={'center'}>
                              Thank you for checking us out and we hope that we can work together in
                              giving these dogs a second chance!
                          </Typography>
                          <Typography
                              variant={"body1"}
                              align={'center'}
                              gutterBottom={true}
                              className={classes.buttonRow}
                          >
                              <a href="#/donate">
                                  <button className="donate-button">
                                      <p>
                                          <FontAwesomeIcon className="button-icon" icon="paw" size='lg' /> Donate
                                      </p>
                                  </button>
                              </a>
                              <a href="#/adopt">
                                  <button className="adopt-button">
                                      <p>
                                          <FontAwesomeIcon className="button-icon" icon="paw" size='lg' /> Adopt
                                      </p>
                                  </button>
                              </a>
                          </Typography>
                      </Grid>
                  </Grid>
              </Paper>
          </div>
      );
  }
}

HomeSheet.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeSheet);
