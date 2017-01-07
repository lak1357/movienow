var userService = {
 
  getAll: function(req, res) {
    var users = data; // Spoof a DB call
    res.json(users);
  },
 
  getOne: function(req, res) {
    var id = req.params.id;
    var user = data[0]; // Spoof a DB call
    res.json(user);
  },
 
  create: function(req, res) {
    var newUser = req.body;
    data.push(newUser); // Spoof a DB call
    res.json(newUser);
  },
 
  update: function(req, res) {
    var updateUser = req.body;
    var id = req.params.id;
    data[id] = updateUser // Spoof a DB call
    res.json(updateUser);
  },
 
  delete: function(req, res) {
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