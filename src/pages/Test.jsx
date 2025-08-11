import React, { useState } from 'react';
import {
  LuChevronRight,
  LuChevronLeft,
  LuCirclePlus,
  LuPencil,
  LuSave,
  LuX,
  LuTrash2,
  LuGripVertical,
} from 'react-icons/lu';
import uploadlogo from '../assets/uploadlogo.png';

const EducationInfoForm = ({ onNext, onBack, showBack }) => {
  const [academicHistory, setAcademicHistory] = useState([
    { institution: '', certificate: '', year: '', areaOfStudy: '' },
    { institution: '', certificate: '', year: '', areaOfStudy: '' },
  ]);

  const [professionalCerts, setProfessionalCerts] = useState([
    { awardingBody: '', certificate: '', year: '' },
    { awardingBody: '', certificate: '', year: '' },
  ]);

  const [editMode, setEditMode] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectedCertRows, setSelectedCertRows] = useState([]);

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

  /** Academic Handlers **/
  const handleAddAcademicEntry = () => {
    setAcademicHistory([...academicHistory, { institution: '', certificate: '', year: '', areaOfStudy: '' }]);
  };
  const handleAcademicInputChange = (index, e) => {
    const { name, value } = e.target;
    const list = [...academicHistory];
    list[index][name] = value;
    setAcademicHistory(list);
  };
  const handleAcademicCheckboxToggle = (index) => {
    setSelectedRows(selectedRows.includes(index) ? selectedRows.filter(i => i !== index) : [...selectedRows, index]);
  };
  const handleDeleteSelectedAcademic = () => {
    setAcademicHistory(academicHistory.filter((_, idx) => !selectedRows.includes(idx)));
    setSelectedRows([]);
  };

  /** Professional Certification Handlers **/
  const handleAddCertEntry = () => {
    setProfessionalCerts([...professionalCerts, { awardingBody: '', certificate: '', year: '' }]);
  };
  const handleCertInputChange = (index, e) => {
    const { name, value } = e.target;
    const list = [...professionalCerts];
    list[index][name] = value;
    setProfessionalCerts(list);
  };
  const handleCertCheckboxToggle = (index) => {
    setSelectedCertRows(selectedCertRows.includes(index) ? selectedCertRows.filter(i => i !== index) : [...selectedCertRows, index]);
  };
  const handleDeleteSelectedCert = () => {
    setProfessionalCerts(professionalCerts.filter((_, idx) => !selectedCertRows.includes(idx)));
    setSelectedCertRows([]);
  };

  /** General Save/Cancel **/
  const handleSave = () => {
    setEditMode(false);
    setSelectedRows([]);
    setSelectedCertRows([]);
  };
  const handleCancel = () => {
    setEditMode(false);
    setSelectedRows([]);
    setSelectedCertRows([]);
  };

  return (
    <form className="max-w-4xl mx-auto p-4 sm:p-6 bg-white shadow-md rounded-md space-y-10">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
        Education, Certification & Experience
      </h2>

      {/* ================= ACADEMIC HISTORY ================= */}
      <div className="px-2 sm:px-5">
        <SectionHeader
          title="Academic History"
          editMode={editMode}
          onAdd={handleAddAcademicEntry}
          onEdit={() => setEditMode(true)}
          onDelete={handleDeleteSelectedAcademic}
          onSave={handleSave}
          onCancel={handleCancel}
        />

        {academicHistory.map((entry, index) => (
          <EntryRow
            key={index}
            index={index}
            editMode={editMode}
            selected={selectedRows.includes(index)}
            onSelect={() => handleAcademicCheckboxToggle(index)}
            fields={[
              { label: 'Institution *', name: 'institution', type: 'text', value: entry.institution, onChange: (e) => handleAcademicInputChange(index, e), placeholder: 'Enter name of institution' },
              { label: 'Certificate Earned *', name: 'certificate', type: 'text', value: entry.certificate, onChange: (e) => handleAcademicInputChange(index, e), placeholder: 'Enter certificate earned' },
              { label: 'Year Conferred *', name: 'year', type: 'select', value: entry.year, onChange: (e) => handleAcademicInputChange(index, e), options: years },
              { label: 'Area of Study *', name: 'areaOfStudy', type: 'text', value: entry.areaOfStudy, onChange: (e) => handleAcademicInputChange(index, e), placeholder: 'Enter area of study' },
            ]}
          />
        ))}

        <UploadBox label="Upload photocopies of result(s) or certificate(s)" />
      </div>

      {/* ================= PROFESSIONAL CERTIFICATION ================= */}
      <div className="px-2 sm:px-5">
        <SectionHeader
          title="Professional Certification"
          editMode={editMode}
          onAdd={handleAddCertEntry}
          onEdit={() => setEditMode(true)}
          onDelete={handleDeleteSelectedCert}
          onSave={handleSave}
          onCancel={handleCancel}
        />

        {professionalCerts.map((entry, index) => (
          <EntryRow
            key={index}
            index={index}
            editMode={editMode}
            selected={selectedCertRows.includes(index)}
            onSelect={() => handleCertCheckboxToggle(index)}
            fields={[
              { label: 'Awarding Body *', name: 'awardingBody', type: 'text', value: entry.awardingBody, onChange: (e) => handleCertInputChange(index, e), placeholder: 'Enter awarding body' },
              { label: 'Certificate *', name: 'certificate', type: 'text', value: entry.certificate, onChange: (e) => handleCertInputChange(index, e), placeholder: 'Enter certificate' },
              { label: 'Year Conferred *', name: 'year', type: 'select', value: entry.year, onChange: (e) => handleCertInputChange(index, e), options: years },
            ]}
          />
        ))}

        <UploadBox label="Upload photocopies of certificate(s)" />
      </div>

      {/* Navigation */}
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
    </form>
  );
};

