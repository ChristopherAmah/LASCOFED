// EducationInfoForm.jsx
import React from 'react';
import { LuChevronLeft } from 'react-icons/lu';

const EducationInfoForm = ({ onPrevious }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
        Education, Certification & Experience
      </h3>
      <p className="text-gray-600">
        This is a placeholder for the next section of your form.
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

export default EducationInfoForm;
