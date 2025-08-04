import React from 'react';
import Aboutcta from '../assets/Aboutcta.jpg';

// This is the main component for the cooperative society section.
// It uses Tailwind CSS for all its styling to create a responsive and modern layout.
const AboutCta = () => {
  return (
    // Main container with a light background and padding.
    // The `min-h-screen` class ensures it takes at least the full height of the viewport.
    <div className="py-16 px-4 sm:px-6 lg:px-8 font-sans">
      {/* Content container to center the content and limit its width. */}
      <div className="max-w-7xl  mx-auto">
        {/* Section for the title and description text. */}
        <div className="text-center">
          {/* Main heading with responsive font sizes and bold styling. */}
          <h1 style={{fontWeight: '800', color: '#2E2E2E'}} className='md:px-26px text-4xl font-sans'>
            We are the State Apex Body for all
            <br className="hidden md:inline" /> registered Cooperative Societies.
          </h1>

          {/* Descriptive paragraph with responsive margins. */}
          <p className="mt-8 max-w-4xl mx-auto text-start font-sans" style={{fontSize: '16px', fontWeight: '400', color: '#808080', lineHeight: '32px'}}>
            <span>Lagos Co-operative Thrift and Credit Union Ltd was established in 1952 and registered in 1956 as the parent body for all the cooperative
            societies in the then Lagos colony and Federal territory. After the creation of Lagos State in 1967 Lagos Co-operative Thrift and Credit Union
            Ltd became Lagos State Co-operative Union Ltd which was later changed to Lagos State Co-operative Federation Ltd (LASCOFED), on 3rd
            May, 1982, and registered by the Lagos State Director of Co-operatives.</span>
            <br />
            <span>LASCOFED since inception has gone from strength to strength and has grown by leaps and bounds though with challenges which having
            been able to surmount.</span>
            <br />
            <span>LASCOFED as the apex organization for cooperative societies in Lagos State is the voice of Cooperators, the Administrative Coordinator of all
            Secondary Cooperative Societies and promoter of Cooperation amongst Cooperatives.</span> 
          </p>

          {/* Contact us button with rounded corners and hover effects. */}
          <button className="mt-3 px-8 py-3 border border-red-800 font-sans font-medium rounded-full text-red-800 hover:bg-red-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800 transition duration-300 ease-in-out">
            Contact us
          </button>
        </div>

        {/* Section for the image with a prominent shadow and rounded corners. */}
        <div className="mt-12 md:px-20">
          {/*
            NOTE: This is a placeholder image.
            You can replace the `src` with the URL of your own image.
            The `w-full` and `h-auto` classes ensure the image is fully responsive.
          */}
          <img
            src= {Aboutcta}
            alt="A group of people in a meeting discussing cooperative societies"
            className="w-full h-[400px] object-cover rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutCta;
