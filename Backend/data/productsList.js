const { nanoid } = require('nanoid')

class ProductsList {
    constructor(products) {
        this.data = products
    }

    getProducts() {
        return this.data
    }

    getSize() {
        return Object.keys(this.data).length
    }

    find(id) {
        return this.data[id]
    }

    add(product) {
        this.data[nanoid()] = product
        return this.data
    }

    remove(id) {
        delete this.data[id]
        return this.data
    }
}

module.exports = ProductsList