import React from 'react';
import mission from '../assets/mission.jpg';
import vision from '../assets/vision.jpg';

// This component recreates the "Our Mission" and "Our Vision" sections
// using React and Tailwind CSS, based on the provided image.
const MissionVision = () => {
  return (
    // Main container with a light background, padding, and centered content.
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-20 font-['Inter']">
      {/* Container to center content and limit its width. */}
      <div className="max-w-7xl mx-auto space-y-24">

        {/* ====================================================================
            "Our Mission" Section
            ==================================================================== */}
        <div className="grid md:grid-cols-2 md:px-8 gap-12 items-center">
          {/* Text content for the Mission section. */}
          <div className="order-2 md:order-1">
            {/* Main heading for the mission. */}
            <h2 className="text-4xl text-gray-800 font-extrabold font-sans mb-6">
              Our Mission
            </h2>
            
            {/* List of mission points. */}
            <ul className="space-y-4 text-gray-700 text-lg">
              <li className="flex items-start">
                <span className="flex-shrink-0 mr-3 mt-1">
                  {/* Custom checkmark SVG icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-red-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span>
                  To provide qualitative Leadership for the Co-operative Movement in Lagos State.
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-red-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span>
                  To promote, develop, co-ordinate and represent the various types of co-operative societies in the interest of their members
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.0/2000/svg"
                    className="h-6 w-6 text-red-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span>
                  To build capacity in the Movement and for the Movement by way of continuous education of members.
                </span>
              </li>
            </ul>
          </div>

          {/* Image container for the Mission section. */}
          <div className="order-1 md:order-2 rounded-2xl overflow-hidden">
            {/* Placeholder image. Replace with your own URL. */}
            <img
              src={mission}
              alt="Co-operative society mission image"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>

        {/* ====================================================================
            "Our Vision" Section
            ==================================================================== */}
        <div className="grid md:grid-cols-2 gap-12 md:px-8 items-center">
          {/* Image container for the Vision section. */}
          <div className="order-1 md:order-1 rounded-2xl overflow-hidden">
            {/* Placeholder image. Replace with your own URL. */}
            <img
              src={vision}
              alt="Co-operative society vision image"
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Text content for the Vision section. */}
          <div className="order-2 md:order-2">
            {/* Main heading for the vision. */}
            <h2 className="text-4xl text-gray-800 font-extrabold mb-6 font-sans">
              Our Vision
            </h2>
            
            {/* Descriptive paragraph. */}
            <p className="text-lg text-gray-700 mb-6">
              To make the Co-operative Movement a reference point for economic empowerment programs in Lagos State in particular and Nigeria in general.
            </p>
            
            {/* List of vision points. */}
            <ul className="space-y-4 text-gray-700 text-lg">
              <li className="flex items-start">
                <span className="flex-shrink-0 mr-3 mt-1">
                  {/* Custom checkmark SVG icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-red-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span>
                  Help business development
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-red-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span>
                  Good and efficient financial planning
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.0/2000/svg"
                    className="h-6 w-6 text-red-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span>
                  Analyze a small potential into a big one
                </span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MissionVision;
