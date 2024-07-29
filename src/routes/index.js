var express = require('express');

const tasksController = require('../controllers/tasks')
const columnsController = require('../controllers/columns')

var router = express.Router();

var tasks = router.get('/tasks', tasksController.getTasks)
var columns = router.get('/columns', columnsController.getColumns)
router.use('/users', require('./users'));

router.post('/tasks', tasksController.addTask);
router.post('/columns', columnsController.addColumn);
router.post('/updateColumnTitle', columnsController.updateColumnTitle);

module.exports = router, tasks, columns
