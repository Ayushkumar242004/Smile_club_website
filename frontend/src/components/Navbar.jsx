import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import '../navbar.css';
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar-header">
      <Sidebar/>
      <div className="lo_go">
        <img src="/logo.png" alt="Logo" />
      </div>
      <nav className="navbar">
        <ul className={`menu ${isOpen ? 'open' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blogs">Blog</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/team">Team</Link></li>
        </ul>
      </nav>
      {/* <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div> */}
    </header>
  );
};

export default Navbar;
