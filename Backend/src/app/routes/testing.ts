/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router, Request, Response } from 'express'
import Product from '../models/product'
import testHelper from '../utils/testHelper'

const router: Router = Router()

router.get('/', (_request: Request, response: Response) => {
    response.send("Testing Page")
})

router.post('/', async (_request: Request, response: Response) => {
    await Product.deleteMany({})
    await Product.insertMany(testHelper.testData)
    response.status(204).end()
})

export default router

