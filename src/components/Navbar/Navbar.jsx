import React, { useState } from "react";
import "./navbar.css";
import logo from "../../Images/logo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Navbar">
      <div className="logo-optionWrapper">
        <span className="nav-logo">
          <img className="nav-logo-img" src={logo} alt="Fliga India logo" />
        </span>
        <div className="nav-items">
          <a href="/home">Home</a>
          <a href="/service">Service</a>
          <a href="/contact">Portfolio</a>
          <a href="/contact">Community</a>
          <a href="/contact">Blog</a>
        </div>
      </div>
      <div className="nav-buttons">
        <button className="button1">Sign Up</button>
        <button className="button2">Sign In</button>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
        <div className={`${isOpen ? "bar-items bar-items--active" : "bar-items"}`}>
          <a href="/home">Home</a>
          <a href="/service">Service</a>
          <a href="/contact">Portfolio</a>
          <a href="/contact">Community</a>
          <a href="/contact">Blog</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
