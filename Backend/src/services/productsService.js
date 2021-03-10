/*
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
*/

require('dotenv').config()
const Product = require('../models/product')

//Function to receive the products list
const getProducts = () => Product.find({}).then(products => products)

//Function to find a product that has the given ID
const findProduct = id => Product.findById(id).then(product => product)

//Function to add a product to the products list
const addProduct = async object => {
    const check = await Product.exists({ name: object.name })
    if (!check) {
        const newProduct = new Product({
            name: object.name,
            description: object.description,
            quantity: object.quantity
        })
        newProduct.save().then(getProducts())
    } else return getProducts()
}

//Function to delete a given product from the products list
const deleteProduct = id => Product.findByIdAndDelete(id).then(product => product)

module.exports = {
    //validateProduct,
    getProducts,
    findProduct,
    addProduct,
    deleteProduct
}