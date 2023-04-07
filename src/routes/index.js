var express = require('express');
const checkController = require('../controllers/check');
const userController = require('../controllers/users')

var router = express.Router();

/* GET home page. */
var check = router.get('/', checkController.getCheck);
router.use('/users', require('./users'));

module.exports = check, router
