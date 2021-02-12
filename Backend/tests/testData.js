const { nanoid } = require('nanoid')

let testProducts = require('../data/products').getProducts()

//Helper functions
const getProducts = () => testProducts

const find = id => {
    return testProducts.find(product => product.id === id)
}

const add = product => {
    testProducts = testProducts.concat(product)
}

const remove = id => {
    testProducts = testProducts.filter(product => product.id !== id)
}

const generateNewID = () => nanoid()

const testData = {
    getProducts,
    find,
    add,
    remove,
    generateNewID,
}

module.exports = testData