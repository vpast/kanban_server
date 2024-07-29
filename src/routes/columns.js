const express = require('express');
const router = express.Router();
const { updateColumnTitle, addColumn, deleteColumn } = require('../controllers/columns');

router.post('/column', addColumn)
router.delete('/columns/:columnId', columnsController.deleteColumn);
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

module.exports = router;