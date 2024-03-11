import React from "react";
import { Outlet } from "react-router-dom";
import "./Layout.scss";
import Navbar from "..//../components/Navbar/Navbar"

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}; 

export default Layout;
