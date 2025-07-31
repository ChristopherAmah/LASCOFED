import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";

const ITEMS_PER_PAGE = 6;

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
  {
    name: "Mr. Ogungbe Elijah Sonayon",
    union: "Badagry",
    position: "MCU President",
    phone: "08079671250",
    email: "elijah.ogungbe@gmail.com",
  },
  {
    name: "Alhaji Shabi Ismail",
    union: "Epe",
    position: "MCU President",
    phone: "08062188219",
    email: "honismailshabi@gmail.com",
  },
  {
    name: "Mr. Aderoku Akinpelu Goriola",
    union: "Eti-Osa",
    position: "MCU President",
    phone: "08096217381",
    email: "gorialan2014@gmail.com",
  },
  {
    name: "Mr. Abiodun Kehinde Olu",
    union: "Ibeju Lekki",
    position: "MCU President",
    phone: "08037265636",
    email: "kingkennyabby@yahoo.com",
  },
  {
    name: "Mr. Abolaji Adedayo Titus",
    union: "Ifako/Ijaiye",
    position: "MCU President",
    phone: "08056282554",
    email: "abolajiwater@gmail.com",
  },
  {
    name: "Mr. Adekunle Gbadamosi",
    union: "Igando/Ikotun",
    position: "MCU President",
    phone: "08058440017",
    email: "adekunle.gbadamosi@yahoo.com",
  },
  {
    name: "Mr. Lanre Ariyo",
    union: "Ikeja",
    position: "MCU President",
    phone: "08056010530",
    email: "laariyo2002@yahoo.com",
  },
  {
    name: "Eld. Adeshina Ayomide Mathew",
    union: "Ikd. South",
    position: "MCU President",
    phone: "08023014243",
    email: "ayomideadesina56@gmail.com",
  },
  {
    name: "Mr. Sunday C. Nwankwo",
    union: "Ikd. North",
    position: "MCU President",
    phone: "08064332139",
    email: "sundaynwankwo0@gmail.com",
  },
  {
    name: "Mr. Michael Avwioroko",
    union: "Kosofe",
    position: "MCU President",
    phone: "09036294868",
    email: "avwioroko@gmail.com",
  },
  {
    name: "Mr. Adelaja Shorunke",
    union: "L/Island",
    position: "MCU President",
    phone: "07034138191",
    email: "",
  },
  {
    name: "Mr. Hakeem Adewuyi",
    union: "L/Mainland",
    position: "MCU President",
    phone: "08033208935",
    email: "yadewuyi@unilag.edu.ng",
  },
  {
    name: "Mr. Garuba Liadi",
    union: "Mushin",
    position: "MCU President",
    phone: "08052797821",
    email: "liadi.garuba@ng.nestle.com",
  },
  {
    name: "Mr. Adebeso Adekunle Ganiu",
    union: "Ojo",
    position: "MCU President",
    phone: "08036044340",
    email: "",
  },
  {
    name: "Elder Oluwafemi Ariyo",
    union: "Onigbongbo",
    position: "MCU President",
    phone: "08038055444",
    email: "ariyofemi2@gmail.com",
  },
  {
    name: "Mr. Gbadebo T. Olayiwola",
    union: "Oshodi",
    position: "MCU President",
    phone: "08161207133",
    email: "olayiwola12367@gmail.com",
  },
  {
    name: "Mr. Jamiu Lawal",
    union: "Shomolu",
    position: "MCU President",
    phone: "08028941304",
    email: "jamiu.lawal83@yahoo.com",
  },
  {
    name: "Mr. Oyebola Michael",
    union: "Surulere",
    position: "MCU President",
    phone: "08033450603",
    email: "Michkay2004@gmail.com",
  },
  {
    name: "Mr. Olufemi Obakoya",
    union: "LASCOFIS",
    position: "Asso. President",
    phone: "09034494483",
    email: "chalce.obk@gmail.com",
  },
  {
    name: "Mr. Wasiu Ake",
    union: "Artisans",
    position: "Asso. President",
    phone: "08038026701",
    email: "Sulaymanwasiu361@gmail.com",
  },
  {
    name: "Princess Olukokun A. Olufunmilola",
    union: "Women in Coop.",
    position: "Asso. President",
    phone: "08062101625",
    email: "adeyinkafunmilola4@gmail.com",
  },
];

const DirectorySection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter logic
  const filteredData = data.filter((person) => {
    const fullText = `${person.name} ${person.union} ${person.position} ${person.phone} ${person.email}`.toLowerCase();
    return fullText.includes(searchTerm.toLowerCase());
  });

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="bg-[#F8F8F8] py-20 px-4 md:px-16">
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
        </p>
      </div>

      {/* Search */}
      <div className="relative max-w-xl mx-auto mb-8">
        <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl pointer-events-none" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by Union, Society, Member..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-400 text-sm"
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
            {paginatedData.map((person, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-red-50"}
              >
                <td className="px-6 py-4">
                  {(currentPage - 1) * ITEMS_PER_PAGE + index + 1}
                </td>
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
        <button
          className="px-3 py-1 text-gray-600 rounded hover:bg-red-200 disabled:opacity-30 cursor-pointer"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          &lt;
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`w-8 h-8 rounded-full ${
              currentPage === i + 1
                ? "bg-red-500 text-white font-semibold"
                : "hover:bg-red-100"
            }`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          className="px-3 py-1 text-gray-600 rounded hover:bg-red-200 disabled:opacity-30 cursor-pointer"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default DirectorySection;
