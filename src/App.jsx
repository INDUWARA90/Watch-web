import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from '../src/Componets/common/Header/Header'
import Footer from '../src/Componets/common/Footer/Footer'
import Home from './Componets/Pages/Home/Home'
import Product from './Componets/Pages/Product/Product'
import Arrival from './Componets/Pages/Arrival/Arrival'
import Offers from './Componets/Pages/Offers/Offers'

function App() {


  return (
    <>
      <Header />

      <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product' element={<Product />} />
            <Route path='/Newproduct' element={<Arrival />} />
            <Route path='/offers' element={<Offers />} />
      </Routes>

      <Footer />
     
    </>
  )
}

export default App
