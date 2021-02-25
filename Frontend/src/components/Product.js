/* eslint-disable linebreak-style */
import React from "react"

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

const Product = ({ id, product, number, handleRemove }) => {
    if (product) {
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
                <button className="btn btn-primary center w-30" value={id} onClick={(event) => handleRemove(event, id)}>Remove</button>
            </div>
        )
    } else return null
}

export default Product