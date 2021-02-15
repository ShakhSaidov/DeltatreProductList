const Joi = require('joi')
const data = require('../../data/products')
const products = new data()

//Function to validate product content
const validateProduct = product => {
    //move outside function
    const schema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required(),
        quantity: Joi.number().min(0).required()
    })
        .options({ abortEarly: false })

    return schema.validate(product)
}

//Function to receive the products list
const getAllProducts = () => {
    return products.getProducts()
}

//Function to find a product that has the given ID
const findProductByID = id => {
    const product = products.find(id)
    return product
}

//Function to add a product to the products list
const addProduct = object => {
    const productToAdd = {
        name: object.name,
        description: object.description,
        quantity: object.quantity,
        id: products.generateNewID()
    }

    products.add(productToAdd)
    return productToAdd
}

//Function to delete a given product from the products list
const deleteProduct = id => {
    products.remove(id)
}

const productsService = {
    validateProduct,
    getAllProducts,
    findProductByID,
    addProduct,
    deleteProduct
}

module.exports = productsService