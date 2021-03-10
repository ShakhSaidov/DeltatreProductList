const Product = require('../src/models/product')

const testData = [
    {
        name: 'Test Product 1',
        description: 'Generic description for first test product',
        quantity: 17
    },
    {
        name: 'Test Product 2',
        description: 'Generic description for second test product',
        quantity: 68
    },
    {
        name: 'Test Product 3',
        description: 'Generic description for third test product',
        quantity: 44
    },
    {
        name: 'Test Product 4',
        description: 'Generic description for fourth test product',
        quantity: 97
    },
    {
        name: 'Test Product 5',
        description: 'Generic description for fifth test product',
        quantity: 34
    }
]

const generateNonExistingId = async () => {
    const product = new Product({
        name: 'Temporary Product',
        description: 'Generic description for temporary product',
        quantity: 77
    })
    await product.save()
    await product.remove()

    return product._id.toString()
}

const getProducts = async () => {
    const products = await Product.find({})
    return products.map(product => product.toJSON())
}

module.exports = {
    testData,
    getProducts,
    generateNonExistingId
}