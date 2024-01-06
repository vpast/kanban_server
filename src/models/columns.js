const mongoose = require('mongoose')

const columnsSchema = new mongoose.Schema({
  id: {
    type: String,
    require: true
  },
  title: {
    type: String,
    require: true
  },
  tasksIds: {
    type: Array,
    require: true
  },
  index: {
    type: Number,
    require: true
  }
});

module.exports = mongoose.model('columns', columnsSchema, 'columns')