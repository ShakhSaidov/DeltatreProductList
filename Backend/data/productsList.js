const { nanoid } = require('nanoid')

class ProductsList {
    constructor(products) {
        this.data = products
    }

    //Function that retrieves products list
    getProducts() {
        return this.data
    }

    //Function that gets the size of products list
    getSize() {
        return Object.keys(this.data).length
    }

    //Function that finds a specific product based on id (key)
    find(id) {
        return this.data[id]
    }

    //Function that adds a new product onto the list
    add(product) {
        const check = Object.values(this.data).find(p => p.name === product.name)
        if (check === undefined) this.data[nanoid()] = product
        return this.data
    }

    //Function that removes a specific product from the list, given the id (key)
    remove(id) {
        const sizeBefore = this.getSize()
        delete this.data[id]
        const sizeAfter = this.getSize()
        if (sizeBefore !== sizeAfter) return true
        else return false
    }
}

module.exports = ProductsList