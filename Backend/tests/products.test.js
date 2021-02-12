const supertest = require('supertest')
const testData = require('./testData')
const app = require('../src/app')
const testAPI = supertest(app)

let initialDataSize

describe('Testing Backend', () => {
    beforeEach(async () => {
        initialDataSize = testData.getProducts().length
    })

    //Testing the product list as a whole - GET
    describe('> Testing products list as a whole', () => {
        test('Products are returned in the proper format (json)', async () => {
            await testAPI
                .get('/products')
                .expect(200)
                .expect('Content-Type', /application\/json/)
        })

        test('All initial products are returned', async () => {
            const response = await testAPI.get('/products')
            expect(response.body.length).toBe(initialDataSize)
        })

        test('FORGE is included in the returned products', async () => {
            const response = await testAPI.get('/products')
            const productNames = response.body.map(product => product.name)
            expect(productNames).toContain('FORGE')
        })
    })

    //Testing a specific product - GET
    describe('> Testing a specific product', () => {
        test('Success when given a valid id', async () => {
            const products = await testData.getProducts()
            const firstProduct = products[0]
            const returnedProduct = await testAPI
                .get(`/products/${firstProduct.id}`)
                .expect(200)
                .expect('Content-Type', /application\/json/)

            expect(returnedProduct.body).toEqual(firstProduct)
        })

        test('Failure when given an invalid id', async () => {
            const invalidID = await testData.generateNewID()
            await testAPI
                .get(`/products/${invalidID}`)
                .expect(400)
        })
    })

    //Testing the addition of new products - POST
    describe('> Adding a new product', () => {
        test('Success when given valid data', async () => {
            const newProduct = {
                name: "new test product",
                description: "generic description",
                quantity: 100
            }

            await testAPI
                .post('/products')
                .send(newProduct)
                .expect(200)
                .expect('Content-Type', /application\/json/)

            const productsAfterAddition = await testData.getProducts()
            expect(productsAfterAddition.length).toBe(initialDataSize + 1)

            const productNames = productsAfterAddition.map(product => product.name)
            expect(productNames).toContain('new test product')
        })

        describe('> Failure when given an invalid data', () => {
            test('Invalid when no name given', async () => {
                const newProduct = {
                    name: "",
                    description: "generic description",
                    quantity: 100
                }

                await testAPI
                    .post('/products')
                    .send(newProduct)
                    .expect(400)

                const productsAfterAddition = await testData.getProducts()
                expect(productsAfterAddition.length).toBe(initialDataSize)
            })

            test('Invalid when no description given', async () => {
                const newProduct = {
                    name: "new testing product",
                    description: "",
                    quantity: 100
                }

                await testAPI
                    .post('/products')
                    .send(newProduct)
                    .expect(400)

                const productsAfterAddition = await testData.getProducts()
                expect(productsAfterAddition.length).toBe(initialDataSize)
            })

            describe('> Quantity', () => {
                test('Invalid when no quantity', async () => {
                    const newProduct = {
                        name: "new testing product",
                        description: "generic description",
                        quantity: ''
                    }

                    await testAPI
                        .post('/products')
                        .send(newProduct)
                        .expect(400)

                    const productsAfterAddition = await testData.getProducts()
                    expect(productsAfterAddition.length).toBe(initialDataSize)
                })

                test('Invalid when quantity is negative', async () => {
                    const newProduct = {
                        name: "new testing product",
                        description: "generic description",
                        quantity: -55
                    }

                    await testAPI
                        .post('/products')
                        .send(newProduct)
                        .expect(400)

                    const productsAfterAddition = await testData.getProducts()
                    expect(productsAfterAddition.length).toBe(initialDataSize)
                })
            })
        })
    })

    describe('> Deleting a product', () => {
        test('Success when deleting an existing product', async () => {
            const products = await testData.getProducts()
            const productToDelete = products[0]

            await testAPI
                .delete(`/products/${productToDelete.id}`)
                .expect(204)

            const productsAfterDeletion = await testData.getProducts()
            expect(productsAfterDeletion.length).toBe(initialDataSize - 1)

            const productNames = productsAfterDeletion.map(product => product.name)
            expect(productNames).not.toContain(productToDelete.name)
        })
    })
})