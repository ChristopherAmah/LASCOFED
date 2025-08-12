// src/components/GallerySection.jsx
import React, { useState } from "react";

// 1️⃣ Import all images statically per folder
const assemblyImages = Object.values(import.meta.glob("../assets/VisitToAssembly/*.{png,jpg,JPG,jpeg,svg,webp}", { eager: true }))
  .map(m => m.default);
const coopFest2023Images = Object.values(import.meta.glob("../assets/CooperativeFestival2023/*.{png,jpg,JPG,jpeg,svg,webp}", { eager: true }))
  .map(m => m.default);
const agricImages = Object.values(import.meta.glob("../assets/LascofedAgric/*.{png,jpg,JPG,jpeg,svg,webp}", { eager: true }))
  .map(m => m.default);
const coop21Images = Object.values(import.meta.glob("../assets/CoopConf21/*.{png,jpg,JPG,jpeg,svg,webp}", { eager: true }))
  .map(m => m.default);
const coop22Images = Object.values(import.meta.glob("../assets/CoopConf22/*.{png,jpg,JPG,jpeg,svg,webp}", { eager: true }))
  .map(m => m.default);
const coop23Images = Object.values(import.meta.glob("../assets/CoopConf23/*.{png,jpg,JPG,jpeg,svg,webp}", { eager: true }))
  .map(m => m.default);
const coop24Images = Object.values(import.meta.glob("../assets/CoopConf24/*.{png,jpg,JPG,jpeg,svg,webp}", { eager: true }))
  .map(m => m.default);

const years = ["All", "2025", "2024", "2023", "2022", "2021"];

// 2️⃣ Your gallery data
const galleryData = [
  { title: "2021 LASCOFED Leaders Con", year: "2021", images: coop21Images },
  { title: "2022 LASCOFED Leaders Con", year: "2022", images: coop22Images },
  { title: "2023 Cooperative Leaders Con", year: "2023", images: coop23Images },
  { title: "Cooperative Festival 2023", year: "2023", images: coopFest2023Images },
  { title: "2024 Cooperative Leaders Con", year: "2024", images: coop24Images },
  { title: "LASCOFED Agricultural Produce", year: "2024", images: agricImages },
  { title: "Visit to Lagos State House of Assembly", year: "2024", images: assemblyImages },
];

// 3️⃣ Modal to show album
const AlbumModal = ({ title, images, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
    <div className="bg-white rounded-lg max-w-5xl w-full h-full md:h-5/6 flex flex-col relative">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-red-600 text-white rounded-full py-3 px-4"
      >
        ✕
      </button>
      <h3 className="text-xl md:text-2xl font-bold text-center p-6 border-b border-gray-200">
        {title}
      </h3>
      <div className="p-4 overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <div key={idx} className="rounded-lg overflow-hidden shadow-md">
              <img
                src={img}
                alt={`${title} - ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const GallerySection = () => {
  const [selectedYear, setSelectedYear] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  const filteredData =
    selectedYear === "All"
      ? galleryData
      : galleryData.filter((item) => item.year === selectedYear);

  return (
    <section className="bg-white py-12 px-4 lg:px-40 max-w-7xl mx-auto font-sans">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12">
        LASCOFED Through The Years
      </h2>

      {/* Year Filters */}
      <div className="flex flex-wrap justify-center mb-12 gap-3">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
              selectedYear === year
                ? "bg-red-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-600"
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      {/* 3-column grid with titles always visible */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredData.map((item, idx) => (
          <div
            key={idx}
            onClick={() => {
              setSelectedAlbum(item);
              setShowModal(true);
            }}
            className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
          >
            {/* First image preview */}
            <img
              src={item.images[0]}
              alt={item.title}
              className="w-full h-64 object-cover"
            />

            {/* Always-visible title overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-4">
                <h3 className="text-white font-bold">{item.title}</h3>
                <p className="text-white text-sm">{item.images.length} photos</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && selectedAlbum && (
        <AlbumModal
          title={selectedAlbum.title}
          images={selectedAlbum.images}
          onClose={() => setShowModal(false)}
        />
      )}
    </section>
  );
};

export default GallerySection;
