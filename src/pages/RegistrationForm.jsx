import React from 'react';

const RegistrationForm = () => {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-green-700">
        LASCOFED TRAINING AND DEVELOPMENT CENTRE
      </h1>
      <h2 className="text-2xl font-bold text-center mb-8 text-green-800">
        APPLICATION FORM
      </h2>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input type="text" placeholder="First Name *" className="border p-3 rounded" />
          <input type="text" placeholder="Middle Name *" className="border p-3 rounded" />
          <input type="text" placeholder="Last Name *" className="border p-3 rounded" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="date" placeholder="Date of Birth *" className="border p-3 rounded" />
          <select className="border p-3 rounded">
            <option>Select Gender *</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        {/* Add other fields as needed */}

        <button type="submit" className="w-full bg-red-500 text-white p-3 rounded hover:bg-red-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
