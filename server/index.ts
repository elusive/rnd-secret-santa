import express from "express";
import expressLayouts from "express-ejs-layouts";
import config from "./config/_index";
const flash = require("connect-flash");
const session = require("express-session");
import router from "./routes/_index";

const app = express();

// EJS
app.use(expressLayouts);
app.set("view engine", "ejs");

// parse request for content-type application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// express session
/*app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

// connect flash
app.use(flash());

app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
});
*/
// add the routes
app.use("/", router);

// set port and listen for requests
const PORT = config.port || 8080;
app.listen(PORT, () => {
  console.log(`Secret Santa App is running on port ${PORT}`);
});
