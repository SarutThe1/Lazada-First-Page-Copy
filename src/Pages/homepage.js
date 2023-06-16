import React from 'react'

import './homepage.css'
import NavbarMain from '../layouts/NavbarMain'

//images
import banner from '../images/top-banner.jpg'
import logo from '../images/laz.png'
import nufg from '../images/nufg.jpg'

const homepage = () => {

  return (
    <>
    <div style={{backgroundColor:'#01bfa6'}}>
        <div className='centered'>
            <img src={banner} alt='banner'/>
            <button className='CloseBanner'>X</button>
        </div>
    </div>
    <NavbarMain/>
    <div style={{backgroundColor:'white'}}>
        <div className='centered'>
            <img src={logo} alt='logo' className='Pic1'/>
            <input className='input-search' type='text' placeholder='Search in Lazada' />
            <button className='search-button'>s</button>
            <img src={nufg} alt='NewUserFreeGift' className='Pic2'/>
        </div>
    </div>



    </>
  )
}

export default homepage