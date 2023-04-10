const User = require('../models/users');
var bcrypt = require('bcryptjs');
// const CryptoJS = require('crypto-js')
// const jsonwebtoken = require('jsonwebtoken')

const registeredUser = (req, res) => {
  User.find()
  .then(result => {
    console.log('result: ', result)
    res.send(result.length > 0 ? result: 'No results');
  })
  .catch(err =>{
    console.log(err)
  })
};

const login = async (req,res) => {
  const { email, password } = req.body  
  try {
    let user = await User.findOne({ email }).select('email password');
    if (user) {
      let response = bcrypt.compareSync(password, user.password)
      console.log(`password: ${password}, user password: ${user.password}, response: ${response}`)
    }
    // console.log(`user: ${user}`)
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = { registeredUser, login };
