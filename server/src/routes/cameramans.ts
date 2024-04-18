import express from 'express'
const router = express.Router()

import * as cameramansController from '../controllers/cameramans'

router.post('/', cameramansController.createCameraman)

router.get('/', cameramansController.getAllCameramans)

router.get('/:id', cameramansController.getCameramanById)

router.delete('/:id', cameramansController.deleteCameraman)

router.put('/:id', cameramansController.updateCameraman)

module.exports = router
