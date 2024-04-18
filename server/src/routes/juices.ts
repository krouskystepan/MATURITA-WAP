import express from 'express'
const router = express.Router()

import * as juicesController from '../controllers/juices'

router.post('/', juicesController.createJuice)

router.get('/', juicesController.getAllJuices)

router.get('/:id', juicesController.getJuiceById)

router.delete('/:id', juicesController.deleteJuice)

router.put('/:id', juicesController.updateJuice)

module.exports = router
