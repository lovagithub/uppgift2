import React, {useState, useEffect} from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import './App.min.css';

import ContactsView from './views/ContactsView';
import HomeView from './views/HomeView';
import NotFoundView from './views/NotFoundView';
import ShoppingCartView from './views/ShoppingCartView';
import WishListView from './views/WishListView';
import SearchView from './views/SearchView';
import ProdactsView from './views/ProdactsView';
import ProductDetailsView from './views/ProductDetailsView';
import CategoriesView from './views/CategoriesView';
import ComparesView from './views/CompareView';
import { ProductContext } from './context/contexts'


function App() {
 
  const [products, setProducts] = useState({
    all: [],
    featuredProduct: []
  })

  useEffect(() => {
    const fetchAllProduct  = async () => {
      let result = await fetch('https://win22-webapi/azurewebsites/api/products')
      setProducts({...products, all: await result.json()})
    }
    fetchAllProduct ();
    const fetchFeatureProduct  = async () => {
      let result = await fetch('https://win22-webapi/azurewebsites/api/products?take=8')
      setProducts({...products, featuredProducts: await result.json()})
    }
    fetchFeatureProduct ();
  }, [setProducts])

  return (
    <BrowserRouter>
    <ProductContext.Provider value={products}>
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/categories" element={<CategoriesView />} />
      <Route path="/products" element={<ProdactsView />} />
      <Route path="/contacts" element={<ContactsView />} />
      <Route path="/search" element={<SearchView />} />
      <Route path="/compare" element={<ComparesView />} />
      <Route path="/wishlist" element={<WishListView />} />
      <Route path="/shoppingcart" element={<ShoppingCartView />} />
      <Route path="/product:name" elemnt={<ProductDetailsView/>} />
      <Route path="*" element={<NotFoundView />} />

    </Routes>
    </ProductContext.Provider>
    </BrowserRouter>
);
  }

export default App;
