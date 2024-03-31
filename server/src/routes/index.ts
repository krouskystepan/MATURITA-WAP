import express, { Request, Response } from 'express'
const router = express.Router()

router.get('/', function (req: Request, res: Response) {
  res.send('Welcome to Express index page')
})

module.exports = router
