/* eslint-disable linebreak-style */
import React from "react"
import { Card, CardContent, CardActions, Box, Button, makeStyles, Typography } from "@material-ui/core"

const productStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    cardActions: {
        justifyContent: "center"
    },
    cardContent: {
        flexGrow: 1,
    },

    button: {
        backgroundColor: "#006aff"
    }
}))

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
                    <Typography variant="h4" align="center"> <b>Product {number}</b> </Typography>

                    <Box p={4}>
                        <Typography variant="h6">
                            <ProductInfo info="Name" value={product.name} />
                        </Typography>

                        <Typography variant="h6" paragraph={true}>
                            <ProductInfo info="Description" value={product.description} />
                        </Typography>

                        <Typography variant="h6">
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