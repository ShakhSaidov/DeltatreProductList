import express from 'express'
import cors from 'cors'
import productRouter from './routes/products.js'
import middleware from '../utils/middleware.js'
import logger from '../utils/logger.js'
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
  logger.log(`Server is running on port ${PORT}`);
})