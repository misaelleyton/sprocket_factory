import { Router } from 'express';
import { getFactories, getFactoryById } from '../controllers/factoryController';

export const factoriesRouter = Router();

// GET all factories
factoriesRouter.get('/', getFactories);

// GET a single factory by ID
factoriesRouter.get('/:id', getFactoryById);
