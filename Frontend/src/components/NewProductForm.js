import React, { useState } from "react"
import { Button, Container, TextField, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import PropTypes from "prop-types"
//import useStyles from "./ProductStyles"

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

const Product = ({ handleAdd, products }) => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [quantity, setQuantity] = useState("")
    const [duplicate, setDuplicate] = useState(false)
    const styles = useStyles()

    const handleNameChange = event => setName(event.target.value)
    const handleDescriptionChange = event => setDescription(event.target.value)
    const handleQuantityChange = event => setQuantity(event.target.value)

    const addProduct = event => {
        event.preventDefault()
        if (!products.find(product => product.name.toLowerCase() === name.toLowerCase())) {
            handleAdd({
                name: name,
                description: description,
                quantity: quantity,
            })

            setName("")
            setDescription("")
            setQuantity("")
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
                    <Typography component={"div"} y variant="h6" align="center">
                        {duplicate ? "Name already exists in the list!" : null}
                    </Typography>
                </Container>

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    autoFocus
                    value={name}
                    onChange={handleNameChange}
                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="description"
                    label="Description"
                    name="description"
                    type="text"
                    multiline
                    rows={2}
                    rowsMax={4}
                    autoComplete="Description"
                    autoFocus
                    value={description}
                    onChange={handleDescriptionChange}
                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="quantity"
                    label="Quantity"
                    name="quantity"
                    type="number"
                    InputProps={{
                        inputProps: {
                            min: 0
                        }
                    }}
                    autoComplete="name"
                    autoFocus
                    value={quantity}
                    onChange={handleQuantityChange}
                />

                <Button
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