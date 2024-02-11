const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users');

/**
 * CREATE USER
 * URL: http://localhost:3000/users
 * Method: POST
 */
router.post('/', usersController.createUser);

/**
 * GET ALL USERS
 * URL: http://localhost:3000/users
 * Method: GET
 */
router.get('/', usersController.getAllUsers);

/**
 * GET USER
 * URL: http://localhost:3000/users/:id
 * Method: GET
 */
router.get('/:id', usersController.getUserById);

/**
 * DELETE USER
 * URL: http://localhost:3000/users/:id
 * Method: DELETE
 */
router.delete('/:id', usersController.deleteUser);

/**
 * UPDATE USER
 * URL: http://localhost:3000/users/:id
 * Method: PUT
 */
router.put('/:id', usersController.updateUser);

module.exports = router;
