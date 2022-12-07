let passport = require("passport");
let database = require("../database");

let authController = {
  login: (req, res) => {
    res.render("auth/login");
  },

  register: (req, res) => {
    res.render("auth/register");
  },

  loginSubmit: (req, res, next) => {
    passport.authenticate("local", {
      successRedirect: "/reminders", 
      failureRedirect: "/login",
    }) (req, res, next);
  },

  registerSubmit: (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let user = database.userModel.findOne({
      username: username,
    });
    if (user) {
      res.rediect("/register");
    }
    database.userModel.create({
      username: username,
      password: password,
    });
    res.failureRedirect("/login");
  },
};

module.exports = authController;
