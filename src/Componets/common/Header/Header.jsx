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
        <li className="nav-item"><a href="#" className="nav-link text-black" aria-current="page">Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link text-black">Product</a></li>
        <li className="nav-item"><a href="#" className="nav-link text-black">Arrival</a></li>
        <li className="nav-item"><a href="#" className="nav-link text-black">Offers</a></li>
        <li className="nav-item"><a href="#" className="nav-link text-black">Collection</a></li>
        <li className="nav-item"><a href="#" className="nav-link text-black">Cart</a></li>
      </ul>
    </header>
  </div>         
  </>
  )
}

export default Header