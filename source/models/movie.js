var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var MovieSchema   = new Schema({
    id : Number,
    title: String,
    description: String,
    duration: Number,
    rating: Number
});


module.exports = mongoose.model('Movie', MovieSchema);