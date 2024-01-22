/* eslint-disable react/prop-types */
import './Filters.css'
import { useState, useId } from 'react'

export function Filters ( { setFilters }) {

  const [minPrice, setMinPrice] = useState(0)
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value)
    setFilters(prevState => {
      return {
        ...prevState,
        minPrice: event.target.value
      }
    
    })
  }

  const handleChangeCategory = (event) => {
    setFilters(prevState => {
      return {
        ...prevState,
        category: event.target.value
      }
    })
  }

  return (
    <section className='filters'>
      
      <div>
        <label htmlFor={ minPriceFilterId }>Price</label>
        <input 
          type="range"
          id={ minPriceFilterId }
          min="0"
          max="1000"  
          onChange={handleChangeMinPrice}
        />
        <span>$ { minPrice }</span>
      </div>
      
      <div>
        <label htmlFor={ categoryFilterId }>Category</label>
        <select id={ categoryFilterId } onChange={ handleChangeCategory }>
          <option value="all">All</option>
          <option value="home-decoration">Home Decoration</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
        </select>
      </div>
    
    </section>
  )
}