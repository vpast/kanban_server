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

const updateBoard = async (req, res) => {
  const { id } = req.params;
  const { columns } = req.body;

  if (!columns) {
    return res.status(400).json({ error: 'Columns array is required' });
  }

  try {
    const updatedBoard = await Boards.findByIdAndUpdate(
      id,
      { $set: { columns } },
      { new: true }
    );

    if (!updatedBoard) {
      return res.status(404).json({ error: 'Board not found' });
    }

    res.status(200).json(updatedBoard);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update board' });
  }
};

module.exports = {
  getBoards,
  addBoard,
  updateBoard
}; 