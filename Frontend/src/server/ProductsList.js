import axios from "axios"
const rootUrl = "/products"

//make one liner and change name
const getProducts = () => axios.get(rootUrl).then(response => {
    console.log("Response from getProducts: ", response)
    console.log("Data gotten from getProducts: ", response.data)
    return response
})

const addProduct = newProduct => axios.post(rootUrl, newProduct).then(response => {
    console.log("Response from addProduct: ", response)
    console.log("Data gotten from addProduct: ", response.data)
    return response
})

const removeProduct = id => axios.delete(`${rootUrl}/${id}`).then(response => {
    console.log("Response from removeProduct: ", response)
    console.log("Data gotten from removeProduct: ", response.data)
    return response
})

export {
    getProducts,
    addProduct,
    removeProduct
}