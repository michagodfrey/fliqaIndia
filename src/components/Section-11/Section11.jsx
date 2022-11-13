import React from "react";
import "./section11.css";
import img1 from "../../Images/s11-1.png";
import img2 from "../../Images/s11-2.png";
import img3 from "../../Images/s11-3.png";
import img4 from "../../Images/s11-4.png";
import img5 from "../../Images/s11-5.png";
import img6 from "../../Images/s11-6.png";
import img7 from "../../Images/s11-7.png";
import img8 from "../../Images/s11-8.png";

const Section11 = () => {
  return (
    <>
      <div className="s11-mainContainer">
        <div className="s11-grid">
          {/* <div className="s11-grid-cols"> */}
          <div className="s11-grid-col1">
            <div className="s11-imgContainer">
              <img className="s11-image-col1" src={img1} alt="" srcset="" />
            </div>
            <div className="s11-imgContainer">
              <img className="s11-image-col1" src={img2} alt="" srcset="" />
            </div>
          </div>
          <div className="s11-grid-col2">
            <div className="s11-grid-col2-mainsec1">
              <div className="s11-grid-col2-sec">
                <img
                  className="s11-grid-col2-secImage"
                  src={img3}
                  alt=""
                  srcset=""
                  style={{ marginLeft: "5px" }}
                />
                <p className="s11-grid-col2-secText">4.9/5</p>
              </div>
              <div className="s11-grid-col2-sec">
                <img
                  className="s11-grid-col2-secImage"
                  src={img4}
                  alt=""
                  srcset=""
                  style={{ height: "39px", width: "174px" }}
                />
                <p className="s11-grid-col2-secText">4.9/5</p>
              </div>
              <div className="s11-grid-col2-sec">
                <img
                  className="s11-grid-col2-secImage"
                  src={img5}
                  alt=""
                  srcset=""
                  style={{ height: "52px", width: "107px" }}
                />
                <p className="s11-grid-col2-secText">5.0/5</p>
              </div>
            </div>
            <div className="s11-grid-col2-mainsec2">
              <div className="s11-grid-col2-sec">
                <img
                  className="s11-grid-col2-secImage"
                  src={img6}
                  alt=""
                  srcset=""
                  style={{
                    height: "54px",
                    width: "197px",
                    marginLeft: "-19px",
                  }}
                />
                <p className="s11-grid-col2-secText">4.9/5</p>
              </div>
              <div className="s11-grid-col2-sec">
                <img
                  className="s11-grid-col2-secImage"
                  src={img7}
                  alt=""
                  srcset=""
                  style={{ height: "69px", width: "69px", marginLeft: "6px" }}
                />
                <p className="s11-grid-col2-secText">4.8/5</p>
              </div>
              <div className="s11-grid-col2-sec">
                <img
                  className="s11-grid-col2-secImage"
                  src={img8}
                  alt=""
                  srcset=""
                  style={{ height: "35px", width: "101px" }}
                />
                <p className="s11-grid-col2-secText">5.0/5</p>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Section11;
