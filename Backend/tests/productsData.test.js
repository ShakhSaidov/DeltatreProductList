const data = require('../data/products')
const testData = new data()

let products

describe('Products List data class functions work properly', () => {
    beforeEach(async () => {
        products = await testData.getProducts()
    })

    test('Products getter method works & Checking its size', () => {
        const size = testData.getSize()

        expect(products).not.toBe(null || undefined)
        expect(products.length).toBe(size)
    })

    describe('> Searching for a specific product', () => {
        test('Given a valid id', () => {
            const firstProduct = products[0]
            const receivedProduct = testData.find(firstProduct.id)

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

        const sizeBefore = products.length
        testData.add(newProduct)
        products = testData.getProducts()

        expect(products.length).toBe(sizeBefore + 1)
        const productNames = products.map(product => product.name)
        expect(productNames).toContain("Test product")
    })

    describe('> Deleting a specific product', () => {
        test('Given a valid id', () => {
            const firstProduct = products[0]
            const sizeBefore = products.length
            testData.remove(firstProduct.id)
            products = testData.getProducts()

            expect(products.length).toBe(sizeBefore - 1)
            const productNames = products.map(product => product.name)
            expect(productNames).not.toContain(firstProduct.name)
        })

        test('Given an invalid id', () => {
            const sizeBefore = products.length
            testData.remove(-1)
            products = testData.getProducts()
            expect(products.length).toBe(sizeBefore)
        })
    })
})