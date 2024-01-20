import { prismaConnect } from "../service/connect.js"

export const getAllProducts = async (req, res) => {
    const response = await prismaConnect.product.findMany()
    res.json(response)
}

export const getProductById = async (req, res) => {
    const response = await prismaConnect.product.findFirst({where:{id: +req.params.id}})
    if(!response)
        return res.status(404).json({error: "Product not found"})
    return res.json(response)
}

export const createProduct = async (req, res) => {
    const newProduct = await prismaConnect.product.create({ data: req.body })
    res.json(newProduct)

}

export const deleteProduct = (req, res) => {

}

export const updateProduct = (req, res) => {

}