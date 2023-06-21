
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailCointaner';
import Homepage from '../src/Homepage/Homepage'
import Cart from './components/Cart/Cart';

import { CartProvider } from './context/CartContext';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path='*' element={<h1>404 NOT FOUND</h1>}></Route>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>

  )


}

export default App
