import React, { useState } from "react";
import pub1 from "../assets/pub1.jpg";
import pub2 from "../assets/pub2.jpg";
import pub3 from "../assets/pub3.jpg";
import pub4 from "../assets/pub4.jpg";

// Import your PDF files. Make sure these files exist in your assets folder.
import pdf1 from "../assets/sample.pdf";
import pdf2 from "../assets/sample.pdf";
import pdf3 from "../assets/sample.pdf";
import pdf4 from "../assets/sample.pdf";

// This is the main data for publications
const publications = [
  {
    year: "2023",
    category: "Cooperative Leaders' Conference",
    title: "2023 Cooperative Leaders’ Conference",
    description:
      "Led by Mr. Jeremiah Athanhode, the 2023 conference emphasized digital solutions, transparent reporting, and women's inclusion.",
    image: pub1,
    pdfPath: pdf1, // Added PDF path
  },
  {
    year: "2023",
    category: "Cooperative Festival",
    title: "2023 Cooperative Festival",
    description:
      "The festival gathered thousands of members in a colorful showcase of cooperative products and cultural displays.",
    image: pub2,
    pdfPath: pdf2, // Added PDF path
  },
  {
    year: "2022",
    category: "Cooperative Leaders' Conference",
    title: "2022 LASCOFED Leaders' Conference",
    description:
      "The event highlighted agricultural investment, youth inclusion, and cooperative sustainability.",
    image: pub3,
    pdfPath: pdf3, // Added PDF path
  },
  {
    year: "2021",
    category: "Cooperative Leaders' Conference",
    title: "2021 LASCOFED Leaders' Conference",
    description:
      "The conference focused on recovery strategies, digital adoption, and member welfare.",
    image: pub4,
    pdfPath: pdf4, // Added PDF path
  },
  {
    year: "2023",
    category: "Cooperative Leaders' Conference",
    title: "2023 Cooperative Leaders’ Conference",
    description:
      "Led by Mr. Jeremiah Athanhode, the 2023 conference emphasized digital solutions, transparent reporting, and women's inclusion.",
    image: pub1,
    pdfPath: pdf1,
  },
  {
    year: "2023",
    category: "Cooperative Festival",
    title: "2023 Cooperative Festival",
    description:
      "The festival gathered thousands of members in a colorful showcase of cooperative products and cultural displays.",
    image: pub2,
    pdfPath: pdf2,
  },
  {
    year: "2022",
    category: "Cooperative Leaders' Conference",
    title: "2022 LASCOFED Leaders' Conference",
    description:
      "The event highlighted agricultural investment, youth inclusion, and cooperative sustainability.",
    image: pub3,
    pdfPath: pdf3,
  },
  {
    year: "2021",
    category: "Cooperative Leaders' Conference",
    title: "2021 LASCOFED Leaders' Conference",
    description:
      "The conference focused on recovery strategies, digital adoption, and member welfare.",
    image: pub4,
    pdfPath: pdf4,
  },
  {
    year: "2023",
    category: "Cooperative Leaders' Conference",
    title: "2023 Cooperative Leaders’ Conference",
    description:
      "Led by Mr. Jeremiah Athanhode, the 2023 conference emphasized digital solutions, transparent reporting, and women's inclusion.",
    image: pub1,
    pdfPath: pdf1,
  },
  {
    year: "2023",
    category: "Cooperative Festival",
    title: "2023 Cooperative Festival",
    description:
      "The festival gathered thousands of members in a colorful showcase of cooperative products and cultural displays.",
    image: pub2,
    pdfPath: pdf2,
  },
  {
    year: "2022",
    category: "Cooperative Leaders' Conference",
    title: "2022 LASCOFED Leaders' Conference",
    description:
      "The event highlighted agricultural investment, youth inclusion, and cooperative sustainability.",
    image: pub3,
    pdfPath: pdf3,
  },
  {
    year: "2021",
    category: "Cooperative Leaders' Conference",
    title: "2021 LASCOFED Leaders' Conference",
    description:
      "The conference focused on recovery strategies, digital adoption, and member welfare.",
    image: pub4,
    pdfPath: pdf4,
  },
  {
    year: "2023",
    category: "Cooperative Leaders' Conference",
    title: "2023 Cooperative Leaders’ Conference",
    description:
      "Led by Mr. Jeremiah Athanhode, the 2023 conference emphasized digital solutions, transparent reporting, and women's inclusion.",
    image: pub1,
    pdfPath: pdf1,
  },
  {
    year: "2023",
    category: "Cooperative Festival",
    title: "2023 Cooperative Festival",
    description:
      "The festival gathered thousands of members in a colorful showcase of cooperative products and cultural displays.",
    image: pub2,
    pdfPath: pdf2,
  },
  {
    year: "2022",
    category: "Cooperative Leaders' Conference",
    title: "2022 LASCOFED Leaders' Conference",
    description:
      "The event highlighted agricultural investment, youth inclusion, and cooperative sustainability.",
    image: pub3,
    pdfPath: pdf3,
  },
  {
    year: "2021",
    category: "Cooperative Leaders' Conference",
    title: "2021 LASCOFED Leaders' Conference",
    description:
      "The conference focused on recovery strategies, digital adoption, and member welfare.",
    image: pub4,
    pdfPath: pdf4,
  },
];

