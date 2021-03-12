const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const variables = require('../utils/variables')

require('express-async-errors')
const productRouter = require('./routes/products')
const middleware = require('../utils/middleware')
const app = express()

const url = variables.MONGODB
console.log('connecting to', url)
mongoose.connect(url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })


app.use(cors())
app.use(express.json())
app.use(middleware.consoleLogger)
app.use('/products', productRouter)

if(process.env.NODE_ENV === 'test'){
    const testRouter = require ('./routes/testing')
    app.use('/testing', testRouter)
}

app.set('etag', 'strong')

//Homepage
app.get('/', (request, response) => {
    response.send("Deltatre Products List Assignment")
})

//Error handler
app.use(middleware.errorHandler)

module.exports = app