import React, { useState } from 'react';
import { LuChevronRight, LuChevronLeft } from 'react-icons/lu';
import logo from '../assets/logo.png';
import FormSteps from './FormSteps';
// You will need to make sure your form components are updated to accept props.
import PersonalInfoForm from './PersonalInfoForm';
import EducationInfoForm from './EducationInfoForm';
import EmploymentForm from './EmploymentForm';
import DeclarationForm from './DeclarationForm';
import SponsorForm from './SponsorForm';

// Placeholder for your Logo component
const Logo = () => (
  <div className="flex justify-center items-center h-30 w-30 mx-auto">
    <img
      src={logo}
      alt="LASCOFED Logo"
      className="h-full w-full object-contain"
    />
  </div>
);

// The main parent component that manages the state and steps
const MultiStepForm = () => {
  // State to hold all form data in a single object
  const [formData, setFormData] = useState({
    personalInfo: {},
    educationInfo: {},
    employment: {},
    declaration: {},
    sponsor: {}
  });

  // State to track the current step
  const [currentStep, setCurrentStep] = useState(0);

  // Function to handle moving to the next step, merging data from the current step
  const handleNext = (stepData) => {
    // Determine which section to update based on the current step
    let section;
    switch (currentStep) {
      case 0: section = 'personalInfo'; break;
      case 1: section = 'educationInfo'; break;
      case 2: section = 'employment'; break;
      case 3: section = 'declaration'; break;
      case 4: section = 'sponsor'; break;
      default: section = '';
    }

    if (section) {
      // Merge the new step data into the main formData state
      setFormData(prevData => ({
        ...prevData,
        [section]: stepData
      }));
    }

    // Move to the next step
    setCurrentStep((prevStep) => prevStep + 1);
  };

  // Function to handle moving to the previous step
  const handleBack = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };
  
  // Function to handle the final form submission
  const handleSubmit = (stepData) => {
    // First, merge the data from the final step
    const finalFormData = {
      ...formData,
      sponsor: stepData,
    };

    console.log("Submitting form data:", finalFormData);
    // This is where you would send the `finalFormData` object to your backend/database
    // For now, an alert will show to confirm submission.
    // Replace with a custom modal or message box in a real application.
    alert("Form submitted successfully! Check the console for the data.");
  };

  // Handle which form step to render and pass props
  const renderForm = () => {
    switch (currentStep) {
      case 0:
        return (
          <PersonalInfoForm
            formData={formData.personalInfo}
            onNext={handleNext}
            onBack={handleBack}
            showBack={false}
          />
        );
      case 1:
        return (
          <EducationInfoForm
            formData={formData.educationInfo}
            onNext={handleNext}
            onBack={handleBack}
            showBack={true}
          />
        );
      case 2:
        return (
          <EmploymentForm
            formData={formData.employment}
            onNext={handleNext}
            onBack={handleBack}
            showBack={true}
          />
        );
      case 3:
        return (
          <DeclarationForm
            formData={formData.declaration}
            onNext={handleNext}
            onBack={handleBack}
            showBack={true}
          />
        );
      case 4:
        return (
          <SponsorForm
            formData={formData.sponsor}
            onNext={handleSubmit} // The final form calls handleSubmit
            onBack={handleBack}
            showBack={true}
          />
        );
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
