import { Router } from "express";
import { getAllCategories } from "../controllers/categories.js";

export const categoriesRouter = Router()

categoriesRouter.get('/', getAllCategories)

categoriesRouter.get(':/id')

categoriesRouter.post('/')

categoriesRouter.put('/:id')

categoriesRouter.delete('/:id')