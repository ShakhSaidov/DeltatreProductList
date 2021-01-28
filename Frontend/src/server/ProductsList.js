import axios from 'axios'
const rootUrl = '/products'

const getList = () => {
  const request = axios.get(rootUrl)
  return request.then(response => response.data)
}

const add = newProduct => {
  const request = axios.post(rootUrl, newProduct)
  return request.then(response => response.data)
}

const remove = id => {
  const request = axios.delete(`${rootUrl}/${id}`)
  return request.then(response => response.data)
}

const serverRoutes = {
  getList,
  add,
  remove
}

export default serverRoutes