const Joi = require('joi')
const ProductsList = require('../../data/productsList')
const data = require('../../data/productsData')
const products = new ProductsList(data)

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

//get rid of () =>

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
//try spread syntax, make it one-liner
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
//make it return a bool?
const deleteProduct = id => {
    products.remove(id)
}

module.exports = {
    validateProduct,
    getAllProducts,
    findProductByID,
    addProduct,
    deleteProduct
}