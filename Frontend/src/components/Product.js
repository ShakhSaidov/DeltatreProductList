/* eslint-disable linebreak-style */
import React, { useState } from "react"
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

const Product = ({ id, product, handleRemove }) => {
    const [warnRemoval, setWarnRemoval] = useState(false)
    const styles = productStyles()

    const confirmRemove = () => {
        setWarnRemoval(true)
        setTimeout(() => {
            setWarnRemoval(false)
        }, 5000)
    }

    if (product) {
        return (
            <Card elevation={3} className={styles.card}>
                <CardContent className={styles.cardContent}>
                    <Typography component={"div"} y variant="h4" align="center"> <b>{product.name}</b> </Typography>
                    <Box p={2}>
                        <Typography component={"div"} variant="h6" paragraph="true">
                            <ProductInfo info="Description" value={product.description} />
                        </Typography>

                        <Typography component={"div"} variant="h6">
                            <ProductInfo info="Qty. Available" value={product.quantity} />
                        </Typography>
                    </Box>
                </CardContent>

                <CardContent className={styles.warning}>
                    <Typography component={"div"} y variant="h6" align="center">
                        {warnRemoval ? "Are you sure?" : null}
                    </Typography>
                </CardContent>

                <CardActions className={styles.cardActions}>
                    <Button
                        className={styles.button} variant="contained"
                        color="primary" value={id}
                        onClick={(event) => {
                            if (!warnRemoval) confirmRemove()
                            else handleRemove(event, id)
                        }}>
                        Remove
                    </Button>
                </CardActions>
            </Card>
        )
    } else return null
}

export default Product