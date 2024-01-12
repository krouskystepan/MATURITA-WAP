const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('\n\u001b[34mDatabase connected\u001b[0m\n'))
  .catch((err) => {
    if (
      err.message.includes(
        'The `uri` parameter to `openUri()` must be a string, got "undefined"'
      )
    ) {
      console.log('MONGO_URL environment variable is not defined.');
    } else {
      console.log(err);
    }
  });

// Import routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Create routes
app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

app.listen(() => {
  console.log(
    `\n\u001b[97mServer is running\u001b[0m: \u001b[34mhttp://localhost:${
      process.env.PORT || '3000'
    }\u001b[0m`
  );
});

module.exports = app;
