import { Router } from 'express'
import {
  getSprockets,
  getSprocketById,
  createSprocket,
  updateSprocket
} from '../controllers/sprocketController'

export const sprocketsRouter = Router()

sprocketsRouter.get('/', getSprockets)
sprocketsRouter.get('/:id', getSprocketById)
sprocketsRouter.post('/', createSprocket)
sprocketsRouter.put('/:id', updateSprocket)

