const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
require('dotenv').config()
const mongoose = require('mongoose')

const PORT = process.env.PORT || '3000'

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('\nDatabase connected'))
  .catch((err) => console.log(err))

// Import routes
const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// Create routes
app.use('/', indexRouter)
app.use('/users', usersRouter)

app.use(function (req, res, next) {
  next(createError(404))
})

app.use(function (err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  res.status(err.status || 500)
  res.render('error')
})

app.listen(() => {
  console.log(`\nServer is running: http://localhost:${PORT}`)
})

module.exports = app
