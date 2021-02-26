/* eslint-disable linebreak-style */
import { Container, Grid } from "@material-ui/core"
import React from "react"
import Product from "./Product"
import productStyles from "./ProductStyles"

const ProductList = ({ productKeys, products, handleRemove }) => {
    const styles = productStyles()

    if (products && productKeys) {
        return (
            <Container className={styles.cardGrid} maxWidth="lg">
                <Grid container spacing={5}>
                    {productKeys.map((id, index) => {
                        return (
                            <Grid item key={id} xs={12} sm={6} md={4}>
                                <Product
                                    key={id}
                                    id={id}
                                    product={products[index]}
                                    handleRemove={handleRemove}
                                />
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        )
    } else return null
}

export default ProductList