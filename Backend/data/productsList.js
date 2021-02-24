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
        return product
    }

    remove(id) {
        const sizeBefore = this.data.length
        delete this.data[id]

        if(this.data.length != sizeBefore) return true
        else return false
    }
}

module.exports = ProductsList