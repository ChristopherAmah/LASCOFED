// src/components/EventSection.jsx
import React, { useState, useEffect } from 'react';
import building from '../assets/building.png'; 
import event1 from '../assets/event1.png'; 
import ev2 from '../assets/ev2.png'; 
import ev3 from '../assets/ev3.png'; 
import ev4 from '../assets/ev4.png'; 

const events = [
  {
    id: 1,
    name: 'Annual General Meeting',
    date: '24 October, 2024',
    location: 'Lagos',
    image: event1,
    category: 'Trainings',
  },
  {
    id: 2,
    name: 'Community Outreach Program',
    date: '15 November, 2024',
    location: 'Abuja',
    image: ev2,
    category: 'Trainings',
  },
  {
    id: 3,
    name: 'Leadership Workshop',
    date: '01 December, 2024',
    location: 'Port Harcourt',
    image: ev4,
    category: 'Tours',
  },
  {
    id: 4,
    name: 'Product Launch Event',
    date: '10 January, 2025',
    location: 'Kano',
    image: ev3,
    category: 'Tours',
  },
  {
    id: 5,
    name: 'Innovation Summit',
    date: '28 February, 2025',
    location: 'Enugu',
    image: ev4,
    category: 'Seminars',
  },
];

const EventSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  // useEffect to initialize the slider to the middle card
  useEffect(() => {
    const initialFilteredEvents = activeCategory === 'All'
      ? events
      : events.filter(event => event.category === activeCategory);

    setFilteredEvents(initialFilteredEvents); // Update filtered events state

    // Calculate the middle index for the current filtered list
    if (initialFilteredEvents.length > 0) {
      const middleIndex = Math.floor(initialFilteredEvents.length / 2);
      setCurrentEventIndex(middleIndex);
    } else {
      setCurrentEventIndex(0); // If no events, default to 0
    }
  }, [activeCategory]); // Dependency array: re-run when activeCategory changes

  const totalEvents = filteredEvents.length;

  const goToNext = () => {
    setCurrentEventIndex((prevIndex) => (prevIndex + 1) % totalEvents);
  };

  const goToPrev = () => {
    setCurrentEventIndex((prevIndex) => (prevIndex - 1 + totalEvents) % totalEvents);
  };

  const getCardTransform = (index) => {
    // Adjust displayIndex to handle circularity and make items appear to wrap around
    let displayIndex = index;
    if (totalEvents > 0) {
        if (index - currentEventIndex > totalEvents / 2) {
            displayIndex -= totalEvents;
        } else if (currentEventIndex - index > totalEvents / 2) {
            displayIndex += totalEvents;
        }
    }

    const offset = displayIndex - currentEventIndex;
    let rotation = 0;
    let translateX = 0;
    let zIndex = 0;
    let opacity = 1;
    let scale = 1;

    // Styling for cards based on their offset from the current active card
    if (offset === 0) {
      // Active card (middle)
      translateX = '0%';
      rotation = '0deg';
      zIndex = 10; // Highest z-index to be on top
      scale = 1;
      opacity = 1;
    } else if (offset === 1) {
      // Immediately to the right of center
      translateX = '40%'; // Adjust horizontal position
      rotation = '5deg'; // Slight rotation
      zIndex = 9;
      opacity = 0.8;
      scale = 0.95;
    } else if (offset === 2) {
      // Second card to the right
      translateX = '80%'; // More horizontal position
      rotation = '10deg'; // More rotation
      zIndex = 8;
      opacity = 0.6;
      scale = 0.9;
    } else if (offset === -1) {
      // Immediately to the left of center
      translateX = '-40%'; // Adjust horizontal position
      rotation = '-5deg'; // Slight rotation
      zIndex = 9;
      opacity = 0.8;
      scale = 0.95;
    } else if (offset === -2) {
      translateX = '-80%'; // More horizontal position
      rotation = '-10deg'; // More rotation
      zIndex = 8;
      opacity = 0.6;
      scale = 0.9;
    } else {
      // Cards further away (hidden or almost hidden)
      opacity = 0; // Make them completely transparent
      zIndex = 1; // Lowest z-index
      scale = 0.8;
      translateX = offset > 0 ? '120%' : '-120%'; // Push them far off-screen
    }

    return {
      transform: `translateX(${translateX}) rotate(${rotation}) scale(${scale})`,
      zIndex: zIndex,
      opacity: opacity,
      transition: 'all 0.5s ease-in-out', // Smooth transitions for all properties
    };
  };

  return (
    <section className="py-20 bg-white font-sans">
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

        {/* Category Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-12 px-4">
          {['All', 'Seminars', 'Trainings', 'Tours'].map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                // useEffect hook handles resetting currentEventIndex to the middle of the new filtered list
              }}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-colors duration-300
                ${activeCategory === category
                  ? 'bg-red-600 text-white shadow-md' // Active category button style
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200' // Inactive category button style
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Slider Section Container */}
        <div className="relative w-full max-w-5xl mx-auto h-[450px] overflow-hidden flex items-center justify-center">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <div
                key={event.id}
                className="absolute w-[300px] md:w-[500px] h-[400px] rounded-lg shadow-xl overflow-hidden cursor-pointer
                           flex flex-col transform origin-center transition-all duration-500 ease-in-out"
                // Apply combined styles: transformations and background image
                style={{
                  ...getCardTransform(index),
                  backgroundImage: `url('${event.image}')`, // Set image as background
                  backgroundSize: 'cover',        // Cover the entire card
                  backgroundPosition: 'center',   // Center the background image
                  backgroundRepeat: 'no-repeat'   // Prevent image repetition
                }}
              >
                {/* Gradient Overlay - no z-index needed if it's the first child, or a lower one like z-0 */}
                <div className="absolute inset-0 bg-black/30 z-0"> {/* Changed z-10 to z-0 or simply remove z-index */}
                    {/* The two gradients: from left to right, and from top to bottom */}
                    {/* <div className="h-full w-full bg-gradient-to-r from-black/70 via-black/50 to-transparent absolute inset-0"></div>
                    <div className="h-full w-full bg-gradient-to-b from-black/60 via-black/30 to-transparent absolute inset-0"></div> */}
                </div>

                {/* Text Overlay for Event Details - Give it a higher z-index */}
                <div className="absolute bottom-0 left-0 w-full text-white p-4 z-10"> {/* Added z-10 */}
                  <h3 className="text-xl font-semibold mb-1">{event.name}</h3>
                  <p className="text-sm">{event.date}</p>
                  <p className="text-sm">{event.location}</p> {/* Added location here */}
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