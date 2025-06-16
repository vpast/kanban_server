const { Schema, model, Types } = require('mongoose');

const boardsSchema = new Schema({
  columns: [{
    type: Types.ObjectId,
    ref: 'columns'
  }],
  title: {
    type: String,
    required: true
  },
  columnOrder: {
    type: [String],
    required: true
  },
});

module.exports = model('Board', boardsSchema, 'boards')