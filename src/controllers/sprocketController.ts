import { type Request, type Response } from 'express'
import SprocketModel from '../models/sprocket'

export const getSprockets = async (_req: Request, res: Response) => {
  try {
    const sprockets = await SprocketModel.find()
    res.status(200).json(sprockets)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    } else {
      console.log('Unexpected error', error);
    }
  }
}

export const getSprocketById = async (req: Request, res: Response) => {
  try {
    const sprocket = await SprocketModel.findById(req.params.id)
    if (!sprocket) {
      return res.status(404).json({ error: 'Sprocket not found' })
    }
    res.status(200).json(sprocket)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    } else {
      console.log('Unexpected error', error);
    }
  }
}

export const createSprocket = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const sprocket = new SprocketModel(req.body)
    const savedSprocket = await sprocket.save()
    res.status(201).json(savedSprocket)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    } else {
      console.log('Unexpected error', error);
    }
  }
}

export const updateSprocket = async (req: Request, res: Response) => {
  try {
    const sprocket = await SprocketModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    if (!sprocket) {
      return res.status(404).json({ error: 'Sprocket not found' })
    }
    res.status(200).json(sprocket)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    } else {
      console.log('Unexpected error', error);
    }
  }
}
