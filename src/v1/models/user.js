const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
// const { schemaOptions } = require('./modelOptions');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre('save', function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  let user = this;
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);

      user.password = hash;
      next();
      console.log(user.password);
    });
  });
});

module.exports = mongoose.model('users', userSchema, 'users');
