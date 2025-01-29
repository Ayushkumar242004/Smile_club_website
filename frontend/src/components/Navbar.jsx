// import React from "react";
// import '../App.css'
// import { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-router-dom";
   

// export default function Navbar() {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
//     const toggleMenu = () => {
//       setIsMobileMenuOpen(!isMobileMenuOpen);
//     };
//     return (
//         <header className="navbar-header">
//           <div className="lo_go">
//             <img src="/logo.png" alt="Smile Club Logo" />
//           </div>
//           <div className="navbar">
//             <nav className={isMobileMenuOpen ? "menu open" : "menu"}>
//               <ul>
//                   <li><Link to="/home">Home</Link></li>
//                   <li><Link to="/blog">Blog</Link></li>
//                   <li><Link to="/event">Events</Link></li>                
//                   <li><Link to="/team">Team</Link></li>
//               </ul>
//             </nav>
//             <div className="hamburger" onClick={toggleMenu}>
//               {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
//             </div>
//           </div>
//         </header>
//       );
//     }
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import '../navbar.css' 
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar-header">
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

        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

      </nav>
    </header>
  );
};

export default Navbar;