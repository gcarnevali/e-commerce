
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ContadorItem from './components/ContadorItem/ContadorItem';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailCointaner';
import Homepage from '../src/Homepage/Homepage'
import { createContext } from 'react';

export const cartContext = createContext({cart: [] })

function App() {
  const CartProvider = cartContext.Provider;
  
  return (
    <CartProvider value={ { cart: [{id: 1, title: "prueba"}] }}> 
    <BrowserRouter>
    <NavBar />
    <Routes>
    <Route path="/" element={<Homepage />}/>
    <Route path="/category/:categoryId" element={<ItemListContainer />}/>
    <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
    <Route path="" element={<ContadorItem initial={1} stock={10} onAdd={(cantidad) => console.log('Se agregaron', cantidad)}/>}/>
    </Routes>
    </BrowserRouter>
    </CartProvider>
  )
 

}

export default App
