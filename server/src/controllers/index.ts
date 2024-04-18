import { Request, Response } from 'express'
import Juice from '../models/juices'
import Cameraman from '../models/cameramans'
import Wizard from '../models/wizards'
import FastFood from '../models/fastFoods'

/**
 * Retrieves all entities.
 * @param req The request object.
 * @param res The response object.
 * @returns An array of juice objects.
 */
export const getAll = async (req: Request, res: Response) => {
  try {
    const cameraman = await Cameraman.find()
    const fastFood = await FastFood.find()
    const juice = await Juice.find()
    const wizard = await Wizard.find()

    const result = { cameraman, fastFood, juice, wizard }

    if (result) {
      return res.status(200).send({
        msg: 'Found!',
        payload: result,
      })
    }
    res.status(404).send({ msg: 'Not found' })
  } catch (error) {
    res.status(500).send(error)
  }
}
