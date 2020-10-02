import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import flash from 'connect-flash';
import session from 'express-session';
import router from './routes/_index';

const app = express();

// express session
app.use(
    session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true,
    }),
);

// connect flash
app.use(flash());
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
});

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// parse request for content-type application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// add the routes
app.use('/', router);

// set port and listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Secret Santa App is running on port ${PORT}`);
});
