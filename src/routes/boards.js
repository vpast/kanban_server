const express = require('express');
const router = express.Router();
const {
  getBoards,
  addBoard,
  getColumnOrder,
  updateColumnOrder,
} = require('../controllers/boards');

router.get('/', getBoards);
router.post('/', addBoard);
router.get('/order/columnOrder', getColumnOrder);
router.put('/order/updateColumnOrder', async (req, res) => {
  const newColumnOrder = req.body;

  try {
    const updatedColumnOrder = await updateColumnOrder(newColumnOrder);
    if (!updatedColumnOrder) {
      return res.status(404).json({ error: 'Data error' });
    }
    res.status(200).json(updatedColumnOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 