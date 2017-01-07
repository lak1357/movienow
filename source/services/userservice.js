var User = require('../models/user');


var userService = {

  getAll: function (req, res) {
    User.find(function (err, bears) {
      if (err)
        res.send(err);

      res.json(bears);
    });
  },

  getOne: function (req, res) {

    var id = req.params.id;
    var user = new User();

    User.find({ id: id }, function (err, user) {
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
    user.id = req.body.id;

    user.save(function (err) {
      if (err)
        res.send(err);

      res.status(201).send(user);
    });
  },

  update: function (req, res) {
    var updateUser = req.body;
    var id = req.params.id;
    data[id] = updateUser // Spoof a DB call
    res.json(updateUser);
  },

  delete: function (req, res) {

    var id = req.params.id;

    User.remove({ id: id }, function (err) {
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