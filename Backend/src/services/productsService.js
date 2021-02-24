const Joi = require('joi')
const ProductsList = require('../../data/productsList')
const data = require('../../data/productsData')
const products = new ProductsList(data)

//Validation schema defined
const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    quantity: Joi.number().min(0).required()
})  .options({ abortEarly: false })

//Function to validate product content
const validateProduct = product => schema.validate(product)

//Function to receive the products list
const getProducts = () => products.getProducts()

//Function to find a product that has the given ID
const findProduct = id => products.find(id)

//Function to add a product to the products list
const addProduct = object => products.add(object)

//Function to delete a given product from the products list
const deleteProduct = id => products.remove(id)

//Function to grab the product list size
const getProductSize = () => products.getSize()

module.exports = {
    validateProduct,
    getProducts,
    findProduct,
    addProduct,
    deleteProduct,
    getProductSize
}