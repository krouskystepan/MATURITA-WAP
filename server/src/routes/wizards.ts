import express from 'express'
const router = express.Router()

import * as wizardsController from '../controllers/wizards'

router.post('/', wizardsController.createWizard)

router.get('/', wizardsController.getAllWizards)

router.get('/:id', wizardsController.getWizardById)

router.delete('/:id', wizardsController.deleteWizard)

router.put('/:id', wizardsController.updateWizard)

module.exports = router
