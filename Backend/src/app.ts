/* eslint-disable @typescript-eslint/no-unsafe-call */
import express from 'express'
import cors from 'cors'
require('express-async-errors')

import connectDB from '../utils/database'
import productRouter from './routes/products'
import middleware from '../utils/middleware'
import testRouter from './routes/testing'

const app = express()

void connectDB()

app.use(cors())
app.use(express.json())
app.use(middleware.consoleLogger)
app.use('/products', productRouter)

if(process.env.NODE_ENV === 'test'){
    app.use('/testing', testRouter)
}

app.set('etag', 'strong')

//Homepage
app.get('/', (_request, response) => {
    response.send("Deltatre Products List Assignment")
})

//Error handler
app.use(middleware.errorHandler)

export default app