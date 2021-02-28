const express = require('express')
const productsService = require('../services/productsService')

const router = express.Router()
//let etag, newEtag

//GET request for all products from product list
router.get('/', async (request, response) => {
    const products = await productsService.getProducts()
    response.json(products)

    /*
    newEtag = request.header('if-none-match')
    console.log("If-none-match: ", newEtag)
    if (newEtag !== undefined && newEtag === etag) return response.status(304)
    else {
        const products = await productsService.getProducts()
        response.set('Cache-Control', 'no-cache')
        response.json(products)
        etag = response.getHeader('Etag')
        console.log("Etag: ", etag)
    }
    */
})

//GET request for a specific product
router.get('/:id', async (request, response) => {
    const product = await productsService.findProduct(request.params.id)
    if (product) return response.json(product)

    return response.status(404).send({ error: "invalid id" })
})

//POST request to add a new product onto the product list
router.post('/', async (request, response) => {
    const { error } = await productsService.validateProduct(request.body)
    if (error) {
        return response.status(422).send({
            error: error.details.map(detail => detail.message)
        })
    }

    const newProducts = await productsService.addProduct(request.body)
    response.json(newProducts)
})

//DELETE request to remove a product form product list
router.delete('/:id', async (request, response) => {
    const sizeBefore = await productsService.getProductSize()
    const modifiedProducts = await productsService.deleteProduct(request.params.id)
    const sizeAfter = await productsService.getProductSize()

    if (sizeAfter !== sizeBefore) return response.status(204).json(modifiedProducts)
    else return response.status(405).send({ error: "Can't perform method" })

    /*
    const success = await productsService.deleteProduct(request.params.id)
    if (success) response.status(204).end()
    else response.status(405).send({ error: "Can't perform method" })
    */
})

module.exports = router