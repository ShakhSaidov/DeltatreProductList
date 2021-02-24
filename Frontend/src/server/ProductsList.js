import axios from "axios"
const rootUrl = "/products"

//make one liner and change name
const getProducts = () => axios.get(rootUrl).then(response => response.data)

const addProduct = newProduct => axios.post(rootUrl, newProduct).then(response => response.data)

const removeProduct = id => axios.delete(`${rootUrl}/${id}`).then(response => response.data)

export {
    getProducts,
    addProduct,
    removeProduct
}