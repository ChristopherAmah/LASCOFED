import React from 'react';
import pictureframe from '../assets/pictureframe.png';
import president from '../assets/president.png';
import vp from '../assets/vp.png';
import vpp from '../assets/vpp.png';
import vppp from '../assets/vppp.png';
import vpppp from '../assets/vpppp.png';
import vppppp from '../assets/vppppp.png';
import vpppppp from '../assets/vpppppp.png';
import wic from '../assets/wic.png';
import treasurer from '../assets/treasurer.png';
import executive from '../assets/executive.png';

// Define the management committee members data.
const committeeMembers = {
  president: {
    name: "Barr. Shobule Oladipo.O.",
    position: "President",
    image: president,
  },
  allOthers: [
    {
      name: "Mr. Ogunsanu Ayuba",
      position: "1st Vice President",
      image: vp,
    },
    {
      name: "Mr. Athanhode Jeremiah",
      position: "2nd Vice President",
      image: vpp,
    },
    {
      name: "Mr. Aderoku Akinpelu Goriola",
      position: "3rd Vice President",
      image: vppp,
    },
    {
      name: "Mr. Gbenga Ibilola",
      position: "4th Vice President",
      image: treasurer,
    },
    {
      name: "Mr. Safuraini Tunji",
      position: "5th Vice President",
      image: wic,
    },
    {
      name: "Alhaja. Oshodi Bakare",
      position: "6th Vice President",
      image: vpppppp,
    },
    {
      name: "Princess Olukokun A. Olufunmilola",
      position: "W.I.C President",
      image: vppppp,
    },
    {
      name: "Alhaji Shabi Ismail",
      position: "Treasurer",
      image: vpppp,
    },
    {
      name: "Mrs. Ebun Akin-Falaiye",
      position: "Executive Secretary",
      image: executive,
    },
  ],
};

// Define the working committee members data from the new image
const workingCommittees = [
  {
    name: "Mr. Gbenga Ibilola",
    position: "Chairman Personnel Committee",
    image: treasurer,
  },
  {
    name: "Mr. Ogunsanu Ayuba",
    position: "Chairman Education Committee",
    image: vp,
  },
  {
    name: "Mr. Aderoku Akinpelu Goriola",
    position: "Chairman Agric & Investment",
    image: vppp,
  },
  {
    name: "Alhaja. Oshodi Bakare",
    position: "Chairwoman Bulk Purchase Committee",
    image: vpppppp,
  },
  {
    name: "Princess Olukokun A. Olufunmilola",
    position: "Chairwoman Monitoring/Membership Committee",
    image: vppppp,
  },
  {
    name: "Mr. Athanhode Jeremiah",
    position: "Chairman Publicity Committee",
    image: vpp,
  },
  {
    name: "Alhaji Shabi Ismail",
    position: "Chairman Project & Bulking Committee",
    image: vpppp,
  },
  {
    name: "Mr. Safuraini Tunji",
    position: "Chairman Cooperative Account Managers Committee",
    image: wic,
  },
];

// A reusable component for a committee member card
const MemberCard = ({ member }) => {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Image container with the picture frame background */}
      <div
        className="relative w-52 h-64 md:w-60 md:h-72 shadow-md overflow-hidden"
        style={{
          backgroundImage: `url(${pictureframe})`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* The actual member image, positioned inside the frame */}
        <img
          src={member.image}
          alt={member.name}
          className="w-[80%] h-[78%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] object-cover"
          onError={(e) => {
            console.error(`Failed to load image for ${member.name}:`, e.target.src);
            e.target.src = "https://placehold.co/200x250/E9E6E6/252525?text=Image+Not+Found";
          }}
        />
      </div>
      {/* Member details */}
      <div className="mt-4">
        <h3 className="text-lg md:text-xl font-bold text-gray-800">
          {member.name}
        </h3>
        <p className="text-sm text-gray-600">{member.position}</p>
      </div>
    </div>
  );
};

// The main committee component
const App = () => {
  return (
    <div className="bg-white font-sans">
      {/* Red banner with the title for Management Committees */}
      <div className="bg-red-600 text-white text-center py-4 px-2">
        <h2 className="text-2xl font-bold">LASCOFED MANAGEMENT COMMITTEES</h2>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* President section */}
        <div className="flex justify-center mb-12">
          <MemberCard member={committeeMembers.president} />
        </div>

        {/* All other members in a responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8 md:gap-10 md:px-20">
          {committeeMembers.allOthers.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>
      </div>
      
      {/* Red banner with the title for Working Committees */}
      <div className="bg-red-600 text-white text-center py-4 px-2">
        <h2 className="text-2xl font-bold">LASCOFED WORKING COMMITTEES</h2>
      </div>
      
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Working Committee members in a responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8 md:gap-8 md:px-20">
          {workingCommittees.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default App;
