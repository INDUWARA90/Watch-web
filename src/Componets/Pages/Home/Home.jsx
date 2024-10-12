import React from 'react'
import welcomeWatch from '../../../assets/omega-blue.png'
import './home.css'
import NewArrivalCard from '../../common/NewArrivalCard/NewArrivalCard'



function Home() {
  return (
    <>

      {/*Section 01*/}

      <div className="container-welcome-product">

        <div className="container-details">
          <h1>Pure Luxury</h1>
          <h4>Blue Omega SA</h4>
          <p>$3,900</p>
          <div className="buttons">
            <button className='Discover-button'>Discover</button>
            <button className='Add-to-cart-Button'>ADD TO CART</button>
          </div>

        </div>
        <img src={welcomeWatch} alt="..." className='W-Watch-image' />

      </div>


      {/*Section 02*/}

      <div className="container new-Arrivals mt-5">
        <hr />
        <h1 className='text-center'>New Arrivals</h1>
        <hr />

        <div className="container-new-products row">
          <div className='col'><NewArrivalCard /></div>
          <div className='col'><NewArrivalCard /></div>
          <div className='col'><NewArrivalCard /></div>
          
        </div>


      </div>


    </>
  )
}

export default Home