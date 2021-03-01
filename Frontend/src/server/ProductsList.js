import axios from "axios"
const rootUrl = "/products"

axios.defaults.validateStatus = () => {
    return status < 400
}

const getProducts = etag => axios
    .get(rootUrl, { headers: { "if-none-match": etag } })
    .then(response => response)

const addProduct = newProduct => axios.post(rootUrl, newProduct).then(response => response)

const removeProduct = id => axios.delete(`${rootUrl}/${id}`).then(response => response)

export {
    getProducts,
    addProduct,
    removeProduct
}