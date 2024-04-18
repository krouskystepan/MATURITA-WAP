import * as allController from '../controllers'

import express, { Request, Response } from 'express'
const router = express.Router()

router.get('/', function (req: Request, res: Response) {
  res.send('Welcome to Express index page')
})

router.get('/all', allController.getAll)

module.exports = router
