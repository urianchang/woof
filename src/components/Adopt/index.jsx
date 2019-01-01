import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//: Material UI components
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import DOGS from './dogs.js';
import adopt_hero_img from "./adorable-animal-breed-731022.jpg";

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        margin: 5,
    },
    heroImage: {
        height: 350,
        backgroundImage: `url(${adopt_hero_img})`,
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
    gridContainer: {
        marginTop: 10,
    },
    card: {
        maxWidth: 325,
    },
    media: {
        height: 300,
    },
    navlink: {
        textDecoration: "none",
    },
});

class AdoptSheet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            redirectTo: "",
        };
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick(ev, dogName) {
        ev.preventDefault();
        this.setState({
            redirect: true,
            redirectTo: `/adopt/${dogName}`,
        });
    };

    render() {
        const {classes} = this.props;
        const {redirect, redirectTo } = this.state;
        if (redirect) {
            return(
                <Redirect push to={redirectTo} />
            );
        }
        return(
            <div className="main-body">
                <Paper className={classes.heroImage} elevation={0}>
                    <Typography
                        variant={"overline"}
                        className={classes.heroText}
                        align={'left'}
                    >
                        Your New Best Friend
                    </Typography>
                </Paper>
                <Paper className={classes.root} elevation={0}>
                    <Typography variant="h4" color={'default'} align={'center'}>
                        <FontAwesomeIcon icon={"dog"} size='lg' className="contact-fa-icon" /> Available Dogs
                    </Typography>
                    <Grid container
                          spacing={16}
                          alignItems={'center'}
                          className={classes.gridContainer}
                          justify={'center'}
                    >
                        {DOGS.map((dog, index) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                <Card className={classes.card}>
                                    <CardActionArea onClick={(ev) => this.handleClick(ev, dog.name)}>
                                        <CardMedia
                                            className={classes.media}
                                            image={dog.profile_pic}
                                            title={dog.name}
                                        />
                                        <CardContent>
                                            <Typography variant="h5" color={"primary"}>
                                                {dog.name}
                                            </Typography>
                                            <Typography variant="body1">
                                                {dog.age_class + " · " + dog.gender}
                                            </Typography>
                                            <Typography variant="body2">
                                                {dog.breed}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Paper>
            </div>
        );
    }
}

AdoptSheet.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdoptSheet);
