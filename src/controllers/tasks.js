const express = require('express');
const Tasks = require('../models/tasks');
const { updateColumnTaskIds } = require('./columns');

const getTasks = async (req, res) => {
  try {
    let tasks = await Tasks.find();
    if (tasks) {
      res.status(200).json(tasks);
      // console.log(tasks)
    }
  } catch (err) {
    res.status(404).json(err);
  }
};

const addTask = async (req, res) => {
  const { task, columnId } = req.body;

  if (!task || !columnId) {
    return res.status(400).json({ error: 'Task and columnId are required' });
  }

  try {
    const newTask = new Tasks(task);
    await newTask.save();

    await updateColumnTaskIds(columnId, newTask.id);

    res.status(201).json({ message: 'Task added successfully', task: newTask });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add task' });
  }
};

module.exports = { getTasks, addTask };
