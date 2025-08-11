import React from 'react';
import youth1 from "../assets/youth1.jpg"; // Assuming this is for your images
import youth2 from "../assets/youth2.jpg"; // Assuming this is for your images
 // Assuming you'll have a different image for the right column


const EmpowermentSection = () => {
  return (
    <div className="font-sans text-gray-800 bg-white py-20">
      {/* Header Section */}
      <header className="px-6 md:px-12 lg:px-24">
        <h1 className="text-4xl md:text-4xl font-bold leading-tight">
          Empowering Youth and Women in the <br /> Cooperative Movement.
        </h1>
      </header>

      {/* Main Content Section */}
      <main className="px-6 md:px-12 lg:px-24 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Column - Image and Description */}
          <div>
            {/* Image Container */}
            <div className="rounded-lg overflow-hidden shadow-lg mb-8">
              <img
                src={youth1} // Replace with the actual URL of your first image
                alt="People participating in a cooperative meeting"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Description Text */}
            <p className="text-gray-700 leading-relaxed text-base">
              At LASCOFED, we are committed to fostering inclusivity by creating platforms where young people and women can thrive. From community outreach to business education, we equip emerging leaders with the skills and confidence needed to actively participate in cooperative development.
            </p>
          </div>

          {/* Right Column - Text and Image */}
          {/* Added flexbox to the right column, with column direction and reverse on large screens */}
          <div className="flex flex-col lg:flex-col-reverse">
            {/* Image Container */}
            <div className="rounded-lg overflow-hidden shadow-lg mb-8">
              <img
                src={youth2} // Ensure you have a different image for the right column for clarity
                alt="People at an event related to cooperative development"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Top Description Text */}
            <p className="text-gray-700 leading-relaxed mb-8 text-base">
              Our initiatives focus on breaking barriers, providing access to resources, and encouraging innovation among women and youth. By investing in their growth, we're shaping a more diverse, empowered, and sustainable cooperative cooperative system for the future.
            </p>
          </div>
        </div>

        {/* Learn More Button - Moved here, outside the grid container */}
        <div className="flex justify-start mt-10"> {/* Added a div for alignment */}
          <button className="px-6 py-3 border border-red-500 text-red-600 rounded-full cursor-pointer hover:bg-red-50 transition duration-300">
            Learn More
          </button>
        </div>
      </main>
    </div>
  );
};

export default EmpowermentSection;