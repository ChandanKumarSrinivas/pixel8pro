import React from 'react'
import './features.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { container, row, col } from 'react-bootstrap'
import fi1 from '../../images/front.webp'
import fi2 from '../../images/pic1.webp'
import fi3 from '../../images/charge.webp'
import fi4 from '../../images/chip.webp'
import fi5 from '../../images/12gb.svg'
import fi6 from '../../images/secure.svg'
import fi7 from '../../images/securityUpdates.svg'

export default function main() {
    return (
        <div id='firstpage'>
            <h>Features</h>
            {/* <p>hi</p>
        <div>
        display
        </div>
        <div>
        aluminium
        </div>
        <div>
        battery
        </div>
        <div>
        processor
    </div> */}
            <div className="container featuresContainer">
                <div className="row">
                    <div className="col fc1">
                        <p>6.7" Super Actua display. Pixel's brightest ever</p>
                        <img src={fi1} alt='fi1' />
                    </div>
                    <div className="col fc2">
                        <p>Polished aluminium frame and matt back glass.</p>
                        <img src={fi2} alt='fi1' />
                    </div>
                </div>
                <div className="row">
                    <div className="col fc3">
                        <img src={fi3} alt='fi1' />
                        <p>24+ hour battery charges faster than ever.</p>
                    </div>
                    <div className="col fc4">
                        <p>The power and brains behind Pixel 8 Pro.</p>
                        <img src={fi4} alt='fi1' />
                        <div className='stxt'><p>The new Google Tensor G3 chip is custom-designed with Google AI for cutting-edge photo and video features and smarter ways to help throughout the day. And it makes Pixel 8 Pro super fast and efficient.</p></div>
                    </div>
                </div>
                <div className='row lastrow'>
                    <div className='col fc5'>
                        <img src={fi5} alt='fi1' />
                        <p>Powerful performance with 12 GB RAM.</p>
                    </div>
                    <div className='col fc6'>
                        <img src={fi6} alt='fi1' />
                        <p>Pixel helps to keep you and your info safe.</p>
                    </div>
                    <div className='col fc7'>
                        <img src={fi7} alt='fi1' />
                        <p>Seven years of security updates and new Feature Drops.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}