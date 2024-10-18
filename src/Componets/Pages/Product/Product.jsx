import React from 'react'
import './product.css'
import ProductCard from '../../common/ProductCard/ProductCard'

function Product() {
  return (
    <>

      <div className='d-flex align-content-center justify-content-center gap-3'>
          <input type="text"  className='input-product-name' placeholder='Enter product name'/>
          <button className='Search-btn'>Serach</button>
      </div>

      <div className='container mt-5'>
            
            <div className='row gap-5'>

            <div className='col'><ProductCard /></div>
            <div className='col'><ProductCard /></div>
            <div className='col'><ProductCard /></div>
            <div className='col'><ProductCard /></div>

            </div>
         
      </div>
      

    </>
  )
}

export default Product