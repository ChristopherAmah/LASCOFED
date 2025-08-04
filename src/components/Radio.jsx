import { section } from 'framer-motion/client';
import React from 'react';

// This component creates a promotional banner for "LASCOFED Radio".
// It features an icon, a title, a subtitle, and a "Listen Now" button.
const Radio = () => {
  return (
    // Main container with a light background, responsive padding, rounded corners, and a shadow font-['Inter'].
    <section className='md:px-12 font-sans'>
      <div className="bg-[#F5F2EA] p-6 sm:p-8 lg:p-10 md:rounded-[16px] mt-5 mb-8">
      {/* Flex container to align items horizontally and space them out. */}
      <div className="flex items-center justify-between flex-col md:flex-row space-y-4 md:space-y-0">
        
        {/* Left side: Icon and text content. */}
        <div className="flex items-center space-x-4">
          {/* Icon container with a red background and rounded corners. */}
          <div className="bg-red-600 p-3 rounded-full flex-shrink-0">
            {/* SVG icon for the logo/icon. */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <line x1="9" y1="3" x2="9" y2="21" />
              <line x1="15" y1="3" x2="15" y2="21" />
              <line x1="3" y1="9" x2="21" y2="9" />
              <line x1="3" y1="15" x2="21" y2="15" />
            </svg>
          </div>

          {/* Text content: Title and subtitle. */}
          <div>
            <h3 className="font-extrabold text-[#2E2E2E] " fontSize="24px">
              Tune into LASCOFED Radio
            </h3>
            <p className="text-[#808080]" style={{ fontSize: '16px' }}>
              Stay informed with our latest broadcasts, interviews and cooperative news
            </p>
          </div>
        </div>

        {/* Right side: "Listen Now" button. */}
        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full shadow-md transition duration-300 ease-in-out flex items-center space-x-2">
          {/* Play icon for the button. */}
          <svg
            xmlns="http://www.w3.0/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          </svg>
          <span>Listen Now</span>
        </button>

      </div>
    </div>
    </section>
  );
};

export default Radio;
