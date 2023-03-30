var bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync(registerData.password, salt);

console.log(registerData.password)
console.log(salt)