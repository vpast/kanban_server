var express = require('express');

const tasksController = require('../controllers/tasks')
const columnsController = require('../controllers/columns')

var router = express.Router();

router.get('/tasks', tasksController.getTasks)
router.get('/columns', columnsController.getColumns)
router.use('/users', require('./users'));

router.post('/tasks', tasksController.addTask);
router.delete('/tasks/:taskId', tasksController.deleteTask);
router.post('/columns', columnsController.addColumn);
router.post('/updateColumnTitle', columnsController.updateColumnTitle);

module.exports = router
