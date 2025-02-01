import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../navbar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { title: 'Home', path: './' },
    { title: 'Blog', path: './blogs' },
    { title: 'Event', path: './events' },
    { title: 'Team', path: './team' }
  ];

  return (
    <div className="relative">
      {/* Hamburger Button */}
      <button 
        onClick={toggleMenu}
        className="hamburger-x fixed top-4 right-4 z-50 p-2 text-gray-600 hover:text-gray-800"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className={`sidebar-container fixed top-0 left-0 h-full w-48 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } z-40`}>
          <nav className="mt-4 nav-blur">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.title}>
                  <Link
                    to={item.path}
                    className="block px-6 py-2 text-white hover:bg-[rgba(255,255,255,0.1)] transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default Sidebar;