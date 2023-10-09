import React from 'react'
import '../Buynow/buynow.scss'
import prodimg1 from '../../images/prod1.webp'
import prodimg2 from '../../images/prod2.webp'
import prodimg3 from '../../images/prod3.webp'
import prodimg4 from '../../images/prod4.webp'
import prodimg5 from '../../images/prod5.webp'
import prodimg6 from '../../images/prod6.webp'

export default function buynow() {
    return (
        <div className='fourthPage'>
            <h>More products from Pixel Portfolio.</h>
            <div className='bnContainer container-fluid'>
                <div className='row ps1'>
                    <div className='col prod1'>
                        <div className='prodim prodim1'>
                            <img src={prodimg1} alt='prodimg1' />
                        </div>
                        <br />
                        <h3>Pixel 8 pro</h3>
                        <h4>The best of Google. Even more pro.</h4>
                        <br />
                        <h5>From $999</h5>
                        <p>or $27.75/month with 36-month financing*</p>
                        <button className='buybtn'>Pre-order</button>
                    </div>
                    <div className='col prod2'>
                        {/* <div className='row'> */}
                        <div className='col prodim prodim2'>
                            <img src={prodimg2} alt='prodimg1' />
                        </div>
                        <br />
                        <h3>Pixel 8</h3>
                        <h4>Powerful in every way. Helpful every day.</h4>
                        <br />
                        <h5>From $699</h5>
                        <p>or $19.42/month with 36-month financing*</p>
                        <button className='buybtn'>Pre-order</button>
                        {/* </div> */}
                    </div>
                    <div className='col prod3'>
                        <div className='prodim prodim3'>
                            <img src={prodimg3} alt='prodimg1' />

                        </div>
                        <br />
                        <h3>Pixel Fold</h3>
                        <h4>Power and innovation. Folded into one.</h4>
                        <br />
                        <h5>From $1,799</h5>
                        <p>or $49.97/month with 36-month financing*</p>
                        <button className='buybtn'>Buy</button>
                    </div>
                </div>
                <div className='row ps32'>
                    <div className='col prod4'>
                        <div className='prodim prodim4'>
                            <img src={prodimg4} alt='prodimg1' />

                        </div><br />
                        <h3>Google Pixel Tablet</h3>
                        <h4>Help in your hand. And at home.</h4>
                        <br />
                        <h5>From $499</h5>
                        <p>or $41.58/month with 12-month financing*</p>
                        <button className='buybtn'>Buy</button>
                    </div>
                    <div className='col prod5'>
                        <div className='prodim prodim5'>
                            <img src={prodimg5} alt='prodimg1' />

                        </div>
                        <br />
                        <h3>Google Pixel Watch 2</h3>
                        <h4>Google help. Fitbit health. Made for you.</h4>
                        <br />
                        <h5>From $349.99</h5>
                        <p>or $29.17/month with 12-month financing*</p>
                        <button className='buybtn'>Pre-order</button>
                    </div>
                    <div className='col prod6'>
                        <div className='prodim prodim6'>
                            <img src={prodimg6} alt='prodimg1' />

                        </div><br />
                        <h3>Pixel Buds Pro</h3>
                        <h4>Premium sound, pristine calls.</h4>
                        <br />
                        <h5>$199.99</h5>
                        <p>or $16.67/month with 12-month financing*</p>
                        <button className='buybtn'>Buy</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
