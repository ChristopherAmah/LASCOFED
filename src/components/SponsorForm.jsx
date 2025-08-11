import React, { useState } from "react";
import {
  LuChevronRight,
  LuChevronLeft
} from 'react-icons/lu';

// This is a new component for the Sponsor Information page.
const SponsorInformationForm = ({ onNext, onBack, showBack }) => {
  // State to hold the form data
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    address: "",
    phoneNumber: ""
  });

  // Handle changes for all input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
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

  return (
    <div>
      {/* Sponsor Details Section */}
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-lg font-semibold mb-6">Sponsor Details</h2>
        
        {/* Grid for name inputs, responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
          {renderInput("First Name", "firstName", formData.firstName, "text", "Enter sponsor's first name")}
          {renderInput("Middle Name", "middleName", formData.middleName, "text", "Enter sponsor's middle name")}
          {renderInput("Last Name", "lastName", formData.lastName, "text", "Enter sponsor's last name")}
        </div>
        
        {/* Additional details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mt-6">
          {renderInput("Address", "address", formData.address, "text", "Enter full address of sponsor")}
          {renderInput("Phone Number", "phoneNumber", formData.phoneNumber, "tel", "Enter sponsor's phone number")}
        </div>
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
          type="button"
          onClick={onNext}
          className="inline-flex items-center md:px-20 px-4 py-2 text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
        >
          Submit
          <LuChevronRight className="ml-2 -mr-1 h-5 w-5" />
        </button>
      </div>

      {/* Footer Link */}
      <div className="text-center mt-4 text-gray-600 text-sm">
        Stuck on the form? <a href="#" className="text-red-600 hover:underline">Let's call you!</a>
      </div>
    </div>
  );
};

export default SponsorInformationForm;
