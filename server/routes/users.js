const express = require('express');
const router = express.Router();

/**
 * GET ALL USERS
 * URL: http://localhost:3000/users/
 * Method: GET
 */
router.get('/', (req, res) => {
  res.send('get all users');
});

module.exports = router;
