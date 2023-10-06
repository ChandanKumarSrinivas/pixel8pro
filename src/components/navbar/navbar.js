import React from 'react'
import './navbar.scss'
import glogo from '../../images/glogo.png'

export default function navbar() {
  return (
    <nav className='navbar-'>
      <div className='imgCnt'>
        <img src={glogo} alt='glogo' id='glogo'/>
      </div>
        <div className='container-'>
          <ul>
            <li><a href='#overview'>Overview</a></li>
            <li><a href='#firstpage'>Features</a></li>
            <li><a href='#Cameras'>Cameras</a></li>
            {/* <li><a href='#Performance'>Performance</a></li> */}
          </ul>
        </div>
        <div className='buyNow'>
          <button className='buyButton'>Buy now</button>
        </div>

    </nav>
  )
}
