var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var UserSchema   = new Schema({
    username: String,
    password: String,
    name: String,
    age: Number
});

UserSchema.plugin(autoIncrement.plugin, { model: 'User', field: 'userId' });

module.exports = mongoose.model('User', UserSchema);