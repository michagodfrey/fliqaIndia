import React from "react";
import "./section7.css";

import img1 from "../../Images/s7-1.png";
import img2 from "../../Images/s7-2.png";
import img3 from "../../Images/s7-3.png";

const Section7 = () => {
  return (
    <>
      <div className="Section7-main">
        <div className="Section7-mainText">
          <div className="Section7-subText">
            <div className="Section7-heading">Our Blogs</div>
            <div className="Section7-heading2">Check out our Latest Blog</div>
          </div>
        </div>
        <div className="Section7-grid">
          <div className="img-div-s7">
            <img className="s7-img" src={img1} alt="" srcset="" />
            <div className="s7-shadow">
              <h3 className="s7-boxText">Featured on: Sep 15,2021</h3>

              <p className="s7-boxText2">
                Wedding <br />
                Photograpgy <br />
                at Goa
              </p>
            </div>
          </div>
          <div className="img-div-s7">
            <img className="s7-img" src={img2} alt="" srcset="" />
            <div className="s7-shadow">
              <h3 className="s7-boxText">Featured on: Sep 15,2021</h3>

              <p className="s7-boxText2">
                Photography: <br />
                Expectations <br />
                vs. Reality
              </p>
            </div>
          </div>
          <div className="s7-TN">
            <div className="s7-headTextDiv">
              <div className="s7-headText1">Trending Now</div>
              <div className="s7-headText2">View All</div>
            </div>
            <div className="s7-TN-col1">
              <img className="s7-Tnimg" src={img3} alt="" srcset="" />
              <div className="s7-colText">
                <p className="s7-colText1">
                  Creative Industries are int he verge of depletion due to
                  COVID-19
                </p>
                <p className="s7-colText2">
                  In a period where many industries remain highly unclear,
                  others want to grasp how COVID-19 impact
                </p>
              </div>
            </div>
            <div className="s7-colLine">
              <div className="s7-line"> </div>
            </div>
            <div className="s7-TN-col1">
              <img className="s7-Tnimg" src={img2} alt="" srcset="" />
              <div className="s7-colText">
                <p className="s7-colText1">
                  Photography: Expectaions vs. Reality
                </p>
                <p className="s7-colText2">
                  Most of the time without ant hands-on experience in photography, professional and advnced photography actually
                </p>
              </div>
            </div>
            <div className="s7-colLine">
              <div className="s7-line"> </div>
            </div>
            <div className="s7-TN-col1">
              <img className="s7-Tnimg" src={img1} alt="" srcset="" />
              <div className="s7-colText">
                <p className="s7-colText1">
                  Wedding Photography at Goa
                </p>
                <p className="s7-colText2">
                  Wedding Photography in GOa If not, every couple when the make their list of Pre-wedding shoot
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section7;
