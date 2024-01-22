/* eslint-disable react/prop-types */
import { Filters } from './Filters'

export function Header ( { setFilters  }) {
  return (
    <header className='header'>
      <h1>Shopping Cart</h1>
      <Filters setFilters={ setFilters } />
    </header>
  )
}