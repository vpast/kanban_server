const mongoose = require('mongoose')

const columnOrderSchema = new mongoose.Schema({
  columnOrder: {
    type: [String],
    required: true
  },
});

module.exports = mongoose.model('ColumnOrder', columnOrderSchema, 'columnOrder')