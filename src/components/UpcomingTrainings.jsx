// UpcomingTrainings.jsx
import React from 'react';
import upcoming from '../assets/upcoming.jpg'; // Your image


const UpcomingTrainings = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-24 lg:px-32">
      <h2 className="text-3xl md:text-4xl font-sans font-bold text-center mb-10 text-gray-800">
        Upcoming Trainings
      </h2>

      <div className="flex justify-center">
        <img
          src={upcoming}
          alt="Upcoming Training"
          className="rounded-xl shadow-md max-w-lg w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};


export default UpcomingTrainings;