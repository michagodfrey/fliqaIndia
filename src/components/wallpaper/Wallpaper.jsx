import React from 'react'
import wallpaper from '../../Images/main-image.png'
import './wallpaper.css'

const Wallpaper = () => {
  return (
    <>
    <div className="main-screen">
        <img className='main-img' src={wallpaper} alt="" srcset="" />
    </div>
    </>
  )
}

export default Wallpaper