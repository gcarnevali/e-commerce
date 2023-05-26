
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Contador from './components/ContadorItem/ContadorItem';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailCointaner';
import Homepage from '../src/Homepage/Homepage'
import Item from './components/Item/Item';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
    <Route path="/" element={<Homepage />}/>
    <Route path="/category/:categoryId" element={<ItemListContainer />}/>
    <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
    <Route path="" element={<Contador initial={1} stock={10} onAdd={(cantidad) => console.log('Se agregaron', cantidad)}/>}/>
    </Routes>
    
    </BrowserRouter>
  )
 

}

export default App
