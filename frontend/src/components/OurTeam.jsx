import React, { useState } from "react";
import { teamData } from "../constants/TeamData";
import { FaLinkedin } from "react-icons/fa";

const OurTeam = () => {
  const [selectedCategory, setSelectedCategory] = useState("Core Team");
  
  const categories = ["Core Team", "Web Team", "Alumni"];

  return (
    <div className="my-16 text-center">
      <h2 className="text-4xl font-bold text-gray-800">Meet the <span className="text-[#c52f2f]">Team</span>.</h2>
      <div className="flex justify-center mt-4 space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full ${selectedCategory === category ? "bg-[#c52f2f] text-white" : "bg-gray-200 text-gray-800"}`}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 px-8">
        {teamData
          .filter(member => member.category === selectedCategory)
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
  );
};

export default OurTeam;
