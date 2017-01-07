var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var MovieSchema   = new Schema({
    title: String,
    description: String,
    duration: Number,
    rating: Number
});

MovieSchema.plugin(autoIncrement.plugin, { model: 'Movie', field: 'movieId' });
module.exports = mongoose.model('Movie', MovieSchema);