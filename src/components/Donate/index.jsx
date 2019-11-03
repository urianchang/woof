import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//: Material UI components
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// import moxie_pic from './moxie_bone.jpg';
import donate_hero_img from './animal-collar-dog-8700.jpg';
import './donate.css';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        margin: 20,
    },
    heroImage: {
        height: 350,
        backgroundImage: `url(${donate_hero_img})`,
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
});

//: TODO: https://developer.paypal.com/docs/classic/paypal-payments-standard/integration-guide/donate_step_1/#
class DonateSheet extends Component {
    render() {
        const {classes} = this.props;
        const intro = (
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <Typography variant="h4" gutterBottom={true} color={"default"} align={"center"}>
                        <FontAwesomeIcon className="contact-fa-icon" icon={"hand-holding-heart"} size="1x" /> Making
                        A Difference
                    </Typography>
                    <Typography component={"p"} gutterBottom={true}>
                        There are many ways to support Woofie's Rescue. We greatly appreciate your generosity!
                    </Typography>
                </Grid>
            </Grid>
        );
        const amazonSmile = (
          <Grid item sm={12} md={4}>
              <Typography variant="h5" gutterBottom={true} color={"default"}>
                  <FontAwesomeIcon className="contact-fa-icon" icon={['fab', 'amazon']} size="1x" />
                  AmazonSmile
              </Typography>
              <Typography component={"p"}>
                  Please sign up for <a href="https://smile.amazon.com/ch/81-2281994">AmazonSmile</a> and
                  select "Woofies Rescue" as your charity to support. Amazon will donate 0.5% of the total
                  price of purchases to your selected charity.
              </Typography>
          </Grid>
        );
        const amazonWishList = (
          <Grid item sm={12} md={4}>
              <Typography variant="h5" gutterBottom={true} color={"default"}>
                  <FontAwesomeIcon className="contact-fa-icon" icon={"gift"} size="1x" />
                  Amazon Wish List
              </Typography>
              <Typography component={"p"}>
                  Our <a href="https://www.amazon.com/registry/wishlist/171MFHP4F0L1Q/ref=cm_sw_r_cp_ep_ws_io6xBbPE9J363">
                  Amazon Wish List</a> is constantly updated with supplies needed by the rescued dogs.
              </Typography>
          </Grid>
        );
        const payPal = (
            <Grid item sm={12} md={4}>
                <Typography variant="h5" gutterBottom={true} color={"default"}>
                    <FontAwesomeIcon className="contact-fa-icon" icon={['fab', 'paypal']} size="1x" />
                    PayPal
                </Typography>
                <Typography component={"p"}>
                    A donation of any amount makes a big difference.
                </Typography>

                {/* Start of Donate Button

                https://www.paypal.com/donate/buttons/unhosted 
                
                */}
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_donations" />
                <input type="hidden" name="business" value="test@test.com" />
                <input type="hidden" name="currency_code" value="USD" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                </form>
                {/* End of Donate Button */}

            </Grid>
        );

        return (
            <div className="main-body">
                <Paper className={classes.heroImage} elevation={0}>
                    <Typography
                        variant={"overline"}
                        className={classes.heroText}
                        align={'left'}
                    >
                        When you wish upon a star
                    </Typography>
                </Paper>
                <Paper className={classes.root} elevation={0}>
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
