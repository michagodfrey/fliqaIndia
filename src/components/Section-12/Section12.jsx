import React from "react";
import "./section12.css";
import img1 from "../../Images/s12-1.png";
import img2 from "../../Images/s12-2.png";
import img3 from "../../Images/s12-3.png";
import img4 from "../../Images/s12-4.png";
import img5 from "../../Images/s12-5.png";
const Section12 = () => {
  return (
    <>
      <div className="section12-mainContainer">
        <div className="s12-headText">
          <p className="s12-text1">Our Success</p>
          <p className="s12-text2">Journey of our success.</p>
        </div>
        <div className="s12-gridContainer">
          <div className="s12-card ">
            <div className="s12-cardImageContainer">
              <img className="s12-image " src={img1} alt="" srcset="" />
            </div>
            <p className="s12-text1-card">Back in 2019, FliqaIndia recognize as a startup with DPIT in Startup India.</p>
          </div>
          <div className="s12-card">
          <div className="s12-cardImageContainer">
              <img className="s12-image " src={img2} alt="" srcset="" />
            </div>
            <p className="s12-text1-card">Appreciation from Startup Bengal for our creawtive startup community.</p>
          </div>
          <div className="s12-card ">
          <div className="s12-cardImageContainer">
              <img className="s12-image " src={img3} alt="" srcset="" />
            </div>
            <p className="s12-text1-card">FliqaIndia got featured on Ypurstory. Click here</p>
          </div>
          <div className="s12-card ">
          <div className="s12-cardImageContainer">
              <img className="s12-image " src={img4} alt="" srcset="" />
            </div>
            <p className="s12-text1-card">Recieved awards frmo ImagesBazaar on leading creative industry.</p>
          </div>
          <div className="s12-card ">
          <div className="s12-cardImageContainer">
              <img className="s12-image " src={img5} alt="" srcset="" />
            </div>
            <p className="s12-text1-card">Top ten in Inuit Circle Codeathon 2020.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section12;
