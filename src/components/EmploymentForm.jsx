import React, { useState } from "react";
import {
  LuChevronRight,
  LuChevronLeft
} from 'react-icons/lu';

// This is a new component for the Employment & Motivation page.
const EmploymentMotivationForm = ({ onNext, onBack, showBack }) => {
  // State to hold the form data
  const [formData, setFormData] = useState({
    presentEmployer: "",
    profession: "",
    positionHeld: "",
    dateAppointed: "",
    reasonForCourse: ""
  });

  // Handle changes for all input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  // Handle form submission and pass data to the parent component
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior (page refresh)
    // You can add validation logic here before calling onNext
    onNext(formData); // Now passing the form data to the onNext function
  };

  // Generic input renderer to maintain consistent styling
  const renderInput = (label, name, value, type = "text", placeholder, required = true) => (
    <div className="w-full relative">
      <label
        htmlFor={name}
        className="absolute font-semibold text-sm text-gray-600 bg-white px-1 ml-2 -top-2.5 left-2 z-10"
      >
        {label} {required && '*'}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
      />
    </div>
  );

  // Generic textarea renderer
  const renderTextarea = (label, name, value, placeholder, required = true) => (
    <div className="w-full relative">
      <label
        htmlFor={name}
        className="absolute font-semibold text-sm text-gray-600 bg-white px-1 ml-2 -top-2.5 left-2 z-10"
      >
        {label} {required && '*'}
      </label>
      <textarea
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        rows="4"
        required={required}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
      ></textarea>
    </div>
  );

  return (
    <form onSubmit={handleSubmit}>
      {/* Current Employment Section */}
      <div className="bg-white rounded-lg mb-8">
        <h2 className="text-lg font-semibold mb-6">Current Employment</h2>
        
        {/* Grid for employment inputs, responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {renderInput("Present Employer", "presentEmployer", formData.presentEmployer, "text", "Enter current employer's name" )}
          {renderInput("Profession", "profession", formData.profession, "text", "Enter your profession")}
          {renderInput("Position Held", "positionHeld", formData.positionHeld, "text", "Enter your current job title")}
          {renderInput("Date Appointed", "dateAppointed", formData.dateAppointed, "date", "Enter date you started this role")}
        </div>
      </div>

      {/* Motivation Section */}
      <div className="bg-white rounded-lg mb-8">
        <h2 className="text-lg font-semibold mb-6">Motivation</h2>
        
        {/* Textarea for reason for taking the course */}
        {renderTextarea("Reason for Taking the Course", "reasonForCourse", formData.reasonForCourse, "Explain why you're applying for this course")}
      </div>

      {/* Navigation Buttons */}
      <div className="mt-8 flex items-center justify-between md:px-10">
        <button
          type="button"
          onClick={onBack}
          disabled={!showBack}
          className={`inline-flex items-center md:px-20 px-4 py-2 text-base font-medium rounded-md shadow-sm ${
            showBack
              ? 'bg-gray-600 text-white hover:bg-gray-700'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          <LuChevronLeft className="mr-2 h-5 w-5" />
          Back
        </button>
        <button
          type="submit" // Changed from 'button' to 'submit' to trigger form validation
          className="inline-flex items-center md:px-20 px-4 py-2 text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700"
        >
          Next
          <LuChevronRight className="ml-2 -mr-1 h-5 w-5" />
        </button>
      </div>

      {/* Footer Link */}
      <div className="text-center mt-4 text-gray-600 text-sm">
        Stuck on the form? <a href="#" className="text-red-600 hover:underline">Let's call you!</a>
      </div>
    </form>
  );
};

export default EmploymentMotivationForm;
