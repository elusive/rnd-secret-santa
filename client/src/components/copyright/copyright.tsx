import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

interface IProps {}

export const Copyright: React.FC<IProps> = (props) => {
    return (
        <Typography
            variant="body2"
            color="textSecondary"
            align="center"
        >
            {'Copyright © '}
            {new Date().getFullYear()}{' '}
            <Link color="inherit" href="https://rndgroup.com/">
                Secret Santa Corp.
            </Link>
        </Typography>
    );
};

export default Copyright;
