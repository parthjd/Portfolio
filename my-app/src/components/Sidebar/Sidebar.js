import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "./Sidebar.scss";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <img
        className="profile-pic"
        src={require("../images/profile-pic.jpg")}
        alt="profile picture of Parth Desai"
      />
      <p className="sidebar-name">Parth Desai</p>
      <Router>
        <Link className="sidebar-menu" to="/">
          <i class="fas fa-home" />
          Home
        </Link>
        <Link className="sidebar-menu" to="/about">
          <i class="fas fa-user" />
          About
        </Link>
        <Link className="sidebar-menu" to="/resume">
          <i class="fas fa-address-card" />
          Resume
        </Link>
        <Link className="sidebar-menu" to="/portfolio">
          <i class="fas fa-briefcase" />
          Portfolio
        </Link>
        <Link className="sidebar-menu" to="Blog">
          <i class="fas fa-book" />
          Blog
        </Link>
        <Link className="sidebar-menu" to="contact">
          <i class="fas fa-envelope" />
          Contact
        </Link>
      </Router>
      <section className="social-media">
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
      </p>
    </div>
  );
}
