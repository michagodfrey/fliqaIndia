import React from "react";
import "./section9.css";
import img1 from "../../Images/s9-1.png";
import img2 from "../../Images/s9-2.png";
import img3 from "../../Images/s9-3.png";
import img4 from "../../Images/s9-4.png";
import img5 from "../../Images/s9-5.png";

const Section9 = () => {
  return (
    <>
      <div className="section9-mainContainer">
        <div className="s9-headText">
          <p className="s9-text1">Best Offers</p>
          <p className="s9-text2">Discover the best offers on our services</p>
        </div>
        <div className="s9-divcontainer">
          
        <div className="s9div1">.</div>
        <div className="s9div2">.</div>
        </div>
        <div className="s9-gridContainer">
          <div className="s9-card ">
            <img className="s9-image " src={img1} alt="" srcset="" />
            <div className="s9-shadow">
              <div className="s9-shadowContent">
                <p className="s9-imageText1">
                  Wedding <br />
                  Pacakges
                </p>
                <div className="Section9-shadowline">
                  <div className="s9-shadowline  "></div>
                </div>
                <p className="s9-imageText2">Discount</p>
                <img className="s9-discountImg" src={img5} alt="" srcset="" />
              </div>
            </div>

            <p className="s9-text1-card">Book Now</p>
          </div>
          <div className="s9-gridLine">
            <div className="s9-lineDiv"> </div>
            <div className="s9-card ">
              <img className="s9-image " src={img2} alt="" srcset="" />
              <div className="s9-shadow">
              <div className="s9-shadowContent">
                <p className="s9-imageText1">
                  Website <br />
                  Design
                </p>
                <div className="Section9-shadowline">
                  <div className="s9-shadowline  "></div>
                </div>
                <p className="s9-imageText2">Discount</p>
                <img className="s9-discountImg" src={img5} alt="" srcset="" />
              </div>
              </div>
              <p className="s9-text1-card">Book Now</p>
            </div>
          </div>
          <div className="s9-gridLine">
            <div className="s9-lineDiv"> </div>
            <div className="s9-card ">
              <img className="s9-image " src={img3} alt="" srcset="" />
              <div className="s9-shadow">
              <div className="s9-shadowContent">
                <p className="s9-imageText1">
                  Beach <br />
                  Photograhy
                </p>
                <div className="Section9-shadowline">
                  <div className="s9-shadowline  "></div>
                </div>
                <p className="s9-imageText2">Discount</p>
                <img className="s9-discountImg" src={img5} alt="" srcset="" />
              </div>
              </div>
              <p className="s9-text1-card">Book Now</p>
            </div>
          </div>
          <div className="s9-gridLine">
            <div className="s9-lineDiv"> </div>
            <div className="s9-card ">
              <img className="s9-image " src={img4} alt="" srcset="" />
              <div className="s9-shadow">
              <div className="s9-shadowContent">
                <p className="s9-imageText1">
                  Wedding <br />
                  Pacakges
                </p>
                <div className="Section9-shadowline">
                  <div className="s9-shadowline  "></div>
                </div>
                <p className="s9-imageText2">Discount</p>
                <img className="s9-discountImg" src={img5} alt="" srcset="" />
              </div>
              </div>
              <p className="s9-text1-card">Book Now</p>
            </div>
          </div>
          
        </div>
        <div className="Section6-line">
          <div className="s6-line"></div>
        </div>
      </div>
    </>
  );
};

export default Section9;
