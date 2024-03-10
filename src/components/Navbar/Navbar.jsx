import React from "react";
import "./Navbar.scss";
// import { NavLink  } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <a to="/">
          <img src="" alt="" />
          <span>SamiEstate</span>
        </a>
      <a to="/">Home</a>
      <a to="/about">About</a>
      <a to="/contact">Contact</a>
      <a to="/other">Other</a>
      </div>
      <div className="right">
        <a to="/signin">Sign in</a>
        <a to="/signup">Sign up</a>
      </div>
    </div>
  );
};

export default Navbar;
