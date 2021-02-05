import Joi from 'joi'
import { nanoid } from 'nanoid'
import data from '../../data/products.js'

//Function to validate product content
const validateProduct = product => {
  const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    quantity: Joi.number().min(0).required()
  })
  .options({abortEarly: false})

  return schema.validate(product)
}

//Function to find a product that has the given ID
const findProductByID = id => {
  const product = data.find(id)
  return product
}

//Function to add a product to the products list
const addProduct = object => {
  const productToAdd = {
    name: object.name,
    description: object.description,
    quantity: object.quantity,
    id: nanoid()
  }

  data.add(productToAdd)
  return productToAdd
}

//Function to delete a given product from the products list
const deleteProduct = id => {
  data.remove(id)
}

export default {
  validateProduct,
  findProductByID,
  addProduct,
  deleteProduct
}