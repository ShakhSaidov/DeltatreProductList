import express from 'express'
import productRouter from './routes/products.js'
import cors from 'cors'
const app = express()

app.use(express.json())
app.use(cors())
app.use('/products', productRouter)

//Homepage
app.get('/', (request, response) => {
  response.send("Deltatre Products List Assignment")
})

//Server
const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})