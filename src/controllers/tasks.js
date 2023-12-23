const express = require('express')
const Tasks = require('../models/tasks')

const getTasks = async (req, res) => {
  try {
    let tasks = await Tasks.find()
    if (tasks) {
      res.status(200).json(tasks)
      // console.log(tasks)
    }
  } catch (err) {
    res.status(404).json(err)
  }
}

module.exports = {getTasks}