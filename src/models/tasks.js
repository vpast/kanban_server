const { Schema, model } = require('mongoose');

const tasksSchema = new Schema({
  id: {
    type: String,
    require: true
  },
  content: {
    type: String,
    require: true
  },
});

module.exports = model('tasks', tasksSchema, 'tasks')