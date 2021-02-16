const supertest = require('supertest')
const app = require('../src/app')
const testAPI = supertest(app)

let testData
let initialDataSize

describe('Testing the API', () => {
    beforeEach(async () => {
        const response = await testAPI.get('/products')
        testData = response.body
        initialDataSize = testData.length
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
            const firstProduct = testData[0]
            const returnedProduct = await testAPI
                .get(`/products/${firstProduct.id}`)
                .expect(200)
                .expect('Content-Type', /application\/json/)

            expect(returnedProduct.body).toEqual(firstProduct)
        })

        test('Failure when given an invalid id', async () => {
            const newProduct = {
                name: "new test product",
                description: "generic description",
                quantity: 100
            }

            const response = await testAPI.post('/products').send(newProduct)
            const invalidID = response.body.id
            await testAPI.delete(`/products/${invalidID}`)

            await testAPI
                .get(`/products/${invalidID}`)
                .expect(404)
        })
    })

    //Testing the addition of a new product - POST
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

            const response = await testAPI.get('/products')
            const productsAfterAddition = response.body
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
                    .expect(422)

                const response = await testAPI.get('/products')
                const productsAfterAddition = response.body
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
                    .expect(422)

                const response = await testAPI.get('/products')
                const productsAfterAddition = response.body
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
                        .expect(422)

                    const response = await testAPI.get('/products')
                    const productsAfterAddition = response.body
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
                        .expect(422)

                    const response = await testAPI.get('/products')
                    const productsAfterAddition = response.body
                    expect(productsAfterAddition.length).toBe(initialDataSize)
                })
            })
        })
    })

    //Testing the deletion of a product - DELETE
    describe('> Deleting a product', () => {
        test('Success when deleting an existing product', async () => {
            const productToDelete = testData[0]

            await testAPI
                .delete(`/products/${productToDelete.id}`)
                .expect(204)

            const response = await testAPI.get('/products')
            const productsAfterDeletion = response.body
            expect(productsAfterDeletion.length).toBe(initialDataSize - 1)

            const productNames = productsAfterDeletion.map(product => product.name)
            expect(productNames).not.toContain(productToDelete.name)
        })
    })
})