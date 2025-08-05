import React, { useState } from 'react';
import { LuChevronRight, LuChevronLeft } from 'react-icons/lu';

// Placeholder logo component
const Logo = () => (
  <div className="flex justify-center items-center h-16 w-16 mx-auto">
    <img
      src="https://placehold.co/100x100/E9E6E6/252525?text=LASCOFED"
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
    <div className="flex justify-center my-8 text-sm md:text-base">
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 w-full max-w-5xl px-2">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-2">
            <span
              className={`font-semibold transition-colors duration-300 text-center ${
                index === currentStep
                  ? "text-red-600 border-b-2 border-red-600"
                  : "text-gray-500"
              }`}
            >
              {step}
            </span>
            {index < steps.length - 1 && (
              <span className="text-gray-300 select-none">|</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};


// Form section: Personal & Contact Information
const PersonalInfoForm = ({ onNext }) => {
  return (
    <form className="space-y-6">
      <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Basic Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
            placeholder="John"
          />
        </div>
        <div className="col-span-1">
          <label htmlFor="middleName" className="block text-sm font-medium text-gray-700">
            Middle Name *
          </label>
          <input
            type="text"
            id="middleName"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
            placeholder="Isaac"
          />
        </div>
        <div className="col-span-1">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
            placeholder="Doe"
          />
        </div>
        <div className="col-span-1">
          <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
            Date of Birth *
          </label>
          <input
            type="date"
            id="dob"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
          />
        </div>
        <div className="col-span-1">
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
            Gender *
          </label>
          <select
            id="gender"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
          >
            <option>Select your gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
        <div className="col-span-1">
          <label htmlFor="pobCity" className="block text-sm font-medium text-gray-700">
            Place of Birth (City) *
          </label>
          <input
            type="text"
            id="pobCity"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
            placeholder="Lagos"
          />
        </div>
        <div className="col-span-1">
          <label htmlFor="pobState" className="block text-sm font-medium text-gray-700">
            Place of Birth (State) *
          </label>
          <input
            type="text"
            id="pobState"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
            placeholder="Lagos"
          />
        </div>
      </div>
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

const RegistrationForm = () => {
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
        <h1 className="text-center text-xl md:text-2xl font-bold text-red-600 mt-4">
          LASCOFED TRAINING AND DEVELOPMENT CENTRE
        </h1>
        <h2 className="text-center text-2xl md:text-4xl font-bold text-green-700 mt-2">
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

export default RegistrationForm;
