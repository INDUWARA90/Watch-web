import React from 'react'
import welcomeWatch from '../../../assets/omega-blue.png'
import './home.css'
import NewArrivalCard from '../../common/NewArrivalCard/NewArrivalCard'


// images




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

        <hr className='HR-line' />
        <h1 className='text-center'>New Arrivals</h1>
        <hr className='HR-line' />


        <div className="container-new-products row mt-5">
          <div className='col'><NewArrivalCard /></div>
          <div className='col'><NewArrivalCard /></div>
          <div className='col'><NewArrivalCard /></div>

        </div>


      </div>


      {/*Section 03*/}

      <div className="container new-Arrivals  mb-5">

        <hr className='HR-line' />
        <h1 className='text-center'>Collections</h1>
        <hr className='HR-line' />

      </div>

      <div className='container conatiner-Border'>

        <div className="left-image">
          <img src="" alt="" />
        </div>
        <div className="mid-image">
          <div className="upper-mid">
            <div className="upper-mid-section-1"></div>
            <div className="upper-mid-section-2"></div>
          </div>
          <div className="lower-mid"></div>
        </div>
        <div className="right-image"></div>
      </div>

    </>
  )
}

export default Home