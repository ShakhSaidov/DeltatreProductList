const express = require('express')
const cors = require('cors')
const productRouter = require('./routes/products')
const middleware = require('../utils/middleware')
const logger = require('../utils/logger')

const app = express()


app.use(cors())
app.use(express.json())
app.use(middleware.consoleLogger)
app.use('/products', productRouter)

//Homepage
app.get('/', (request, response) => {
    response.send("Deltatre Products List Assignment")
})

//error handler
app.use(middleware.errorHandler)

//Server
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    logger.log(`Server is running on port ${PORT}`)
})