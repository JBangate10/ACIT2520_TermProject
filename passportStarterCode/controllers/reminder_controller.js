let database = require("../database").database;
let usermodel = require("../database").usermMdel;

let remindersController = {
  list: (req, res) => {
    const userid = usermodel.findById(req.user.id);
    res.render("reminder/index", { reminders: database.cindy.reminders });
  },

  new: (req, res) => {
    res.render("reminder/create");
  },

  listOne: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    if (searchResult != undefined) {
      res.render("reminder/single-reminder", { reminderItem: searchResult });
    } else {
      res.render("reminder/index", { reminders: database.cindy.reminders });
    }
  },

  create: (req, res) => {
    let reminder = {
      id: database.cindy.reminders.length + 1,
      title: req.body.title,
      description: req.body.description,
      completed: false,
    };
    database.cindy.reminders.push(reminder);
    res.redirect("/reminders");
  },

  edit: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    if (searchResult != undefined) {
      res.render("reminder/edit", { reminderItem: searchResult });
    } else {
      res.render("reminder/edit", { reminderItem: userid.reminders });
    }
  },

  update: (req, res) => {
    const user = usermodel.findById(req.user.id);
    let reminderToFind = req.params.id;
    let searchResult = user.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    })
  };
  searchResult.title = req.body.title;
  searchResult.description = req.body.description;
  this.searchResult.completed = req.body.completed == "true";
  res.rediect("/reminders");
},

  delete: (req, res) => {
    const user = usermodel.findById(req.user.id);
    let reminderToFind = req.params.id;
    let searchResult = user.reminders.find(function (reminder) {
      return reminders.id == reminderToFind;
    })
  },
};

module.exports = remindersController;
