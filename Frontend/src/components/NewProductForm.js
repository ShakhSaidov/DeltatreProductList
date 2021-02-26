import React, { useState } from "react"
import { Button, Container, TextField, Typography } from "@material-ui/core"
import PropTypes from "prop-types"
import productStyles from "./ProductStyles"

const Product = ({ handleAdd, products }) => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [quantity, setQuantity] = useState("")
    const [duplicate, setDuplicate] = useState(false)
    const styles = productStyles()

    const handleNameChange = event => setName(event.target.value)
    const handleDescriptionChange = event => setDescription(event.target.value)
    const handleQuantityChange = event => setQuantity(event.target.value)

    const addProduct = event => {
        event.preventDefault()


        if (!products.find(product => product.name === name)) {
            handleAdd({
                name: name,
                description: description,
                quantity: quantity,
            })
        } else {
            setDuplicate(true)
            setTimeout(() => {
                setDuplicate(false)
            }, 5000)
        }


        setName("")
        setDescription("")
        setQuantity("")
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