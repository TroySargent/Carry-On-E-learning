const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const passport = require("passport");
const session = require("express-session");
const connectDB = require("./config/db");
const routes = require("./routes");

//Loading config
dotenv.config({ path: "./config/config.env" });

//Passport Config
require("./config/passport")(passport);

connectDB();

// app.use
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//logging with morgan
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Session
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
  })
);

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

//global
app.use(function (req, res, next) {
  res.locals.user = req.user || null;
  next();
});

// Add routes, both API and view
app.use(routes);


const PORT = process.env.PORT || 3001;

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
