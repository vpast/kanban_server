var express = require('express');
const checkController = require('../controllers/check');

var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router.get('/', checkController.getCheck);
