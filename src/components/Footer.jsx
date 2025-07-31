import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import logo from '../assets/logo.png'
import coopa from '../assets/coopa.png'
import cfn from '../assets/cfn.png'


const Footer = () => {
  return (
    <footer className="bg-[#101010] text-gray-700 px-6 md:px-10 py-20 border-t border-gray-200">
      <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-10">
        {/* Logo and Description */}
        <div>
          <img src={logo} alt="LASCOFED Logo" className="h-14 mb-3" />
          <p className="gap-4" style={{fontSize: '17.07px', color: '#A4A4A4'}}>
            Lagos State Cooperative Federation Ltd. (LASCOFED) is the apex body uniting,
            representing, and serving registered cooperative societies in Lagos State.
          </p>
          <p className="mt-4" style={{fontSize: '17.07px', color: 'white'}}>©2025 LASCOFED. All rights reserved.</p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="mb-3" style={{fontSize: '21.33px', color: 'white', fontWeight: '700'}}>Navigation</h4>
          <ul className="space-y-4" style={{fontSize: '17.07px', color: '#A4A4A4'}}>
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
          <h4 className="mb-3" style={{fontSize: '21.33px', color: 'white', fontWeight: '700'}}>Quick Links</h4>
          <ul className="space-y-4" style={{fontSize: '17.07px', color: '#A4A4A4'}}>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Membership</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

        {/* Contact + Logos */}
        <div className="space-y-1">
          <div className="flex items-start gap-2 mb-2">
            <FaMapMarkerAlt className="mt-1 text-white" />
            <span style={{fontSize: '13.51px', color: '#A4A4A4'}}>Plot 13, Isaacstan Close, Off Wempco Road, Ojodu, Ogba, Lagos, Nigeria</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <FaPhoneAlt className="text-white"/>
            <span style={{fontSize: '13.51px', color: '#A4A4A4'}}>0802 311 7726</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <FaEnvelope className="text-white"/>
            <span style={{fontSize: '13.51px', color: '#A4A4A4'}}>info@lascofed.coop</span>
          </div>
          <div className="flex gap-4 text-gray-700 text-lg mb-4">
            <a href="#"><FaLinkedinIn className="text-white"/></a>
            <a href="#"><FaTwitter className="text-white"/></a>
            <a href="#"><FaInstagram className="text-white"/></a>
            <a href="#"><FaFacebookF className="text-white"/></a>
          </div>
          <div className="flex gap-4">
            <img src={cfn} alt="CFN Logo" className="h-20" />
            <img src={coopa} alt='logo' className="h-20" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
