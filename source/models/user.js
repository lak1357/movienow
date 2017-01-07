var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
    id : Number,
    username: String,
    password: String,
    name: String,
    age: Number
});

module.exports = mongoose.model('User', UserSchema);