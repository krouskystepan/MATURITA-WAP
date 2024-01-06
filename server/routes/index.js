const express = require('express');
const router = express.Router();

/**
 * HOME PAGE
 * URL: http://localhost:3000/
 * Method: GET
 */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
