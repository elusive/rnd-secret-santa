import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import { Copyright } from '../components/copyright/copyright';

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
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        height: theme.spacing(10),
        width: theme.spacing(10),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignInSide() {
    const classes = useStyles();
    const handleSignUpSubmit = (
        event: FormEvent<HTMLFormElement>,
    ) => {};
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
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        The RND Group
                    </Typography>
                    <Avatar
                        className={classes.avatar}
                        variant="square"
                        src="logo192.png"
                    ></Avatar>
                    <Typography component="h1" variant="h5">
                        Secret Santa Sign Up
                    </Typography>
                    <form
                        className={classes.form}
                        onSubmit={handleSignUpSubmit}
                        noValidate
                    >
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="fname"
                            label="First Name"
                            name="fname"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="lname"
                            label="Last Name"
                            name="lname"
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="uname"
                            label="RND Username"
                            id="uname"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign Up
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {'Secret Santa 2020 Guidelines'}
                                </Link>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}
