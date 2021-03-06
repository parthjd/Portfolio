import React from "react";

import { withRouter, Link } from "react-router-dom";

import "./Navbar.scss";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="page-links">
        <Link className="sidebar-menu hvr-underline-from-center" to="/">
          Home
        </Link>
        <span className="line">|</span>
        <Link className="sidebar-menu hvr-underline-from-center" to="/about">
          About
        </Link>
        <span className="line">|</span>
        <Link className="sidebar-menu hvr-underline-from-center" to="/resume">
          Resume
        </Link>
        <span className="line">|</span>
        <Link
          className="sidebar-menu hvr-underline-from-center"
          to="/portfolio"
        >
          Portfolio
        </Link>
        <span className="line">|</span>
        {/* <Link className="sidebar-menu hvr-underline-from-center" to="/Blog">
          Blog
        </Link> */}
        <Link className="sidebar-menu hvr-underline-from-center" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
}
export default withRouter(Sidebar);
