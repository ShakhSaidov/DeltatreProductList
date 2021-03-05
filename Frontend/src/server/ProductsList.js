import axios from "axios"
const rootUrl = "/products"

//use so that status codes below 400 don't get considered as error
axios.defaults.validateStatus = () => {
    return status < 400
}

//get request for the products list
const getProducts = etag => axios
    .get(rootUrl, { headers: { "if-none-match": etag } })
    .then(response => response)

//post request for a new product
const addProduct = newProduct => axios.post(rootUrl, newProduct).then(response => response)

//delete request for an existing product
const removeProduct = id => axios.delete(`${rootUrl}/${id}`).then(response => response)

export {
    getProducts,
    addProduct,
    removeProduct
}