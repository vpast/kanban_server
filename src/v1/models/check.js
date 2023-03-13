const mongoose = require('mongoose');
// const { schemaOptions } = require('./modelOptions');

const checkSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  state: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('check', checkSchema, 'check');
