import axios from "axios"
const rootUrl = "/products"

//make one liner and change name
const getProducts = () => axios.get(rootUrl).then(response => {
    console.log("Response from getProducts: ", response)
    return response
})

const addProduct = newProduct => axios.post(rootUrl, newProduct).then(response => {
    console.log("Response from addProduct: ", response)
    return response
})

const removeProduct = id => axios.delete(`${rootUrl}/${id}`).then(response => {
    console.log("Response from removeProduct: ", response)
    return response
})

export {
    getProducts,
    addProduct,
    removeProduct
}