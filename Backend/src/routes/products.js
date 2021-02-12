const express = require('express')
const productsService = require('../services/productsService')

const router = express.Router()

//GET request for all products from product list
router.get('/', async (request, response) => {
    const products = await productsService.getAllProducts()
    response.json(products)
})

//GET request for a specific product
router.get('/:id', async (request, response) => {
    const product = await productsService.findProductByID(request.params.id)
    if (product) {
        return response.json(product)
    } else {
        return response.status(400).send({ error: "invalid id" })

    }
})

//POST request to add a new product onto the product list
router.post('/', async (request, response) => {
    const { error } = await productsService.validateProduct(request.body)
    if (error) {
        return response.status(400).json({
            error: error.details.map(detail => detail.message)
        })
    } else {
        const newProduct = productsService.addProduct(request.body)
        response.json(newProduct)
    }
})

//DELETE request to remove a product form product list
router.delete('/:id', async (request, response) => {
    await productsService.deleteProduct(request.params.id)
    response.status(204).end()

})

module.exports = router