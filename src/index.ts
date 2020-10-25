import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import flash from 'connect-flash';
import session from 'express-session';
import router from './routes';
import config from './config/index';
import path from 'path';


// express instance
const app = express();
console.log(__dirname);
app.use('/public', express.static(path.resolve(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// express session
app.use(
    session({
        secret: 'secret',
        resave: false,
        saveUninitialized: true,
    }),
);

// connect flash
app.use(flash());

app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next(); // w/o this the server hangs
});

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// add the routes
app.use('/', router);

// set port and listen for requests
const PORT = config.port || 8080;
app.listen(PORT, () => {
    console.log(`Secret Santa App is running on port ${PORT}`);
    debugger;
});

export default app;
