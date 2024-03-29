import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/logo (2).png";
import menu from "../../assets/menu.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const user = true;

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" className="logo">
          <img src={logo} alt="" />
          <span>SamiEstate</span>
        </Link>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/other">Agents</Link>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
             <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <span>John Doe</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <Link to="/signin">Sign in</Link>
            <Link to="/signup" className="register">
              Sign up
            </Link>
          </>
        )}

        <div className="menuIcon">
          <img src={menu} alt="" onClick={() => setOpen((prev) => !prev)} />
        </div>

        <div className={open ? "menu active" : "menu"}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/other">Agents</Link>
          <Link to="/other">Sign in</Link>
          <Link to="/other">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
