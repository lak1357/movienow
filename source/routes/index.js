var express = require('express');
var router = express.Router();
 
var auth = require('./auth.js');
var userService = require('../services/userservice.js');
var movieService = require('../services/movieservice.js');
 
/*
 * Routes that can be accessed by any one
 */
router.post('/login', auth.login);
 

/*
 * Routes that can be accessed only by authenticated & authorized users
 */
router.get('/api/v1/admin/users', userService.getAll);
router.get('/api/v1/admin/user/:id', userService.getOne);
router.post('/api/v1/admin/user/', userService.create);
router.put('/api/v1/admin/user/:id', userService.update);
router.delete('/api/v1/admin/user/:id', userService.delete);


router.get('/api/v1/movies', movieService.getAll);
router.get('/api/v1/movie/:id', movieService.getOne);
router.post('/api/v1/movie/', movieService.create);
router.put('/api/v1/movie/:id', movieService.update);
router.delete('/api/v1/movie/:id', movieService.delete);
 
module.exports = router;