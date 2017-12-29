'use strict'

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./server/config/config');

const appRoute = require('./server/routes/index');

let app = express();
// db connection
mongoose.connect(config.database.uri)
  .then(() =>  console.log('mongodb connection successful'))
  .catch((err) => console.error(err));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/', appRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  // allow angular to handle all request other that ones meant for backend
  return res.render(path.join(__dirname, 'dist/index.html'));
});

module.exports = app;
