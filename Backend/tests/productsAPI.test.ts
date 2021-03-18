/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import mongoose from 'mongoose'
import supertest from 'supertest'
import testHelper from '../utils/testHelper'
import app from '../src/app'
import Product from '../src/models/product'
import { IProduct } from '../utils/types'

let initialData: IProduct[]

describe('Testing the API', () => {
    beforeEach(async () => {
        initialData = testHelper.testData
        await Product.deleteMany({})
        await Product.insertMany(initialData)
    })

    //Testing the product list as a whole - GET
    describe('> Testing products list as a whole', () => {
        test('Products are returned in the proper format (json)', async () => {
            await supertest(app)
                .get('/products')
                .expect(200)
                .expect('Content-Type', /application\/json/)
        })

        test('All initial products are returned', async () => {
            const response = await supertest(app).get('/products')
            expect(response.body).toHaveLength(initialData.length)
        })

        test('The first product "Test Product 1" is included in the returned products', () => {
            const productNames = initialData.map(product => product.name)
            expect(productNames).toContain('Test Product 1')
        })
    })

    //Testing a specific product - GET
    describe('> Testing a specific product', () => {
        test('Success when given a valid id', async () => {
            const products = await testHelper.getProducts()
            const firstProduct = products[0]
            const returnedProduct = await supertest(app)
                .get(`/products/${firstProduct.id}`)
                .expect(200)
                .expect('Content-Type', /application\/json/)

            expect(returnedProduct.body).toEqual(firstProduct)
        })

        test('Failure when given a non-existing id', async () => {
            const nonExistingId = await testHelper.generateNonExistingId()

            await supertest(app)
                .get(`/products/${nonExistingId}`)
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

            await supertest(app)
                .post('/products')
                .send(newProduct)
                .expect(200)
                .expect('Content-Type', /application\/json/)

            const productsAfter = await testHelper.getProducts()
            expect(productsAfter).toHaveLength(initialData.length + 1)

            const productNames = productsAfter.map(product => product.name)
            expect(productNames).toContain('new test product')
        })

        describe('> Failure when given an invalid data', () => {
            test('Invalid when no name given', async () => {
                const newProduct = {
                    name: "",
                    description: "generic description",
                    quantity: 100
                }

                await supertest(app)
                    .post('/products')
                    .send(newProduct)
                    .expect(422)

                const productsAfter = await testHelper.getProducts()
                expect(productsAfter).toHaveLength(initialData.length)
            })

            test('Invalid when no description given', async () => {
                const newProduct = {
                    name: "new testing product",
                    description: "",
                    quantity: 100
                }

                await supertest(app)
                    .post('/products')
                    .send(newProduct)
                    .expect(422)

                const productsAfter = await testHelper.getProducts()
                expect(productsAfter).toHaveLength(initialData.length)
            })

            describe('> Quantity', () => {
                test('Invalid when no quantity', async () => {
                    const newProduct = {
                        name: "new testing product",
                        description: "generic description",
                        quantity: undefined
                    }

                    await supertest(app)
                        .post('/products')
                        .send(newProduct)
                        .expect(422)

                    const productsAfter = await testHelper.getProducts()
                    expect(productsAfter).toHaveLength(initialData.length)
                })

                test('Invalid when quantity is negative', async () => {
                    const newProduct = {
                        name: "new testing product",
                        description: "generic description",
                        quantity: -55
                    }

                    await supertest(app)
                        .post('/products')
                        .send(newProduct)
                        .expect(422)

                    const productsAfter = await testHelper.getProducts()
                    expect(productsAfter).toHaveLength(initialData.length)
                })
            })
        })
    })

    //Testing the deletion of a product - DELETE
    describe('> Deleting a product', () => {
        test('Success when deleting an existing product', async () => {
            const products = await testHelper.getProducts()
            const productToDelete = products[0]

            await supertest(app)
                .delete(`/products/${productToDelete.id}`)
                .expect(204)

            const productsAfter = await testHelper.getProducts()
            expect(productsAfter).toHaveLength(initialData.length - 1)

            const productNames = productsAfter.map(product => product.name)
            expect(productNames).not.toContain(productToDelete.name)
        })

        test('Failure when deleting a non existing product', async () => {
            const invalidId = -1
            await supertest(app)
                .delete(`/products/${invalidId}`)
                .expect(405)

            const productsAfter = await testHelper.getProducts()
            expect(productsAfter).toHaveLength(initialData.length)
        })
    })
})

afterAll(async () => {
    await mongoose.connection.close()
})