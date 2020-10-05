//REQUIRING npm packages
const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
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
app.get("/", (req, res) => {
  //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
  res.render("index");
});
app.set("view engine", "handlebars");
app.use(passport.initialize());
app.use(passport.session());

app.get("/signup", (req, res) => {
  //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
  res.render("index", {
    partial: "signup"
  });
});

//DB Connection
require("./config/connection");

//Requiring our routes
// require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);

//Syncing our database
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log("Listening on port: " + PORT, PORT, PORT);
  });
});
