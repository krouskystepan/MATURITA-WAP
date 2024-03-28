import express from 'express'
const router = express.Router()

import * as usersController from '../controllers/users'

router.post('/', usersController.createUser)

router.get('/', usersController.getAllUsers)

router.get('/:id', usersController.getUserById)

router.delete('/:id', usersController.deleteUser)

router.put('/:id', usersController.updateUser)

module.exports = router
