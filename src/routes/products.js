import { Router } from "express";
import { getProductById, getAllProducts, createProduct, deleteProduct, updateProduct } from "../controllers/product.js";

export const productRouter = Router();

productRouter
    .get('/', getAllProducts)
    .post('/', createProduct)
    .get('/:id', getProductById)
    .put('/:id', updateProduct)
    .delete('/:id', deleteProduct)
    