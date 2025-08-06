import React from 'react';

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
      {/* Mobile View: only current step */}
      <div className="block sm:hidden text-center">
        <div className="text-sm font-medium text-gray-800">
          Step {currentStep + 1} of {steps.length}
        </div>
        <div className="mt-2 text-xs font-semibold text-gray-600">
          {steps[currentStep]}
        </div>
        <div className="mt-2 h-1 w-full bg-gray-200 rounded-full">
          <div
            className="h-1 bg-red-600 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Desktop View: full step indicators */}
      <div className="hidden sm:grid grid-cols-5 gap-2 items-center text-center">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;

          return (
            <div key={index} className="flex flex-col items-center w-full">
              <span
                className={`block text-xs sm:text-sm md:text-sm font-medium h-20 overflow-hidden leading-tight
                  ${
                    isCompleted
                      ? 'text-gray-600'
                      : isCurrent
                      ? 'text-gray-800'
                      : 'text-gray-400'
                  }`}
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
              <div
                className={`mt-2 h-1 w-full rounded-full transition-colors duration-300
                  ${
                    isCompleted
                      ? 'bg-green-600'
                      : isCurrent
                      ? 'bg-red-600'
                      : 'bg-gray-300'
                  }`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FormSteps;
