// MultiStepForm.jsx
import React, { useState } from 'react';
import logo from '../assets/logo.png';
import FormSteps from './FormSteps';
import PersonalInfoForm from './PersonalInfoForm';
import EducationInfoForm from './EducationInfoForm';

const Logo = () => (
  <div className="flex justify-center items-center h-30 w-30 mx-auto">
    <img
      src = {logo}
      alt="LASCOFED Logo"
      className="h-full w-full object-contain"
    />
  </div>
);

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const renderForm = () => {
    switch (currentStep) {
      case 0:
        return (
          <PersonalInfoForm
            onNext={() => setCurrentStep(1)}
            showBack={false}
          />
        );
      case 1:
        return (
          <EducationInfoForm
            onPrevious={() => setCurrentStep(0)}
          />
        );
      // Add more cases for next steps
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
          {renderForm()}
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
