import './App.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ContactsView from './views/ContactsView';
import HomeView from './views/HomeView';
import NotFoundView from './views/NotFoundView';
import ShoppingCartView from './views/ShoppingCartView';
import WishListView from './views/WishListView';
import SearchView from './views/SearchView';
import ProdactsView from './views/ProdactsView';
import CategoriesView from './views/CategoriesView';
import FooterSection from './sections/FooterSection';
import MainMenuSection from './sections/MainMenuSection';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/categories" element={<CategoriesView />} />
      <Route path="/products" element={<ProdactsView/>} />
      <Route path="/contacts" element={<ContactsView />} />
      <Route path="/search" element={<SearchView />} />
      <Route path="/wishlist" element={<WishListView />} />
      <Route path="/shoppingcart" element={<ShoppingCartView />} />
      <Route path="*" element={<NotFoundView />} />
  
    </Routes>
    <FooterSection />
    </BrowserRouter>
);
  }

export default App;
