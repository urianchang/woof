import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//: Material UI components
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import moxie_pic from './moxie_bone.jpg';
import './donate.css';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        margin: 20,
    }
});

//: TODO: https://developer.paypal.com/docs/classic/paypal-payments-standard/integration-guide/donate_step_1/#
class DonateSheet extends Component {
    render() {
        const {classes} = this.props;
        const intro = (
            <Grid container spacing={24}>
                <Grid item xs={12} sm={5} md={4}>
                    <img src={moxie_pic} alt="Moxie with a dental bone" className="donate-pic" />
                </Grid>
                <Grid item xs={12} sm={7} md={8}>
                    <Typography variant="h4" gutterBottom={true} color={"primary"}>
                        Give a Dog a <FontAwesomeIcon className="contact-fa-icon" icon={"bone"} size="1x" />
                    </Typography>
                    <Typography variant="body1" gutterBottom={true}>
                        There are many ways to support Woofie's Rescue. We greatly appreciate your generosity!
                    </Typography>
                </Grid>
            </Grid>
        );
        const amazonSmile = (
          <Grid item sm={12} md={4}>
              <Typography variant="h5" gutterBottom={true} color={"primary"}>
                  <FontAwesomeIcon className="contact-fa-icon" icon={['fab', 'amazon']} size="1x" />
                  AmazonSmile
              </Typography>
              <Typography variant="body1">
                  Please sign up for <a href="https://smile.amazon.com/ch/81-2281994">AmazonSmile</a> and
                  select "Woofies Rescue" as your charity to support. Amazon will donate 0.5% of the total
                  price of purchases to your selected charity.
              </Typography>
          </Grid>
        );
        const amazonWishList = (
          <Grid item sm={12} md={4}>
              <Typography variant="h5" gutterBottom={true} color={"primary"}>
                  <FontAwesomeIcon className="contact-fa-icon" icon={"gift"} size="1x" />
                  Amazon Wish List
              </Typography>
              <Typography variant="body1">
                  Our <a href="https://www.amazon.com/registry/wishlist/171MFHP4F0L1Q/ref=cm_sw_r_cp_ep_ws_io6xBbPE9J363">
                  Amazon Wish List</a> is constantly updated with supplies needed by the rescued dogs.
              </Typography>
          </Grid>
        );
        const payPal = (
            <Grid item sm={12} md={4}>
                <Typography variant="h5" gutterBottom={true} color={"primary"}>
                    <FontAwesomeIcon className="contact-fa-icon" icon={['fab', 'paypal']} size="1x" />
                    PayPal
                </Typography>
                <Typography variant="body1">
                    A donation of any amount makes a big difference.
                </Typography>
            </Grid>
        );

        return (
            <div>
                <Paper className={classes.root} elevation={1}>
                    {intro}
                    <Grid container spacing={24}>
                        {amazonSmile}
                        {amazonWishList}
                        {payPal}
                    </Grid>
                </Paper>
            </div>
        );
    }
}

DonateSheet.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DonateSheet);
