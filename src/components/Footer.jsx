import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import logo from '../assets/logo.png'
import cfn from '../assets/cfn.png'


const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 px-6 md:px-16 py-10 border-t border-gray-200">
      <div className="grid md:grid-cols-4 gap-10">
        {/* Logo and Description */}
        <div>
          <img src={logo} alt="LASCOFED Logo" className="h-14 mb-3" />
          <p className="text-sm">
            Lagos State Cooperative Federation Ltd. (LASCOFED) is the apex body uniting,
            representing, and serving registered cooperative societies in Lagos State.
          </p>
          <p className="text-xs mt-4 text-gray-500">©2025 LASCOFED. All rights reserved.</p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-bold mb-3">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Portfolio</a></li>
            <li><a href="#">Travel & Tour</a></li>
            <li><a href="#">Training & Dev Centre</a></li>
            <li><a href="#">Publications</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Membership</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

        {/* Contact + Logos */}
        <div className="text-sm">
          <div className="flex items-start gap-2 mb-2">
            <FaMapMarkerAlt className="mt-1" />
            <span>Plot 13, Isaacstan Close, Off Wempco Road, Ojodu, Ogba, Lagos, Nigeria</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <FaPhoneAlt />
            <span>0802 311 7726</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <FaEnvelope />
            <span>info@lascofed.coop</span>
          </div>
          <div className="flex gap-4 text-gray-700 text-lg mb-4">
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebookF /></a>
          </div>
          <div className="flex gap-4">
            <img src={cfn} alt="CFN Logo" className="h-10" />
            <img src={logo} alt='logo' className="h-10" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
