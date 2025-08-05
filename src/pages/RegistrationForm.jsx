import React, { useState } from 'react';
import { LuChevronRight, LuChevronLeft } from 'react-icons/lu';
import logo from '../assets/logo.png';

// Placeholder logo component
const Logo = () => (
  <div className="flex justify-center items-center h-30 w-30 mx-auto">
    <img
      src = {logo}
      alt="LASCOFED Logo"
      className="h-full w-full object-contain"
    />
  </div>
);

// Form step navigation component
const FormSteps = ({ currentStep }) => {
  const steps = [
    "Personal & Contact Information",
    "Education, Certification & Experience",
    "Employment & Motivation",
    "Declaration",
    "Sponsor Information",
  ];

  return (
    <div className="my-8 w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-5 gap-2 items-center text-center">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center w-full">
            {/* Step Title */}
            <span
              className={`block text-xs sm:text-sm md:text-sm font-medium h-12 overflow-hidden leading-tight
                ${index === currentStep ? 'text-gray-800' : 'text-gray-400'}
              `}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '0 4px',
              }}
            >
              {step}
            </span>

            {/* Step Progress Bar */}
            <div
              className={`mt-2 h-1 w-full rounded-full transition-colors duration-300
                ${index === currentStep ? 'bg-red-600' : 'bg-gray-300'}
              `}
            />
          </div>
        ))}
      </div>
    </div>
  );
};



// Form section: Personal & Contact Information
const PersonalInfoForm = ({ onNext }) => {
  return (
    <form className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Personal Information</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Name */}
        <div className="relative">
          <label htmlFor="firstName" className="absolute text-sm text-gray-600 bg-white px-1 ml-3 -top-2.5 left-2 z-10">
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
          <label htmlFor="middleName" className="absolute text-sm text-gray-600 bg-white px-1 ml-3 -top-2.5 left-2 z-10">
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
          <label htmlFor="lastName" className="absolute text-sm text-gray-600 bg-white px-1 ml-3 -top-2.5 left-2 z-10">
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            placeholder="Doe"
            className="pt-5 pb-2 px-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Email Address */}
        <div className="relative">
          <label htmlFor="email" className="absolute text-sm text-gray-600 bg-white px-1 ml-3 -top-2.5 left-2 z-10">
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
          <label htmlFor="phone" className="absolute text-sm text-gray-600 bg-white px-1 ml-3 -top-2.5 left-2 z-10">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="+1234567890"
            className="pt-5 pb-2 px-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Date of Birth */}
        <div className="relative">
          <label htmlFor="dob" className="absolute text-sm text-gray-600 bg-white px-1 ml-3 -top-2.5 left-2 z-10">
            Date of Birth *
          </label>
          <input
            type="date"
            id="dob"
            className="pt-5 pb-2 px-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Gender */}
        <div className="relative">
          <label htmlFor="gender" className="absolute text-sm text-gray-600 bg-white px-1 ml-3 -top-2.5 left-2 z-10">
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
      </div>

      {/* Next Button */}
      <div className="flex justify-end">
        <button
          type="button"
          onClick={onNext}
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Next
          <LuChevronRight className="ml-2 -mr-1 h-5 w-5" />
        </button>
      </div>
    </form>
  );
};

// Form section: Education, Certification & Experience
const EducationInfoForm = ({ onPrevious }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
        Education, Certification & Experience
      </h3>
      <p className="text-gray-600">
        This is a placeholder for the next section of your form. Please provide the details of this section, and I will generate the code for you.
      </p>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={onPrevious}
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <LuChevronLeft className="mr-2 -ml-1 h-5 w-5" />
          Previous
        </button>
      </div>
    </div>
  );
};

const App = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const renderFormStep = () => {
    switch (currentStep) {
      case 0:
        return <PersonalInfoForm onNext={() => setCurrentStep(1)} />;
      case 1:
        return <EducationInfoForm onPrevious={() => setCurrentStep(0)} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
        <Logo />
        <h1 className="text-center text-xl md:text-2xl font-bold text-green-700 mt-4">
          LASCOFED TRAINING AND DEVELOPMENT CENTRE
        </h1>
        <h2 className="text-center text-2xl md:text-2xl font-bold text-green-700 mt-4 py-5">
          APPLICATION FORM
        </h2>
        <FormSteps currentStep={currentStep} />
        <div className="mt-8">
          {renderFormStep()}
        </div>
      </div>
    </div>
  );
};

export default App;
