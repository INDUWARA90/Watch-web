import React from 'react'
import './offers.css'
import OfferProduct from '../../common/OfferProduct/OfferProduct'

function Offers() {
  return (
    <>
    
    <h1 className='text-center mb'>These Day's Running Offers</h1>
   <div className='container mt-5'>
            
            <div className='row gap-5'>
            
             <div className='col'><OfferProduct /></div>
             <div className='col'><OfferProduct /></div>
             <div className='col'><OfferProduct /></div>
             <div className='col'><OfferProduct /></div>
              
               

            </div>
         
      </div>
    
    </>
  )
}

export default Offers