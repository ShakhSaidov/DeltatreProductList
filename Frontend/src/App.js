import React, {useState, useEffect} from 'react'
import Product from './components/Product'
import serverRoutes from './server/ProductsList'

const App = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    serverRoutes
      .getList()
      .then(initialProducts => setProducts(initialProducts))
  }, [])

  return (
    <div>
      <h1 className="center">Products List</h1>
      <div>
        {products.map((product, index) =>
          <Product key={product.id} product={product} number={index+1}/>
        )}
      </div>
    </div>
  )
}

export default App;
