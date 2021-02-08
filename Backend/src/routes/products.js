import express from 'express'
import productsService from "../services/productsService.js"
import logger from "../../utils/logger.js"
const router = express.Router()

//GET request for all products from product list
router.get('/', (request, response) => {
  const products = productsService.getAllProducts()
  response.json(products)
})

//GET request for a specific product
router.get('/:id', (request, response) => {
  const product = productsService.findProductByID(request.params.id)
  if (product) {
    return response.json(product)
  } else {
    return response.status(400).send({ error: "invalid id" })
  }
})

//POST request to add a new product onto the product list
router.post('/', (request, response) => {
  try {
    const { error } = productsService.validateProduct(request.body)
    if (error) {
      logger.log("Error from Joi: ", error);
      return response.status(400).json({
        error: error.details.map(detail => detail.message)
      })
    } else {
      const newProduct = productsService.addProduct(request.body)
      response.json(newProduct)
    }
  } catch (e) {
    logger.log("Error from catch: ", e);
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