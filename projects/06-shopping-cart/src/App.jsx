import { products as InitialProducts } from './mocks/products.json'
import { Header } from './components/Header'
import { Products } from './components/Products'

import { useState } from 'react'

function App() {

  const [products] = useState(InitialProducts)
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice && 
        (
          filters.category === 'all' || 
          product.category === filters.category
        )
      )
    })
  }

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header setFilters={setFilters} />
      <Products products={filteredProducts}/>
    </>
  )
}

export default App