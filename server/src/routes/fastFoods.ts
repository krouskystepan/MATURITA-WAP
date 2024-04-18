import express from 'express'
const router = express.Router()

import * as fastFoodsController from '../controllers/fastFoods'

router.post('/', fastFoodsController.createFastFood)

router.get('/', fastFoodsController.getAllFastFoods)

router.get('/:id', fastFoodsController.getFastFoodById)

router.delete('/:id', fastFoodsController.deleteFastFood)

router.put('/:id', fastFoodsController.updateFastFood)

module.exports = router
