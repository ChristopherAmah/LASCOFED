import React from 'react';
import ctabg from '../assets/ctabg.png';

const ContactBanner = () => {
  return (
    <section
      className="relative py-8 px-4 md:px-8 font-sans overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${ctabg})`,
      }}
    >
      {/* Abstract Shapes - Top Left Dots */}
      {/* <div className="absolute top-4 left-4 md:top-8 md:left-8 z-10">
        <div className="grid grid-cols-4 gap-1">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-red-500 rounded-full"></div>
          ))}
        </div>
      </div> */}

      {/* Abstract Shapes - Top Right Diamond */}
      <div className="absolute top-8 right-8 w-4 h-4 bg-red-500 transform rotate-45 z-10"></div>

      {/* Abstract Shapes - Bottom Left Diamond */}
      <div className="absolute bottom-8 left-8 w-3 h-3 bg-yellow-400 transform rotate-45 z-10"></div>

      {/* Abstract Shapes - Bottom Right Dots */}
      {/* <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-10">
        <div className="grid grid-cols-3 gap-1">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-red-500 rounded-full"></div>
          ))}
        </div>
      </div> */}

      {/* Content Container */}
      <div className="relative z-20 max-w-4xl mx-auto text-center px-4 py-12">
        <h2 className="text-4xl md:text-5xl font-bold drop-shadow">
          Our Portfolio
        </h2>
      </div>
    </section>
  );
};

export default ContactBanner;
