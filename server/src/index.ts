import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import path from 'path'
dotenv.config()

import cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

const PORT = process.env.PORT || 3000

if (!process.env.MONGO_URL) throw new Error('MongoDB URL is not defined')
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('\n\u001b[34mDatabase connected\u001b[0m\n'))
  .catch((err) => console.log(err))

// Routes
app.use(`/`, require('./routes/index'))
app.use(`/wizards`, require('./routes/wizards'))
app.use(`/juices`, require('./routes/juices'))
app.use(`/fastFoods`, require('./routes/fastFoods'))
app.use(`/cameramans`, require('./routes/cameramans'))

app.listen(PORT, () => {
  console.log(
    `\n\u001b[97mServer is running\u001b[0m: \u001b[34mhttp://localhost:${PORT}\u001b[0m`
  )
})
