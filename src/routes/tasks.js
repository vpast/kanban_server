const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasks');

router.get('/', tasksController.getTasks);
router.post('/', tasksController.addTask);
router.delete('/:taskId', tasksController.deleteTask);


module.exports = router;
