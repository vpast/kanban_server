var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');


var app = express();


app.use(cors());
// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('../src/routes'));

// app.use((err, req, res, next) => {
//   logger.error(err.message); // Логируем ошибку
//   res.status(500).json({ error: 'Internal Server Error' });
// });


// app.use('/', (req, res) => {
//   res.status(200).json({ message: 'Hello from Vercel!' });
// });


module.exports = app;
