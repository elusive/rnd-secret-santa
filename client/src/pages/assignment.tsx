import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { AppContext } from '../model/AppContext';
import { IUser } from '../model/User';

interface IProps {}

const useStyles = makeStyles({
    root: {
        maxWidth: 350,
    },
    media: {
        height: 140,
    },
});

const Assignment: React.FC<IProps> = (props) => {
    const { state } = React.useContext(AppContext);
    const classes = useStyles();

    const getAssignment = (user: IUser | null) => {};

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="/public/logo192.png"
                    title="Secret Santa Assignment"
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                    >
                        Assignment
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        Use the button below to receive your Secret
                        Santa Assignment. The random assignment is
                        created using a "truly" random number obtained
                        from{' '}
                        <a href="https://random.org">Random.org</a>.
                        That random number is then used to obtain your
                        secret santa assigment from the current list
                        of unassigned participants.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button
                    size="small"
                    color="primary"
                    onClick={() => getAssignment(state.currentUser)}
                >
                    Get Assignment!
                </Button>
                <Button size="small" color="primary">
                    Is it really random?
                </Button>
            </CardActions>
        </Card>
    );
};

export default Assignment;
