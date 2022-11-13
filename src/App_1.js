import React, {useState} from 'react'
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

  const [products, setProducts] = useState([
    { id: 1, name: "Modern Blacke Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://cdn.pixabay.com/photo/2012/09/21/14/10/leaves-57427__340.jpg"},
    { id: 2, name: "Modern Blacke Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://cdn.pixabay.com/photo/2017/03/11/17/49/maple-2135514__340.jpg"},
    { id: 3, name: "Modern Blacke Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://media.istockphoto.com/id/105770350/sv/foto/little-girl-wearing-grown-up-mans-business-suit.jpg?s=612x612&w=0&k=20&c=7wXHUd6QDfB2N1J0-vYReLv1wTbYaUqHJUjVG4I4HFw="},
    { id: 4, name: "Modern Blacke Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://media.istockphoto.com/photos/happy-dog-of-welsh-corgi-pembroke-breed-among-fallen-leaves-in-autumn-picture-id1398810303?b=1&k=20&m=1398810303&s=170667a&w=0&h=DocEO7nMoEq3KI2oEF57OAgNdP7bRt2dEOfVQIIDPIw="}

])

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
