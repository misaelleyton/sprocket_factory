import { type Request, type Response } from 'express'
import FactoryModel from '../models/factory'

export const getFactories = async (_req: Request, res: Response) => {
  try {
    const factories = await FactoryModel.find()
    res.status(200).json(factories)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    } else {
      console.log('Unexpected error', error);
    }
  }
}

export const getFactoryById = async (req: Request, res: Response) => {
  try {
    const factory = await FactoryModel.findById(req.params.id)
    if (!factory) {
      return res.status(404).json({ error: 'Factory not found' })
    }
    res.status(200).json(factory)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    } else {
      console.log('Unexpected error', error);
    }
  }
}
