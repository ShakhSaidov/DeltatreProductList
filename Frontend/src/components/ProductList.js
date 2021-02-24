/* eslint-disable linebreak-style */
import React from "react"
import Product from "./Product"

const ProductList = ({ productKeys, products, handleRemove }) => {
    if (products && productKeys) {
        return (
            productKeys.map((id, index) =>
                <Product
                    key={id}
                    id={id}
                    product={products[index]}
                    number={index + 1}
                    handleRemove={handleRemove}
                />
            )
        )
    } else return null
}

export default ProductList