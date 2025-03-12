import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // For mobile menu
  const [isScrolled, setIsScrolled] = useState(false); // For scroll effect

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to refresh page on link click
  const handleNavigation = (path) => {
    window.location.href = path; // Forces page reload
    setIsOpen(false); // Close the menu after navigation
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-maroon-800 bg-opacity-90 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="w-full mx-auto px-4 md:px-12 flex justify-between items-center py-3">
        <a href="/" className="flex">
          <img 
            src="/App_logo.png" 
            alt="Smile Club" 
            className="w-12 h-12 md:w-[72px] md:h-[72px] drop-shadow-[0_0_4px_rgba(255,255,255,0.4)]" 
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <button onClick={() => handleNavigation("/")} className="text-white text-lg hover:text-maroon-200 font-medium uppercase transition duration-300">
            Home
          </button>
          <button onClick={() => handleNavigation("/events")} className="text-white text-lg hover:text-maroon-200 font-medium uppercase transition duration-300">
            Events
          </button>
          <button onClick={() => handleNavigation("/teams")} className="text-white text-lg hover:text-maroon-200 font-medium uppercase transition duration-300">
            Team
          </button>
          <button onClick={() => handleNavigation("/blogs")} className="text-white text-lg hover:text-maroon-200 font-medium uppercase transition duration-300">
            Blogs
          </button>
          
        </nav>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 bg-maroon-900 bg-opacity-95 backdrop-blur-sm z-40 flex flex-col items-center justify-center space-y-6 transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Icon on Top Right */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-white text-3xl focus:outline-none"
        >
          <FaTimes />
        </button>

        <img src="/logo.png" alt="Smile Club" className="w-16 h-16 mb-5" />

        <button onClick={() => handleNavigation("/")} className="text-white text-2xl hover:text-maroon-200 font-medium uppercase transition duration-300">
          Home
        </button>
        <button onClick={() => handleNavigation("/events")} className="text-white text-2xl hover:text-maroon-200 font-medium uppercase transition duration-300">
          Events
        </button>
        <button onClick={() => handleNavigation("/teams")} className="text-white text-2xl hover:text-maroon-200 font-medium uppercase transition duration-300">
          Team
        </button>
        <button onClick={() => handleNavigation("/blogs")} className="text-white text-2xl hover:text-maroon-200 font-medium uppercase transition duration-300">
          Blogs
        </button>
        <div className="flex items-center space-x-4">
          <button onClick={() => window.open("https://www.instagram.com/smile._.club_nitk/", "_blank", "noopener,noreferrer")} className="text-white text-2xl transition duration-300 hover:text-maroon-200">
            <i className="fa-brands fa-instagram"></i>
          </button>
          <button onClick={() => window.open("https://www.linkedin.com/company/smile-club-nitk/", "_blank", "noopener,noreferrer")} className="text-white text-2xl transition duration-300 hover:text-maroon-200">
            <i className="fa-brands fa-linkedin-in"></i>
          </button>
          <button onClick={() => window.open("https://youtube.com/@SMILEClub_NITK?si=qk-v-oJZi8M7igKn", "_blank", "noopener,noreferrer")} className="text-white text-2xl transition duration-300 hover:text-maroon-200">
            <i className="fa-brands fa-youtube"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
