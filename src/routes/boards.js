const express = require('express');
const router = express.Router();
const { getBoards, addBoard, updateBoard } = require('../controllers/boards');

router.get('/', getBoards);
router.post('/', addBoard);
router.put('/:id', updateBoard);

module.exports = router; 