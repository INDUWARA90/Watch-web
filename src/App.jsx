import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from '../src/Componets/common/Header/Header'
import Footer from '../src/Componets/common/Footer/Footer'
import Home from './Componets/Pages/Home/Home'

function App() {


  return (
    <>
      <Header />

      <Routes>
            <Route path='/' element={<Home />} />
      </Routes>

      <Footer />
     
    </>
  )
}

export default App
