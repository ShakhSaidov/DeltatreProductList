/* eslint-disable linebreak-style */
import React, { useState, useEffect, useRef } from "react"
import { getProducts, addProduct, removeProduct } from "./server/ProductsList"
import ProductList from "./components/ProductList"
import NewProductForm from "./components/NewProductForm"
import Message from "./components/Message"
import Switch from "./components/Switch"
import "./App.css"

const App = () => {
    const [data, setData] = useState({})
    const [etag, setEtag] = useState("")
    const [message, setMessage] = useState(null)             //remove if possible, look into css z-index, or generally pro alerts
    const [empty, setEmpty] = useState(false)       //make a loading action when getting the products
    const productFormRef = useRef()

    let productKeys = Object.keys(data)
    let products = Object.values(data)

    useEffect(() => {
        getProducts()
            .then(response => {
                setData(response.data)
                setEtag(response.headers["etag"])
                response.length === 0 ? setEmpty(true) : setEmpty(false)
            })
    }, [etag])
    console.log("Data is: ", data)
    console.log("Data length is:", products.length)
    console.log("Etag is: ", etag)

    const handleAdd = newProduct => {
        const newName = newProduct.name
        if (!products.find(product => product.name === newName)) {
            addProduct(newProduct)
                .then(response => {
                    setEtag(response.headers["etag"])
                    console.log("Data length after addition:", products.length)
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
        event.preventDefault() //remove confirm, too extra
        if (window.confirm(`Are you sure you want to remove Product ${number}?`)) {
            removeProduct(id)
                .then(response => {
                    setEtag(response.headers["etag"])
                    console.log("Data length after deletion:", products.length)
                })
                .catch(e => console.log(e))
        }
    }

    return (
        <div>
            <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width"
            />

            <Message message={message} empty={empty} />

            {data && <h1 className="center">Products List</h1>}
            <Switch buttonLabel="Add new product" ref={productFormRef}>
                <NewProductForm handleAdd={handleAdd} />
            </Switch>

            {data &&
                <ProductList
                    productKeys={productKeys}
                    products={products}
                    handleRemove={handleRemove}
                />
            }
        </div>
    )
}

export default App
