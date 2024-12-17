const Columns = require('../models/columns');
const Tasks = require('../models/tasks');

const getColumns = async (req, res) => {
  try {
    let columns = await Columns.find();
    if (columns) {
      res.status(200).json(columns);
    }
  } catch (err) {
    res.status(404).json(err);
  }
};

const addColumn = async (req, res) => {
  const { column } = req.body;

  if (!column) {
    return res.status(400).json({ error: 'Column are required' });
  }

  try {
    const newColumn = new Columns(column);
    await newColumn.save();

    res
      .status(200)
      .json({ message: 'List added successfully', column: newColumn });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add list' });
  }
};

const deleteColumn = async (req, res) => {
  const { columnId } = req.params;

  if (!columnId) {
    return res.status(400).json({ error: 'ColumnId is required' });
  }

  try {
    const column = await Columns.findOne({ id: columnId });
    if (!column) {
      return res.status(404).json({ error: 'Column not found' });
    }

    if (column.taskIds.length > 0) {
      await Tasks.deleteMany({ id: { $in: column.taskIds } });
    }

    await Columns.findOneAndDelete({ id: columnId });

    res.status(200).json({ message: 'Column deleted successfully' });
  } catch (err) {
    console.error('Error deleting column:', err);
    res.status(500).json({ error: 'Failed to delete column' });
  }
};

const updateColumnTaskIds = async (columnId, taskId, action) => {
  try {
    let column = await Columns.findOne({ id: columnId });

    if (!column) {
      throw new Error('Column not found');
    }

    if (action === 'add') {
      column.taskIds.push(taskId);
    } else if (action === 'remove') {
      column.taskIds = column.taskIds.filter((id) => id !== taskId);
    }

    await column.save();
    return column;
  } catch (error) {
    console.error('Error updating column taskIds:', error);
    throw error;
  }
};

const updateColumnTitle = async (columnId, columnTitle) => {
  try {
    const column = await Columns.findOneAndUpdate(
      { id: columnId },
      { $set: { title: columnTitle } },
      { new: true }
    );

    if (!column) {
      throw new Error('Column not found');
    }

    return column;
    // res.status(200).json(column);
  } catch (error) {
    // res.status(500).json({ error: error.message });
    console.error('Error updating column:', error.stack);
    throw error;
  }
};

const updateColumn = async (columnId, updatedData) => {
  try {
    if (!updatedData || typeof updatedData !== 'object') {
      throw new Error('Invalid updatedData');
    }

    const allowedFields = ['taskIds'];
    const filteredData = Object.fromEntries(
      Object.entries(updatedData.column).filter(([key]) =>
        allowedFields.includes(key)
      )
    );

    const column = await Columns.findOneAndUpdate(
      { id: columnId },
      { $set: filteredData },
      { new: true }
    );

    if (!column) {
      throw new Error('Column not found');
    }

    return column;
  } catch (error) {
    console.error('Error updating column:', error.stack);
    throw error;
  }
};

module.exports = {
  getColumns,
  addColumn,
  deleteColumn,
  updateColumnTaskIds,
  updateColumnTitle,
  updateColumn,
};
