import express from 'express'
import { products } from '../../data/products.js'
import productsService from "../services/productsService.js"
const router = express.Router()

//GET request for all products from product list
router.get('/', (request, response) => {
  response.json(products)
})

//GET request for a specific product
router.get('/:id', (request, response) => {
  try {
    const product = productsService.findProductByID(request.params.id)
    if (product) {
      response.json(product)
    } else {
      response.status(404).end()
    }
  } catch (e) {
    response.status(400).json(e.message)
  }
})

//POST request to add a new product onto the product list
router.post('/', (request, response) => {
  try {
    const { error } = productsService.validateProduct(request.body)
    if (error) {
      console.log("Error from Joi: ", error);
      return response.status(400).json({
        error: error.details.map(detail => detail.message)
      })
    } else {
      const newProduct = productsService.addProduct(request.body)
      response.json(newProduct)
    }
  } catch (e) {
    console.log("Error from catch: ", e);
    response.status(400).json(e.message)
  }
})

//DELETE request to remove a product form product list
router.delete('/:id', (request, response) => {
  try {
    productsService.deleteProduct(request.params.id)
    response.status(204).end()
  } catch (e) {
    response.status(400).json(e.message)
  }
})

export default router