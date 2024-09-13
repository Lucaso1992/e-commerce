import { useState } from 'react';
import useAppContext from './store/AppContext'
import Products from './components/Products/Products'
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import './App.css'

function App() {
  const { store } = useAppContext();
  const products = store.products

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= store.filters.minPrice &&
        (store.filters.category === 'all' ||
          product.category === store.filters.category)
      )
    })
  }

  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header/>
      <Cart/>
      <Products products={filteredProducts} />
    </>
  )
}

export default App
