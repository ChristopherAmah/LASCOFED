// PersonalInfoForm.jsx
import React from 'react';
import { LuChevronRight, LuChevronLeft } from 'react-icons/lu';
import uploadlogo from '../assets/uploadlogo.png';

const PersonalInfoForm = ({ onNext, showBack, onBack }) => {
  return (
    <form className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Personal & Contact Information</h2>
      <div className="md:px-5">
        <h3 className="text-lg font-semibold text-gray-800">Basic Details</h3>

      {/* First row: First, Middle, Last Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {/* First Name */}
        <div className="relative">
          <label htmlFor="firstName" className="absolute font-bold text-sm text-gray-600 bg-white px-1 ml-3 -top-2.5 left-2 z-10">
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            placeholder="John"
            className="pt-5 pb-2 px-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Middle Name */}
        <div className="relative">
          <label htmlFor="middleName" className="absolute font-bold text-sm text-gray-600 bg-white px-1 ml-3 -top-2.5 left-2 z-10">
            Middle Name *
          </label>
          <input
            type="text"
            id="middleName"
            placeholder="Isaac"
            className="pt-5 pb-2 px-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Last Name */}
        <div className="relative">
          <label htmlFor="lastName" className="absolute font-bold text-sm text-gray-600 bg-white px-1 ml-3 -top-2.5 left-2 z-10">
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            placeholder="Doe"
            className="pt-5 pb-2 px-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
      </div>

      {/* 2-column layout starts here */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Date of Birth */}
        <div className="relative">
          <label htmlFor="dob" className="absolute font-bold text-sm text-gray-600 bg-white px-1 ml-3 -top-2.5 left-2 z-10">
            Date of Birth *
          </label>
          <input
            type="date"
            id="dob"
            placeholder='_/_/__'
            className="pt-5 pb-2 px-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Gender */}
        <div className="relative">
          <label htmlFor="gender" className="absolute font-bold text-sm text-gray-600 bg-white px-1 ml-3 -top-2.5 left-2 z-10">
            Gender *
          </label>
          <select
            id="gender"
            className="pt-5 pb-2 px-3 w-full border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>



        {/* City of Birth */}
        <div className="relative">
          <label htmlFor="cityOfBirth" className="absolute font-bold text-sm text-gray-600 bg-white px-1 ml-3 -top-2.5 left-2 z-10">
            City of Birth *
          </label>
          <input
            type="text"
            id="cityOfBirth"
            placeholder="Ikeja"
            className="pt-5 pb-2 px-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* State of Birth */}
        <div className="relative">
          <label htmlFor="stateOfBirth" className="absolute font-bold text-sm text-gray-600 bg-white px-1 ml-3 -top-2.5 left-2 z-10">
            State of Birth *
          </label>
          <input
            type="text"
            id="stateOfBirth"
            placeholder="Lagos State"
            className="pt-5 pb-2 px-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Nationality */}
        <div className="relative">
          <label htmlFor="nationality" className="absolute font-bold text-sm text-gray-600 bg-white px-1 ml-3 -top-2.5 left-2 z-10">
            Nationality *
          </label>
          <input
            type="text"
            id="nationality"
            placeholder="Nigerian"
            className="pt-5 pb-2 px-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Marital Status */}
        <div className="relative">
          <label htmlFor="maritalStatus" className="absolute font-bold text-sm text-gray-600 bg-white px-1 ml-3 -top-2.5 left-2 z-10">
            Marital Status *
          </label>
          <select
            id="maritalStatus"
            className="pt-5 pb-2 px-3 w-full border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="">Select</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
          </select>
        </div>
      </div>
      </div>

      <div className='md:px-5'>
        {/* ========== Contact Details ========== */}
      <h3 className="text-lg font-semibold text-gray-800 mt-10">Contact Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {/* Email Address */}
        <div className="relative">
          <label htmlFor="email" className="absolute font-bold text-sm text-gray-600 bg-white px-1 ml-3 -top-2.5 left-2 z-10">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            placeholder="john@example.com"
            className="pt-5 pb-2 px-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Phone Number */}
        <div className="relative">
          <label htmlFor="phone" className="absolute font-bold text-sm text-gray-600 bg-white px-1 ml-3 -top-2.5 left-2 z-10">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="+1234567890"
            className="pt-5 pb-2 px-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
      </div>

      {/* Permanent Address */}
      <div className="relative mt-6">
        <label htmlFor="permanentAddress" className="absolute font-bold text-sm text-gray-600 bg-white px-1 ml-3 -top-2.5 left-2 z-10">
          Permanent Address *
        </label>
        <input
          type="text"
          id="permanentAddress"
          placeholder="1234 Main St, City, State"
          className="pt-5 pb-2 px-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      {/* Postal Address */}
      <div className="relative mt-6">
        <label htmlFor="postalAddress" className="absolute font-bold text-sm text-gray-600 bg-white px-1 ml-3 -top-2.5 left-2 z-10">
          Postal Address *
        </label>
        <input
          type="text"
          id="postalAddress"
          placeholder="P.O. Box 5678, City, State"
          className="pt-5 pb-2 px-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      {/* Upload Passport */}
      <div className='md:px-12'>
        <div className="w-full mt-6 border border-dashed border-[#D8DAEB] rounded-[12.92px] py-20 px-4 md:px-20 text-center flex flex-col items-center justify-center gap-4">
          
          <img src={uploadlogo} alt="" />

          <label htmlFor="passport" className="text-sm font-medium">
            Upload Your Passport * <br />
            <span className='text-[12px]' style={{ color: '#7D7D7D' }}>
              JPEG, PNG, and PDF formats, up to 50MB
            </span>
          </label>

          <input
            type="file"
            id="passport"
            accept="image/*"
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
          type="button"
          onClick={onNext}
          className="inline-flex items-center md:px-20 px-4 py-2 text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
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
