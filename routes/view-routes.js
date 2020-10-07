const db = require("../models");
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("index", {
      login: false,
      searchReviews: true,
      signup: false,
      members: false,
    });
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("index", {
      login: true,
      style: 'login.css',
      searchReviews: false,
      signup: false,
      members: false,
    });
  });

  app.get("/signup", (req, res) => {
    //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
    res.render("index", {
      login: false,
      style: 'signup.css',
      searchReviews: false,
      signup: true,
      members: false,
    });
  });

  app.get("/members", isAuthenticated, (req, res) => {
    res.render("index", {
      login: false,
      style: 'members.css',
      searchReviews: false,
      signup: false,
      members: true,
    });
  });

  app.get("/writereviews", (req, res) => {
    res.render("index", {
      login: false,
      style: 'writereviews.css',
      searchReviews: false,
      signup: false,
      members: false,
      writeReviews: true,
    });
  });
};
