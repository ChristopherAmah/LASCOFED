import { section } from 'framer-motion/client';
import React from 'react';

const ContactBanner = () => {
  return (
    <section className="relative py-20 px-4 md:px-8 bg-red-50 font-sans overflow-hidden">
        <div className='px-20'>
      {/* Abstract Shapes - Top Left Dots */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8">
        <div className="grid grid-cols-4 gap-1">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-red-500 rounded-full"></div>
          ))}
        </div>
      </div>

      {/* Abstract Shapes - Top Right Diamond */}
      <div className="absolute top-8 right-8 w-4 h-4 bg-red-500 transform rotate-45"></div>

      {/* Abstract Shapes - Bottom Left Diamond */}
      <div className="absolute bottom-8 left-8 w-3 h-3 bg-yellow-400 transform rotate-45"></div>

      {/* Abstract Shapes - Bottom Right Dots */}
      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8">
        <div className="grid grid-cols-3 gap-1">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-red-500 rounded-full"></div>
          ))}
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight py-12">
          Get in touch with us!
        </h2>
      </div>
    </div>
    </section>
  );
};

export default ContactBanner;
