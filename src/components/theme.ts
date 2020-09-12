import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#4c8c4a',
            main: '#1b5e20',
            dark: '#003300',
        },
        secondary: {
            light: '#f05545',
            main: '#b71c1c',
            dark: '#7f0000',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#e1e2e1',
        },
    },
});

export default theme;
