import { Request, Response } from 'express'
import Wizard from '../models/wizards'

/**
 * Creates a new wizard.
 * @param req The request object.
 * @param res The response object.
 * @returns The created wizard.
 */
export const createWizard = async (req: Request, res: Response) => {
  try {
    const { name, stick, age } = req.body
    if (!name || !stick || !age)
      return res.status(400).send({ msg: 'Missing required fields' })

    const newWizard = new Wizard({ name, stick, age })
    const result = await newWizard.save()
    res.status(201).send({ msg: 'Wizard created', payload: result })
  } catch (error) {
    res.status(500).send({ msg: 'Internal server error' })
  }
}

/**
 * Retrieves all wizards.
 * @param req The request object.
 * @param res The response object.
 * @returns An array of wizard objects.
 */
export const getAllWizards = async (req: Request, res: Response) => {
  try {
    const result = await Wizard.find()
    if (result && result.length !== 0) {
      return res.status(200).send({
        msg: 'Wizards found!',
        payload: result,
      })
    }
    res.status(404).send({ msg: 'Wizards not found' })
  } catch (error) {
    res.status(500).send(error)
  }
}

/**
 * Retrieves a wizard by ID.
 * @param req The request object.
 * @param res The response object.
 * @returns The wizard object.
 */
export const getWizardById = async (req: Request, res: Response) => {
  try {
    const wizardId = req.params.id
    if (!wizardId.match(/^[0-9a-fA-F]{24}$/))
      return res.status(400).send({ msg: 'Invalid wizard ID' })

    const result = await Wizard.findById(wizardId)
    if (result) {
      return res.status(200).send({
        msg: 'Wizard found!',
        payload: result,
      })
    }
    res.status(404).send({ msg: 'Wizard not found' })
  } catch (error) {
    res.status(500).send({ msg: 'Internal server error' })
  }
}

/**
 * Deletes a wizard by ID.
 * @param req The request object.
 * @param res The response object.
 * @returns A message indicating successful deletion.
 */
export const deleteWizard = async (req: Request, res: Response) => {
  try {
    const wizardId = req.params.id
    if (!wizardId.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).send({ msg: 'Invalid wizard ID' })
    }

    const result = await Wizard.findByIdAndDelete(wizardId)
    if (result) {
      return res.status(200).send({ msg: 'Wizard deleted' })
    }
    res.status(404).send({ msg: 'Wizard not found' })
  } catch (error) {
    res.status(500).send(error)
  }
}

/**
 * Updates a wizard by ID.
 * @param req The request object.
 * @param res The response object.
 * @returns The updated wizard object.
 */
export const updateWizard = async (req: Request, res: Response) => {
  try {
    const wizardId = req.params.id
    if (!wizardId.match(/^[0-9a-fA-F]{24}$/))
      return res.status(400).send({ msg: 'Invalid wizard ID' })

    const { name, stick, age } = req.body
    if (!name || !stick || !age)
      return res.status(400).send({ msg: 'Missing required fields' })

    const updatedData = { name, stick, age }
    const result = await Wizard.findByIdAndUpdate(wizardId, updatedData, {
      // Získá nově aktualizovanou hodnotu
      new: true,
    })
    if (result) {
      return res.status(201).send({
        msg: 'Wizard updated',
        payload: result,
      })
    }
    res.status(500).send({ msg: 'Wizard not found' })
  } catch (error) {
    res.status(500).send(error)
  }
}
