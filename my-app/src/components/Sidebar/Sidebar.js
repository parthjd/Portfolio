import React from "react";
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
      <a className="sidebar-menu">
        <i class="fas fa-home" />
        Home
      </a>
      <a className="sidebar-menu">
        <i class="fas fa-user" />
        About
      </a>
      <a className="sidebar-menu">
        <i class="fas fa-address-card" />
        Resume
      </a>
      <a className="sidebar-menu">
        <i class="fas fa-briefcase" />
        Portfolio
      </a>
      <a className="sidebar-menu">
        <i class="fas fa-book" />
        Blog
      </a>
      <a className="sidebar-menu">
        <i class="fas fa-envelope" />
        Contact
      </a>
    </div>
  );
}
