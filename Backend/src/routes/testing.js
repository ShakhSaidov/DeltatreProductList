const router = require('express').Router()
const Product = require('../models/product')
const testHelper = require('../../tests/testHelper')

router.post('/testReset', async (request, response) => {
    await Product.deleteMany({})
    await Product.insertMany(testHelper.testData)
    response.status(204).end()
})

module.exports = router

