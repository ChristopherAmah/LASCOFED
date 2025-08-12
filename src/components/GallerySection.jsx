import React, { useState } from "react";

// The pure CSS Grid and placeholder images are used to create a stylish, self-contained masonry effect.
// When using this code in your local project, you can replace the placeholder URLs
// with your actual image imports.

// Example of how to import your images in your own environment:
import mason from "../assets/mason.jpg";
import mason1 from "../assets/mason1.jpg";
import mason2 from "../assets/mason2.jpg";
import mason3 from "../assets/mason3.jpg";
import mason4 from "../assets/mason4.jpg";
import mason5 from "../assets/mason5.jpg";
import mason6 from "../assets/mason6.jpg";
import mason7 from "../assets/mason7.jpg";

const years = ["All", "2025", "2024", "2023", "2022", "2021"];

// Using a mix of hardcoded placeholder URLs to showcase a better masonry layout.
// You can replace these with your imported image variables once you copy this code.
const galleryData = [
  { title: "2021 LASCOFED Leaders Con", image: mason1 },
  { title: "2022 LASCOFED Leaders Con", image: mason },
  { title: "2023 Cooperative Leaders Con", image: mason2 },
  { title: "Cooperative Festival 2023", image: mason3 },
  { title: "LASCOFED Agricultural Produce", image: mason4 },
  { title: "2024 Cooperative Leaders Con", image: mason5 },
  { title: "Visit to Lagos State House of Assembly", image: mason6 },
  { title: "Training School", image: mason7 },
  { title: "Stakeholder Engagement 2023", image: mason1 },
  { title: "Youth Empowerment Initiative", image: mason2 },
  { title: "Financial Literacy Workshop", image: mason3 },
  { title: "Community Outreach 2024", image: mason4 },
];

const GallerySection = () => {
  const [selectedYear, setSelectedYear] = useState("All");

  const filteredData = galleryData.filter((item) => {
    if (selectedYear === "All") return true;
    return item.title.includes(selectedYear);
  });

  return (
    <section className="bg-white py-12 md:py-20 px-4 sm:px-40 max-w-7xl mx-auto font-sans">
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
            className="masonry-grid-item relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 group cursor-pointer break-inside-avoid-column"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay with a subtle gradient and title */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="p-4 w-full">
                <h3 className="text-white text-lg font-bold leading-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

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
