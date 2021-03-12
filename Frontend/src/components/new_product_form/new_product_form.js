import React, { useState } from "react"
import { Button, Container, TextField, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import PropTypes from "prop-types"

//Custom styling for the product form
const useStyles = makeStyles((theme) => ({
    addForm: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "50%"
    },

    button: {
        marginBottom: theme.spacing(2),
        backgroundColor: "#006fff",

        "&:hover": {
            backgroundColor: "#1990ff",
            boxShadow: "0px 0px 4px 1px grey"
        }
    },

    form: {
        width: "100%",
        marginTop: theme.spacing(10),
    },

    warning: {
        color: "#db0000"
    }
}))

//Component that displays the product form and handles addition of new products
const Product = ({ handleAdd, products }) => {
    const [product, setProduct] = useState({ name: "", description: "", quantity: "" })
    const [duplicate, setDuplicate] = useState(false)
    const styles = useStyles()

    const handleNameChange = event => setProduct({ ...product, name: event.target.value })
    const handleDescriptionChange = event => setProduct({ ...product, description: event.target.value })
    const handleQuantityChange = event => setProduct({ ...product, quantity: event.target.value })

    //Checks if the name is not a duplicate, and calls the addProduct function
    const addProduct = event => {
        event.preventDefault()
        if (!products.find(p => p.name.toLowerCase() === product["name"].toLowerCase())) {
            handleAdd({ ...product })
            setProduct(({ name: "", description: "", quantity: "" }))
        } else {
            setDuplicate(true)
            setTimeout(() => {
                setDuplicate(false)
            }, 5000)
        }
    }

    return (
        <Container className={styles.addForm}>
            <form className={styles.form} onSubmit={addProduct}>
                <Container className={styles.warning}>
                    <Typography component={"div"} variant="h6" align="center">
                        {duplicate ? "Name already exists in the list!" : null}
                    </Typography>
                </Container>

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="productName"
                    label="Name"
                    name="name"
                    type="text"
                    inputProps={{ "data-testid": "Name" }}
                    autoComplete="name"
                    autoFocus
                    value={product["name"]}
                    onChange={handleNameChange}
                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="productDescription"
                    label="Description"
                    name="description"
                    type="text"
                    inputProps={{ "data-testid": "Description" }}
                    multiline
                    rows={2}
                    rowsMax={4}
                    autoComplete="Description"
                    autoFocus
                    value={product["description"]}
                    onChange={handleDescriptionChange}
                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="productQuantity"
                    label="Quantity"
                    name="quantity"
                    type="number"
                    inputProps={{ "data-testid": "Quantity", min: 0 }}
                    autoComplete="name"
                    autoFocus
                    value={product["quantity"]}
                    onChange={handleQuantityChange}
                />

                <Button
                    id="productAddButton"
                    className={styles.button}
                    variant="contained"
                    color="primary"
                    type="submit"
                    fullWidth>
                    Add Product
                </Button>
            </form>
        </Container>
    )
}

Product.propTypes = {
    handleAdd: PropTypes.func.isRequired
}

export default Product