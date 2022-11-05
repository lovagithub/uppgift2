import './App.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactsView from './views/ContactsView';
import HomeView from './views/HomeView';
import NotFound from './views/NotFound';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/contacts" element={<ContactsView />} />
      <Route path="*" element={<NotFound />} />
      

    </Routes>
    </BrowserRouter>
);
  }

export default App;
