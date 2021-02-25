import axios from "axios"
const rootUrl = "/products"

//make one liner and change name
const getProducts = () => axios.get(rootUrl).then(response => response)

const addProduct = newProduct => axios.post(rootUrl, newProduct).then(response => response)

const removeProduct = id => axios.delete(`${rootUrl}/${id}`).then(response => response)

export {
    getProducts,
    addProduct,
    removeProduct
}