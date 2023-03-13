const Check = require('../models/check')

const getCheck = (req,res) => {
  Check.find()
  .then(result => {
    console.log('result: ', result)
    res.send(result.length > 0 ? result: 'No results');
  })
  .catch(err =>{
    console.log(err)
  })
}

module.exports = {getCheck}