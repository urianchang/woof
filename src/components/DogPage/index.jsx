import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

//: Material UI components
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import './dogPage.css';
import DOGS from '../Adopt/dogs.js';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        margin: 20,
    },
    gridContainer: {
        marginTop: 10,
    },
    divider: {
        marginTop: 10,
        marginBottom: 10
    },
});

class DogPage extends Component {
    render(){
        const {classes} = this.props;
        const adoptionInfo = (
            <Grid item>
                <Typography variant={"h6"}>Adopting</Typography>
                <Typography variant={"body1"}>
                    Our adoption fee is $350, which includes the cost of vaccinations,
                    spaying/neutering, any medical treatments, and transport from the
                    shelter. If you are interested in adopting, please e-mail us
                    at <a href="mailto:woofiesrescue@gmail.com">woofiesrescue@gmail.com</a>.
                    Thank you!
                </Typography>
            </Grid>
        );
        const reqDogName = this.props.match.params.name;
        let foundDog = null;
        for (let i=0; i < DOGS.length; i++) {
            if (DOGS[i]['name'].toLowerCase() === reqDogName.toLowerCase()) {
                foundDog = DOGS[i];
            }
        }
        if (foundDog) {
            return(
                <div>
                    <Paper className={classes.root} elevation={1}>
                        <Grid container spacing={24}>
                            <Grid item xs={12} sm={5} md={4}>
                                <img
                                    src={foundDog.profile_pic}
                                    alt={foundDog.name}
                                    className={"dog-profile-pic"}
                                />
                                <Typography variant="caption" align={"center"}>
                                    Photo album for {foundDog.name}: <a href={foundDog.photo_album}>Imgur</a>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={7} md={8}>
                                <Typography variant="h4" color={"primary"}>
                                    {foundDog.name}
                                </Typography>
                                <Typography variant={"caption"}>
                                    {foundDog.age_class + " · " + foundDog.gender}
                                </Typography>
                                <Typography variant={"caption"} gutterBottom={true}>
                                    {foundDog.breed}
                                </Typography>
                                <Typography variant="h6">About</Typography>
                                <Typography variant="body1">
                                    Age: {foundDog.age} <br />
                                    Size: {foundDog.size} <br />
                                    Weight: {foundDog.weight} <br />
                                    Spayed/Neutered: {foundDog.spayed} <br />
                                    Vaccinations: {foundDog.vaccinations} <br />
                                    Special Needs: {foundDog.special_needs} <br />
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6">Meet {foundDog.name}</Typography>
                                <Typography variant={"body1"}>
                                    {foundDog.description}
                                </Typography>
                            </Grid>
                            {adoptionInfo}
                        </Grid>
                    </Paper>
                </div>
            );
        } else { return( <Redirect to="/adopt" /> ); }
    }
}

DogPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DogPage);
