import React from 'react';
import mic from '../assets/mic.jpg'; // Assuming you have a microphone image in your assets

// This component creates a promotional banner for audio content.
// It features a background image of a microphone, a title, a subtitle, and a call-to-action button.
const AudioContent = () => {
  return (
    // Main container with a dark background, responsive padding, and text-white for visibility.
    // The background image is set using an inline style with a linear gradient overlay.
    <section className='mb-10 md:py-8 md:px-40 overflow-hidden font-sans'>
        <div
      className="relative bg-gray-900 text-white py-4 px-4 lg:px-40 font-sans overflow-hidden mt-10"
      style={{
        // The background image is now correctly applied using a template literal and url().
        // The linear gradient is also re-added for better text visibility.
        backgroundImage: `linear-gradient(rgba(27, 43, 75, 0.5), rgba(27, 43, 75, 0.5)), url(${mic})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Content wrapper to center the text and button. */}
      <div className="relative max-w-5xl mx-auto text-center z-10 py-5">
        {/* Main headline. */}
        <h2 className="text-4xl sm:text-4xl lg:text-4xl font-bold mb-4">
          Don't Just Read, Listen.
        </h2>

        {/* Subtitle or descriptive text. */}
        <p className="sm:text-xl text-white mb-8" style={{ fontSize: '16px' }}>
          Discover insightful radio broadcasts curated for the cooperative community
        </p>

        {/* Call-to-action button. */}
        <button className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-[8px] transition duration-300 ease-in-out cursor-pointer" style={{fontSize: '16px'}}>
          Explore Audio Content
        </button>
      </div>
    </div>
    </section>
  );
};

export default AudioContent;
