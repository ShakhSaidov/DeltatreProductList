/* eslint-disable linebreak-style */
import { Container, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import React from "react"
import Product from "../Product/Product"

//Custom styling for the product list
const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(2),
    }
}))

//Component that renders the entire product list as a grid
const ProductList = ({ products, handleRemove }) => {
    const styles = useStyles()

    if (products) {
        return (
            <Container className={styles.cardGrid} maxWidth="lg">
                <Grid container spacing={5}>
                    {products.map(product => {
                        return (
                            <Grid item key={product.id} xs={12} sm={6} md={4}>
                                <Product
                                    key={product.id}
                                    product={product}
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