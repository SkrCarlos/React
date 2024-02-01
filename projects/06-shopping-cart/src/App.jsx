import { products as InitialProducts } from './mocks/products.json'
import { Products } from './components/Products'
import { useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

import { useFilters } from './hooks/useFilters.js'
import { Cart } from './components/Cart.jsx'

import { CartProvider } from './context/cart.jsx'


function App() {
  const [products] = useState(InitialProducts)
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
      <Header/>
      <Cart />
      <Products products={filteredProducts}/>
      <Footer />
    </CartProvider>
  )
}

export default App
