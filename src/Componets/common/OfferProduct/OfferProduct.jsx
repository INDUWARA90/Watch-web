import React from 'react'
import './OfferProduct.css'
import cartImage from '../../../assets/omega-blue.png'

function OfferProduct() {
    return (
        <>
            <div className="box-container-new">

                <div className='d-flex align-content-end justify-content-end'>
                    <button disabled={true} className='New-Button'>Offer</button>
                </div>

                <div className='Watch-description'>

                    <img src={cartImage} alt="..." className='Watch-image' />

                    <div className='text-center'>
                        <h2 className='fw-bold'>Blue Omega SA</h2>
                        <h4 className='fw-bold'>$890</h4>
                    </div>

                </div>

                <div className='watch-cart-buttons mt-4 mb-4'>
                    <button className='Read-More-Button'>Read More</button>
                    <button className='add-cart-Button'>Add To Cart</button>
                </div>

            </div>


        </>
    )
}

export default OfferProduct