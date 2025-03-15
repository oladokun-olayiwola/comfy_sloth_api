import Product from "../models/Product"
import { Request, Response } from "express"

export const getAllProducts = (req: Request, res: Response) => {
    const products = Product.find({})
    if(!products) {
        res.json({
            error: true,
            message: "No products found"
        })
    }
    res.status(200).json({
        error: false,
        result: products
    })
}

// export const createProduct = (req: Request, res: Response) => {
//     const { name, price, image, company, description, category, colrs, shipping } = req.body
    
// }