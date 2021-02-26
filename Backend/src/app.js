const express = require('express')
const cors = require('cors')
require('express-async-errors')
const productRouter = require('./routes/products')
const middleware = require('../utils/middleware')

const app = express()

/*
const setCache = (request, response, next) => {
// you only want to cache for GET requests
    if (request.method == 'GET') {
        console.log("reached get request, cache control is public now")
        response.set('Cache-Control', 'no-cache')
    } else {
        // for the other requests set strict no caching parameters

        console.log("reached non-get request, cache control is not allowed now")
        response.set('Cache-control', 'no-store')
    }

    // remember to call next() to pass on the request
    next()
}
app.use(setCache)
*/


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