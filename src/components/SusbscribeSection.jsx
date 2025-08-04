import { section } from 'framer-motion/client';
import React from 'react';
import ctabg from '../assets/ctabg.png'

const SubscribeSection = () => {
  return (
    <section className='relative mb-8 md:py-8 md:px-40 md:rounded-[24px] overflow-hidden font-sans'>
      <div className="bg-cover bg-center py-6 md:py-8"
      style={{
          backgroundImage: `url(${ctabg})`,
      }}>
    <div className=' px-6 md:px-20'>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight font-sans">
          Subscribe to CoopLight NewsLetter!
        </h2>
        <p className="text-[#3B3B3B] mb-10 font-sans" style={{fontSize: '16px'}}>
          Stay Informed: Subscribe to Our Newsletter for Updates & Insights
        </p>

        {/* Email Input and Button */}
        <div className="flex justify-center items-center font-sans">
        <div className="relative w-full md:w-3/5 lg:w-4/5">
            <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full pr-24 pl-4 py-3 border border-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-700 bg-white"
            style={{borderRadius: '10px'}}
            />
            <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 px-7 py-2 bg-red-600 text-white font-semibold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-300 text-sm cursor-pointer"
            style={{borderRadius: '8px'}}
            >
            Send
            </button>
        </div>
        </div>

      </div>
    </div>
    </div>
    </section>
  );
};

export default SubscribeSection;
