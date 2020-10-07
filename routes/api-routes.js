const db = require("../models");
const passport = require("../config/passport");

module.exports = function (app) {
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    res.json({
      email: req.user.email,
      id: req.user.id,
    });
  });

  app.post("/api/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password,
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch((err) => {
        res.status(401).json(err);
      });
  });

  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });



    // GET route for getting all of the posts
    app.get("/api/reviews", function(req, res) {
        var query = {};
      //   if (req.query.id) {
      //     query.AuthorId = req.query.author_id;
      //   }
        db.Reviews.findAll({
          where: query
        }).then(function(dbReviews) {
          res.json(dbReviews);
        });
      });
    
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      res.json({});
    } else {
      res.json({
        email: req.user.email,
        id: req.user.id,
      });
    }
  });
    app.post("/api/reviews", function(req, res) {
        console.log(req.body);
      db.Reviews.create(req.body).then(function(dbReviews) {
        res.json(dbReviews);
      });
    });
};
  
    // DELETE route for deleting posts
    // app.delete("/api/posts/:id", function(req, res) {
    //   db.Post.destroy({
    //     where: {
    //       id: req.params.id
    //     }
    //   }).then(function(dbPost) {
    //     res.json(dbPost);
    //   });
    // });

};
