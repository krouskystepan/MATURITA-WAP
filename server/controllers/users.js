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

//  Tohle je dost simple, je potřeba to upravit a dodělat
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users)
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.find({_id: req.params.id});
    res.send(user)
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.send("User deleted")
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateUser = (req, res) => {
  res.send('updated user ' + req.params.id);
};
