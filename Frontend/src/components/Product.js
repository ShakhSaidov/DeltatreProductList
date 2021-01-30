import React from 'react'
import './Product.css'

const Product = ({ product, number, handleRemove }) => {
  return (
    <div>
      <li className="container">
        <div className="box">
          <h2 className="center">Product {number}</h2>
          <ul>
            <li>
              <b>Name:</b> {product.name}
            </li>
            <li>
              <b>Description:</b>
              <div className="descriptionBox">
                {product.description}
              </div>
            </li>
            <li>
              <b>Qty. Available:</b> {product.quantity}
            </li>
          </ul>
        </div>
        <button value={product.id} onClick={(event) => handleRemove(event, product.id, number)}>Remove</button>
      </li>
    </div >
  )
}

export default Product