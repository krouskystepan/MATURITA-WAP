const User = require('../models/users');

exports.createUser = async (req, res) => {
  try {
    // Create a new user
  } catch (error) {
    res.status(500).send(error)
  }
};

exports.getAllUsers = (req, res) => {
  res.send('get all users');
};

exports.getUserById = (req, res) => {
  res.send('get user ' + req.params.id);
};

exports.deleteUser = (req, res) => {
  res.send('deleted user ' + req.params.id);
};

exports.updateUser = (req, res) => {
  res.send('updated user ' + req.params.id);
};
