const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const passport = require("passport");
const session = require("express-session");
const connectDB = require("./config/db");

//Loading config
dotenv.config({ path: "./config/config.env" });
//Passport Config
require("./config/passport")(passport);

connectDB();

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(morgan("dev"));


app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(function (req, res, next) {
  res.locals.user = req.user || null;
  next();
});

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
