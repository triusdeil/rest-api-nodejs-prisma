import { Router } from "express";
import { getAllCategories } from "../controllers/categories.js";

export const categoriesRouter = Router()

categoriesRouter
    .get('/', getAllCategories)
    .get(':/id')
    .post('/')
    .put('/:id')
    .delete('/:id')