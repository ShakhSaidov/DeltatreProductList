import React from 'react'

const Product = ({ product, number, handleRemove }) => {
  return (
    <div>
      <li className="card text-center w-50 p-2 m-2">
        <div className="card-body">
          <h2 className="card-title">Product {number}</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <b>Name:</b> {product.name}
            </li>
            <li className="list-group-item">
              <b>Description:</b>
              <div className="descriptionBox">
                {product.description}
              </div>
            </li>
            <li className="list-group-item">
              <b>Qty. Available:</b> {product.quantity}
            </li>
          </ul>
        </div>
        <button className="btn btn-primary center w-30" value={product.id} onClick={(event) => handleRemove(event, product.id, number)}>Remove</button>
      </li>
    </div >
  )
}

export default Product