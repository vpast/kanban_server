const express = require('express');
const router = express.Router();
const { getBoards, getBoard, addBoard, updateBoard } = require('../controllers/boards');

router.get('/', getBoards);
router.get('/:id', getBoard);
router.post('/', addBoard);
router.put('/:id', updateBoard);

module.exports = router; 