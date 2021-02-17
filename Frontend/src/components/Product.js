import React from 'react'
import PropTypes from 'prop-types'

const ProductInfo = ({ info, value }) => {
    return (
        <li className="list-group-item">
            <b>{info}: </b>
            {
                info === "Description"
                    ? <div className="descriptionBox"> {value} </div>
                    : value
            }
        </li>
    )
}

const Product = ({ product, number, handleRemove }) => {
    return (
        <div className="card text-center w-50 p-1 m-5">
            <div className="card-body">
                <h2 className="card-title">Product {number}</h2>
                <ul className="center list-group-flush align-items-stretch">
                    <ProductInfo info="Name" value={product.name} />
                    <ProductInfo info="Description" value={product.description} />
                    <ProductInfo info="Qty. Available" value={product.quantity} />
                </ul>
            </div>
            <button className="btn btn-primary center w-30" value={product.id} onClick={(event) => handleRemove(event, product.id, number)}>Remove</button>
        </div>
    )
}

ProductInfo.propTypes = {
    info: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}

Product.propTypes = {
    product: PropTypes.object.isRequired,
    number: PropTypes.number.isRequired,
    handleRemove: PropTypes.func.isRequired
}

export default Product