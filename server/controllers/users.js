const User = require('../models/users')

exports.createUser = async (req, res) => {
  try {
    const data = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      age: req.body.age,
    })
    const result = await data.save()
    if (result) {
      return res.status(201).send({
        msg: 'User created',
        payload: result,
      })
    }
    res.status(500).send({
      msg: 'User was not created',
    })
  } catch (error) {
    res.status(500).send(error)
  }
}

exports.getAllUsers = async (req, res) => {
  try {
    const result = await User.find()
    if (result && result.length !== 0) {
      return res.status(200).send({
        msg: 'Users found!',
        payload: result,
      })
    }
    res.status(404).send({ msg: 'Users not found' })
  } catch (error) {
    res.status(500).send(error)
  }
}

exports.getUserById = async (req, res) => {
  try {
    const result = await User.findById(req.params.id)
    if (result) {
      return res.status(200).send({
        msg: 'User found!',
        payload: result,
      })
    }
    res.status(404).send({ msg: 'User not found' })
  } catch (error) {
    res.status(500).send(error)
  }
}

exports.deleteUser = async (req, res) => {
  try {
    const result = await User.findByIdAndDelete(req.params.id)
    if (result) {
      return res.status(200).send({
        msg: 'User deleted',
      })
    }
    res.status(404).send({ msg: 'Something went wrong' })
  } catch (error) {
    res.status(500).send(error)
  }
}

exports.updateUser = async (req, res) => {
  try {
    const data = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      age: req.body.age,
    }
    const result = await User.findByIdAndUpdate(req.params.id, data)
    if (result) {
      return res.status(200).send({
        msg: 'User updated',
      })
    }
    res.status(500).send({
      msg: 'User was not updated',
    })
  } catch (error) {
    res.status(500).send(error)
  }
}
