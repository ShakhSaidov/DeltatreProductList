/* eslint-disable @typescript-eslint/no-misused-promises */
import * as dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import Product from '../models/product'
import { Router, Request, Response } from 'express'
import { IProduct } from '../../utils/types'
import validateObject from '../../utils/validator'

const router: Router = Router()
let etag: string | number | string[] | undefined

//HEAD request for the product list
router.head('/', (request: Request, response: Response) => {
    const receivedEtag = request.headers['if-none-match']
    //console.log("Previous etag: ", etag)
    //console.log("If-none-match: ", receivedEtag)
    if (receivedEtag !== undefined && receivedEtag === etag) {
        response.set('Etag', receivedEtag)
        response.sendStatus(304)
        //console.log("No Change. Sending 304 status: ", response.statusCode, response.statusMessage)
    } else {
        response.sendStatus(200)
    }
})

//GET request for all products from product list
router.get('/', async (_request: Request, response: Response) => {
    const products = await Product.find({}).then(products => products)
    //console.log("Retrieved products, length is", Object.keys(products).length)
    response.json(products.map(product => product.toJSON()))
    //console.log("Products sent back to frontend. Response status and message:", response.statusCode, response.statusMessage)
    etag = response.getHeader('Etag')
    //console.log("New etag: ", etag)
    //console.log("------------------------------")
    //console.log("------------------------------")
    //console.log("------------------------------")
})

//GET request for a specific product
router.get('/:id', async (request, response) => {
    const id = request.params.id
    if (mongoose.isValidObjectId(id)) {
        const product = await Product.findById(request.params.id)
        if (product) response.json(product.toJSON())
        else response.status(404).send({ error: "invalid id" })
    }

    else response.status(404).send({ error: "invalid id" })
})

//POST request to add a new product onto the product list
router.post('/', async (_request: Request, response: Response) => {
    const object = _request.body as IProduct
    if (!validateObject(object)) {
        response.status(422).send({ error: "missing product information" })
    } else {
        const check = await Product.exists({ name: object.name })
        if (!check) {
            const newProduct = new Product({...object})
            await newProduct.save()
        }

        const newProducts = await Product.find({}).then(products => products)
        response.json(newProducts.map(product => product.toJSON()))
    }
})

//DELETE request to remove a product form product list
router.delete('/:id', async (request: Request, response: Response) => {
    const id = request.params.id
    if (mongoose.isValidObjectId(id)) {
        await Product.findByIdAndRemove(id)
        response.sendStatus(204)
    }

    else response.status(405).send({ error: "Can't perform deletion: invalid id" })
})

export default router