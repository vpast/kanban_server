var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const checkModel = require('./src/models/check')
const userModel = require('./src/models/users')

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

app.use('/api', require('./src/routes'));
// app.use('/users', require('./routes/users'));

app.post('/users', async (req, res) => {
  userModel.create(req.body);
  console.log(req.body);
});

module.exports = app;
