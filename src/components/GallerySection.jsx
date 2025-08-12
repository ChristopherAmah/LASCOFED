import React, { useState } from "react";
import mason from "../assets/mason.jpg"; // Placeholder image
import a from "../assets/VisitToAssembly/a.jpg";
import b from "../assets/VisitToAssembly/b.jpg"; 
import c from "../assets/VisitToAssembly/c.jpg";
import coopa from "../assets/CooperativeFestival2023/a.jpg";
import coopb from "../assets/CooperativeFestival2023/b.jpg";
import coopc from "../assets/CooperativeFestival2023/c.jpg";
import agrica from "../assets/LascofedAgric/agrica.jpg";
import agricb from "../assets/LascofedAgric/agricb.jpg";
import agricc from "../assets/LascofedAgric/agricc.jpg";
import coop21a from "../assets/CoopConf21/coop21a.jpg";
import coop21b from "../assets/CoopConf21/coop21b.jpg";
import coop21c from "../assets/CoopConf21/coop21c.jpg";
import coop22a from "../assets/CoopConf22/coop22a.jpg";
import coop22b from "../assets/CoopConf22/coop22b.jpg";
import coop22c from "../assets/CoopConf22/coop22c.jpg";
import coop23a from "../assets/CoopConf23/coop23a.jpg";
import coop23b from "../assets/CoopConf23/coop23b.jpg";
import coop23c from "../assets/CoopConf23/coop23c.jpg";
import coop24a from "../assets/CoopConf24/coop24a.jpg";
import coop24b from "../assets/CoopConf24/coop24b.jpg";
import coop24c from "../assets/CoopConf24/coop24c.jpg";
const years = ["All", "2025", "2024", "2023", "2022", "2021"];

// A function to get a placeholder image URL with a random size
const getRandomPlaceholder = () => {
  const sizes = [
    { width: 300, height: 400 },
    { width: 400, height: 250 },
    { width: 350, height: 450 },
    { width: 450, height: 300 },
    { width: 300, height: 200 },
    { width: 250, height: 350 },
  ];
  const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
  return `https://placehold.co/${randomSize.width}x${randomSize.height}/22c55e/f0fdf4?text=LASCOFED+Image`;
};

// New data structure to hold multiple images per event and a year for filtering
const galleryData = [
  {
    title: "2021 LASCOFED Leaders Con",
    year: "2021",
    images: [
      coop21a,
      coop21b,
      coop21c,
    ],
  },
  {
    title: "2022 LASCOFED Leaders Con",
    year: "2022",
    images: [
      coop22a,
      coop22b,
      coop22c,
    ],
  },
  {
    title: "2023 Cooperative Leaders Con",
    year: "2023",
    images: [
      coop23a,
      coop23b,
      coop23c,
    ],
  },
  {
    title: "Cooperative Festival 2023",
    year: "2023",
    images: [
      coopa,
      coopb,
      coopc,
    ],
  },
  {
    title: "LASCOFED Agricultural Produce",
    year: "2024",
    images: [
      agrica,
      agricb,
      agricc,
    ],
  },
  {
    title: "2024 Cooperative Leaders Con",
    year: "2024",
    images: [
      coop24a,
      coop24b,
      coop24c,
    ],
  },
  {
    title: "Visit to Lagos State House of Assembly",
    year: "2024",
    images: [
      a,
      b,
      c,
    ],
  },
];

// The new Modal component to display all images from an album
const AlbumModal = ({ title, images, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
    <div className="bg-white rounded-lg max-w-5xl w-full h-full md:h-5/6 flex flex-col relative">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-red-600 text-white rounded-full p-2 hover:bg-red-700 transition-colors duration-200 z-10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <h3 className="text-xl md:text-2xl font-bold text-center p-6 border-b border-gray-200">
        {title}
      </h3>

      {/* Image Grid with scrollable content */}
      <div className="p-4 overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md">
              <img src={image} alt={`${title} - Image ${index + 1}`} className="w-full h-full object-cover" />
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

  const filteredData = galleryData.filter((item) => {
    if (selectedYear === "All") return true;
    return item.year === selectedYear;
  });

  const handleCardClick = (album) => {
    setSelectedAlbum(album);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedAlbum(null);
  };

  return (
    <section className="bg-white py-12 md:py-20 px-4 sm:px-8 lg:px-40 max-w-7xl mx-auto font-sans">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12 text-gray-800">
        LASCOFED Through The Years
      </h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center mb-12 gap-3 md:gap-5">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 transform-gpu hover:scale-105 ${
              selectedYear === year
                ? "bg-red-600 text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-600"
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Masonry Grid with pure CSS */}
      <div className="masonry-grid-wrapper">
        {filteredData.map((item, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(item)}
            className="masonry-grid-item relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 group cursor-pointer break-inside-avoid-column"
          >
            <img
              src={item.images[0]} // Displaying the first image as the cover
              alt={item.title}
              className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay with a subtle gradient and title */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="p-4 w-full">
                <h3 className="text-white text-lg font-bold leading-tight">
                  {item.title}
                </h3>
                <p className="text-white text-sm mt-1">{item.images.length} photos</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for viewing all images in an album */}
      {showModal && selectedAlbum && (
        <AlbumModal
          title={selectedAlbum.title}
          images={selectedAlbum.images}
          onClose={closeModal}
        />
      )}

      {/* CSS for the Masonry Grid */}
      <style>{`
        .masonry-grid-wrapper {
          column-count: 4;
          column-gap: 1rem;
        }

        .masonry-grid-item {
          margin-bottom: 1rem;
        }

        @media (max-width: 1280px) {
          .masonry-grid-wrapper {
            column-count: 3;
          }
        }

        @media (max-width: 768px) {
          .masonry-grid-wrapper {
            column-count: 2;
          }
        }

        @media (max-width: 500px) {
          .masonry-grid-wrapper {
            column-count: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default GallerySection;
