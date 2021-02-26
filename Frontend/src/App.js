/* eslint-disable linebreak-style */
import React, { useState, useEffect } from "react"
import { getProducts, addProduct, removeProduct } from "./server/ProductsList"
import ProductList from "./components/ProductList"
import NewProductForm from "./components/NewProductForm"
//import Message from "./components/Message"
//import Switch from "./components/Switch"
import "./App.css"
import productStyles from "./components/ProductStyles"
import { AppBar, Toolbar, Typography, InputBase, IconButton } from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"
import AddIcon from "@material-ui/icons/Add"
import RemoveIcon from "@material-ui/icons/Remove"

const App = () => {
    const [data, setData] = useState({})
    const [addClick, setAddClick] = useState()
    const [search, setSearch] = useState("")
    const [empty, setEmpty] = useState()
    const styles = productStyles()

    let productKeys = Object.keys(data).filter(key => data[key].name.toLowerCase().includes(search.toLowerCase()))
    let products = Object.values(data).filter(product => product.name.toLowerCase().includes(search.toLowerCase()))

    useEffect(() => {
        getProducts()
            .then(response => {
                response.data.length === 0 ? setEmpty(true) : setEmpty(false)
                if (response.status !== 304) setData(response.data)
            })
    }, [data])

    const handleAddClick = clicked => setAddClick(clicked)

    const handleSearch = event => setSearch(event.target.value)

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
    }

    const handleRemove = (event, id, number) => {
        event.preventDefault()
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

                    <IconButton
                        edge="start"
                        className={styles.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => {
                            if (addClick) handleAddClick(false)
                            else handleAddClick(true)
                        }}
                    >
                        {!addClick
                            ?
                            <AddIcon />
                            :
                            <RemoveIcon />
                        }
                    </IconButton>

                    {!empty
                        ?
                        <Typography className={styles.title} component={"div"} variant="h5" noWrap>
                            <b> Product List </b>
                        </Typography>
                        :
                        <Typography className={styles.title} component={"div"} variant="h5" noWrap>
                            <b> Product List empty! Maybe add some? </b>
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
                            value={search}
                            onChange={handleSearch}
                        />
                    </div>
                </Toolbar>
            </AppBar>

            {addClick && <NewProductForm handleAdd={handleAdd} />}

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