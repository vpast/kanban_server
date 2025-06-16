const { Schema, model, Types } = require('mongoose');

const columnsSchema = new Schema({
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
  },
  boardId: {
    type: Types.ObjectId,
    ref: 'boards',
  },
});

module.exports = model('Columns', columnsSchema, 'columns')