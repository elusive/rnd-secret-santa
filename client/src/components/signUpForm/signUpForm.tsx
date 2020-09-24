import React from 'react';
import * as signup from './signUpState';
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

interface IProps {}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            width: 400,
            margin: `${theme.spacing(0)} auto`,
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
    }),
);

const SignUpForm: React.FC<IProps> = (props: IProps) => {
    const classes = useStyles();
    const [formState, dispatch] = React.useReducer(
        signup.reducer,
        signup.initialState,
    );

    React.useEffect(() => {
        let valid =
            formState.uname.trim() &&
            formState.fname.trim() &&
            formState.lname.trim();
        dispatch({
            type: signup.ActionEnum.SetIsButtonDisabled,
            payload: !valid,
        });
    }, [formState.fname, formState.lname, formState.uname]);

    const handleSignUp = () => {
        // lookup user using values from formState
    };

    const handleKeyPress = (evt: React.KeyboardEvent) => {
        if (evt.keyCode == 13 || evt.which === 13) {
            formState.isButtonDisabled || handleSignUp();
        }
    };

    const handleUnameChange: React.ChangeEventHandler<HTMLInputElement> = (
        evt,
    ) => {
        dispatch({
            type: signup.ActionEnum.SetUserName,
            payload: evt.target.value,
        });
    };

    const handleFnameChange: React.ChangeEventHandler<HTMLInputElement> = (
        evt,
    ) => {
        dispatch({
            type: signup.ActionEnum.SetFirstName,
            payload: evt.target.value,
        });
    };

    const handleLnameChange: React.ChangeEventHandler<HTMLInputElement> = (
        evt,
    ) => {
        dispatch({
            type: signup.ActionEnum.SetLastName,
            payload: evt.target.value,
        });
    };

    // render
    return (
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
                className={classes.container}
                noValidate
                autoComplete="off"
            >
                <TextField
                    error={formState.isError}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="fname"
                    label="First Name"
                    name="fname"
                    onChange={handleFnameChange}
                    onKeyPress={handleKeyPress}
                    autoFocus
                />
                <TextField
                    error={formState.isError}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="lname"
                    label="Last Name"
                    name="lname"
                    onKeyPress={handleKeyPress}
                    onChange={handleLnameChange}
                />
                <TextField
                    error={formState.isError}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="uname"
                    label="RND Username"
                    id="uname"
                    onChange={handleUnameChange}
                    onKeyPress={handleKeyPress}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={handleSignUp}
                    disabled={formState.isButtonDisabled}
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
            </form>
        </div>
    );
};

export default SignUpForm;
