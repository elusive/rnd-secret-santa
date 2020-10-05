import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import flash from 'connect-flash';
import session from 'express-session';
import router from './routes';

const app = express();

// EJS
app.use(expressLayouts);
app.set("view engine", "ejs");

// parse request for content-type application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// express session
/*app.use(
<<<<<<< HEAD:src/index.ts
    session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true,
    }),
=======
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
>>>>>>> b72be5bb90ecce2f7314acd9fcf842bb1c5d5680:server/index.ts
);

// connect flash
app.use(flash());

app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
});
*/
<<<<<<< HEAD:src/index.ts
// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// parse request for content-type application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

=======
>>>>>>> b72be5bb90ecce2f7314acd9fcf842bb1c5d5680:server/index.ts
// add the routes
app.use("/", router);

// set port and listen for requests
const PORT = config.port || 8080;
app.listen(PORT, () => {
  console.log(`Secret Santa App is running on port ${PORT}`);
});
