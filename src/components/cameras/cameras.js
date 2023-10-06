import React from 'react'
import './cameras.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { container, row, col } from 'react-bootstrap'
import fmp from '../../images/shot1.webp'
import ns1 from '../../images/nightshot1.webp'
import ns2 from '../../images/nightshot2.webp'

export default function main() {
    return (
        <div id='secondpage'>
            <h id='none'>Cameras</h><br></br>
            <h1>Four exceptional cameras.<br></br>Completely upgraded.</h1>
            <div className='imgContainer'>
                <img src={fmp} alt='fmp' />
            </div>
            <h1>50 MP main camera for even more detail.</h1>
            <p>The upgraded large main sensor with an ƒ/1.65 aperture creates the best low-light photos and videos for the most stunning close-ups.</p>

            <div className="container camerasContainer">
                <div className="row">
                    <div className="col cc1">
                        <img src={ns1} alt='ns1' />
                    </div>
                    <div className="col cc2">
                        <div className='stmtcnt'>
                            <h>Even more creative control.Even better photos.</h><br></br><br></br>
                            <p>Pro controls unlock advanced camera settings like shutter speed, ISO and more. And they enable high-resolution images for richer detail.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col cc3">
                        <div className='stmtcnt'>
                            <h>Better low-light photos. It's like night and day.</h><br></br><br></br>
                            <p>The Pixel 8 Pro camera delivers stunning photo quality from dusk until dawn with Night Sight and Astrophotography.</p>
                        </div>
                    </div>
                    <div className="col cc4">
                        <img src={ns2} alt='ns2' />
                    </div>
                </div>
            </div>

        </div>
    )
}