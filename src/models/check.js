const mongoose = require('mongoose');
// const { schemaOptions } = require('./modelOptions');

const checkSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('check', checkSchema, 'check');
