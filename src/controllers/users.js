const User = require('../models/users');
var bcrypt = require('bcryptjs');
const userModel = require('../models/users');
// const CryptoJS = require('crypto-js')
// const jsonwebtoken = require('jsonwebtoken')

const register = async (req, res) => {
  try {
    if (req.body != undefined) {
      userModel.create(req.body);
      console.log(req.body);
      res.status(201).send('Registered!');
    } else {
      return;
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email }).select('email password');
    if (user) {
      let response = bcrypt.compareSync(password, user.password);
      if (response === true) {
        res.status(200).send('Logged in!');
      } else {
        console.log('Error');
        return;
      }
      console.log(
        `password: ${password}, user password: ${user.password}, response: ${response}`
      );
    }
    // console.log(`user: ${user}`)
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { register, login };
