const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

let products = [
  {
    name: "Testing",
    description: "Generic product name",
    quantity: 10,
    id: 1
  }
]

//Function to generate new ID
const getNewId = () => {
  if(products.length > 0){
    return Math.max(...(products.map(product => product.id))) + 1
  } else {
    return 1
  }
}

//GET request for all products from product list
app.get('/products', (request, response) => {
  response.json(products)
})

//GET request for a specific product
app.get('/products/:id', (request, response) => {
  const id = Number(request.params.id)
  const product = products.find(product => product.id === id)

  if (product) {
    response.json(product)
  } else {
    response.status(404).end()
  }
})

//POST request to add a new product onto the product list
app.post('/products', (request, response) => {
  const body = request.body
  if(!body.name || !body.description){
    return response.status(400).json({
      error: "name or description missing"
    })
  }

  const newProduct = {
    name: body.name,
    description: body.description,
    quantity: body.quantity || 0,
    id: getNewId()
  }

  products = products.concat(newProduct)
  response.json(newProduct)
})

//DELETE request to remove a product form product list
app.delete('/products/:id', (request, response) => {
  const id = Number(request.params.id)
  products = products.filter(product => product.id !== id)

  response.status(204).end()
})

//Server
const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})