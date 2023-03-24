var express = require('express');
const checkController = require('../controllers/check');
const userController = require('../controllers/user')

var router = express.Router();

/* GET home page. */
var check = router.get('/', checkController.getCheck);

var user = router.get('/', userController.registeredUser);

module.exports = check, user 
