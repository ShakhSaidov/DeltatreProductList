import React, {useState} from 'react'
import '../App.css'

const Product = ({handleAdd}) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState('')

  const handleNameChange = event => setName(event.target.value)
  const handleDescriptionChange = event => setDescription(event.target.value)
  const handleQuantityChange = event => setQuantity(event.target.value)

  const addProduct = event => {
    event.preventDefault()
    console.log("Current Name: ", name);
    console.log("Current Description: ", description);
    console.log("Current Quantity: ", quantity);

    handleAdd({
      name: name,
      description: description,
      quantity: quantity,
    })

    setName('')
    setDescription('')
    setQuantity('')
  }


  return (
    <div className="center">
      <h2>New Product Form</h2>
      <form onSubmit={addProduct}>
        <div>
          <label>Name: </label>
          <input type="text" name="name" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label>Description: </label>
          <input type="text" name="description" value={description} onChange={handleDescriptionChange} />
        </div>
        <div>
          <label>Qty. Available: </label>
          <input type="text" name="quantity" value={quantity} onChange={handleQuantityChange} />
        </div>
        <input type="submit" />
      </form>
    </div >
  )
}

export default Product