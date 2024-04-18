import { Request, Response } from 'express'
import Juice from '../models/juices'

/**
 * Creates a new juice.
 * @param req The request object.
 * @param res The response object.
 * @returns The created juice.
 */
export const createJuice = async (req: Request, res: Response) => {
  try {
    const { company, type, price } = req.body
    if (!company || !type || !price)
      return res.status(400).send({ msg: 'Missing required fields' })

    const newJuice = new Juice({ company, type, price })
    const result = await newJuice.save()
    res.status(201).send({ msg: 'Juice created', payload: result })
  } catch (error) {
    res.status(500).send({ msg: 'Internal server error' })
  }
}

/**
 * Retrieves all juices.
 * @param req The request object.
 * @param res The response object.
 * @returns An array of juice objects.
 */
export const getAllJuices = async (req: Request, res: Response) => {
  try {
    const result = await Juice.find()
    if (result && result.length !== 0) {
      return res.status(200).send({
        msg: 'Juices found!',
        payload: result,
      })
    }
    res.status(404).send({ msg: 'Juices not found' })
  } catch (error) {
    res.status(500).send(error)
  }
}

/**
 * Retrieves a juice by ID.
 * @param req The request object.
 * @param res The response object.
 * @returns The juice object.
 */
export const getJuiceById = async (req: Request, res: Response) => {
  try {
    const juiceId = req.params.id
    if (!juiceId.match(/^[0-9a-fA-F]{24}$/))
      return res.status(400).send({ msg: 'Invalid juice ID' })

    const result = await Juice.findById(juiceId)
    if (result) {
      return res.status(200).send({
        msg: 'Juice found!',
        payload: result,
      })
    }
    res.status(404).send({ msg: 'Juice not found' })
  } catch (error) {
    res.status(500).send({ msg: 'Internal server error' })
  }
}

/**
 * Deletes a juice by ID.
 * @param req The request object.
 * @param res The response object.
 * @returns A message indicating successful deletion.
 */
export const deleteJuice = async (req: Request, res: Response) => {
  try {
    const juiceId = req.params.id
    if (!juiceId.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).send({ msg: 'Invalid juice ID' })
    }

    const result = await Juice.findByIdAndDelete(juiceId)
    if (result) {
      return res.status(200).send({ msg: 'Juice deleted' })
    }
    res.status(404).send({ msg: 'Juice not found' })
  } catch (error) {
    res.status(500).send(error)
  }
}

/**
 * Updates a juice by ID.
 * @param req The request object.
 * @param res The response object.
 * @returns The updated juice object.
 */
export const updateJuice = async (req: Request, res: Response) => {
  try {
    const juiceId = req.params.id
    if (!juiceId.match(/^[0-9a-fA-F]{24}$/))
      return res.status(400).send({ msg: 'Invalid juice ID' })

    const { company, type, price } = req.body
    if (!company || !type || !price)
      return res.status(400).send({ msg: 'Missing required fields' })

    const updatedData = { company, type, price }
    const result = await Juice.findByIdAndUpdate(juiceId, updatedData, {
      // Získá nově aktualizovanou hodnotu
      new: true,
    })
    if (result) {
      return res.status(201).send({
        msg: 'Juice updated',
        payload: result,
      })
    }
    res.status(500).send({ msg: 'Juice not found' })
  } catch (error) {
    res.status(500).send(error)
  }
}
