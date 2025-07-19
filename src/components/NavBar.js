import React from "react";
import "./NavBar.css";

const NavBar = () => (
  <nav className="navbar">
    <div className="navbar__logo">Purvaja Narayana</div>
    <ul className="navbar__links">
      <li><a href="#experience">Experience</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contacts</a></li>
    </ul>
  </nav>
);

export default NavBar;