const filters = ["All", "2025", "2024", "2023", "2022", "2021"];

function PublicationCard() {
  const [activeYear, setActiveYear] = useState("All");
  const [activeCategory, setActiveCategory] = useState("");

  const filteredPublications =
    activeYear === "All"
      ? publications
      : publications.filter((pub) => pub.year === activeYear);

  const categoriesInYear = [
    ...new Set(filteredPublications.map((pub) => pub.category)),
  ];

  const finalPublications = activeCategory
    ? filteredPublications.filter((pub) => pub.category === activeCategory)
    : filteredPublications;

  return (
    <div className="min-h-screen p-6 max-w-7xl mx-auto">
      {/* Top Filters */}
      <div className="flex gap-2 mb-10 flex-wrap justify-center">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => {
              setActiveYear(filter);
              setActiveCategory(""); // Reset category on year change
            }}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              activeYear === filter
                ? "bg-red-600 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-red-100 cursor-pointer"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Sidebar - Conditional Rendering */}
        <div className="w-full lg:w-1/4 space-y-4 md:px-10">
          {activeYear === "All" ? (
            // This is the "All Publications" section
            <div className="p-1">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center py-2 px-3 rounded-full bg-red-600 text-white font-semibold text-lg">
                  01
                </div>
                <div>
                  <h3 className="text-red-600 font-semibold text-lg">
                    All Publications
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Discover highlights from LASCOFED’s key events, conferences
                    and initiatives.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            // This is the filter sidebar for a specific year
            <div>
              {/* <h3 className="text-xl font-bold mb-4">Filters</h3> */}
              <div className="space-y-4">
                {categoriesInYear.map((category, index) => (
                  <div
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`cursor-pointer flex items-start gap-3 transition-colors ${
                      activeCategory === category || (activeCategory === "" && index === 0)
                        ? "text-red-600"
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full p-2 flex items-center justify-center text-white font-semibold ${
                        activeCategory === category || (activeCategory === "" && index === 0)
                          ? "bg-red-600"
                          : "bg-gray-300"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <div className="font-semibold">{category}</div>
                      <div className="text-sm mt-1">
                        {category === "Cooperative Leaders' Conference" &&
                          "Bringing leaders together to explore solutions."}
                        {category === "Cooperative Festival" &&
                          "A vibrant celebration of unity and diversity."}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Cards */}
        <div className="w-full lg:w-3/4 grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {finalPublications.map((pub, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={pub.image}
                  alt={pub.title}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-2 left-2 bg-red-500 text-white text-[14px] px-3 py-1 rounded-[8px]">
                  {pub.year}
                </span>
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold mb-2">{pub.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{pub.description}</p>
                <a
                  href={pub.pdfPath} // Use the new pdfPath here
                  target="_blank" // Opens the PDF in a new tab
                  rel="noopener noreferrer" // Recommended for security with target="_blank"
                  className="group flex items-center text-red-600 text-sm font-semibold hover:text-red-900 mt-auto"
                >
                  Read More{" "}
                  <span className="ml-1 transform transition-transform group-hover:translate-x-1">
                    &gt;
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PublicationCard;