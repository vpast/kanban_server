const User = require('../models/user')
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
}


module.exports = {registeredUser}