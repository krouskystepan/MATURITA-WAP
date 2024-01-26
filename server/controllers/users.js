const User = require('../models/users')

/*
Vytvoření uživatele
METHOD: POST
URL: /users
BODY: 
{
  "firstName: "Alex",
  "lastName": "Smith", 
  "age": 42
}
*/
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

/*
Získání všech uživatelů
METHOD: GET
URL: /users
*/
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

/*
Získání uživatele skze ID
METHOD: GET
URL: /users/65b414cb164c58b7f7a99f4e
*/
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

/*
Odstranění uživatele skrze ID
METHOD: DELETE
URL: /users/65b414cb164c58b7f7a99f4e
*/
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

/*
Aktualizování uživatele skze ID
METHOD: PUT
URL: /users/65b414cb164c58b7f7a99f4e
BODY: 
{
  "firstName": "Alex",
  "lastName": "Smith", 
  "age": 42
}
*/
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
