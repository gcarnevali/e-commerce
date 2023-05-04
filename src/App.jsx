import './App.css'
import Button from './components/Button';
import NavBar from './components/NavBar/NavBar';
import './App.css'
import { useState } from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className='1'>
    <NavBar />
    <ItemListContainer greeting={'Bienvenido'}/>
    </div>
  )
 

}

export default App
