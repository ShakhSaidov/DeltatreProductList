const ProductsList = require('./productsList')
const data = require('./productsData')
const testData = new ProductsList(data)

let products, productKeys

describe('Products List data class functions work properly', () => {
    beforeEach(async () => {
        products = Object.values(testData.getProducts())
        productKeys = Object.keys(testData.getProducts())
    })

    test('Products getter method works & Checking its size', () => {
        const size = testData.getSize()
        expect(products).not.toBe(null || undefined)
        expect(products.length).toBe(size)
    })

    describe('> Searching for a specific product', () => {
        test('Given a valid id', () => {
            const firstProduct = {
                name: "Telequiet",
                description: "Irure aute nisi dolor ut fugiat irure duis.",
                quantity: 832
            }

            const receivedProduct = testData.find(productKeys[0])
            expect(receivedProduct).not.toBe(undefined)
            expect(receivedProduct).toMatchObject(firstProduct)
        })

        test('Given an invalid id', () => {
            const receivedProduct = testData.find(-1)
            expect(receivedProduct).toBe(undefined)
        })
    })

    test('Adding a valid product to the list', () => {
        const newProduct = {
            name: "Test product",
            description: "Product for test",
            quantity: 10
        }


        testData.add(newProduct)
        expect(testData.getSize()).toBe(products.length + 1)
        const productNames = Object.values(testData.getProducts()).map(product => product.name)
        expect(productNames).toContain("Test product")
    })

    describe('> Deleting a specific product', () => {
        test('Given a valid id', () => {
            const firstProduct = productKeys[0]
            testData.remove(firstProduct)

            expect(testData.getSize()).toBe(products.length - 1)
            const productNames = products.map(product => product.name)
            expect(productNames).not.toContain(firstProduct.name)
        })

        test('Given an invalid id', () => {
            testData.remove(-1)
            expect(testData.getSize()).toBe(products.length)
        })
    })
})