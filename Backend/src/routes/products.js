const express = require('express')
const productsService = require('../services/productsService')

const router = express.Router()
let etag

//GET request for all products from product list
router.get('/', async (request, response) => {
    const newEtag = request.headers['if-none-match']
    console.log("Previous etag: ", etag)
    console.log("If-none-match: ", newEtag)

    if (newEtag !== undefined && newEtag === etag) {
        response.sendStatus(304)
        console.log("No Change. Sending 304 status: ", response.statusCode, response.statusMessage)
    } else {
        const products = await productsService.getProducts()
        console.log("Retrieved products, length is", Object.keys(products).length)
        response.json(products)
        console.log("Products sent back to frontend. Response status and message:", response.statusCode, response.statusMessage)
        etag = response.getHeader('Etag')
        console.log("New etag: ", etag)
        console.log("------------------------------")
        console.log("------------------------------")
        console.log("------------------------------")
    }
})

//GET request for a specific product
router.get('/:id', async (request, response) => {
    const product = await productsService.findProduct(request.params.id)
    if (product) response.json(product)

    else response.status(404).send({ error: "invalid id" })
})

//POST request to add a new product onto the product list
router.post('/', async (request, response) => {
    const { error } = await productsService.validateProduct(request.body)
    if (error) {
        response.status(422).send({
            error: error.details.map(detail => detail.message)
        })
    } else {
        const newProducts = await productsService.addProduct(request.body)
        response.json(newProducts)
    }
})

//DELETE request to remove a product form product list
router.delete('/:id', async (request, response) => {
    const success = await productsService.deleteProduct(request.params.id)
    if (success) response.sendStatus(204)

    else response.status(405).send({ error: "Can't perform method" })
})

module.exports = router