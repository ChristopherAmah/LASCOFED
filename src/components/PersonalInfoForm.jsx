import React, { useState } from 'react';
import { LuChevronRight, LuChevronLeft } from 'react-icons/lu';
import uploadlogo from '../assets/uploadlogo.png';

// The component now accepts formData, onNext, and onBack as props.
const PersonalInfoForm = ({ formData, onNext, onBack, showBack }) => {
  const [localFormData, setLocalFormData] = useState(formData);

  // A single handleChange function for all inputs, selects, and files
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setLocalFormData(prevData => ({ ...prevData, [name]: files[0] }));
    } else {
      setLocalFormData(prevData => ({ ...prevData, [name]: value }));
    }
  };

  // Helper function to check if the form is valid
  const isFormValid = () => {
    const requiredFields = [
      'firstName', 'lastName', 'dob', 'gender', 'cityOfBirth',
      'stateOfBirth', 'nationality', 'maritalStatus', 'email',
      'phone', 'permanentAddress', 'postalAddress', 'passport'
    ];
    return requiredFields.every(field => localFormData[field] && localFormData[field] !== '');
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission
    if (isFormValid()) {
      onNext(localFormData); // Pass the local state back to the parent
    } else {
      // You could add some user feedback here, like a toast or a modal
      alert('Please fill in all required fields.');
    }
  };

  // A helper function to create a consistently styled input field
  const renderInput = (id, label, type, placeholder, required = true) => (
    <div className="relative">
      <label htmlFor={id} className="absolute font-bold text-sm text-gray-600 bg-white px-1 ml-3 -top-2.5 left-2 z-10">
        {label} {required && '*'}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        value={localFormData[id] || ''}
        onChange={handleChange}
        required={required}
        className="pt-5 pb-2 px-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
      />
    </div>
  );

  // A helper function for the select dropdowns
  const renderSelect = (id, label, options, required = true) => (
    <div className="relative">
      <label htmlFor={id} className="absolute font-bold text-sm text-gray-600 bg-white px-1 ml-3 -top-2.5 left-2 z-10">
        {label} {required && '*'}
      </label>
      <select
        id={id}
        name={id}
        value={localFormData[id] || ''}
        onChange={handleChange}
        required={required}
        className="pt-5 pb-2 px-3 w-full border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        <option value="">Select</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white rounded-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Personal & Contact Information</h2>
      <div className="md:px-5">
        <h3 className="text-lg font-semibold text-gray-800">Basic Details</h3>

        {/* First row: First, Middle, Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {renderInput("firstName", "First Name", "text", "John")}
          {renderInput("middleName", "Middle Name", "text", "Isaac", false)}
          {renderInput("lastName", "Last Name", "text", "Doe")}
        </div>

        {/* 2-column layout starts here */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {renderInput("dob", "Date of Birth", "date", "_/_/__")}
          {renderSelect("gender", "Gender", [
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
            { value: "other", label: "Other" },
          ])}
          {renderInput("cityOfBirth", "City of Birth", "text", "Ikeja")}
          {renderInput("stateOfBirth", "State of Birth", "text", "Lagos State")}
          {renderInput("nationality", "Nationality", "text", "Nigerian")}
          {renderSelect("maritalStatus", "Marital Status", [
            { value: "single", label: "Single" },
            { value: "married", label: "Married" },
            { value: "divorced", label: "Divorced" },
            { value: "widowed", label: "Widowed" },
          ])}
        </div>
      </div>

      <div className='md:px-5'>
        {/* ========== Contact Details ========== */}
        <h3 className="text-lg font-semibold text-gray-800 mt-10">Contact Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {renderInput("email", "Email Address", "email", "john@example.com")}
          {renderInput("phone", "Phone Number", "tel", "+1234567890")}
        </div>
        <div className='gap-6 mt-4'>
          {renderInput("permanentAddress", "Permanent Address", "text", "1234 Main St, City, State")}
        </div>
        <div className='gap-6 mt-4'>
          {renderInput("postalAddress", "Postal Address", "text", "P.O. Box 5678, City, State")}
        </div>

        {/* Upload Passport */}
        <div>
          <div className="w-full mt-6 border border-dashed border-[#D8DAEB] rounded-[12.92px] py-20 px-4 md:px-20 text-center flex flex-col items-center justify-center">
            <img src={uploadlogo} alt="" />
            <label htmlFor="passport" className="text-sm font-medium">
              Upload photocopies of result(s) or certificate (s)  <br />
              <span className='text-[12px]' style={{ color: '#7D7D7D' }}>
                JPEG, PNG, and PDF formats, up to 50MB
              </span>
            </label>
            <input
              type="file"
              id="passport"
              name="passport"
              accept="image/*"
              onChange={handleChange}
              required
              className="text-sm text-gray-500 
                file:mr-4 file:py-2 file:px-4 
                file:rounded-md file:border-0 
                file:text-sm file:font-semibold 
                file:bg-red-50 file:text-red-700 
                hover:file:bg-red-100"
            />
          </div>
        </div>
      </div>

      {/* Navigation Buttons + Help Link */}
      <div className="mt-8 flex items-center justify-between md:px-10">
        <button
          type="button"
          onClick={onBack}
          disabled={!showBack}
          className={`inline-flex items-center md:px-20 px-4 py-2 text-base font-medium rounded-md shadow-sm ${
            showBack ? 'bg-gray-600 text-white hover:bg-gray-700' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          <LuChevronLeft className="mr-2 h-5 w-5" />
          Back
        </button>
        <button
          type="submit"
          disabled={!isFormValid()}
          className={`inline-flex items-center md:px-20 px-4 py-2 text-base font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 ${
            isFormValid() ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          Next
          <LuChevronRight className="ml-2 -mr-1 h-5 w-5" />
        </button>
      </div>

      <div className="text-center mt-4 text-gray-600 text-sm">
        Stuck on the form? <a href="#" className="text-red-600 hover:underline">Let's call you!</a>
      </div>
    </form>
  );
};
export default PersonalInfoForm;
