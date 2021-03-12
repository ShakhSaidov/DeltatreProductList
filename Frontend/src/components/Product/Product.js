/* eslint-disable linebreak-style */
import React, { useState } from "react"
import { Card, CardContent, CardActions, Box, Button, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

//Custom styles to display the product
const useStyles = makeStyles((theme) => ({
    button: {
        marginBottom: theme.spacing(2),
        backgroundColor: "#006fff",

        "&:hover": {
            backgroundColor: "#1990ff",
            boxShadow: "0px 0px 4px 1px grey"
        }
    },

    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },

    cardActions: {
        justifyContent: "center",
        alignContent: "center"
    },

    cardContent: {
        flexGrow: 1,
    },

    warning: {
        color: "#db0000"
    }
}))

//Component that displays product info (name, description, quantity)
const ProductInfo = ({ info, value }) => {
    return (
        <div>
            <b>{info}: </b>
            {   info === "Description"
                ? <div className="descriptionBox"> {value} </div>
                : value
            }
        </div>
    )
}

//Component that displays the whole product
const Product = ({ product, handleRemove }) => {
    const [warnRemoval, setWarnRemoval] = useState(false)           //shows a warning when a user tries to remove a product
    const styles = useStyles()

    //A temporary warning sign will be shown for 5 seconds when a user tries to remove a product
    const confirmRemove = () => {
        setWarnRemoval(true)
        setTimeout(() => {
            setWarnRemoval(false)
        }, 5000)
    }

    if (product) {
        return (
            <Card id="productCard" elevation={3} className={styles.card}>
                <CardContent className={styles.cardContent}>
                    <Typography id="productCardName" component={"div"} variant="h4" align="center"> <b>{product.name}</b> </Typography>
                    <Box p={2}>
                        <Typography id="productCardDescription" component={"div"} variant="h6" paragraph={true}>
                            <ProductInfo info="Description" value={product.description} />
                        </Typography>

                        <Typography id="productCardQuantity" component={"div"} variant="h6">
                            <ProductInfo info="Qty. Available" value={product.quantity} />
                        </Typography>
                    </Box>
                </CardContent>

                <CardContent className={styles.warning}>
                    <Typography component={"div"} variant="h6" align="center">
                        {warnRemoval ? "Are you sure?" : null}
                    </Typography>
                </CardContent>

                <CardActions className={styles.cardActions}>
                    <Button
                        id="productRemoveButton"
                        className={styles.button} variant="contained"
                        color="primary" value={product.id}
                        onClick={(event) => {
                            if (!warnRemoval) confirmRemove()
                            else {
                                handleRemove(event, product.id)
                                setWarnRemoval(false)
                            }
                        }}>
                        Remove
                    </Button>
                </CardActions>
            </Card>
        )
    } else return null
}

export default Product