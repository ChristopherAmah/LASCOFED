// UpcomingTrainings.jsx
import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa'; // FontAwesome icon

const trainings = [
  {
    date: 'Mar 15, 2024',
    time: '9:00 AM - 5:00 PM',
    title: 'Leadership Development Workshop',
    description: 'Learn essential leadership skills for cooperative management',
  },
  {
    date: 'Mar 15, 2024',
    time: '9:00 AM - 5:00 PM',
    title: 'Leadership Development Workshop',
    description: 'Learn essential leadership skills for cooperative management',
  },
  {
    date: 'Mar 15, 2024',
    time: '9:00 AM - 5:00 PM',
    title: 'Leadership Development Workshop',
    description: 'Learn essential leadership skills for cooperative management',
  },
  {
    date: 'Mar 15, 2024',
    time: '9:00 AM - 5:00 PM',
    title: 'Leadership Development Workshop',
    description: 'Learn essential leadership skills for cooperative management',
  },
];

const UpcomingTrainings = () => {
  return (
    <section className="bg-[#FDE8E9] py-12 px-6 md:px-20">
      <h2 className="text-[30px] md:text-[48px] font-sans font-bold mb-8">Upcoming Trainings</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {trainings.map((training, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow p-6 flex flex-col space-y-2"
          >
            <div className="flex items-center space-x-3 py-5">
              <div className="bg-red-600 text-white p-3 rounded-full">
                <FaCalendarAlt className="text-xl" />
              </div>
              <div>
                <p className="font-semibold">{training.date}</p>
                <p className="text-sm text-gray-500">{training.time}</p>
              </div>
            </div>

            <h3 className="mt-4 font-semibold text-lg">
              {training.title}
            </h3>
            <p className="text-sm text-gray-600">
              {training.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingTrainings;
