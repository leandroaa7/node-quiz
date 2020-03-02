
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const errorHandler = require('./controllers/error.controller');
const indexRouter = require('./routes/index');

//environment
require('dotenv').config({ path: path.join(__dirname, "../config/env/.env") })

//express init
const app = express();
app.use(express.urlencoded({ extended: false }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//login
app.use(logger('dev'));

//accept json
app.use(express.json());


//cookies
app.use(cookieParser());

//routes
app.use('/', indexRouter);

// error handler
app.use(errorHandler);

module.exports = app;
