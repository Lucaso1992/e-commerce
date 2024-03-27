import { useState } from 'react';
import useAppContext from './store/AppContext'
import Products from './components/Products/Products'
import Header from './components/Header/Header';
import './App.css'

function App() {
  const { store } = useAppContext();
  const products = store.products
  // const [filters, setFilters] = useState({
  //   category: 'all',
  //   minPrice: 0
  // })

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= store.filters.minPrice &&
        (store.filters.category === 'all' ||
          product.category.name === store.filters.category)
      )
    })
  }

  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header/>
      <Products products={filteredProducts} />
    </>
  )
}

export default App
