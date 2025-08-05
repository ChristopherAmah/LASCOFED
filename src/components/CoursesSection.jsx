import React, { useState } from 'react';
import { CalendarDays, Clock3 } from 'lucide-react';
import training from '../assets/training.jpg'; // Replace with your actual image path
import { Link } from 'react-router-dom';

// Sample data for the courses
const courses = [
  {
    image: training,
    title: 'Financial Management for Cooperatives',
    date: 'Mar 15, 2024',
    duration: '12 Days',
    authorName: 'Sarah Adebayo',
    authorTitle: 'Financial Advisor',
    description: 'Learn essential financial management skills for cooperative societies and enhance your leadership capabilities.',
    category: 'Financial Literacy'
  },
  {
    image: training,
    title: 'Effective Cooperative Governance',
    date: 'Apr 1, 2024',
    duration: '7 Days',
    authorName: 'John Okafor',
    authorTitle: 'Co-op Specialist',
    description: 'Explore best practices in cooperative governance and enhance organizational decision-making.',
    category: 'Cooperative Management'
  },
  {
    image: training,
    title: 'Leadership & Team Building',
    date: 'May 10, 2024',
    duration: '5 Days',
    authorName: 'Linda Ijeoma',
    authorTitle: 'Leadership Coach',
    description: 'Develop leadership skills to manage teams and drive organizational growth.',
    category: 'Leadership & Skills'
  },
  {
    image: training,
    title: 'ICT Tools for Cooperative Efficiency',
    date: 'Jun 5, 2024',
    duration: '10 Days',
    authorName: 'Tunde Lawal',
    authorTitle: 'ICT Consultant',
    description: 'Discover how digital tools can transform your cooperative’s efficiency and communication.',
    category: 'ICT & Digital Tools'
  },
  {
    image: training,
    title: 'Advanced Financial Strategies',
    date: 'Jul 20, 2024',
    duration: '8 Days',
    authorName: 'Aisha Bello',
    authorTitle: 'Finance Expert',
    description: 'Master advanced financial planning strategies tailored for cooperatives.',
    category: 'Financial Literacy'
  },
  {
    image: training,
    title: 'Advanced Financial Strategies',
    date: 'Jul 20, 2024',
    duration: '8 Days',
    authorName: 'Aisha Bello',
    authorTitle: 'Finance Expert',
    description: 'Master advanced financial planning strategies tailored for cooperatives.',
    category: 'Financial Literacy'
  },
];

// Reusable Course Card component
const CourseCard = ({ course }) => (
  <div className="flex flex-col bg-white rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 h-full hover:shadow-xl">
    <img
      src={course.image}
      alt={course.title}
      className="w-full h-48 object-cover"
    />
    <div className="flex flex-col flex-grow p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
      <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
        <div className="flex items-center space-x-1">
          <CalendarDays size={16} />
          <span>{course.date}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Clock3 size={16} />
          <span>{course.duration}</span>
        </div>
      </div>
      <div className="flex items-center space-x-3 mb-4">
        <img
          src="https://placehold.co/40x40/F0F4F8/64748B?text=SA"
          alt={course.authorName}
          className="w-10 h-10 rounded-full object-cover border-2 border-gray-100"
        />
        <div>
          <p className="font-semibold text-gray-800">{course.authorName}</p>
          <p className="text-sm text-gray-500">{course.authorTitle}</p>
        </div>
      </div>
      <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">{course.description}</p>
      <div className="mt-auto">
        <Link
          to="/register"
          className="block text-center bg-red-500 hover:bg-red-600 text-white text-[14px] font-sans py-3 px-4 rounded-[8px] transition-colors duration-300"
        >
          Register Now
        </Link>
      </div>
    </div>
  </div>
);

// Main Courses Section
const CoursesSection = () => {
  const [activeTab, setActiveTab] = useState('All');

  const categories = [
    'All',
    'Financial Literacy',
    'Cooperative Management',
    'Leadership & Skills',
    'ICT & Digital Tools'
  ];

  const filteredCourses =
    activeTab === 'All'
      ? courses
      : courses.filter(course => course.category === activeTab);

  return (
    <section className="px-4 sm:px-30 py-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 md:gap-4 justify-center mb-8 md:text-[18.52px]">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`
                px-6 py-2 rounded-full font-semibold transition-all duration-200
                ${activeTab === category
                  ? 'bg-red-500 text-white shadow-lg'
                  : 'bg-white border text-gray-700 hover:bg-gray-200 font-sans'}
              `}
              style={{fontWeight: '400', borderColor: '#C5C5C599' }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid of Courses */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {filteredCourses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
