var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const checkModel = require('./src/v1/models/check')
const userModel = require('./src/v1/models/users')

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use('/check', require('./src/v1/routes'));
app.use('/users', require('./src/v1/routes/users'));

app.post('/users', async (req, res) => {
  userModel.create(req.body);
  console.log(req.body);
});

module.exports = app;
