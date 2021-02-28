import axios from "axios"
const rootUrl = "/products"

axios.defaults.validateStatus = () => {
    return status < 400
}

//make one liner and change name
const getProducts = etag =>
    axios
        .get(rootUrl, {
            headers: {
                "if-none-match": etag
            }
        })
        .then(response => {
            console.log("Response from axios: ", response)
            console.log("Data gotten from axios: ", response.data)
            return response
        })


const addProduct = newProduct => axios.post(rootUrl, newProduct).then(response => {
    //console.log("Response from addProduct: ", response)
    //console.log("Data gotten from addProduct: ", response.data)
    return response
})

const removeProduct = id => axios.delete(`${rootUrl}/${id}`).then(response => {
    //console.log("Response from removeProduct: ", response)
    //console.log("Data gotten from removeProduct: ", response.data)
    return response
})

export {
    getProducts,
    addProduct,
    removeProduct
}