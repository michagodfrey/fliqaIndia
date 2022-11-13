import React from "react";
import "./section10.css";
import img1 from "../../Images/s10-1.png";
import img2 from "../../Images/s10-2.png";

const Section10 = () => {
  return (
    <>
      <div className="s10-mainContainer">
        <div className="s10-innerContainer">
          <div className="s10-innerContainer1">
            <img className="s10-img1" src={img1} alt="" srcset="" />
          </div>
          <div className="s10-innerContainer2">
            <div className="s10-innerContainer2TextItem">
              <div className="s10-text">
                <p className="s10-text1">Testimoinals</p>
                <p className="s10-text2">Words from our clients</p>
              </div>
              <div className="s10-buttonSection">
                <button className="s10-buttonStyle1">Google</button>
                <button className="s10-buttonStyle2">Facebook</button>
                <button className="s10-buttonStyle2">Weddingwire</button>
                <button className="s10-buttonStyle2">WedmeGood</button>
              </div>
            </div>
            <div className="s10-innerContainer2ComponentItem">
              <div className="s10-backgroundColor">.</div>
              <div className="s10-grid">
                <div className="s10-cardContainer c1">
                  <div className="s10-card">
                    <div className="s10-cardTextDiv">
                      <p className="s10-cardText1">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quod, commodi corrupti unde corporiath laoreet
                      </p>
                      <p className="s10-cardText2">~ Random Name</p>
                    </div>
                  </div>
                  <div className="s10-cardImageDiv">
                    <img
                      className="s10-cardImage"
                      src={img2}
                      alt=""
                      srcset=""
                    />
                  </div>
                </div>
                <div className="s10-cardContainer c2">
                  <div className="s10-card">
                    <div className="s10-cardTextDiv">
                      <p className="s10-cardText1">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quod, commodi corrupti unde corporisath laoreet
                      </p>
                      <p className="s10-cardText2">~ Random Name</p>
                    </div>
                  </div>
                  <div className="s10-cardImageDiv">
                    <img
                      className="s10-cardImage"
                      src={img2}
                      alt=""
                      srcset=""
                    />
                  </div>
                </div>
                <div className="s10-cardContainer c3">
                  <div className="s10-card">
                    <div className="s10-cardTextDiv">
                      <p className="s10-cardText1">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quod, commodi corrupti unde corporisath laoreet
                      </p>
                      <p className="s10-cardText2">~ Random Name</p>
                    </div>
                  </div>
                  <div className="s10-cardImageDiv">
                    <img
                      className="s10-cardImage"
                      src={img2}
                      alt=""
                      srcset=""
                    />
                  </div>
                </div>
                <div className="s10-cardContainer">
                  <div className="s10-card">
                    <div className="s10-cardTextDiv">
                      <p className="s10-cardText1">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quod, commodi corrupti unde corporisath laoreet
                      </p>
                      <p className="s10-cardText2">~ Random Name</p>
                    </div>
                  </div>
                  <div className="s10-cardImageDiv">
                    <img
                      className="s10-cardImage"
                      src={img2}
                      alt=""
                      srcset=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="Section10-line">
          <div className="s10-line"></div>
        </div>
          <hr className="Section10-line-hr"/>
    </>
  );
};

export default Section10;
