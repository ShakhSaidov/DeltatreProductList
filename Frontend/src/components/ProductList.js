/* eslint-disable linebreak-style */
import { Container, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import React from "react"
import Product from "./Product"

//Custom styling for the product list
const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(2),
    }
}))

//Component that renders the entire product list as a grid
const ProductList = ({ productKeys, products, handleRemove }) => {
    const styles = useStyles()

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