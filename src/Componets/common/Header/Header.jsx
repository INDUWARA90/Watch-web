import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'


function Header() {
  return (
  <>
     <div className="container  ">
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <span className="fs-2 text-black ">Watch World</span>
      </a>

      <ul className="nav nav-pills">
        <li className="nav-item"><Link to='/' className="nav-link text-black" aria-current="page">Home</Link></li>
        <li className="nav-item"><Link to='/product' className="nav-link text-black">Product</Link></li>
        <li className="nav-item"><Link to='/Newproduct' className="nav-link text-black">Arrival</Link></li>
        <li className="nav-item"><Link to='/offers' className="nav-link text-black">Offers</Link></li>
        <li className="nav-item"><a href="#" className="nav-link text-black">Collection</a></li>
        <li className="nav-item"><a href="#" className="nav-link text-black">Cart</a></li>
      </ul>
    </header>
  </div>         
  </>
  )
}

export default Header