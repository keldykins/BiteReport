const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {

    app.get("/", (req, res) => {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.render("index", { partial: "members" });
        }
    });

    app.get("/login", (req, res) => {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.render("index", { partial: "members" });
        }
    });

    app.get("/members", isAuthenticated, (req, res) => {
        res.render("index", { partial: "members" });
    });

}