const express = require('express');
const router = express.Router();
const { updateColumnTitle, addColumn } = require('../controllers/columns');

router.post('/column', addColumn)

router.post('/updateColumnTitle', async (req, res) => {
  const { columnId, columnTitle } = req.body;

  if (!columnId || !columnTitle) {
    return res.status(400).json({ error: 'columnId and columnTitle are required' });
  }

  try {
    const updatedColumn = await updateColumnTitle(columnId, columnTitle);
    res.status(200).json(updatedColumn);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;