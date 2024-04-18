import { Request, Response } from 'express'
import FastFood from '../models/fastFoods'

/**
 * Creates a new fastFood.
 * @param req The request object.
 * @param res The response object.
 * @returns The created fastFood.
 */
export const createFastFood = async (req: Request, res: Response) => {
  try {
    const { company, menu, price } = req.body
    if (!company || !menu || !price)
      return res.status(400).send({ msg: 'Missing required fields' })

    const newFastFood = new FastFood({ company, menu, price })
    const result = await newFastFood.save()
    res.status(201).send({ msg: 'FastFood created', payload: result })
  } catch (error) {
    res.status(500).send({ msg: 'Internal server error' })
  }
}

/**
 * Retrieves all fastFoods.
 * @param req The request object.
 * @param res The response object.
 * @returns An array of fastFood objects.
 */
export const getAllFastFoods = async (req: Request, res: Response) => {
  try {
    const result = await FastFood.find()
    if (result && result.length !== 0) {
      return res.status(200).send({
        msg: 'FastFoods found!',
        payload: result,
      })
    }
    res.status(404).send({ msg: 'FastFoods not found' })
  } catch (error) {
    res.status(500).send(error)
  }
}

/**
 * Retrieves a fastFood by ID.
 * @param req The request object.
 * @param res The response object.
 * @returns The fastFood object.
 */
export const getFastFoodById = async (req: Request, res: Response) => {
  try {
    const fastFoodId = req.params.id
    if (!fastFoodId.match(/^[0-9a-fA-F]{24}$/))
      return res.status(400).send({ msg: 'Invalid fastFood ID' })

    const result = await FastFood.findById(fastFoodId)
    if (result) {
      return res.status(200).send({
        msg: 'FastFood found!',
        payload: result,
      })
    }
    res.status(404).send({ msg: 'FastFood not found' })
  } catch (error) {
    res.status(500).send({ msg: 'Internal server error' })
  }
}

/**
 * Deletes a fastFood by ID.
 * @param req The request object.
 * @param res The response object.
 * @returns A message indicating successful deletion.
 */
export const deleteFastFood = async (req: Request, res: Response) => {
  try {
    const fastFoodId = req.params.id
    if (!fastFoodId.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).send({ msg: 'Invalid fastFood ID' })
    }

    const result = await FastFood.findByIdAndDelete(fastFoodId)
    if (result) {
      return res.status(200).send({ msg: 'FastFood deleted' })
    }
    res.status(404).send({ msg: 'FastFood not found' })
  } catch (error) {
    res.status(500).send(error)
  }
}

/**
 * Updates a fastFood by ID.
 * @param req The request object.
 * @param res The response object.
 * @returns The updated fastFood object.
 */
export const updateFastFood = async (req: Request, res: Response) => {
  try {
    const fastFoodId = req.params.id
    if (!fastFoodId.match(/^[0-9a-fA-F]{24}$/))
      return res.status(400).send({ msg: 'Invalid fastFood ID' })

    const { company, menu, price } = req.body
    if (!company || !menu || !price)
      return res.status(400).send({ msg: 'Missing required fields' })

    const updatedData = { company, menu, price }
    const result = await FastFood.findByIdAndUpdate(fastFoodId, updatedData, {
      // Získá nově aktualizovanou hodnotu
      new: true,
    })
    if (result) {
      return res.status(201).send({
        msg: 'FastFood updated',
        payload: result,
      })
    }
    res.status(500).send({ msg: 'FastFood not found' })
  } catch (error) {
    res.status(500).send(error)
  }
}
