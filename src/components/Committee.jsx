import React from "react";
import president from "../assets/president.png";
import vp from "../assets/vp.png";
import vpp from "../assets/vpp.png";
import vppp from "../assets/vppp.png";
import vpppp from "../assets/vpppp.png";
import vppppp from "../assets/vppppp.png";
import vpppppp from "../assets/vpppppp.png";
import wic from "../assets/wic.png";
import treasurer from "../assets/treasurer.png";
import executive from "../assets/executive.png";

const committeeMembers = {
  president: {
    name: "Barr. Shobule Oladipo.O.",
    position: "President",
    image: president,
  },
  allOthers: [
    { name: "Mr. Ogunsanu Ayuba", position: "1st Vice President", image: vp },
    { name: "Mr. Athanhode Jeremiah", position: "2nd Vice President", image: vpp },
    { name: "Mr. Aderoku Akinpelu Goriola", position: "3rd Vice President", image: vppp },
    { name: "Mr. Gbenga Ibilola", position: "4th Vice President", image: vpppp },
    { name: "Mr. Safuraini Tunji", position: "5th Vice President", image: vppppp },
    { name: "Alhaja. Oshodi Bakare", position: "6th Vice President", image: vpppppp },
    { name: "Princess Olukokun A. Olufunmilola", position: "W.I.C President", image: wic },
    { name: "Alhaji Shabi Ismail", position: "Treasurer", image: treasurer },
    { name: "Mrs. Ebun Akin-Falaiye", position: "Executive Secretary", image: executive },
  ],
};

const workingCommittees = [
  { name: "Mr. Gbenga Ibilola", position: "4th Vice President", image: vpppp },
  { name: "Mr. Ogunsanu Ayuba", position: "1st Vice President", image: vp },
  { name: "Mr. Aderoku Akinpelu Goriola", position: "3rd Vice President", image: vppp },
  { name: "Alhaja. Oshodi Bakare", position: "6th Vice President", image: vpppppp },
  { name: "Princess Olukokun A. Olufunmilola", position: "W.I.C President", image: wic },
  { name: "Mr. Athanhode Jeremiah", position: "2nd Vice President", image: vpp },
  { name: "Alhaji Shabi Ismail", position: "Treasurer", image: treasurer },
  { name: "Mr. Safuraini Tunji", position: "5th Vice President", image: vppppp },
];

const MemberCard = ({ member }) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-40 h-48 md:w-44 md:h-52 lg:w-48 lg:h-56 overflow-hidden rounded-lg">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.target.src = "https://placehold.co/200x250/E9E6E6/252525?text=Image+Not+Found";
        }}
      />
    </div>
    <div className="mt-3">
      <h3 className="text-base md:text-lg font-bold text-gray-800">{member.name}</h3>
      <p className="text-sm text-gray-600">{member.position}</p>
    </div>
  </div>
);

const App = () => {
  return (
    <div className="font-sans md:px-20">
      {/* Management Committees */}
      <div className="bg-red-600 text-white text-center py-4">
        <h2 className="text-2xl font-bold">LASCOFED MANAGEMENT COMMITTEES</h2>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Row 1 - President */}
        <div className="flex justify-center mb-10">
          <MemberCard member={committeeMembers.president} />
        </div>

        {/* Rows of 3 */}
        <div className="flex flex-wrap justify-center gap-2">
          {committeeMembers.allOthers.map((member, index) => (
            <div key={index} style={{ flex: "0 1 calc(33.333% - 2rem)" }} className="min-w-[220px]">
              <MemberCard member={member} />
            </div>
          ))}
        </div>
      </div>

      {/* Working Committees */}
      <div className="bg-red-600 text-white text-center py-4 ">
        <h2 className="text-2xl font-bold">LASCOFED WORKING COMMITTEES</h2>
      </div>

      <div className="container mx-auto px-4 md:px-20 py-8">
        <div className="flex flex-wrap justify-center gap-8">
          {workingCommittees.map((member, index) => {
            const rowLayout =
              index < 3
                ? "calc(33.333% - 2rem)" // first row 3 items
                : index < 6
                ? "calc(33.333% - 2rem)" // second row 3 items
                : "calc(50% - 2rem)"; // last row 2 items

            return (
              <div key={index} style={{ flex: `0 1 ${rowLayout}` }} className="min-w-[220px]">
                <MemberCard member={member} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
