var express = require('express');
const checkController = require('../controllers/check');
const userController = require('../controllers/users')

const tasksController = require('../controllers/tasks')

var router = express.Router();


// var check = router.get('/', checkController.getCheck);
var tasks = router.get('/tasks', tasksController.getTasks)
router.use('/users', require('./users'));

// module.exports = check, router
module.exports = router, tasks
