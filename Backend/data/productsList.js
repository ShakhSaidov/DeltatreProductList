const { nanoid } = require('nanoid')

class ProductsList {
    constructor(products) {
        this.data = products
    }

    getProducts() {
        return this.data
    }

    //getSize no need
    getSize() {
        return this.data.length
    }

    //findProduct, addproduct, etc...
    find(id) {
        return this.data.find(product => product.id === id)
    }

    //add nanoid inside here, remove below
    add(product) {
        this.data = this.data.push(product)
    }

    remove(id) {
        this.data = this.data.filter(product => product.id !== id)
    }

    generateNewID() {
        return nanoid()
    }
}

module.exports = ProductsList