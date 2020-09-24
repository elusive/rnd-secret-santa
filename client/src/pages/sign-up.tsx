import React, { FormEvent } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { AppContext } from '../model/AppContext';
import SignUpForm from '../components/signUpForm/signUpForm';
import { Copyright } from '../components/copyright/copyright';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage:
            'url(https://source.unsplash.com/featured/?christmas)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light'
                ? theme.palette.grey[50]
                : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
}));

export default function SignInSide() {
    const { appState, setAppState } = React.useContext(AppContext);
    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                className={classes.image}
            />
            <Grid
                item
                xs={12}
                sm={8}
                md={5}
                component={Paper}
                elevation={6}
                square
            >
                <SignUpForm />

                <Box mt={5}>
                    <Copyright />
                </Box>
            </Grid>
        </Grid>
    );
}
