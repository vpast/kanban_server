const Boards = require('../models/boards');

const getBoards = async (req, res) => {
  try {
    let boards = await Boards.find();
    if (boards) {
      res.status(200).json(boards);
    }
  } catch (err) {
    res.status(404).json(err);
  }
};

const addBoard = async (req, res) => {
  const { board } = req.body;

  if (!board) {
    return res.status(400).json({ error: 'Board are required' });
  }

  try {
    const newBoard = new Boards(board);
    await newBoard.save();

    res
      .status(200)
      .json({ message: 'Board added successfully', board: newBoard });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add board' });
  }
};

const getColumnOrder = async (req, res) => {
  try {
    let board = await Boards.findOne();
    if (board) {
      res.status(200).json([{ columnOrder: board.columnOrder }]);
    }
  } catch (err) {
    res.status(404).json(err);
  }
};

const updateColumnOrder = async (columnOrder) => {
  try {
    const boardUpdated = await Boards.findOneAndUpdate(
      {},
      { $set: { columnOrder: columnOrder } },
      { new: true }
    );
    return boardUpdated;
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getBoards,
  addBoard,
  getColumnOrder,
  updateColumnOrder
}; 