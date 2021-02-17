import React, { useState } from "react"
import { Paper } from "@material-ui/core"
import PropTypes from "prop-types"

const Product = ({ handleAdd }) => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [quantity, setQuantity] = useState("")

    const handleNameChange = event => setName(event.target.value)
    const handleDescriptionChange = event => setDescription(event.target.value)
    const handleQuantityChange = event => setQuantity(event.target.value)

    const addProduct = event => {
        event.preventDefault()

        handleAdd({
            name: name,
            description: description,
            quantity: quantity,
        })

        setName("")
        setDescription("")
        setQuantity("")
    }

    return (
        <div className="row h-100 justify-content-center align-items-center">
            <div className="col-10 col-md-8 col-lg-6">
                <form className="form-example" onSubmit={addProduct}>
                    <Paper style={{ padding: 24 }}>
                        <div className="form-group">
                            <label>Name: </label>
                            <input className="form-control" required type="text" name="name" value={name} onChange={handleNameChange} />
                        </div>
                        <div className="form-group">
                            <label>Description: </label>
                            <textarea className="form-control" required type="text" rows="3" name="description" value={description} onChange={handleDescriptionChange} />
                        </div>
                        <div className="form-group">
                            <label>Qty. Available: </label>
                            <input className="form-control" required type="number" min="0" name="quantity" value={quantity} onChange={handleQuantityChange} />
                        </div>
                        <div className="form-group center">
                            <input className="btn btn-primary" type="submit" />
                        </div>
                    </Paper>
                </form>
            </div>
        </div>
    )
}

Product.propTypes = {
    handleAdd: PropTypes.func.isRequired
}

export default Product
