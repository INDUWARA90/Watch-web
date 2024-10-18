import React from 'react'
import './arrival.css'
import NewArrivalCard from '../../common/NewArrivalCard/NewArrivalCard'

function Arrival() {
  return (
   <>

   <h1 className='text-center mb'>New Arrival Products</h1>
   <div className='container mt-5'>
            
            <div className='row gap-5'>

            <div className='col'><NewArrivalCard /></div>
            <div className='col'><NewArrivalCard /></div>
            <div className='col'><NewArrivalCard /></div>
            <div className='col'><NewArrivalCard /></div>

            </div>
         
      </div>
   
   </>
  )
}

export default Arrival