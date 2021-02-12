import React, { useState, useEffect, useRef } from 'react'
import serverRoutes from './server/ProductsList'
import Product from './components/Product'
import NewProductForm from './components/NewProductForm'
import Message from './components/Message'
import Switch from './components/Switch'
import './App.css'
import socketIOClient from 'socket.io-client'

const App = () => {
    const [products, setProducts] = useState([])
    const [message, setMessage] = useState(null)
    const [empty, setEmpty] = useState(false)
    const productFormRef = useRef()

    useEffect(() => {
        const socket = socketIOClient('http://localhost:3000')
        console.log("Connected to socket: ", socket)
    }, [])

    useEffect(() => {
        serverRoutes
            .getList()
            .then(response => {
                setProducts(response)
                response.length === 0 ? setEmpty(true) : setEmpty(false)
            })
    }, [products.length])

    console.log("Products length is: ", products.length);
    console.log("Products are: ", products);


    const handleAdd = newProduct => {
        const newName = newProduct.name;
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
            <div className="center">
                <Message message={message} empty={empty} />
            </div>
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
