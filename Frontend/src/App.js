/* eslint-disable linebreak-style */
import React, { useState, useEffect, useRef } from "react"
import { getProducts, addProduct, removeProduct } from "./server/ProductsList"
import ProductList from "./components/ProductList"
import NewProductForm from "./components/NewProductForm"
//import Message from "./components/Message"
import Switch from "./components/Switch"
import "./App.css"
import productStyles from "./components/ProductStyles"
import { AppBar, Toolbar, Typography, InputBase } from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"

const App = () => {
    const [data, setData] = useState({})
    //const [message, setMessage] = useState(null)             //remove if possible, look into css z-index, or generally pro alerts
    //const [empty, setEmpty] = useState(false)       //make a loading action when getting the products
    const productFormRef = useRef()
    const styles = productStyles()

    let productKeys = Object.keys(data)
    let products = Object.values(data)

    useEffect(() => {
        getProducts()
            .then(response => {
                //response.data.length === 0 ? setEmpty(true) : setEmpty(false)
                if (response.status !== 304) setData(response.data)
            })
    }, [data])

    const handleAdd = newProduct => {
        const newName = newProduct.name
        if (!products.find(product => product.name === newName)) {
            addProduct(newProduct)
                .then(response => setData(response.data))
                .catch(e => console.log(e))

        } else {
            //setMessage("Product name already exists in the list!")
            //setTimeout(() => {
            //    setMessage(null)
            // }, 5000)
        }

        productFormRef.current.switchButton()
    }

    const handleRemove = (event, id, number) => {
        event.preventDefault() //remove confirm, too extra
        if (window.confirm(`Are you sure you want to remove Product ${number}?`)) {
            removeProduct(id)
                .then(response => {
                    if (response.status === 204) setData(data)
                })
                .catch(e => console.log(e))
        }
    }

    return (
        <div className={styles.cardContent}>
            <AppBar className={styles.appBar}>
                <Toolbar >

                    <Switch buttonLabel="Add new product" ref={productFormRef}>
                        <NewProductForm handleAdd={handleAdd} />
                    </Switch>

                    {data
                        ?
                        <Typography className={styles.title} component={"div"} variant="h5" noWrap>
                            <b> Product List </b>
                        </Typography>
                        :
                        <Typography className={styles.title} component={"div"} variant="h5" noWrap>
                            <b> Product List Empty! Maybe add some? </b>
                        </Typography>
                    }

                    <div className={styles.search}>
                        <div className={styles.searchIcon}> <SearchIcon /> </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: styles.inputRoot,
                                input: styles.inputInput,
                            }}
                            inputProps={{ "aria-label": "search" }}
                        />
                    </div>
                </Toolbar>
            </AppBar>

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