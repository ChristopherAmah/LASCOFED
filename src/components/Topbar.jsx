import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaClock } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="bg-black text-white text-sm px-4 md:px-10 py-2 flex flex-col md:flex-row justify-between items-center">
      {/* Left Section */}
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="flex items-center gap-1">
          <FaClock />
          <span>Monday - Friday 9 AM - 5 PM</span>
        </div>
        <div className="flex items-center gap-1">
          <FaPhone />
          <span>+234 802311726</span>
        </div>
        <div className="flex items-center gap-1">
          <FaMapMarkerAlt />
          <span>Plot 13, Isaacstan Close, Off Wempco Road, Ojodu, Ogba, Lagos, Nigeria</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 mt-2 md:mt-0">
        <div className="flex items-center gap-3">
          <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
          <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
          <a href="#" className="hover:text-pink-400"><FaInstagram /></a>
          <a href="#" className="hover:text-blue-700"><FaLinkedinIn /></a>
        </div>
        <div className="flex items-center gap-2 ml-2">
          <a href="#" className="hover:underline">EN</a>
          <a href="#" className="hover:underline">ES</a>
          <a href="#" className="hover:underline">FR</a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
