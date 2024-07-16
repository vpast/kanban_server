const express = require('express');
const Columns = require('../models/columns');

const getColumns = async (req, res) => {
  try {
    let columns = await Columns.find();
    if (columns) {
      res.status(200).json(columns);
      // console.log(columns)
    }
  } catch (err) {
    res.status(404).json(err);
  }
};

const updateColumnTaskIds = async (columnId, taskId) => {
  try {
    // Находим колонку по её ID
    let column = await Columns.findOne({ id: columnId });

    if (!column) {
      throw new Error('Column not found');
    }

    console.log('Before update - column:', column);

    // Добавляем новый ID задачи в массив taskIds и сохраняем изменения
    column.taskIds.push(taskId);
    await column.save();

    console.log('After update - column:', column);

    
    return column;
  } catch (error) {
    console.error('Error updating column taskIds:', error);
    throw error; // Пробрасываем ошибку для обработки выше
  }
};

module.exports = { getColumns, updateColumnTaskIds };
