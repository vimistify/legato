import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          Legato
        </Link>

        {/* Navigation Links */}
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/feedback">Feedback</Link></li>
          <li>
            <a href="https://github.com/vimistify" target="_blank" rel="noopener noreferrer" className="github-icon">
              <FaGithub size={24} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
