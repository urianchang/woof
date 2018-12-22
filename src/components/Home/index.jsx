import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//: Material UI components
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import simba_pic from './simba_snow.jpg';
import hercules_pic from './hercules_playing.jpg';
import './home.css';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        margin: 20,
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
          <div>
              <Paper className={classes.root} elevation={1}>
                  <Grid container
                        spacing={24}
                        justify={'center'}
                  >
                      <Grid item xs={12} sm={6} md={4}>
                          <img src={hercules_pic} alt={"Hercules chewing on a toy"} className={"home-main-pic"} />
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                          <Typography
                              variant={"h4"}
                              color={'primary'}
                              gutterBottom={true}
                              align={'center'}
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
                      <Grid item xs={12} sm={6} md={4}>
                          <img src={simba_pic} alt={"Simba in the snow"} className={"home-main-pic"} />
                      </Grid>
                      <Grid item xs={12} sm={6} md={12}>
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
