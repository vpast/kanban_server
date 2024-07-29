const express = require('express');
const Columns = require('../models/columns');

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
    return res.status(400).json({ error: 'Column are required' })
  }

  try {
    const newColumn = new Columns(column);
    await newColumn.save();

    res.status(200).json({ message: 'List added successfully', column: newColumn });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add list' });
  }
}

const updateColumnTaskIds = async (columnId, taskId) => {
  try {
    let column = await Columns.findOne({ id: columnId });

    if (!column) {
      throw new Error('Column not found');
    }

    column.taskIds.push(taskId);
    await column.save();
    
    return column;
  } catch (error) {
    console.error('Error updating column taskIds:', error);
    throw error; // Пробрасываем ошибку для обработки выше
  }
};

const updateColumnTitle = async (req, res) => {
  const {id, title} = req.body;

  try {
    let column = await Columns.findOne({ id });
    
    if (!column) {
      throw new Error('Column not found');
    }

    column.title = title;
    await column.save();
    
    res.status(200).json(column);
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};

module.exports = { getColumns, addColumn, updateColumnTaskIds, updateColumnTitle };
