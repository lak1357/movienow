var Movie = require('../models/movie');


var movieService = {

  getAll: function (req, res) {
    Movie.find(function (err, movies) {
      if (err)
        res.send(err);

      res.json(movies);
    });
  },

  getOne: function (req, res) {

    var movieId = req.params.id;
    var movie = new Movie();

    Movie.find({ movieId: movieId }, function (err, movie) {
      if (err) {
        res.send(err);
      }
      else {

        if (movie.length < 1) {
          res.status(404).send();
        }
        else {
          res.status(200).send(movie);
        }

      }
    });
  },

  create: function (req, res) {
    var movie = new Movie();
    movie.title = req.body.title;
    movie.description = req.body.description;
    movie.duration = req.body.duration;
    movie.rating = req.body.rating;

    movie.save(function (err) {
      if (err)
        res.send(err);

      res.status(201).send(movie);
    });
  },

  update: function (req, res) {

    res.status(404).json({message : "Not Implemented"});
  },

  delete: function (req, res) {

    var movieId = req.params.id;

    Movie.remove({ movieId: movieId }, function (err) {
      if (err) {
        res.send(err);
      }
      else {
        res.status(201).send();
      }
    });
  }
};

module.exports = movieService;