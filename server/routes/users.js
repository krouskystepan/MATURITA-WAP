const express = require('express');
const router = express.Router();

const usersConroller = require('../controllers/users');

/**
 * CREATE USER
 * URL: http://localhost:3000/users
 * Method: POST
 */
router.post('/', usersConroller.createUser);

/**
 * GET ALL USERS
 * URL: http://localhost:3000/users
 * Method: GET
 */
router.get('/', usersConroller.getAllUsers);

/**
 * GET USER
 * URL: http://localhost:3000/users/:id
 * Method: GET
 */
router.get('/:id', usersConroller.getUserById);

/**
 * DELETE USER
 * URL: http://localhost:3000/users/:id
 * Method: DELETE
 */
router.delete('/:id', usersConroller.deleteUser);

/**
 * UPDATE USER
 * URL: http://localhost:3000/users/:id
 * Method: PUT
 */
router.put('/:id', usersConroller.updateUser);

module.exports = router;
