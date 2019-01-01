import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//: Material UI components
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

// import dexter_pic from './dexter.jpg';
import about_hero_img from './adorable-animal-blur-406014.jpg';
import pf_icon from './pf_icon.png';
import './about.css';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        margin: 20,
    },
    heroImage: {
        height: 350,
        backgroundImage: `url(${about_hero_img})`,
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
    divider: {
        marginTop: 20,
        marginBottom: 20
    },
});

class AboutSheet extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className="main-body">
                <Paper className={classes.heroImage} elevation={0}>
                    <Typography
                        variant={"overline"}
                        className={classes.heroText}
                        align={'left'}
                    >
                        Let's Play!
                    </Typography>
                </Paper>
                <Paper className={classes.root} elevation={0}>
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            <Typography variant="h4" gutterBottom={true} color={"default"} align={'center'}>
                                <FontAwesomeIcon icon={"users"} size='lg' className="contact-fa-icon" /> About Us
                            </Typography>
                            <Typography component="p" gutterBottom={true}>
                                Woofie's Rescue in San Jose, CA is a non-profit 501(c)3, volunteer-driven
                                organization devoted to rescuing dogs in high risk of euthanasia at overcrowded
                                shelters. We provide in-home fostering for the rescued dogs, where they can play
                                and socialize as well as be spayed/neutered, vaccinated, and treated for any
                                medical conditions. While they are in our care, we seek out a match that suits
                                the adopter and dog.
                            </Typography>
                            <Divider className={classes.divider} />
                            <Typography variant="h5" gutterBottom={true} color={"default"}>
                                <FontAwesomeIcon icon={"paw"} size='lg' className="contact-fa-icon" /> Connect
                                with Us
                            </Typography>
                            <Typography component="p" gutterBottom={true}>
                                <FontAwesomeIcon icon="at" size="lg" className="contact-fa-icon-mail" />
                                Send us an e-mail: <a href="mailto:woofiesrescue@gmail.com">woofiesrescue@gmail.com</a>
                            </Typography>
                            <Typography component="p" gutterBottom={true}>
                                <FontAwesomeIcon className="contact-fa-icon" icon={['fab', 'facebook']} size='lg'/>
                                Follow us on Facebook: <a href="https://www.facebook.com/woofiesrescue/">
                                facebook.com/woofiesrescue</a>
                            </Typography>
                            <Typography component="p" gutterBottom={true}>
                                <FontAwesomeIcon className="contact-fa-icon" icon={['fab', 'instagram']} size='lg'/>
                                Follow us on Instagram: <a href="https://www.instagram.com/woofiesrescue/">
                                @woofiesrescue</a>
                            </Typography>
                            <Typography component="p">
                                <img src={pf_icon} alt="PetFinder icon" className="contact-pf-icon" />
                                Find us on Petfinder: <a href="https://www.petfinder.com/search/pets-for-adoption/?shelter_id%5B0%5D=CA2428">
                                Woofie's Rescue</a>
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }
}

AboutSheet.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutSheet);
