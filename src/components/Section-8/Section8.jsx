import React from "react";
import "./section8.css";
import img1 from "../../Images/s8-1.png";
import img2 from "../../Images/s8-2.png";
import img3 from "../../Images/s8-3.png";
import img4 from "../../Images/s8-4.png";

const Section8 = () => {
  return (
    <>
      <div className="section8-mainContainer">
        <p className="s8-text1">Real Wedding</p>
        <p className="s8-text2">List your wedding and browse portfolio</p>
        <div className="s8-gridContainer">
          <div className="s8-card img1sh">
            <img className="s8-image " src={img1} alt="" srcset="" />
            <p className="s8-text1-card">Danielle & Ronnie</p>
            <p className="s8-text2-card">38 photos. Kittery,Polland</p>
          </div>
          <div className="s8-card img2sh">
            <img className="s8-image " src={img2} alt="" srcset="" />
            <p className="s8-text1-card">Danielle & Ronnie</p>
            <p className="s8-text2-card">38 photos. Kittery,Polland</p>
          </div>
          <div className="s8-card img3sh">
            <img className="s8-image " src={img3} alt="" srcset="" />
            <p className="s8-text1-card">Danielle & Ronnie</p>
            <p className="s8-text2-card">38 photos. Kittery,Polland</p>
          </div>
          <div className="s8-card img4sh">
            <img className="s8-image " src={img4} alt="" srcset="" />
            <p className="s8-text1-card">Danielle & Ronnie</p>
            <p className="s8-text2-card">38 photos. Kittery,Polland</p>
          </div>
        </div>
        <div className="s8-buttonContainer">
        <button className="s8-button">View more weddings &#x2794; </button>
        </div>
        <div className="Section6-line">
          <div className="s6-line"></div>
        </div>
      </div>
    </>
  );
};

export default Section8;
