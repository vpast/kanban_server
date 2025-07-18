var express = require('express');

const columnsRouter = require('./columns');
const tasksRouter = require('./tasks');
const usersRouter = require('./users');
const boardsRouter = require('./boards');

var router = express.Router();

router.use('/tasks', tasksRouter);
router.use('/columns', columnsRouter);
router.use('/boards', boardsRouter);
router.use('/users', usersRouter);

module.exports = router
