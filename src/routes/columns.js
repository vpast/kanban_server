const express = require('express');
const router = express.Router();
const { updateColumnTitle, addColumn, deleteColumn, updateColumn } = require('../controllers/columns');

router.post('/column', addColumn)
router.delete('/columns/:columnId', deleteColumn);
router.post('/updateColumnTitle', async (req, res) => {
  const { columnId: id, columnTitle: title } = req.body;

  if (!id || !title) {
    return res.status(400).json({ error: 'columnId and columnTitle are required' });
  }

  try {
    const updatedColumn = await updateColumnTitle(id, title);
    res.status(200).json(updatedColumn);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/columns/:columnId', async (req, res) => {
  // console.log('Received PUT request');
  // console.log('PUT request received for columnId:', req.params.columnId);
  // console.log('Updated data:', req.body); // Логирование тела запроса
  const { columnId } = req.params;
  const updatedData = req.body;


  try {
    const updatedColumn = await updateColumn(columnId, updatedData);
    if (!updatedColumn) {
      return res.status(404).json({ error: 'Column not found' });
    }
    res.status(200).json(updatedColumn);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;