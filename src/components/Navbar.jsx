import React from 'react';
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm px-4 md:px-10 py-2 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={logo} // Replace with actual logo path
          alt="Logo"
          className="h-10 w-auto"
        />
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex space-x-6 text-sm font-semibold text-gray-700">
        <li><a href="#" className="text-red-600">HOME</a></li>
        <li><a href="#" className="hover:text-red-600">ABOUT US</a></li>
        <li><a href="#" className="hover:text-red-600">OUR PORTFOLIO</a></li>
        <li><a href="#" className="hover:text-red-600">TRAVEL & TOUR</a></li>
        <li><a href="#" className="hover:text-red-600">TRAINING & DEVELOPMENT CENTRE</a></li>
        <li><a href="#" className="hover:text-red-600">PUBLICATIONS</a></li>
      </ul>

      {/* Contact Us Button */}
      <div>
        <a
          href="#"
          className="hover:bg-red-700 text-white text-sm font-semibold py-3 px-5 rounded-full"
          style={{background: '#ED1B24'}}
        >
          CONTACT US
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
