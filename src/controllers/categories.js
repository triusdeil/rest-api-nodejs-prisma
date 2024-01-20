import { prismaConnect } from "../service/connect.js";

export const getAllCategories = async (req, res) => {
    const categories = await prismaConnect.category.findMany();
    res.json(categories)
}

export const getCategoryById = async () => {

}

export const createCategory = () => {

}

export const updateCategory = () => {

}

export const deleteCategory = () => {

}