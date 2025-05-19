const { Schema, model, Types } = require('mongoose');
const mongoose = require('mongoose')

const boardsSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Board', boardsSchema, 'boards')