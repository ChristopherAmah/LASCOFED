import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation } from 'swiper/modules';
import testimonial from '../assets/testimonial.jpg'; // Replace with your actual image path

//Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
// import { FaArrowRight } from "react-icons/fa6";
// import { FaArrowLeft } from "react-icons/fa6";
import { PiGreaterThan } from "react-icons/pi";
import { PiLessThan } from "react-icons/pi";



const testimonials = [
  {
    id: 1,
    name: 'Mrs. Adunni Oyewole',
    role: 'President, Evergreen Agro Cooperative Society',
    image: testimonial,
    text: 'LASCOFED\'s training transformed our structure. We\'ve grown stronger and more organized',
    rating: 4, // Example rating
  },
  {
    id: 2,
    name: 'Mr. Emeka Okoro',
    role: 'General Secretary, Creative Hands Youth Cooperative',
    image: testimonial,
    text: 'With LASCOFED\'s support, we became fully compliant and more efficient.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Mrs. Bisi Adeniran',
    role: 'Vice President, Lagos Textile Cooperative Union',
    image: testimonial,
    text: 'We got legal help, exposure, and mentorship. LASCOFED truly supports young co-ops',
    rating: 4,
  },
  {
    id: 4,
    name: 'Sarah Johnson',
    role: 'Member, Tech Innovators Co-op',
    image: testimonial,
    text: 'The customer service has been exceptional. They went above and beyond to help me solve my problems and were always available when I needed them.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Michael Chen',
    role: 'Treasurer, Green Farmers Collective',
    image: testimonial,
    text: 'I\'ve been using their services for over a year now and couldn\'t be happier. The platform is intuitive and the features are exactly what I needed for my business.',
    rating: 4,
  },
  {
    id: 6,
    name: 'Emma Wilson',
    role: 'Secretary, Artisans Guild',
    image: testimonial,
    text: 'What impressed me most was how quickly they responded to my requests. The team is professional, knowledgeable, and truly cares about their customers\' success.',
    rating: 5,
  },
];

const TestimonialSection = () => {
  return (
    <section className='py-10 md:px-20 px-4 max-w-7xl mx-auto font-sans' id='testimonials'>
        {/* heading texts */}
        <div className="text-center mb-6">
          <p className="font-semibold text-red-500">TESTIMONIALS</p>
        </div>
        <div className='text-center '>
            <h2 className='text-3xl font-bold md:text-4xl'>What Our Members Say</h2>
        </div>

        {/* testimonial cards */}
        <div>
            {/* swiper cards */}
        
            <Swiper
                navigation={
                    {
                        nextEl: '.swiper-button-next-custom',
                        prevEl: '.swiper-button-prev-custom',
                    }
                }
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
                breakpoints={{
                0: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,

                },
                1024: {
                    slidesPerView: 3,

                },
                }}
                modules={[Navigation]}
                className="testimonials-swiper md:mb-12"
            >
                {
                    testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id} className='h-full md:py-6 py-4'>
                            <div className='bg-white p-4 rounded-lg border border-gray-100 h-90 flex flex-col transition-colors duration-300 hover:bg-red-50'>
                                {/* Star Rating */}
                                <div className='flex mb-4 text-yellow-400'>
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className={i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}>
                                    ⭐
                                    </span>
                                ))}
                                </div>
                                <p className='text-gray-600'>{testimonial.text}</p>
                                {/* User Image */}
                                <div className='w-20 h-20 rounded-full overflow-hidden mb-3 shadow-sm mt-8'>
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className='w-full h-full object-cover'
                                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/80x80/cccccc/333333?text=User'; }} // Fallback image
                                />
                                </div>
                                <h3 className='text-xl font-semibold'>{testimonial.name}</h3>
                                <p className='text-sm text-gray-500'>{testimonial.role}</p>
                            </div>
                        </SwiperSlide>
                    ))
                }
                
            </Swiper>
    



            {/* navigational button */}
            <div className='flex justify-center gap-4 md:mt-8 mt-4'>
                <button className='swiper-button-prev-custom w-12 h-12 rounded-full flex items-center justify-center
                hover:bg-red-500 hover:text-white transition-all duration-200 cursor-pointer'>
                    <PiLessThan />
                </button>
                <button className='swiper-button-next-custom w-12 h-12 rounded-full flex items-center justify-center
                hover:bg-red-500 hover:text-white transition-all duration-200 cursor-pointer'>
                    <PiGreaterThan />
                </button>
            </div>
        </div>
    </section>
  )
}

export default TestimonialSection