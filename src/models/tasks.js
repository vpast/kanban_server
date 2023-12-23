const mongoose = require('mongoose')

const tasksSchema = new mongoose.Schema({
  id: {
    type: String,
    require: true
  },
  content: {
    type: String,
    require: true
  },
});

module.exports = mongoose.model('tasks', tasksSchema, 'tasks')