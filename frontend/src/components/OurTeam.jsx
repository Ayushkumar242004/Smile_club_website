import React from "react";
import { teamData } from "../constants/TeamData";
import { FaLinkedin } from "react-icons/fa";

const OurTeam = () => {
  const categories = [
    { title: "Our Core Team", key: "Core Team" },
    { title: "Our Web Team", key: "Web Team" },
    { title: "Our Alumni", key: "Alumni" },
  ];

  return (
    <div className="my-16 text-center">
      {categories.map(({ title, key }) => (
        <div key={key} className="mb-16">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 text-maroon-700 mb-4">
              <span className="text-2xl text-[#8B1D42]">🕉</span>
              <span className="uppercase tracking-wide text-[#8B1D42]">MEET</span>
              <span className="text-2xl text-[#8B1D42]">🕉</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-12">{title}</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 px-8">
            {teamData
              .filter(member => member.category === key)
              .map((member, index) => (
                <div key={index} className="relative flex flex-col items-center">
                  <img src={member.photo} alt={member.name} className="w-40 h-40 rounded-full border-4 border-gray-200" />
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="absolute bottom-2 right-4 bg-white p-2 rounded-full shadow-lg">
                    <FaLinkedin className="text-blue-600 text-xl" />
                  </a>
                  <h3 className="mt-4 text-xl font-semibold text-gray-800">{member.name}</h3>
                  {member.designation && <p className="text-gray-500 text-sm">{member.designation}</p>}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurTeam;
