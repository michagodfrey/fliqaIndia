import React from "react";
import "./searchSection.css";
import Ss1 from "../../Images/Ss-1.png";
import Ss2 from "../../Images/Ss-2.png";
import Ss3 from "../../Images/Ss-3.png";
import Ss4 from "../../Images/Ss-4.png";

const SearchSection = () => {
  return (
    <>
      <div className="main-Ss">
        <h1 className="first-Ss">India's Leading Creative Platform</h1>
        <h3 className="second-Ss">
          Experience hassle free bookings. Trusted by 2500+ Customers
        </h3>
        <div className="Searchbar-Ss">
          <input
            className="third-Ss"
            type="text"
            id="name"
            name="name"
            placeholder="Search service, blog and many more..."
          ></input>
          <button className="button-third-Ss">Search</button>
        </div>
        <div className="fourt-Ss">
          <main>
            <div class="div1">
              <img
                style={{ width: " 142.17px", height: "128px" }}
                src={Ss1}
                alt=""
              />
              <div className="fourt-Ss-text">
                <div className="fourt-Ss-dark">Verified Reviews</div>
                <div className="fourt-Ss-light">For Verified reviewers</div>
              </div>
            </div>
            <div class="div1">
              <img
                style={{ width: " 142.17px", height: "128px" }}
                src={Ss2}
                alt=""
              />
              <div className="fourt-Ss-text">
                <div className="fourt-Ss-dark">Top Articles</div>
                <div className="fourt-Ss-light">Helps you decide</div>
              </div>
            </div>
            <div class="div1">
              <img
                style={{ width: " 142.17px", height: "128px" }}
                src={Ss3}
                alt=""
              />
              <div className="fourt-Ss-text">
                <div className="fourt-Ss-dark">Write Share Win Contest</div>
                <div className="fourt-Ss-light">Earn cash for reviews</div>
              </div>
            </div>
            <div class="div1">
              <img
                style={{ width: " 142.17px", height: "128px" }}
                src={Ss4}
                alt=""
              />
              <div className="fourt-Ss-text">
                <div className="fourt-Ss-dark">MouthShut for Brands</div>
                <div className="fourt-Ss-light">Request a Demo</div>
              </div>
            </div>
          </main>
        </div>
        <div className="Ss-line">
          <div className="line"></div>
        </div>
      </div>
    </>
  );
};

export default SearchSection;
