const { Schema, model } = require('mongoose');

const tasksSchema = new Schema({
  content: {
    type: String,
    require: true
  },
});

module.exports = model('tasks', tasksSchema, 'tasks')