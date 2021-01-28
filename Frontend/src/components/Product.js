import React from 'react'
import './Product.css'

const Product = ({ product, number }) => {
  return(
    <div>
      <li className="container">
        <div className="box">
          <h2 className="center">Product {number}</h2>
          <ul>
            <li><b>Name:</b> {product.name}</li>
            <li><b>Description:</b> {product.description}</li>
            <li><b>Quantity Available:</b> {product.quantity}</li>
          </ul>
        </div>
      </li>
    </div>
  )
}

export default Product