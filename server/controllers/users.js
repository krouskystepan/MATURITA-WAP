const User = require('../models/users');

exports.createUser = async (req, res) => {
  try {
    const data = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      age: req.body.age,
    });
    const result = await data.save();
    if (result) {
      return res.status(201).send({
        msg: 'User created',
        payload: result,
      });
    }
    res.status(500).send({
      msg: 'User was not created',
    });
  } catch (error) {
    res.status(500).send(error);
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
