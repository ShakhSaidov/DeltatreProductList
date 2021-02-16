const { nanoid } = require('nanoid')

const products = [
    {
        name: "DIVA",
        description: "An advanced OTT player, synchronizing real-time data with rich interactivity.",
        quantity: 15,
        id: "w11H5lBZ2UPC5P6Hi9RzT"
    },
    {
        name: "AXIS",
        description: "A targeted UX management console and suite of multi-platform reference apps.",
        quantity: 100,
        id: "SY4pBCLf6ql4nl6E5m_E7"
    },
    {
        name: "FORGE",
        description: "The world's first sport-focused publishing platform.",
        quantity: 1,
        id: "JeC5pzjspJw2YZnV8ot1m"
    }
]

class ProductsList {
    constructor() {
        this.data = products
    }

    getProducts() {
        return this.data
    }

    getSize() {
        return this.data.length
    }

    find(id) {
        return this.data.find(product => product.id === id)
    }

    add(product) {
        this.data = this.data.concat(product)
    }

    remove(id) {
        this.data = this.data.filter(product => product.id !== id)
    }

    generateNewID() {
        return nanoid()
    }
}

module.exports = ProductsList