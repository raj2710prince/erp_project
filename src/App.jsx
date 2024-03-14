import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Orders from './Pages/Orders'
import Products from './Pages/Products'
import Navbar from './Components/Navbar';
import ErrorPage from './Pages/ErrorPage';
import EditOrder from './Pages/EditOrder';
import EditProduct from './Pages/EditProduct';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='orders' element={<Orders />} />
        <Route path='products' element={<Products />} />
        <Route path='/edit/orders/:orderId' element={<EditOrder />} />
        <Route path='/edit/orders' element={<EditOrder />} />
        <Route path='/edit/products/:productId' element={<EditProduct />} />
        <Route path='/edit/products' element={<EditProduct />} />
        <Route path='*' element={<ErrorPage />}></Route>
      </Routes>
    </>

  )
}

export default App
