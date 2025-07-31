import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import { BiSolidQuoteAltRight } from "react-icons/bi";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import building from "../assets/building.png"; 
import slide2 from "../assets/slide2.jpg"; 

const slides = [
  {
    image: building,
    title: "Welcome To Lagos State Cooperative Federation.",
    subtitle:
      "As the apex body for cooperative societies in Lagos State, LASCOFED leads with innovation, advocacy, and support for sustainable development.",
    phone: "+2348023117726",
    buttonText: "Learn More",
  },
  {
    image: slide2,
    title: "Welcome To Lagos State Cooperative Federation.",
    subtitle:
      "As the apex body for cooperative societies in Lagos State, LASCOFED leads with innovation, advocacy, and support for sustainable development.",
    phone: "+2348023117726",
    buttonText: "Learn More",
  },
  // {
  //   image: building,
  //   title: "Welcome To Lagos State Cooperative Federation.",
  //   subtitle:
  //     "As the apex body for cooperative societies in Lagos State, LASCOFED leads with innovation, advocacy, and support for sustainable development.",
  //   phone: "+2348023117726",
  //   buttonText: "Active Button",
  // },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        className="w-full h-[80vh] md:h-[90vh] relative"
        >
        {slides.map((slide, index) => (
            <SwiperSlide key={index}>
            <div className="relative w-full h-full">
                <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
                />
                {/* Overlay */}
                {/* <div className="absolute inset-0 bg-black/50"></div> */}
                <div className="absolute inset-0 z-10">
                    <div className="h-full w-full bg-gradient-to-r from-black/70 via-black/50 to-transparent bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
                </div>

                {/* Content */}
                <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="absolute inset-0 flex flex-col justify-center px-14 md:px-30 z-10"
                >
                <motion.h2
                    variants={childVariants}
                    className="text-white text-4xl md:text-6xl font-bold leading-tight mb-4"
                    // style={{fontSize:'80px'}}
                >
                    {slide.title}
                </motion.h2>
                <motion.p
                    variants={childVariants}
                    className="text-white text-lg md:text-xl mb-6 max-w-3xl"
                >
                    {slide.subtitle}
                </motion.p>
                <motion.div
                    variants={childVariants}
                    className="flex flex-col sm:flex-row items-center gap-4 space-x-5"
                >
                    <button className="bg-white text-red-500 px-10 py-3 rounded-full font-semibold shadow cursor-pointer">
                    {slide.buttonText}
                    </button>
                    <div className="flex items-center text-white gap-2 text-lg">
                    <FaPhoneAlt className="text-white" />
                    <span>{slide.phone}</span>
                    </div>
                </motion.div>
                </motion.div>
            </div>
            </SwiperSlide>
        ))}
      </Swiper>


      {/* Auto-playing Quote Swiper */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        allowTouchMove={false}
        draggable={false}
        className="bg-[#FABBBD] text-white px-6 md:px-12 py-10 relative overflow-hidden"
      >
        <SwiperSlide>
          <div className="relative z-10 px-10 max-w-4xl mx-auto py-10">
            <p className="text-lg md:text-xl italic font-light">
              “<span className="font-semibold">Cooperatives</span> are a reminder to the international community that it is
              possible to pursue both economic viability and social responsibility.”
            </p>
            <p className="mt-4 text-right text-sm md:text-base italic">
              — Ban Ki-moon, Former UN Secretary-General
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative z-10 px-10 max-w-4xl mx-auto py-10">
            <p className="text-lg md:text-xl italic font-light">
              “<span className="font-semibold">Cooperatives</span> empower communities, foster shared prosperity, and uphold democratic values in business.”
            </p>
            <p className="mt-4 text-right text-sm md:text-base italic">
              — International Cooperative Alliance
            </p>
          </div>
        </SwiperSlide>

        {/* Add more SwiperSlide quotes as needed */}

        {/* Quotation Icon */}
        <div className="absolute text-6xl right-6 bottom-16 text-8xl font-bold opacity-30 z-10">
          <BiSolidQuoteAltRight />
        </div>

        {/* Slanted Red Overlay (for large screens only) */}
        <div
          className="hidden md:block absolute top-0 right-0 w-3/4 h-full clip-path-slant z-0"
          style={{ background: "#ED1B24" }}
        />

        {/* Custom Clip Path Style */}
        <style>
          {`
            .clip-path-slant {
              clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 20% 100%);
            }
          `}
        </style>
      </Swiper>



      <style>
        {
            /* clip path for slant gradient */
            `.clip-path-slant {
            clip-path:polygon(0% 0%, 100% 0%, 100% 100%, 20% 100%)
            }`
        }
      </style>
    </div>
  );
};

export default Hero;
