const productsService = require('../src/services/productsService')

let products

describe('Testing the bridge between the API and database', () => {
    beforeEach(async () => {
        products = productsService.getAllProducts()
    })

    test('Retrieval of products works well', () => {
        const testProduct = productsService.getAllProducts()

        expect(testProduct).not.toBe(undefined)
        expect(testProduct.length).toBe(products.length)
    })

    describe('> Searching for a specific product', () => {
        test('Given a valid id', () => {
            const firstProduct = products[0]
            const receivedProduct = productsService.findProductByID(firstProduct.id)

            expect(receivedProduct).not.toBe(undefined)
            expect(receivedProduct).toMatchObject(firstProduct)
        })

        test('Given an invalid id', () => {
            const receivedProduct = productsService.findProductByID(-1)
            expect(receivedProduct).toBe(undefined)
        })
    })

    describe('> Validation works properly', () => {
        test('Valid product', () => {
            const testProduct = {
                name: "Test product",
                description: "Product for test",
                quantity: 10
            }

            const response = productsService.validateProduct(testProduct)
            expect(response.error).toBe(undefined)
        })

        test('Product without name', () => {
            const testProduct = {
                name: "",
                description: "Product for test",
                quantity: 10
            }

            const response = productsService.validateProduct(testProduct)
            expect(response.error).not.toBe(undefined)
        })

        test('Product without description', () => {
            const testProduct = {
                name: "Test Product",
                description: "",
                quantity: 10
            }

            const response = productsService.validateProduct(testProduct)
            expect(response.error).not.toBe(undefined)
        })

        describe('> Invalid quantity', () => {
            test('Product without quantity', () => {
                const testProduct = {
                    name: "Test Product",
                    description: "Product for test",
                    quantity: ""
                }

                const response = productsService.validateProduct(testProduct)
                expect(response.error).not.toBe(undefined)
            })

            test('Product with negative quantity', () => {
                const testProduct = {
                    name: "Test Product",
                    description: "Product for test",
                    quantity: -10
                }

                const response = productsService.validateProduct(testProduct)
                expect(response.error).not.toBe(undefined)
            })
        })
    })

    test('Adding product to the list', () => {
        const newProduct = {
            name: "Test product",
            description: "Product for test",
            quantity: 10
        }

        const sizeBefore = products.length
        productsService.addProduct(newProduct)
        products = productsService.getAllProducts()

        expect(products.length).toBe(sizeBefore + 1)
        const productNames = products.map(product => product.name)
        expect(productNames).toContain("Test product")
    })

    describe('> Deleting a specific product', () => {
        test('Given a valid id', () => {
            const firstProduct = products[0]
            const sizeBefore = products.length
            productsService.deleteProduct(firstProduct.id)
            products = productsService.getAllProducts()

            expect(products.length).toBe(sizeBefore - 1)
            const productNames = products.map(product => product.name)
            expect(productNames).not.toContain(firstProduct.name)
        })

        test('Given an invalid id', () => {
            const sizeBefore = products.length
            productsService.deleteProduct(-1)
            products = productsService.getAllProducts()
            expect(products.length).toBe(sizeBefore)
        })
    })
})