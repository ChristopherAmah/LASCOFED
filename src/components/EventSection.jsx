// src/components/EventSlider.jsx
import React, { useState } from 'react';
import building from '../assets/building.png'

const events = [
  {
    id: 1,
    name: 'Annual General Meeting',
    date: '24 October, 2024',
    location: 'Lagos',
    image: building, // Replace with actual image paths
    category: 'Trainings',
  },
  {
    id: 2,
    name: 'Community Outreach Program',
    date: '15 November, 2024',
    location: 'Abuja',
    image: building,
    category: 'Trainings',
  },
  {
    id: 3,
    name: 'Leadership Workshop',
    date: '01 December, 2024',
    location: 'Port Harcourt',
    image: building,
    category: 'Tours',
  },
  {
    id: 4,
    name: 'Product Launch Event',
    date: '10 January, 2025',
    location: 'Kano',
    image: building,
    category: 'Tours',
  },
  {
    id: 5,
    name: 'Innovation Summit',
    date: '28 February, 2025',
    location: 'Enugu',
    image: building,
    category: 'Seminars',
  },
];

const EventSection = () => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredEvents = activeCategory === 'All'
    ? events
    : events.filter(event => event.category === activeCategory);

  const totalEvents = filteredEvents.length;

  const goToNext = () => {
    setCurrentEventIndex((prevIndex) => (prevIndex + 1) % totalEvents);
  };

  const goToPrev = () => {
    setCurrentEventIndex((prevIndex) => (prevIndex - 1 + totalEvents) % totalEvents);
  };

  const getCardTransform = (index) => {
    const offset = index - currentEventIndex;
    let rotation = 0;
    let translateX = 0;
    let zIndex = 0;
    let opacity = 1;
    let scale = 1;

    if (offset === 0) {
      // Active card
      translateX = 0;
      rotation = 0;
      zIndex = 10;
      scale = 1;
    } else if (offset === 1) {
      // Card immediately to the right
      translateX = '40%'; // Adjust as needed
      rotation = '5deg'; // Slight rotation
      zIndex = 9;
      opacity = 0.8;
      scale = 0.95;
    } else if (offset === 2) {
      // Second card to the right
      translateX = '80%'; // Adjust as needed
      rotation = '10deg'; // More rotation
      zIndex = 8;
      opacity = 0.6;
      scale = 0.9;
    } else if (offset === -1) {
      // Card immediately to the left
      translateX = '-40%'; // Adjust as needed
      rotation = '-5deg'; // Slight rotation
      zIndex = 9;
      opacity = 0.8;
      scale = 0.95;
    } else if (offset === -2) {
      // Second card to the left
      translateX = '-80%'; // Adjust as needed
      rotation = '-10deg'; // More rotation
      zIndex = 8;
      opacity = 0.6;
      scale = 0.9;
    } else {
      // Cards further away (hidden or almost hidden)
      opacity = 0;
      zIndex = 1;
      scale = 0.8;
      translateX = offset > 0 ? '100%' : '-100%'; // Push them out
    }

    return {
      transform: `translateX(${translateX}) rotate(${rotation}) scale(${scale})`,
      zIndex: zIndex,
      opacity: opacity,
      transition: 'all 0.5s ease-in-out', // Smooth transitions
    };
  };

  return (
    <section className="py-16 bg-white font-sans">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-red-600 font-semibold mb-2 uppercase">Events</p>
          <h2 className="text-4xl md:text-4xl font-bold text-gray-800 leading-tight">
            Stay Connected with LASCOFED
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
             Keep up-to-date with the latest news, events, and insights from the Lagos State Cooperative Federation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center space-x-4 mb-12">
          {['All', 'Seminars', 'Trainings', 'Tours'].map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setCurrentEventIndex(0); // Reset index when category changes
              }}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-colors duration-300
                ${activeCategory === category
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Slider Section */}
        <div className="relative w-full max-w-5xl mx-auto h-[450px] overflow-hidden flex items-center justify-center">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <div
                key={event.id}
                className="absolute w-[300px] md:w-[400px] h-[400px] bg-white rounded-lg shadow-xl overflow-hidden cursor-pointer
                           flex flex-col transform origin-center transition-all duration-500 ease-in-out"
                style={getCardTransform(index)}
              >
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-2/3 object-cover"
                />
                <div className="p-4 flex-grow flex flex-col justify-end">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.name}</h3>
                  <p className="text-gray-600 text-sm">{event.date}</p>
                  <p className="text-gray-500 text-xs mt-1">{event.location}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-lg">No events found in this category.</p>
          )}
        </div>

        {/* Slider Navigation Dots and Arrows */}
        {filteredEvents.length > 0 && (
          <div className="flex justify-center items-center mt-12 space-x-4">
            <button
              onClick={goToPrev}
              className="p-2 rounded-full hover:bg-gray-300 transition-colors text-gray-600"
              aria-label="Previous event"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex space-x-2">
              {filteredEvents.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentEventIndex(index)}
                  className={`h-2 w-2 rounded-full transition-colors duration-300
                    ${index === currentEventIndex ? 'bg-red-600 scale-125' : 'bg-gray-400 hover:bg-gray-500'}`}
                  aria-label={`Go to event ${index + 1}`}
                ></button>
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-2 rounded-full hover:bg-gray-300 transition-colors text-gray-600"
              aria-label="Next event"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventSection;