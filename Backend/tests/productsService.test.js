const productsService = require('../src/services/productsService')

let products, productKeys

describe('Testing the bridge between the API and database', () => {
    beforeEach(async () => {
        products = await Object.values(productsService.getProducts())
        productKeys = await Object.keys(productsService.getProducts())
    })

    test('Retrieval of products works well', () => {
        const testProduct = productsService.getProducts()

        expect(testProduct).not.toBe(undefined)
        expect(Object.keys(testProduct).length).toBe(productKeys.length)
    })

    describe('> Searching for a specific product', () => {
        test('Given a valid id', () => {
            const firstProduct = {
                name: "DIVA",
                description: "An advanced OTT player, synchronizing real-time data with rich interactivity.",
                quantity: 15,
            }

            const firstKey = productKeys[0]
            const receivedProduct = productsService.findProduct(firstKey)

            expect(receivedProduct).not.toBe(undefined)
            expect(receivedProduct).toMatchObject(firstProduct)
        })

        test('Given an invalid id', () => {
            const receivedProduct = productsService.findProduct(-1)

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
        products = Object.values(productsService.getProducts())

        expect(products.length).toBe(sizeBefore + 1)
        const productNames = products.map(product => product.name)
        expect(productNames).toContain("Test product")
    })

    describe('> Deleting a specific product', () => {
        test('Given a valid id', () => {
            const firstProduct = productKeys[0]
            const sizeBefore = products.length
            productsService.deleteProduct(firstProduct)
            products = Object.values(productsService.getProducts())

            expect(products.length).toBe(sizeBefore - 1)
            const productNames = products.map(product => product.name)
            expect(productNames).not.toContain(firstProduct.name)
        })

        test('Given an invalid id', () => {
            const sizeBefore = productKeys.length
            productsService.deleteProduct(-1)
            products = Object.values(productsService.getProducts())

            expect(products.length).toBe(sizeBefore)
        })
    })
})