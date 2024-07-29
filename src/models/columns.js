const mongoose = require('mongoose')

const columnsSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  taskIds: {
    type: [String],
    required: true
  },
  index: {
    type: Number,
    required: false
  }
});

module.exports = mongoose.model('Columns', columnsSchema, 'columns')