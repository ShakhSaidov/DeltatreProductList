import express from 'express'
import Joi from 'joi'

const router = express.Router()
let products = [
  {
    name: "DIVA",
    description: "An advanced OTT player, synchronizing real-time data with rich interactivity.",
    quantity: 15,
    id: 1
  },
  {
    name: "AXIS",
    description: "A targeted UX management console and suite of multi-platform reference apps.",
    quantity: 100,
    id: 2
  },
  {
    name: "FORGE",
    description: "The world's first sport-focused publishing platform.",
    quantity: 1,
    id: 3
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

//Function to validate product content
const validateProduct = product => {
  const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().min(5).required(),
    quantity: Joi.number().integer().min(0)
  })
  .options({abortEarly: false})

  return schema.validate(product)
}

//GET request for all products from product list
router.get('/', (request, response) => {
  response.json(products)
})

//GET request for a specific product
router.get('/:id', (request, response) => {
  const id = Number(request.params.id)
  const product = products.find(product => product.id === id)

  if (product) {
    response.json(product)
  } else {
    response.status(404).end()
  }
})

//POST request to add a new product onto the product list
router.post('/', (request, response) => {

  const { error } = validateProduct(request.body)
  if(error){
    console.log("Number of error messages: ", error.details.length);
    return response.status(400).json({
      error: error.details.map(detail => detail.message)
    })
  }

  const body = request.body
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
router.delete('/:id', (request, response) => {
  const id = Number(request.params.id)
  products = products.filter(product => product.id !== id)

  response.status(204).end()
})

export default router