import React from "react";
import { CiSearch } from "react-icons/ci";

const data = [
  {
    name: "Chief Ilori",
    union: "Agege",
    position: "MCU President",
    phone: "08060436359",
    email: "",
  },
  {
    name: "Mr. Adenekan Idowu Rilwan",
    union: "Ajeromi/Ifelodun",
    position: "MCU President",
    phone: "08023199162",
    email: "adenekani@gmail.com",
  },
  {
    name: "Mr. Ameh Sunday",
    union: "Apapa",
    position: "MCU President",
    phone: "08033348478",
    email: "amehsundakor2021@gmail.com",
  },
  {
    name: "Mr. Omowa Adebori Johnson",
    union: "Alimosho",
    position: "MCU President",
    phone: "08093179370",
    email: "adeborijohnson8@gmail.com",
  },
  {
    name: "Alh. Ishola Balogun",
    union: "Amuwo/Odofin",
    position: "MCU President",
    phone: "08036688535",
    email: "isholaism@gmail.com",
  },
  {
    name: "Mr. Safuraini Tunji Otunla",
    union: "Alausa",
    position: "MCU President",
    phone: "08033742386",
    email: "tunjiotunla@gmail.com",
  },
];

const DirectorySection = () => {
  return (
    <section className="bg-red-50 py-20 px-4 md:px-16">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-red-500 text-sm font-semibold uppercase mb-2">
          Our Directory
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Find a Cooperative Union Near You
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our network of 24 Multipurpose Cooperative Unions across Lagos State.
          Each union plays a vital role in representing and serving its members.
        </p>
      </div>

      {/* Search */}
      <div className="relative max-w-xl mx-auto mb-8">
        <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl pointer-events-none" />
        <input
          type="text"
          placeholder="Search by Union, Society, Member..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="px-6 py-3 font-semibold">S/N</th>
              <th className="px-6 py-3 font-semibold">Name</th>
              <th className="px-6 py-3 font-semibold">Union</th>
              <th className="px-6 py-3 font-semibold">Position</th>
              <th className="px-6 py-3 font-semibold">Phone</th>
              <th className="px-6 py-3 font-semibold">Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((person, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-red-50"}
              >
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{person.name}</td>
                <td className="px-6 py-4">{person.union}</td>
                <td className="px-6 py-4">{person.position}</td>
                <td className="px-6 py-4">{person.phone}</td>
                <td className="px-6 py-4">{person.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-10 flex justify-center items-center gap-2 text-gray-700 text-sm">
        <button className="px-2 py-1 text-gray-400 cursor-not-allowed">&lt;</button>
        <button className="w-8 h-8 rounded-full bg-red-500 text-white font-semibold">
          1
        </button>
        <button className="w-8 h-8 rounded-full hover:bg-red-100">2</button>
        <button className="w-8 h-8 rounded-full hover:bg-red-100">3</button>
        <span className="px-2">...</span>
        <button className="w-8 h-8 rounded-full hover:bg-red-100">26</button>
        <button className="px-2 py-1 text-gray-700">&gt;</button>
      </div>

      {/* Load More Button */}
      <div className="mt-6 flex justify-center">
        <button className="bg-red-500 text-white px-6 py-2 rounded-full font-medium hover:bg-red-600 transition">
          Load More
        </button>
      </div>
    </section>
  );
};

export default DirectorySection;
