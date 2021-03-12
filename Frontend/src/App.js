/* eslint-disable linebreak-style */
import React, { useState, useEffect } from "react"
import { checkProducts, getProducts, addProduct, removeProduct } from "./server/ProductsList"
import ProductList from "./components/product_list/product_list"
import NewProductForm from "./components/new_product_form/new_product_form"
import SearchIcon from "@material-ui/icons/Search"
import AddIcon from "@material-ui/icons/Add"
import RemoveIcon from "@material-ui/icons/Remove"
import { AppBar, Toolbar, Typography, InputBase, IconButton, CircularProgress } from "@material-ui/core"
import { fade, makeStyles } from "@material-ui/core/styles"

//Custom styling for the entire page
const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: "#002c73",
        position: "fixed",
    },

    menuButton: {
        marginRight: theme.spacing(2),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.2),
        },
    },

    cardContent: {
        flexGrow: 1,
    },


    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(1),
            width: "auto",
        },
    },

    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    inputRoot: {
        color: "inherit",
    },

    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch",
            },
        },
    },

    title: {
        flexGrow: 1,
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },

    loadingButton: {
        position: "absolute",
        left: "50%",
        top: "50%",
        color: "#002c73",
        margin: "auto",
    }
}))

const App = () => {
    const [session, setSession] = useState({ products: [], etag: "" })
    const [loading, setLoading] = useState(true)
    const [addClick, setAddClick] = useState()
    const [search, setSearch] = useState("")
    const styles = useStyles()

    let products = session["products"].filter(product => product.name.toLowerCase().includes(search.toLowerCase()))

    //renders the page whenever etag changes
    useEffect(() => {
        const getData = async () => {
            try {
                //console.log("Entered useEffect")
                const headResponse = await checkProducts(session["etag"])
                //console.log("checkProducts response: ", headResponse)
                //console.log("headRequest status and type is: ", headResponse.status, typeof headResponse.status)

                if (headResponse.status !== 304) {
                    const getResponse = await getProducts()
                    //console.log("getProducts response: ", getResponse)
                    //console.log("Setting Etag to the one from GET: ", getResponse.headers["etag"])
                    //console.log("Mounted before GET etag: ", mounted)
                    //console.log("Setting Data to: ", getResponse.data)
                    setSession({
                        products: getResponse.data,
                        etag: getResponse.headers["etag"]
                    })
                    setLoading(false)
                }

                else {
                    //console.log("Setting Etag to the one from HEAD: ", headResponse.headers["etag"])
                    //console.log("Mounted before HEAD etag: ", mounted)
                    setSession({ ...session, etag: headResponse.headers["etag"] })
                }
            } catch (error) { console.log(error) }

            if (loading) setLoading(false)
        }

        getData()
    }, [session])

    const handleAddClick = clicked => setAddClick(clicked)

    const handleSearch = event => setSearch(event.target.value)

    //requests to add a new product onto the list
    const handleAdd = newProduct => {
        addProduct(newProduct)
            .then(response => {
                //console.log("Response after addition ", response)
                setSession({ ...session, etag: response.headers["etag"] })
            })
            .catch(e => console.log(e))
    }

    //requests to delete an existing product from the list
    const handleRemove = (event, id) => {
        event.preventDefault()
        removeProduct(id)
            .then(response => {
                //console.log("Response after remove ", response)
                setSession({ ...session, etag: response.headers["etag"] })
            })
            .catch(e => console.log(e))
    }

    if (!loading) {
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


                        {products.length !== 0
                            ?
                            <Typography className={styles.title} component={"div"} variant="h5" noWrap>
                                <b> Product List </b>
                            </Typography>
                            :
                            <Typography className={styles.title} component={"div"} variant="h5" noWrap>
                                <b> Nothing Found! Maybe add some? </b>
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

                {addClick && <NewProductForm handleAdd={handleAdd} products={products} />}

                {session["products"] &&
                    <ProductList
                        products={products}
                        handleRemove={handleRemove}
                    />
                }
            </div>
        )
    } else return (<CircularProgress size={100} className={styles.loadingButton} />)
}

export default App
