import React, { useState } from 'react';
import {
  LuChevronRight,
  LuChevronLeft,
  LuCirclePlus,
  LuPencil,
} from 'react-icons/lu';
import uploadlogo from '../assets/uploadlogo.png';

const EducationInfoForm = ({ onNext, onBack, showBack }) => {
  const [academicHistory, setAcademicHistory] = useState([
    { institution: '', certificate: '', year: '', areaOfStudy: '' },
    { institution: '', certificate: '', year: '', areaOfStudy: '' },
  ]);

  const handleAddAcademicEntry = () => {
    setAcademicHistory([
      ...academicHistory,
      { institution: '', certificate: '', year: '', areaOfStudy: '' },
    ]);
  };

  const handleAcademicInputChange = (index, event) => {
    const { name, value } = event.target;
    const list = [...academicHistory];
    list[index][name] = value;
    setAcademicHistory(list);
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

  return (
    <form className="max-w-4xl mx-auto p-4 sm:p-6 bg-white shadow-md rounded-md space-y-6">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
        Education, Certification & Experience
      </h2>

      <div className="px-2 sm:px-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <h3 className="text-lg font-semibold text-gray-800">
            Academic History
          </h3>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={handleAddAcademicEntry}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <LuCirclePlus className="mr-2 h-4 w-4" /> Add
            </button>
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <LuPencil className="mr-2 h-4 w-4" /> Edit
            </button>
          </div>
        </div>

        {academicHistory.map((entry, index) => (
          <div
            key={index}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4 pb-4 mb-4 last:border-b-0 last:pb-0 last:mb-0"
          >
            {/* Institution */}
            <div className="relative">
              <label
                htmlFor={`institution-${index}`}
                className="absolute font-bold text-sm text-gray-600 bg-white px-1 ml-2 -top-2.5 left-2 z-10"
              >
                Institution *
              </label>
              <input
                type="text"
                id={`institution-${index}`}
                name="institution"
                value={entry.institution}
                onChange={(e) => handleAcademicInputChange(index, e)}
                placeholder="Enter name of institution"
                className="pt-5 pb-2 px-2 w-full border text-sm border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Certificate */}
            <div className="relative">
              <label
                htmlFor={`certificate-${index}`}
                className="absolute font-bold text-sm text-gray-600 bg-white px-1 ml-2 -top-2.5 left-2 z-10"
              >
                Certificate Earned *
              </label>
              <input
                type="text"
                id={`certificate-${index}`}
                name="certificate"
                value={entry.certificate}
                onChange={(e) => handleAcademicInputChange(index, e)}
                placeholder="Enter certificate earned"
                className="pt-5 pb-2 px-2 w-full border text-sm border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Year */}
            <div className="relative">
              <label
                htmlFor={`yearConferred-${index}`}
                className="absolute font-bold text-sm text-gray-600 bg-white px-1 ml-2 -top-2.5 left-2 z-10"
              >
                Year Conferred *
              </label>
              <select
                id={`yearConferred-${index}`}
                name="year"
                value={entry.year}
                onChange={(e) => handleAcademicInputChange(index, e)}
                className="pt-5 pb-2 px-2 w-full border text-sm text-gray-600 border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="">Select Year</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            {/* Area of Study */}
            <div className="relative">
              <label
                htmlFor={`areaOfStudy-${index}`}
                className="absolute font-bold text-sm text-gray-600 bg-white px-1 ml-2 -top-2.5 left-2 z-10"
              >
                Area of Study *
              </label>
              <input
                type="text"
                id={`areaOfStudy-${index}`}
                name="areaOfStudy"
                value={entry.areaOfStudy}
                onChange={(e) => handleAcademicInputChange(index, e)}
                placeholder="Enter area of study"
                className="pt-5 pb-2 px-2 w-full border text-sm border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>
        ))}

        {/* Upload Section */}
        <div className="mt-6 px-2 sm:px-12">
          <div className="w-full border border-dashed border-[#D8DAEB] rounded-[12px] py-10 px-4 sm:px-10 text-center flex flex-col items-center justify-center gap-4">
            <img src={uploadlogo} alt="Upload" className="w-16 h-16" />

            <label
              htmlFor="passport"
              className="text-sm font-medium text-gray-700"
            >
              Upload photocopies of result(s) <br /> or certificate(s)
              <br />
              <span className="text-[12px] text-gray-500">
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

      {/* Navigation */}
      <div className="mt-8 flex  items-center justify-between md:px-10">
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
          className="inline-flex items-center md:px-20 px-4 py-2 text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Next
          <LuChevronRight className="ml-2 -mr-1 h-5 w-5" />
        </button>
      </div>
    </form>
  );
};

export default EducationInfoForm;
