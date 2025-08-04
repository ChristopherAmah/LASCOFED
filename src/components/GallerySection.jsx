import React, { useState } from "react";
import Masonry from "react-masonry-css";

import mason from "../assets/mason.jpg";
import mason1 from "../assets/mason1.jpg";
import mason2 from "../assets/mason2.jpg";
import mason3 from "../assets/mason3.jpg";
import mason4 from "../assets/mason4.jpg";
import mason5 from "../assets/mason5.jpg";
import mason6 from "../assets/mason6.jpg";
import mason7 from "../assets/mason7.jpg";

const years = ["All", "2025", "2024", "2023", "2022", "2021"];

const galleryData = [
  { title: "2021 LASCOFED Leaders Con", image: mason },
  { title: "2022 LASCOFED Leaders Con", image: mason1 },
  { title: "2023 Cooperative Leaders Con", image: mason2 },
  { title: "Cooperative Festival 2023", image: mason3 },
  { title: "LASCOFED Agricultural Produce", image: mason4 },
  { title: "2024 Cooperative Leaders Con", image: mason5 },
  { title: "Visit to Lagos State House of Assembly", image: mason6 },
  { title: "Training School", image: mason7 },
];

const breakpointColumnsObj = {
  default: 4,
  1280: 3,
  768: 2,
  500: 1,
};

const GallerySection = () => {
  const [selectedYear, setSelectedYear] = useState("All");

  const filteredData = galleryData.filter((item) => {
    if (selectedYear === "All") return true;
    return item.title.includes(selectedYear);
  });

  return (
    <section className="px-8 py-6 md:py-12 md:px-48 max-w-7xl mx-auto font-sans">
      <h2 className="text-4xl font-bold text-center mb-8">
        LASCOFED Through The Years
      </h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center mb-10 gap-3">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${
              selectedYear === year
                ? "bg-red-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {filteredData.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-md group"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full rounded-lg transition-transform duration-300 group-hover:scale-105"
                style={{ display: "block" }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
                <h3 className="text-white font-semibold text-base leading-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </Masonry>
    </section>
  );
};

export default GallerySection;
