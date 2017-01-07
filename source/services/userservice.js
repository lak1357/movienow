var User = require('../models/user');


var userService = {

  getAll: function (req, res) {
    User.find(function (err, users) {
      if (err)
        res.send(err);

      res.json(users);
    });
  },

  getOne: function (req, res) {

    var userId = req.params.id;
    var user = new User();

    User.find({ userId: userId }, function (err, user) {
      if (err) {
        res.send(err);
      }
      else {

        if (user.length < 1) {
          res.status(404).send();
        }
        else {
          res.status(200).send(user);
        }

      }
    });
  },

  create: function (req, res) {
    var user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    user.name = req.body.name;
    user.age = req.body.age;

    user.save(function (err) {
      if (err)
        res.send(err);

      res.status(201).send(user);
    });
  },

  update: function (req, res) {
    res.status(404).json({message : "Not Implemented"});
  },

  delete: function (req, res) {

    var userId = req.params.id;

    User.remove({ userId: userId }, function (err) {
      if (err) {
        res.send(err);
      }
      else {
        res.status(201).send();
      }
    });
  }
};

module.exports = userService;