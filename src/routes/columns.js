const express = require('express');
const router = express.Router();
const { getColumns, updateColumnTitle, addColumn, deleteColumn, updateColumn } = require('../controllers/columns');

router.get('/', getColumns);
router.post('/column', addColumn)
router.delete('/:columnId', deleteColumn);
router.put('/updateColumnTitle', async (req, res) => {
  const { id: columnId, title: columnTitle } = req.body;

  if (!columnId || !columnTitle) {
    return res.status(400).json({ error: 'columnId and columnTitle are required' });
  }

  try {
    const updatedColumn = await updateColumnTitle(columnId, columnTitle);
    // if (!updatedColumn) {
    //   return res.status(404).json({ error: 'Data error' });
    // }
    res.status(200).json(updatedColumn);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:columnId', async (req, res) => {
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