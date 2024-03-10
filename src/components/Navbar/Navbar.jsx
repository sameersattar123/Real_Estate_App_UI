import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/logo (2).png";
import menu from "../../assets/menu.png";

const Navbar = () => {

  const [open, setOpen] = useState(false)
  return (
    <div className="navbar">
      <div className="left">
        <a href="/" className="logo">
          <img src={logo} alt="" />
          <span>SamiEstate</span>
        </a>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/other">Agents</a>
      </div>
      <div className="right">
        <a href="/signin">Sign in</a>
        <a href="/signup" className="register">Sign up</a>

        <div className="menuIcon">
          <img src={menu} alt="" onClick={() => setOpen((prev) => !prev)} />
        </div>

        <div className={open ? "menu active" : "menu"} >
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/other">Agents</a>
        <a href="/other">Sign in</a>
        <a href="/other">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
