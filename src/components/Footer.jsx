import React from 'react';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  // If you have 'react-icons/fa6' installed, you can use FaXTwitter for the 'X' icon
  // For now, sticking with FaTwitter as it's likely from 'react-icons/fa'
  FaTwitter,
} from 'react-icons/fa'; // Assuming FaTwitter is used for the X icon for now, or ensure FaXTwitter from 'react-icons/fa6' is imported if available

import logo from '../assets/logo.png';
import coopa from '../assets/coopa.png';
import cfn from '../assets/cfn.png';

const Footer = () => {
  return (
    <footer className="bg-[#101010] text-gray-700 px-6 md:px-10 py-16 border-t border-gray-800 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-8">
        {/* Logo & About */}
        <div>
          <img src={logo} alt="LASCOFED Logo" className="h-14 mb-4" />
          <p className="text-[#A4A4A4] mb-10" style={{lineHeight: '2.5', fontWeight: '400', fontSize: '15px'}}>
            Lagos State Cooperative Federation Ltd. (LASCOFED) is the apex body uniting, representing,
            and serving registered cooperative societies in Lagos State.
          </p>
          <p className="text-white" style={{fontWeight: '700', fontSize: '15px'}}>©2025 LASCOFED. All rights reserved.</p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Navigation</h4>
          <ul className="space-y-3 md:space-y-6 text-[#A4A4A4]">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Portfolio</a></li>
            <li><a href="#">Travel & Tour</a></li>
            <li><a href="#">Training & Dev Centre</a></li>
            <li><a href="#">Publications</a></li>
          </ul>
        </div>

        {/* Resources (formerly Quick Links) */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Resources</h4>
          <ul className="space-y-3 md:space-y-8 text-[#A4A4A4] text-base">
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Community</a></li>
          </ul>
        </div>

        {/* Contact Information + Social + Logos */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Contact Information</h4> {/* Added heading */}
          <div className="mb-4 space-y-3 text-[#A4A4A4]" style={{fontSize: '12px'}}>
            <div className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 text-white w-8 h-10" />
              <span>Plot 13, Isaacstan Close, Off Wempco Road, Ojodu, Ogba, Lagos, Nigeria</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-white" />
              <span>0802 311 7726</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-white" />
              <span>info@lascofed.coop</span>
            </div>
          </div>

          {/* Social Icons - Adjusted order and styling for 'X' */}
          <div className="flex gap-4 mb-6 text-2xl"> {/* Increased icon size */}
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn className="text-white hover:text-red-500 transition" /></a>
            {/* For the 'X' (Twitter) icon, if FaXTwitter from 'react-icons/fa6' is available, use it.
                Otherwise, FaTwitter can be styled to look like an X with font-bold or a custom SVG.
                For exact match, a different icon library or custom SVG might be needed. */}
            <a href="#" aria-label="Twitter"><FaTwitter className="text-white hover:text-red-500 transition font-extrabold" /></a> {/* Added font-extrabold for a thicker 'X' if using FaTwitter */}
            <a href="#" aria-label="Instagram"><FaInstagram className="text-white hover:text-red-500 transition" /></a>
            <a href="#" aria-label="Facebook"><FaFacebookF className="text-white hover:text-red-500 transition" /></a>
          </div>

          {/* Logos */}
          <div className="flex gap-4 items-center mt-4">
            <img src={cfn} alt="Co-operative Federation of Nigeria Logo" className="h-14 sm:h-16 object-contain" />
            <img src={coopa} alt="International Cooperative Alliance Logo" className="h-14 sm:h-16 object-contain" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;