const Boards = require('../models/boards');

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
  getColumnOrder,
  updateColumnOrder
}; 