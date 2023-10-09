import React from 'react'
import Fst from '../../images/phonepopup.mp4'
import '../main/main.scss'

export default function main() {
  return (
    <div className='firstpage'>
      <div className='cardContainer'>
        <div className='oneOne'>
          <p>The future of photography, powered by AI.</p>
          <br></br>
          {/* <p>Google's flagship killer smartphone</p> */}
        </div>
        <div className='oneTwo'>
          <video width="" height="" loop autoPlay>
            <source src={Fst} type="video/mp4"></source>
                Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
        )
}
