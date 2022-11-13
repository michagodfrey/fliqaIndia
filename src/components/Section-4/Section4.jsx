import React from 'react'
import './section4.css'
import img1 from '../../Images/s4-1.png'
import img2 from '../../Images/s4-2.png'
import img3 from '../../Images/s4-3.png'
import img4 from '../../Images/s4-4.png'
import img5 from '../../Images/s4-5.png'
import verilogo from '../../Images/verified.png'

const Section4 = () => {
  return (
    <>
     <div className="Section4-main">
        <div className="Section4-mainText">
            <div className="Section4-subText">
            <div className="Section4-heading">
                Find Trusted Associate
            </div>
            <div className="Section4-heading2">
                Find the best Fliqa Assocaite for your special day.
            </div>
            </div>
            <div className="Section4-sideText">See More &gt;&gt;</div>
        </div>
        <div className="Section4-grid">
            <div className="img-div-s4">
                <img className='s4-img' src={img1} alt="" srcset="" />
                <div className="s4-contentDiv">
                        <div className="s4-contentDiv-text">
                                <div className='s4-contentDiv-text-1'>Name Title</div>
                                <div className='s4-contentDiv-text-2'>Location:</div>
                        </div>
                        <div className="s4-contentDiv-veri">
                                <img className='s4-img2' src={verilogo} alt="" srcset="" />
                        </div>
                </div>
            </div>
            <div className="img-div-s4">
                <img className='s4-img' src={img2} alt="" srcset="" />
                <div className="s4-contentDiv">
                        <div className="s4-contentDiv-text">
                                <div className='s4-contentDiv-text-1'>Name Title</div>
                                <div className='s4-contentDiv-text-2'>Location:</div>
                        </div>
                        <div className="s4-contentDiv-veri">
                                <img className='s4-img2' src={verilogo} alt="" srcset="" />
                        </div>
                </div>
            </div>
            <div className="img-div-s4">
                <img className='s4-img' src={img3} alt="" srcset="" />
                <div className="s4-contentDiv">
                        <div className="s4-contentDiv-text">
                                <div className='s4-contentDiv-text-1'>Name Title</div>
                                <div className='s4-contentDiv-text-2'>Location:</div>
                        </div>
                        <div className="s4-contentDiv-veri">
                        <p className="veri-text">5.0 &#9733;</p>
                        </div>
                </div>
            </div>
            <div className="img-div-s4">
                <img className='s4-img' src={img4} alt="" srcset="" />
                <div className="s4-contentDiv">
                        <div className="s4-contentDiv-text">
                                <div className='s4-contentDiv-text-1'>Name Title</div>
                                <div className='s4-contentDiv-text-2'>Location:</div>
                        </div>
                        <div className="s4-contentDiv-veri">
                                <img className='s4-img2' src={verilogo} alt="" srcset="" />
                        </div>
                </div>
            </div>
            <div className="img-div-s4">
                <img className='s4-img' src={img5} alt="" srcset="" />
                <div className="s4-contentDiv">
                        <div className="s4-contentDiv-text">
                                <div className='s4-contentDiv-text-1'>Name Title</div>
                                <div className='s4-contentDiv-text-2'>Location:</div>
                        </div>
                        <div className="s4-contentDiv-veri">
                        <p className="veri-text">5.0 &#9733;</p>
                        </div>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default Section4