import React from 'react'
import './section5.css'
import img1 from '../../Images/s5-1.png'
import img2 from '../../Images/s5-2.png'
import img3 from '../../Images/s5-3.png'
import img4 from '../../Images/s5-4.png'

const Section5 = () => {
  return (
    <>
    <div className="section5-mainContainer">
        <p className='s5-text1'>Our Featured Services</p>
        <p className='s5-text2'>Discover the range of services provided by FliqaIndia</p>
        <div className="s5-gridContainer">
            <div className="s5-card">
                <img className='s5-image img1sh' src={img1} alt="" srcset="" />
                <p className="s5-cardText">Pre Wedding Photoshoot</p>
                <div className="s5-lineBox">
                    <div className="s5-line"></div>
                </div>
                <p className="s5-cardText2" style={{color:"#4c696d"}}>
                    <b>Starting at</b> 25,000 (One Day)
                </p>
                <div className="s5-bttonContainer">
                <button className='s5-button'>Know more</button>
                </div>
            </div>
            <div className="s5-card">
                <img className='s5-image img2sh' src={img2} alt="" srcset="" />
                <p className="s5-cardText">Wedding Photshoot</p>
                <div className="s5-lineBox">
                    <div className="s5-line"></div>
                </div>
                <p className="s5-cardText2" style={{color:"#4c696d"}}>
                    <b>Starting at</b> 65,000 (Two Day)
                </p>
                <div className="s5-bttonContainer">
                <button className='s5-button'>Know more</button>
                </div>
            </div>
            <div className="s5-card">
                <img className='s5-image img3sh' src={img3} alt="" srcset="" />
                <p className="s5-cardText">Portfolio Shoot</p>
                <div className="s5-lineBox">
                    <div className="s5-line"></div>
                </div>
                <p className="s5-cardText2 " style={{color:"#4c696d"}}>
                    <b>Starting at</b> 25,000 (Standard price for 6-8 hours)
                </p>
                <div className="s5-bttonContainer ">
                <button className='s5-button s5-btn-prop'>Know more</button>
                </div>
            </div>
            <div className="s5-card">
                <img className='s5-image img4sh' src={img4} alt="" srcset="" />
                <p className="s5-cardText">Pre Wedding Photoshoot</p>
                <div className="s5-lineBox">
                    <div className="s5-line"></div>
                </div>
                <p className="s5-cardText2" style={{color:"#4c696d"}}>
                    <b>Starting at</b> 25,000 (One Day)
                </p>
                <div className="s5-bttonContainer">
                <button className='s5-button'>Know more</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Section5