import React, { useState, useEffect } from 'react'
import serverRoutes from './server/ProductsList'
import Product from './components/Product'
import NewProductForm from './components/NewProductForm'
import Message from './components/Message'
import './App.css'

const App = () => {
  const [products, setProducts] = useState([])
  const [message, setMessage] = useState(null)
  const [pressedAdd, setPressedAdd] = useState(false)

  useEffect(() => {
    serverRoutes
      .getList()
      .then(initialProducts => setProducts(initialProducts))

    if(products.length === 0) {
      setMessage("Product list seems empty! Maybe add some?")
    } else {
      setMessage(null)
    }
  }, [products.length])

  const handleAdd = newProduct => {
    const newName = newProduct.name;
    if(!products.find(product => product.name === newName)){
      serverRoutes
      .add(newProduct)
      .then(returnedNewProduct => setProducts(products.concat(returnedNewProduct)))
    } else {
      setMessage("Product name already exists in the list!")
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    }
  }

  const handleRemove = (event, id, number) => {
    event.preventDefault()

    if (window.confirm(`Are you sure you want to remove Product ${number}?`)) {
      serverRoutes
        .remove(id)
        .then(setProducts(products.filter(product => product.id !== id)))
    }
  }

  const handleAddForm = () => setPressedAdd(true)

  return (
    <div>
      <Message message={message} />
      {products.length !== 0 && <h1 className="center">Products List</h1> }
      {pressedAdd
        ? <NewProductForm handleAdd={handleAdd} />
        : <button onClick={handleAddForm}>Add new product</button>
      }
      <div>
        {products.map((product, index) =>
          <Product
            key={product.id}
            product={product}
            number={index + 1}
            handleRemove={handleRemove}
          />
        )}
      </div>
    </div>
  )
}

export default App;
