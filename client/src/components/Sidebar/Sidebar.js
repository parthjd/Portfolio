import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./Sidebar.scss";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="page-links">
        <Link className="sidebar-menu hvr-underline-from-center" to="/">
          Home
        </Link>
        <Link className="sidebar-menu hvr-underline-from-center" to="/about">
          About
        </Link>
        <Link className="sidebar-menu hvr-underline-from-center" to="/resume">
          Resume
        </Link>
        <Link
          className="sidebar-menu hvr-underline-from-center"
          to="/portfolio"
        >
          Portfolio
        </Link>
        <Link className="sidebar-menu hvr-underline-from-center" to="/Blog">
          Blog
        </Link>
        <Link className="sidebar-menu hvr-underline-from-center" to="/contact">
          Contact
        </Link>
      </div>

      {/* <section className="social-media">
        <a
          href="https://github.com/parthjd"
          target="_blank"
          className="social-media-link"
        >
          {" "}
          <i class="fab fa-github" />{" "}
        </a>
        <a
          href="https://www.linkedin.com/in/parth-desai-60663178/"
          target="_blank"
          className="social-media-link"
        >
          {" "}
          <i class="fab fa-linkedin" />
        </a>
      </section>
      <p className="copyright">
        2020 © Parth Desai <br /> All rights reserved.
      </p> */}
    </div>
  );
}
export default withRouter(Sidebar);
