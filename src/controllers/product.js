import { prismaConnect } from "../service/connect.js"

export const getAllProducts = async (req, res) => {
    const response = await prismaConnect.product.findMany()
    res.json(response)
}

export const getProductById = async (req, res) => {
    const response = await prismaConnect.product.findFirst({ where: { id: +req.params.id }, include: {category: true} })
    if (!response)
        return res.status(404).json({ error: "Product not found" })
    return res.json(response)
}

export const createProduct = async (req, res) => {
    const newProduct = await prismaConnect.product.create({ data: req.body })
    res.json(newProduct)

}

export const deleteProduct = async (req, res) => {
    try {
        const response = await prismaConnect.product.delete({
            where: {
                id: +req.params.id,
            },
        });
        return res.json(response)
    } catch (error) {
        return res.status(404).json({ error: "Product not found" })
    }
}

export const updateProduct = (req, res) => {
    try {
        productUpdate = prismaConnect.product.update({
            where:{
                id: +req.params.id
            },
            data: req.body
        })
        return res.json(productUpdate)
    } catch (error) {
        return res.status(404).json({ error: "Product not found" })  
    };
}