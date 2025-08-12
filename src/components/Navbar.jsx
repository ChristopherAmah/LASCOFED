import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive ? 'text-red-600' : 'text-gray-700 hover:text-red-600';

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white shadow-sm px-4 md:px-10 py-4 flex justify-between items-center relative z-50">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
      </div>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex space-x-8 text-sm font-sans">
        <li><NavLink to="/" className={navLinkClass}>HOME</NavLink></li>
        <li><NavLink to="/aboutus" className={navLinkClass}>ABOUT US</NavLink></li>
        <li><NavLink to="/portfolio" className={navLinkClass}>OUR PORTFOLIO</NavLink></li>
        <li><NavLink to="/training" className={navLinkClass}>TRAINING & DEVELOPMENT CENTRE</NavLink></li>
        <li><NavLink to="/publications" className={navLinkClass}>PUBLICATIONS</NavLink></li>
      </ul>

      {/* Contact Button */}
      <div className="hidden md:block">
        <NavLink
          to="/contact"
          className="hover:bg-red-700 text-white py-2 px-5 rounded-full"
          style={{ background: '#ED1B24', fontSize: '14px' }}
        >
          CONTACT US
        </NavLink>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } z-40`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
          <button onClick={toggleMenu}><HiX className="w-6 h-6" /></button>
        </div>
        <ul className="flex flex-col p-6 space-y-4 text-sm">
          <li><NavLink to="/" onClick={closeMenu} className={navLinkClass}>HOME</NavLink></li>
          <li><NavLink to="/aboutus" onClick={closeMenu} className={navLinkClass}>ABOUT US</NavLink></li>
          <li><NavLink to="/portfolio" onClick={closeMenu} className={navLinkClass}>OUR PORTFOLIO</NavLink></li>
          <li><NavLink to="/training" onClick={closeMenu} className={navLinkClass}>TRAINING & DEVELOPMENT CENTRE</NavLink></li>
          <li><NavLink to="/publications" onClick={closeMenu} className={navLinkClass}>PUBLICATIONS</NavLink></li>
          <li className="mt-4">
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className="hover:bg-red-700 text-white py-3 px-5 rounded-full text-center"
              style={{ background: '#ED1B24', fontSize: '14px' }}
            >
              CONTACT US
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
