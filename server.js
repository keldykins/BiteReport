//REQUIRING npm packages
const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
const favicon = require('serve-favicon');
//Passport required as we've configured it
const passport = require("./config/passport");
//Setting up PORT
const PORT = process.env.PORT || 8080;

const db = require("./models");
//Creating express app and configuring middleware
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
//Session keeps track of our user's login status
app.use(
    session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
//Sets handlebars configurations (we will go through them later on)
app.engine(
    "handlebars",
    exphbs({
        defaultLayout: "main",
    })
);
app.set("view engine", "handlebars");
app.use(passport.initialize());
app.use(passport.session());

//DB Connection
require("./config/connection");

//Requiring our routes
require("./routes/view-routes.js")(app);
require("./routes/api-routes.js")(app);

//Syncing our database
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log("Listening on port: " + PORT, PORT, PORT);
    });
});