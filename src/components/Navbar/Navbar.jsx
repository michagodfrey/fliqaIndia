import React, { useState } from "react";
import "./navbar.css";
import logo from "../../Images/logo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <div className="logo-optionWrapper">
        <span className="nav-logo">
          <img className="nav-logo-img" src={logo} alt="image" />
        </span>
        <div className={`nav-items ${isOpen && "open"}`}>
          <a href="/home">Home</a>
          <a href="/service">Service</a>
          <a href="/contact">Portfolio</a>
          <a href="/contact">Comunnity</a>
          <a href="/contact">Blog</a>
        </div>
      </div>
      <div className={`nav-buttons ${isOpen && "open"}`}>
        <button className="button1">Sign Up</button>
        <button className="button2">Sign In</button>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
