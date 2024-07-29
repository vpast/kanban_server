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
  taskIds: {
    type: [String],
    require: true
  },
  index: {
    type: Number,
    require: false
  }
});

module.exports = mongoose.model('Columns', columnsSchema, 'columns')