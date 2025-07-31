import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const MapSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-20 py-20 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left: Contact Form */}
      <form className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
          <select
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
            defaultValue=""
          >
            <option value="" disabled>Select Subject</option>
            <option value="inquiry">General Inquiry</option>
            <option value="support">Support</option>
            <option value="feedback">Feedback</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea
            placeholder="Type your message here"
            rows="6"
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white w-full py-3 rounded-full text-sm font-medium"
        >
          Send Message
        </button>
      </form>

      {/* Right: Contact Info & Map */}
      <div className="space-y-6 text-sm text-gray-700">
        <div className="flex items-start space-x-3">
          <FaMapMarkerAlt className="text-red-600 mt-1" />
          <div>
            <p className="font-semibold">Office Address</p>
            <p>LASCOFED Headquarters, Plot 123, Ogba Industrial Estate, Ogba, Lagos</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <FaPhoneAlt className="text-red-600 mt-1" />
          <div>
            <p className="font-semibold">Phone Number</p>
            <p>+234 (0) 90 5871 6564</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <FaEnvelope className="text-red-600 mt-1" />
          <div>
            <p className="font-semibold">Email Address</p>
            <p>contact@lascofed.com</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <FaClock className="text-red-600 mt-1" />
          <div>
            <p className="font-semibold">Working Hours</p>
            <p>Monday - Friday: 8:00AM – 5:00 PM<br />Sunday: Closed</p>
          </div>
        </div>

        {/* Map */}
        <div>
          <iframe
            title="Lagos Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.898462643062!2d3.3380582999999997!3d6.6359188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93ff5b51a3c9%3A0x94cc527f58fdb659!2sOgba%20Industrial%20Estate!5e0!3m2!1sen!2sng!4v1715636422006!5m2!1sen!2sng"
            width="100%"
            height="200"
            allowFullScreen=""
            loading="lazy"
            className=""
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
