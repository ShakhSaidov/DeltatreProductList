import React, { useState, useEffect } from 'react'
import Product from './components/Product'
import NewProductForm from './components/NewProductForm'
import serverRoutes from './server/ProductsList'
import './App.css'

const App = () => {
  const [products, setProducts] = useState([])
  const [pressedAdd, setPressedAdd] = useState(false)

  useEffect(() => {
    serverRoutes
      .getList()
      .then(initialProducts => setProducts(initialProducts))
  }, [])

  const handleAdd = newProduct => {
    serverRoutes
      .add(newProduct)
      .then(returnedNewProduct => setProducts(products.concat(returnedNewProduct)))
  }

  const handleRemove = (event, id, number) => {
    event.preventDefault()

    if (window.confirm(`Do you really want to remove Product ${number}?`)) {
      serverRoutes
        .remove(id)
        .then(setProducts(products.filter(product => product.id !== id)))
    }
  }

  const handleAddForm = () => setPressedAdd(true)

  return (
    <div>
      {products.length === 0
        ? <h1 className="center">No products available currently, maybe add some?</h1>
        : <h1 className="center">Products List</h1>
      }
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
