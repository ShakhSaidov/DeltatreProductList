/* eslint-disable linebreak-style */
import React from "react"
import productStyles from "./ProductStyles"
import { Card, CardContent, CardActions, Box, Button, Typography } from "@material-ui/core"

const ProductInfo = ({ info, value }) => {
    return (
        <div>
            <b>{info}: </b>
            {
                info === "Description"
                    ? <div className="descriptionBox"> {value} </div>
                    : value
            }
        </div>
    )
}

const Product = ({ id, product, number, handleRemove }) => {
    const styles = productStyles()

    if (product) {
        return (
            <Card elevation={3} className={styles.card}>
                <CardContent className={styles.cardContent}>
                    <Typography component={"div"} y variant="h4" align="center"> <b>Product {number}</b> </Typography>
                    <Box p={2}>
                        <Typography component={"div"} variant="h6">
                            <ProductInfo info="Name" value={product.name} />
                        </Typography>

                        <Typography component={"div"} variant="h6" paragraph="true">
                            <ProductInfo info="Description" value={product.description} />
                        </Typography>

                        <Typography component={"div"} variant="h6">
                            <ProductInfo info="Qty. Available" value={product.quantity} />
                        </Typography>
                    </Box>
                </CardContent>

                <CardActions className={styles.cardActions}>
                    <Button
                        className={styles.button} variant="contained"
                        color="primary" value={id}
                        onClick={(event) => handleRemove(event, id)}>
                        Remove
                    </Button>
                </CardActions>
            </Card>
        )
    } else return null
}

export default Product