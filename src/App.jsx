import './App.css'
import NavBar from './components/NavBar/NavBar';
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Contador from './components/Contador/Contador';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailCointaner';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
    <Route path="/" element={<ItemListContainer />}/>
    <Route path="/category/:categoryId" element={<ItemListContainer />}/>
    <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
    <Route path="" element={<Contador initial={1} stock={10} onAdd={(cantidad) => console.log('Se agregaron', cantidad)}/>}/>
    </Routes>
    
    </BrowserRouter>
  )
 

}

export default App
