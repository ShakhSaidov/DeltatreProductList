/* eslint-disable linebreak-style */
import React, { useState, useEffect, useRef } from "react"
import serverRoutes from "./server/ProductsList"
import Product from "./components/Product"
import NewProductForm from "./components/NewProductForm"
import Message from "./components/Message"
import Switch from "./components/Switch"
import "./App.css"

const App = () => {
    const [products, setProducts] = useState([])
    const [message, setMessage] = useState(null)
    const [empty, setEmpty] = useState(false)
    const productFormRef = useRef()

    useEffect(() => {
        serverRoutes
            .getList()
            .then(response => {
                setProducts(response)
                response.length === 0 ? setEmpty(true) : setEmpty(false)
            })
    }, [])

    const handleAdd = newProduct => {
        const newName = newProduct.name
        if (!products.find(product => product.name === newName)) {
            serverRoutes
                .add(newProduct)
                .then(response => {
                    setProducts(products.concat(response))
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
                .then(() => {
                    setProducts(products.filter(product => product.id !== id))
                })
        }
    }

    return (
        <div>
            <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width"
            />

            <Message message={message} empty={empty} />

            {products.length !== 0 && <h1 className="center">Products List</h1>}
            <Switch buttonLabel="Add new product" ref={productFormRef}>
                <NewProductForm handleAdd={handleAdd} />
            </Switch>

            {products.map((product, index) =>
                <Product
                    key={product.id}
                    product={product}
                    number={index + 1}
                    handleRemove={handleRemove}
                />
            )}
        </div>
    )
}

export default App
