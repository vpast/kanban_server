const User = require('../models/users');
var bcrypt = require('bcryptjs');
// const CryptoJS = require('crypto-js')
// const jsonwebtoken = require('jsonwebtoken')

const register = (req, res) => {
  User.find()
  .then(result => {
    console.log('result: ', result)
    res.send(result.length > 0 ? result: 'No results');
    res.status(201).send('Registered!')
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
      if (response === true) {
        res.status(200).send('Logged in!')
      } else {
        console.log('Error')
        return
      }
      console.log(`password: ${password}, user password: ${user.password}, response: ${response}`)
    }
    // console.log(`user: ${user}`)
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = { register, login };
