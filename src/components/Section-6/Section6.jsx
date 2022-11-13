import React from "react";
import "./section6.css";
// import backimg from '../../Images/s6-main'
const Section6 = () => {
  return (
    <>
      <div className="section6-mainContainer">
        <div className="section6-bacImg">
          <div className="section6-sec1">
            <p
              className="s6-text1"
              style={{ fontWeight: "50", marginBottom: "10px" }}
            >
              DISCOVER
            </p>
            <p
              className="s6-text1"
              style={{
                fontWeight: "600",
                marginBottom: "20px",
                lineHeight: "50px",
              }}
            >
              GRAPHIC DESIGN IDEAS <br /> AND SERVICES
            </p>
            <p
              className="s6-text1 "
              style={{
                fontSize: "30px",
                fontWeight: "100",
                lineHeight: "40px",
              }}
            >
              FROM BRANDING TO MARKETING
            </p>
            <div className="Searchbar-S6">
              <input
                className="search-S6"
                type="text"
                id="name"
                name="name"
                placeholder="What kind of service you are looking for?"
              ></input>
              <button className="button-search-S6">Search</button>
            </div>
          </div>
          <div className="section6-sec2">
            <div className="section6-grid2">
                <div className="section6-card1">

                </div>
                <div className="section6-card2">

                </div>
                <div className="section6-card3">

                </div>
                <div className="section6-card4">

                </div>
              </div>
          </div>
        </div>
        <div className="section6-textsec">
            <div className="section6-headtext">
                <div className="section-mainText">
                    Popular: &nbsp; &nbsp; 
                </div>
                <div className="section-Text2">
                    Website Design  Logo Design Brochure Label Design
                </div>
            </div>
            <div className="Section6-line">
          <div className="s6-line"></div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Section6;
