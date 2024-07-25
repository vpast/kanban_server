var express = require('express');
const checkController = require('../controllers/check');
const userController = require('../controllers/users')

const tasksController = require('../controllers/tasks')
const columnsController = require('../controllers/columns')

var router = express.Router();


// var check = router.get('/', checkController.getCheck);
var tasks = router.get('/tasks', tasksController.getTasks)
var columns = router.get('/columns', columnsController.getColumns)
router.use('/users', require('./users'));

router.post('/tasks', tasksController.addTask);
router.post('/updateColumnTitle', columnsController.updateColumnTitle);

// module.exports = check, router
module.exports = router, tasks, columns
