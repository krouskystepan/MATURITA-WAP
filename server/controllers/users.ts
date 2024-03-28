import { Request, Response } from 'express'
import User from '../models/users'

/**
 * Creates a new user.
 * @param req The request object.
 * @param res The response object.
 * @returns The created user.
 */
export const createUser = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, age } = req.body
    if (!firstName || !lastName || !age)
      return res.status(400).send({ msg: 'Missing required fields' })

    const newUser = new User({ firstName, lastName, age })
    const result = await newUser.save()
    res.status(201).send({ msg: 'User created', payload: result })
  } catch (error) {
    res.status(500).send({ msg: 'Internal server error' })
  }
}

/**
 * Retrieves all users.
 * @param req The request object.
 * @param res The response object.
 * @returns An array of user objects.
 */
export const getAllUsers = async (req: Request, res: Response) => {
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

/**
 * Retrieves a user by ID.
 * @param req The request object.
 * @param res The response object.
 * @returns The user object.
 */
export const getUserById = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id
    if (!userId.match(/^[0-9a-fA-F]{24}$/))
      return res.status(400).send({ msg: 'Invalid user ID' })

    const result = await User.findById(userId)
    if (result) {
      return res.status(200).send({
        msg: 'User found!',
        payload: result,
      })
    }
    res.status(404).send({ msg: 'User not found' })
  } catch (error) {
    res.status(500).send({ msg: 'Internal server error' })
  }
}

/**
 * Deletes a user by ID.
 * @param req The request object.
 * @param res The response object.
 * @returns A message indicating successful deletion.
 */
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id
    if (!userId.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).send({ msg: 'Invalid user ID' })
    }

    const result = await User.findByIdAndDelete(userId)
    if (result) {
      return res.status(200).send({ msg: 'User deleted' })
    }
    res.status(404).send({ msg: 'User not found' })
  } catch (error) {
    res.status(500).send(error)
  }
}

/**
 * Updates a user by ID.
 * @param req The request object.
 * @param res The response object.
 * @returns The updated user object.
 */
export const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id
    if (!userId.match(/^[0-9a-fA-F]{24}$/))
      return res.status(400).send({ msg: 'Invalid user ID' })

    const { firstName, lastName, age } = req.body
    if (!firstName || !lastName || !age)
      return res.status(400).send({ msg: 'Missing required fields' })

    const updatedData = { firstName, lastName, age }
    const result = await User.findByIdAndUpdate(userId, updatedData, {
      // Získá nově aktualizovanou hodnotu
      new: true,
    })
    if (result) {
      return res.status(200).send({
        msg: 'User updated',
        payload: result,
      })
    }
    res.status(500).send({ msg: 'User not found' })
  } catch (error) {
    res.status(500).send(error)
  }
}
