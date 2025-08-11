import React, { useState } from 'react';
import logo from '../assets/logo.png';
import FormSteps from './FormSteps';
import PersonalInfoForm from './PersonalInfoForm';
import EducationInfoForm from './EducationInfoForm';
import EmploymentForm from './EmploymentForm';
import DeclarationForm from './DeclarationForm';
import SponsorForm from './SponsorForm';

const Logo = () => (
  <div className="flex justify-center items-center h-30 w-30 mx-auto">
    <img
      src={logo}
      alt="LASCOFED Logo"
      className="h-full w-full object-contain"
    />
  </div>
);

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  // ✅ Define next and previous step functions
  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  // ✅ Handle which form step to render
  const renderForm = () => {
    switch (currentStep) {
      case 0:
        return (
          <PersonalInfoForm
            onNext={nextStep}
            showBack={false}
          />
        );
      case 1:
        return (
          <EducationInfoForm
            onNext={nextStep}
            onBack={prevStep}
            showBack={true}
          />
        );
      case 2:
        return (
          <EmploymentForm
            onNext={nextStep}
            onBack={prevStep}
            showBack={true}
          />
        );
      case 3:
        return (
          <DeclarationForm
            onNext={nextStep}
            onBack={prevStep}
            showBack={true}
          />
        );
      case 4:
        return (
          <SponsorForm
            onNext={nextStep}
            onBack={prevStep}
            showBack={true}
          />
        );
      // Add more cases for future steps
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

        {/* Step Progress Header */}
        <FormSteps currentStep={currentStep} />

        {/* Active Step Component */}
        <div className="mt-8">
          {renderForm()}
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
