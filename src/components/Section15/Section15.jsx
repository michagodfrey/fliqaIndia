import React from 'react'
import './section15.css'
import logo1 from '../../Images/s15-2.png'
import logo2 from '../../Images/s15-3.png'
import logo3 from '../../Images/s15-5.png'
import logo4 from '../../Images/s15-6.png'
import logo5 from '../../Images/s15-7.png'
const Section15 = () => {
  return (
    <>
    <div className="s15-mainContainer">
        <div className="s15-grid">
            <div className="sec15-gridCol1">
                <p className='s15-col1Text1'>Never miss a thing</p>
                <div className="Searchbar-S15">
              <input
                className="search-S15"
                type="text"
                id="name"
                name="name"
                placeholder="Email Address"
              ></input>
              <button className="button-search-S15">Subscribe</button>
            </div>
              <p className='s15-col1Text2'>Be in touch</p>
              <div className="s15-logoContainer">
                <img src={logo1} alt="" srcset="" style={{width:"20px",height:"20px",margin:"4px",marginLeft:"-3px"}}/>
                <img src={logo2} alt="" srcset="" style={{width:"20px",height:"20px",margin:"4px"}}/>
                <img src={logo3} alt="" srcset="" style={{width:"20px",height:"20px",margin:"4px"}}/>
                <img src={logo4} alt="" srcset="" style={{width:"20px",height:"20px",margin:"4px"}}/>
                <img src={logo5} alt="" srcset="" style={{width:"20px",height:"20px",margin:"4px"}}/>
              </div>
            </div>
            <div className="s15-gridCol2">
                <p className='s15-col2Text1'>Never miss a thing.</p>
                <div className="s15-col2Sec">
                <div className="s15-col2Sec1">
                    <p>Services</p>
                    <p>Blog</p>
                    <p>Portfolio</p>
                </div>
                <div className="s15-col2Sec2">
                    <p>Tutorilas</p>
                    <p>Careers</p>
                    <p>Film</p>
                </div>
                </div>
            </div>
            <div className="s15-gridCol3">
                <h2 className='s15-grid3Text'>Never miss a thing.</h2>
                <p>Contact us</p>
                <p>Feedback</p>
                <p>FAQ</p>
                <p>Terms and conditions</p>
                <p>Privacy Policy</p>
                <p>Data Detection Protocol</p>
            </div>
        </div>
        <div className="s15-footer">
            <div className="s15-footerText">
                <p>2019-2021, FliqaIndia Pvt Ltd.&nbsp;&nbsp;&nbsp; -ALL RIGHT RESERVED </p>
                <p>POWERED BY FLIQAINDIA PVT.LTD.</p>
                <p>VERSION 5.1.5</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Section15