/** ============== REUSABLE COMPONENTS ============== **/

const SectionHeader = ({ title, editMode, onAdd, onEdit, onDelete, onSave, onCancel }) => (
  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {!editMode ? (
        <>
          <button onClick={onAdd} type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700">
            <LuCirclePlus className="mr-2 h-4 w-4" /> Add
          </button>
          <button onClick={onEdit} type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50">
            <LuPencil className="mr-2 h-4 w-4" /> Edit
          </button>
        </>
      ) : (
        <>
          <button onClick={onDelete} type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-500 hover:bg-red-600">
            <LuTrash2 className="mr-2 h-4 w-4" /> Delete
          </button>
          <button onClick={onSave} type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700">
            <LuSave className="mr-2 h-4 w-4" /> Save
          </button>
          <button onClick={onCancel} type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50">
            <LuX className="mr-2 h-4 w-4" /> Cancel
          </button>
        </>
      )}
    </div>
  </div>
);

const EntryRow = ({ editMode, selected, onSelect, index, fields }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4 pb-4 mb-4">
    {editMode && (
      <div className="col-span-full flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <input type="checkbox" checked={selected} onChange={onSelect} className="h-4 w-4 text-red-600" />
          <span className="text-sm text-gray-700">Select</span>
        </div>
        <div className="text-gray-500 cursor-grab">
          <LuGripVertical />
        </div>
      </div>
    )}
    {fields.map((field, i) => (
      <div key={i} className="relative">
        <label className="absolute font-bold text-sm text-gray-600 bg-white px-1 ml-2 -top-2.5 left-2 z-10">
          {field.label}
        </label>
        {field.type === 'select' ? (
          <select
            name={field.name}
            value={field.value}
            onChange={field.onChange}
            className="pt-5 pb-2 px-2 w-full border text-sm border-gray-300 text-gray-600 rounded-md bg-white"
          >
            <option value="">Select Year</option>
            {field.options.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={field.type}
            name={field.name}
            value={field.value}
            onChange={field.onChange}
            placeholder={field.placeholder}
            className="pt-5 pb-2 px-2 w-full border text-sm border-gray-300 rounded-md"
          />
        )}
      </div>
    ))}
  </div>
);

const UploadBox = ({ label }) => (
  <div className="mt-6 px-2 sm:px-12">
    <div className="w-full border border-dashed border-[#D8DAEB] rounded-[12px] py-10 px-4 sm:px-10 text-center flex flex-col items-center justify-center gap-4">
      <img src={uploadlogo} alt="Upload" className="w-16 h-16" />
      <label className="text-sm font-medium text-gray-700">
        {label}
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
);

export default EducationInfoForm;
