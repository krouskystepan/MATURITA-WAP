import { Request, Response } from 'express'
import Cameraman from '../models/cameramans'

/**
 * Creates a new cameraman.
 * @param req The request object.
 * @param res The response object.
 * @returns The created cameraman.
 */
export const createCameraman = async (req: Request, res: Response) => {
  try {
    const { name, salary, camera } = req.body
    if (!name || !salary || !camera)
      return res.status(400).send({ msg: 'Missing required fields' })

    const newCameraman = new Cameraman({ name, salary, camera })
    const result = await newCameraman.save()
    res.status(201).send({ msg: 'Cameraman created', payload: result })
  } catch (error) {
    res.status(500).send({ msg: 'Internal server error' })
  }
}

/**
 * Retrieves all cameramans.
 * @param req The request object.
 * @param res The response object.
 * @returns An array of cameraman objects.
 */
export const getAllCameramans = async (req: Request, res: Response) => {
  try {
    const result = await Cameraman.find()
    if (result && result.length !== 0) {
      return res.status(200).send({
        msg: 'Cameramans found!',
        payload: result,
      })
    }
    res.status(404).send({ msg: 'Cameramans not found' })
  } catch (error) {
    res.status(500).send(error)
  }
}

/**
 * Retrieves a cameraman by ID.
 * @param req The request object.
 * @param res The response object.
 * @returns The cameraman object.
 */
export const getCameramanById = async (req: Request, res: Response) => {
  try {
    const cameramanId = req.params.id
    if (!cameramanId.match(/^[0-9a-fA-F]{24}$/))
      return res.status(400).send({ msg: 'Invalid cameraman ID' })

    const result = await Cameraman.findById(cameramanId)
    if (result) {
      return res.status(200).send({
        msg: 'Cameraman found!',
        payload: result,
      })
    }
    res.status(404).send({ msg: 'Cameraman not found' })
  } catch (error) {
    res.status(500).send({ msg: 'Internal server error' })
  }
}

/**
 * Deletes a cameraman by ID.
 * @param req The request object.
 * @param res The response object.
 * @returns A message indicating successful deletion.
 */
export const deleteCameraman = async (req: Request, res: Response) => {
  try {
    const cameramanId = req.params.id
    if (!cameramanId.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).send({ msg: 'Invalid cameraman ID' })
    }

    const result = await Cameraman.findByIdAndDelete(cameramanId)
    if (result) {
      return res.status(200).send({ msg: 'Cameraman deleted' })
    }
    res.status(404).send({ msg: 'Cameraman not found' })
  } catch (error) {
    res.status(500).send(error)
  }
}

/**
 * Updates a cameraman by ID.
 * @param req The request object.
 * @param res The response object.
 * @returns The updated cameraman object.
 */
export const updateCameraman = async (req: Request, res: Response) => {
  try {
    const cameramanId = req.params.id
    if (!cameramanId.match(/^[0-9a-fA-F]{24}$/))
      return res.status(400).send({ msg: 'Invalid cameraman ID' })

    const { name, salary, camera } = req.body
    if (!name || !salary || !camera)
      return res.status(400).send({ msg: 'Missing required fields' })

    const updatedData = { name, salary, camera }
    const result = await Cameraman.findByIdAndUpdate(cameramanId, updatedData, {
      // Získá nově aktualizovanou hodnotu
      new: true,
    })
    if (result) {
      return res.status(201).send({
        msg: 'Cameraman updated',
        payload: result,
      })
    }
    res.status(500).send({ msg: 'Cameraman not found' })
  } catch (error) {
    res.status(500).send(error)
  }
}
