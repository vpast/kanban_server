const express = require('express');
const Tasks = require('../models/tasks');
const { updateColumnTaskIds } = require('./columns');

const getTasks = async (req, res) => {
  try {
    let tasks = await Tasks.find();
    if (tasks) {
      res.status(200).json(tasks);
    }
  } catch (err) {
    res.status(404).json(err);
  }
};

const addTask = async (req, res) => {
  const { task, columnId } = req.body;
  console.log(task);

  if (!task || !columnId) {
    return res.status(400).json({ error: 'Task and columnId are required' });
  }

  try {
    const newTask = new Tasks(task);
    await newTask.save();

    await updateColumnTaskIds(columnId, newTask._id, 'add');

    res.status(201).json({ message: 'Task added successfully', task: newTask });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add task' });
  }
};

const deleteTask = async (req, res) => {
  const { taskId } = req.params;
  const { columnId } = req.query;

  if (!taskId || !columnId) {
    return res.status(400).json({ error: 'TaskId and columnId are required' })
  }

  try {
    await Tasks.findOneAndDelete({ _id: taskId });
    await updateColumnTaskIds(columnId, taskId, 'remove');
    res.status(200).json({ message: 'Task deleted successfuly' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
}

module.exports = { getTasks, addTask, deleteTask };
