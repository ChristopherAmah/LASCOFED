import React, { useState } from "react";
import uploadlogo from '../assets/uploadlogo.png';
import {
  LuChevronRight,
  LuChevronLeft,
} from 'react-icons/lu';

// This is a new component for the Declaration page.
const DeclarationForm = ({ onNext, onBack, showBack }) => {
  // State to hold the form data
  const [formData, setFormData] = useState({
    isCorrect: false,
    isUnderstood: false,
    isAbiding: false,
    date: "",
    signatureFile: null
  });

  // Handle changes for all input fields
  const handleChange = (e) => {
    const { name, type, checked, value, files } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : files ? files[0] : value
    }));
  };

  return (
    <div>
      {/* Candidate Declaration Section */}
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-lg font-semibold mb-6">Candidate Declaration</h2>
        
        {/* Declaration Checkboxes */}
        <div className="space-y-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="isCorrect"
              name="isCorrect"
              checked={formData.isCorrect}
              onChange={handleChange}
              className="h-5 w-5 text-red-600 border-gray-300 rounded focus:ring-red-500"
            />
            <label htmlFor="isCorrect" className="ml-3 text-sm text-gray-700 font-medium">
              I declare that the information provided is true and correct.
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="isUnderstood"
              name="isUnderstood"
              checked={formData.isUnderstood}
              onChange={handleChange}
              className="h-5 w-5 text-red-600 border-gray-300 rounded focus:ring-red-500"
            />
            <label htmlFor="isUnderstood" className="ml-3 text-sm text-gray-700 font-medium">
              I understand that false information may lead to withdrawal/prosecution.
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="isAbiding"
              name="isAbiding"
              checked={formData.isAbiding}
              onChange={handleChange}
              className="h-5 w-5 text-red-600 border-gray-300 rounded focus:ring-red-500"
            />
            <label htmlFor="isAbiding" className="ml-3 text-sm text-gray-700 font-medium">
              I will abide by the rules of the programme.
            </label>
          </div>
        </div>

        {/* Date Input */}
        <div className="mt-8 relative w-full md:w-1/2">
          <label htmlFor="date" className="absolute font-semibold text-sm text-gray-600 bg-white px-1 ml-2 -top-2.5 left-2 z-10">
            Date *
          </label>
          <input
            type="date"
            name="date"
            id="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Upload Signature Section */}
        <div className="mt-6 px-2 sm:px-12">
                  <div className="w-full border border-dashed border-[#D8DAEB] rounded-[12px] py-10 px-4 sm:px-10 text-center flex flex-col items-center justify-center gap-4">
                    <img src={uploadlogo} alt="Upload" className="w-16 h-16" />
                    <label className="text-sm font-medium text-gray-700">
                      <span>
                        Upload your signature
                      </span>
                      <br />
                      <span className="text-[12px] text-gray-500">
                        JPEG, PNG, and PDF formats, up to 50MB
                      </span>
                    </label>
                    <input
                      type="file"
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
          className="inline-flex items-center md:px-20 px-4 py-2 text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700"
        >
          Next
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

export default DeclarationForm;
