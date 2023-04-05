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

userSchema.methods.comparePassword = async (password) => {
  let user = this;
  try {
    const result = await bcrypt.compare(password, user.password)
    console.log(result)
    return result;
  } catch (err) {
    console.log('Error while comparing password!')
  }
}

module.exports = mongoose.model('users', userSchema, 'users');
