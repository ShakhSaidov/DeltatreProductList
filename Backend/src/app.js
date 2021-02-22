const express = require('express')
const cors = require('cors')
require('express-async-errors')                     //check if this works
const productRouter = require('./routes/products')
const middleware = require('../utils/middleware')

const app = express()

app.use(cors())
app.use(express.json())
app.use(middleware.consoleLogger)
app.use('/products', productRouter)
app.set('etag', 'strong')

//Homepage
app.get('/', (request, response) => {
    response.send("Deltatre Products List Assignment")
})

//error handler
app.use(middleware.errorHandler)

module.exports = app