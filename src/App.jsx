import './App.css'
import { Header } from './components/Header'
// import { HomePage } from './components/HomePage'
// import { CartPage } from './components/CartPage'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { HomePage } from './components/HomePage'
import { CartPage } from './components/CartPage'
import { useState } from 'react'

function App() {

  const[cart,setCart]=useState([]);
  return (
    <>
    <BrowserRouter>
      <Header cart={cart} />
      <div className='container'>
        <Routes>
          <Route path="/HomePage" element={<HomePage cart={cart} setCart={setCart} />}/>
          <Route path='/CartPage' element={<CartPage cart={cart} setCart={setCart} />} />
        </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
