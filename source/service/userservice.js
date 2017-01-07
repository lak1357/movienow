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
    var user = data[0]; // Spoof a DB call
    res.json(user);
  },

  create: function (req, res) {
        var user = new User();
        user.username = req.body.username;
        user.password = req.body.password;
        user.name = req.body.name;
        user.age = req.body.age;
        user.id = req.body.id;

        // save the bear and check for errors
        user.save(function(err) {
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
    data.splice(id, 1) // Spoof a DB call
    res.json(true);
  }
};

var data = [{
  name: 'Lakshitha',
  age: 28,
  id: '1'
}, {
  name: 'Prageeth',
  age: 29,
  id: '2'
}, {
  name: 'Herath',
  age: 30,
  id: '3'
}];

module.exports = userService;