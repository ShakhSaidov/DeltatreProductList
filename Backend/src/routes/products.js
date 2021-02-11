const express = require('express')
const productsService = require('../services/productsService')

const router = express.Router()

//GET request for all products from product list
router.get('/', (request, response, next) => {
    try {
        const products = productsService.getAllProducts()
        response.json(products)
    } catch (error) {
        next(error)
    }
})

//GET request for a specific product
router.get('/:id', (request, response, next) => {
    try {
        const product = productsService.findProductByID(request.params.id)
        if (product) {
            return response.json(product)
        } else {
            return response.status(400).send({ error: "invalid id" })
        }
    } catch (error) {
        next(error)
    }
})

//POST request to add a new product onto the product list
router.post('/', (request, response, next) => {
    try {
        const { error } = productsService.validateProduct(request.body)
        if (error) {
            return response.status(400).json({
                error: error.details.map(detail => detail.message)
            })
        } else {
            const newProduct = productsService.addProduct(request.body)
            response.json(newProduct)
        }
    } catch (error) {
        next(error)
    }
})

//DELETE request to remove a product form product list
router.delete('/:id', (request, response, next) => {
    try {
        productsService.deleteProduct(request.params.id)
        response.status(204).end()
    } catch (error) {
        next(error)
    }
})

module.exports = router