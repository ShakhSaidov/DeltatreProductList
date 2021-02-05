import React, { useState, useEffect, useRef } from 'react'
import serverRoutes from './server/ProductsList'
import Product from './components/Product'
import NewProductForm from './components/NewProductForm'
import Message from './components/Message'
import Switch from './components/Switch'
import './App.css'

const App = () => {
  const [products, setProducts] = useState([])
  const [message, setMessage] = useState(null)
  const productFormRef = useRef()

  useEffect(() => {
    serverRoutes
      .getList()
      .then(initialProducts => setProducts(initialProducts))

    if (products.length === 0) {
      setMessage("Product list seems empty! Maybe add some?")
    } else {
      setMessage(null)
    }
  }, [products.length])

  const handleAdd = newProduct => {
    const newName = newProduct.name;
    if (!products.find(product => product.name === newName)) {
      serverRoutes
        .add(newProduct)
        .then(returnedNewProduct => {
          setProducts(products.concat(returnedNewProduct))
        })
        .catch(e => console.log(e))

    } else {
      setMessage("Product name already exists in the list!")
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    }
    productFormRef.current.switchButton()
  }

  const handleRemove = (event, id, number) => {
    event.preventDefault()

    if (window.confirm(`Are you sure you want to remove Product ${number}?`)) {
      serverRoutes
        .remove(id)
        .then(setProducts(products.filter(product => product.id !== id)))
    }
  }

  return (
    <div>
      <div className="center"><Message message={message} /></div>
      {products.length !== 0 && <h1 className="center">Products List</h1>}
      <Switch buttonLabel="Add new product" ref={productFormRef}>
        <NewProductForm handleAdd={handleAdd} />
      </Switch>
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
