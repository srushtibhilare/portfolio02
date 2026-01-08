import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">MyPortfolio</div>

        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact" className="nav-btn">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
