import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
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
import uploadlogo from '../assets/uploadlogo.png'; // Replace with your actual image path

const generateYears = () => {
  const currentYear = new Date().getFullYear();
  return Array.from({ length: 50 }, (_, i) => currentYear - i);
};

const EducationInfoForm = ({ onNext, onBack, showBack }) => {
  const years = generateYears();

  // Default rows
  const defaultAcademic = [
    { institution: "", certificate: "", year: "", area: "" },
    { institution: "", certificate: "", year: "", area: "" },
  ];
  const defaultCertifications = [
    { body: "", certificate: "", year: "" },
    { body: "", certificate: "", year: "" },
  ];
  const defaultSeminars = [
    { seminar: "", organizers: "", date: "" },
    { seminar: "", organizers: "", date: "" },
  ];

  const [academicHistory, setAcademicHistory] = useState(defaultAcademic);
  const [certifications, setCertifications] = useState(defaultCertifications);
  const [seminars, setSeminars] = useState(defaultSeminars);

  const [academicEdit, setAcademicEdit] = useState(false);
  const [certEdit, setCertEdit] = useState(false);
  const [seminarEdit, setSeminarEdit] = useState(false);

  // Store backup for cancel
  const [backupAcademic, setBackupAcademic] = useState(defaultAcademic);
  const [backupCert, setBackupCert] = useState(defaultCertifications);
  const [backupSeminars, setBackupSeminars] = useState(defaultSeminars);

  const handleChange = (section, index, field, value) => {
    if (section === "academic") {
      const updated = [...academicHistory];
      updated[index][field] = value;
      setAcademicHistory(updated);
    } else if (section === "cert") {
      const updated = [...certifications];
      updated[index][field] = value;
      setCertifications(updated);
    } else {
      const updated = [...seminars];
      updated[index][field] = value;
      setSeminars(updated);
    }
  };

  const handleAddRow = (section) => {
    if (section === "academic") {
      setAcademicHistory([
        ...academicHistory,
        { institution: "", certificate: "", year: "", area: "" },
      ]);
    } else if (section === "cert") {
      setCertifications([
        ...certifications,
        { body: "", certificate: "", year: "" },
      ]);
    } else {
      setSeminars([
        ...seminars,
        { seminar: "", organizers: "", date: "" },
      ]);
    }
  };

  const handleDeleteRow = (section, index) => {
    if (section === "academic") {
      setAcademicHistory(academicHistory.filter((_, i) => i !== index));
    } else if (section === "cert") {
      setCertifications(certifications.filter((_, i) => i !== index));
    } else {
      setSeminars(seminars.filter((_, i) => i !== index));
    }
  };

  const handleEditToggle = (section, isEdit) => {
    if (section === "academic") {
      if (isEdit) {
        setBackupAcademic(academicHistory);
      }
      setAcademicEdit(isEdit);
    } else if (section === "cert") {
      if (isEdit) {
        setBackupCert(certifications);
      }
      setCertEdit(isEdit);
    } else {
      if (isEdit) {
        setBackupSeminars(seminars);
      }
      setSeminarEdit(isEdit);
    }
  };

  const handleCancel = (section) => {
    if (section === "academic") {
      setAcademicHistory(backupAcademic);
      setAcademicEdit(false);
    } else if (section === "cert") {
      setCertifications(backupCert);
      setCertEdit(false);
    } else {
      setSeminars(backupSeminars);
      setSeminarEdit(false);
    }
  };

  const handleSave = (section) => {
    if (section === "academic") {
      setAcademicEdit(false);
    } else if (section === "cert") {
      setCertEdit(false);
    } else {
      setSeminarEdit(false);
    }
  };

  const onDragEnd = (result, section) => {
    if (!result.destination) return;
    const items =
      section === "academic"
        ? [...academicHistory]
        : section === "cert"
        ? [...certifications]
        : [...seminars];
    const [reordered] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reordered);
    if (section === "academic") {
      setAcademicHistory(items);
    } else if (section === "cert") {
      setCertifications(items);
    } else {
      setSeminars(items);
    }
  };

  const renderInput = (label, value, onChange, type = "text", options) => (
    <div className="w-full relative">
      <label className="absolute font-semibold text-sm text-gray-600 bg-white px-1 ml-2 -top-2.5 left-2 z-10">
        {label}
      </label>
      {type === "select" ? (
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <option value="">Select Year</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      )}
    </div>
  );

  const renderSection = (title, section, data, editState) => (
    <div className="bg-white shadow rounded-lg p-6 mb-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        {!editState ? (
          <div className="flex gap-2">
            <button
              onClick={() => handleAddRow(section)}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700"
            >
              <LuCirclePlus className="mr-2 h-4 w-4" /> Add
            </button>
            <button
              onClick={() => handleEditToggle(section, true)}
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50">
              <LuPencil className="mr-2 h-4 w-4" /> Edit
            </button>
          </div>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={() => handleDeleteRow(section, index)}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-500 hover:bg-red-600">
              <LuTrash2 className="mr-2 h-4 w-4" /> Delete
            </button>
            <button
              onClick={() => handleSave(section)}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700">
              <LuSave className="mr-2 h-4 w-4" /> Save
            </button>
            <button
              onClick={() => handleCancel(section)}
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50">
              <LuX className="mr-2 h-4 w-4" /> Cancel
            </button>
          </div>
        )}
      </div>

      {/* List */}
      <DragDropContext onDragEnd={(result) => onDragEnd(result, section)}>
        <Droppable droppableId={section}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {data.map((item, index) => (
                <Draggable
                  key={index}
                  draggableId={`${section}-${index}`}
                  index={index}
                  isDragDisabled={!editState}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      className={`grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-fr gap-4 mb-4 p-4 mx-auto ${
                        data.length === 3 ? 'max-w-[75%]' : ''
                      }`}
                    >
                      {editState && (
                        <div
                          {...provided.dragHandleProps}
                          className="col-span-full flex justify-end text-gray-500 cursor-grab mb-2"
                        >
                          <LuGripVertical />
                        </div>
                      )}

                      {section === "academic" ? (
                        <>
                          {renderInput(
                            "Institution",
                            item.institution,
                            (val) =>
                              handleChange("academic", index, "institution", val)
                          )}
                          {renderInput(
                            "Certificate Earned",
                            item.certificate,
                            (val) =>
                              handleChange("academic", index, "certificate", val)
                          )}
                          {renderInput(
                            "Year Conferred",
                            item.year,
                            (val) =>
                              handleChange("academic", index, "year", val),
                            "select",
                            years
                          )}
                          {renderInput(
                            "Area of Study",
                            item.area,
                            (val) =>
                              handleChange("academic", index, "area", val)
                          )}
                        </>
                      ) : section === "cert" ? (
                        <>
                          {renderInput(
                            "Awarding Body",
                            item.body,
                            (val) =>
                              handleChange("cert", index, "body", val)
                          )}
                          {renderInput(
                            "Certificate",
                            item.certificate,
                            (val) =>
                              handleChange("cert", index, "certificate", val)
                          )}
                          {renderInput(
                            "Year Conferred",
                            item.year,
                            (val) =>
                              handleChange("cert", index, "year", val),
                            "select",
                            years
                          )}
                        </>
                      ) : (
                        <>
                          {renderInput(
                            "Seminar",
                            item.seminar,
                            (val) =>
                              handleChange("seminars", index, "seminar", val)
                          )}
                          {renderInput(
                            "Organizers",
                            item.organizers,
                            (val) =>
                              handleChange("seminars", index, "organizers", val)
                          )}
                          {renderInput(
                            "Date",
                            item.date,
                            (val) =>
                              handleChange("seminars", index, "date", val),
                            "select",
                            years
                          )}
                        </>
                      )}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );

  return (
    <div>
      {renderSection(
        "Academic History",
        "academic",
        academicHistory,
        academicEdit
      )}
      {renderSection(
        "Professional Certification",
        "cert",
        certifications,
        certEdit
      )}
      {renderSection(
        "Seminars / Workshops / Retreats Attended",
        "seminars",
        seminars,
        seminarEdit
      )}

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

    <div className="text-center mt-4 text-gray-600 text-sm">
      Stuck on the form? <a href="#" className="text-red-600 hover:underline">Let's call you!</a>
    </div>
    </div>
  );
};

export default EducationInfoForm;