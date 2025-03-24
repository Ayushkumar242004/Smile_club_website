import React, { useState } from "react";
import { teamData } from "../constants/TeamData";
import { FaLinkedin, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const OurTeam = () => {
  const categories = [
    { title: "Our Core Team", key: "Core Team", description: "Meet the passionate people driving our mission." },
    { title: "Our Web Team", key: "Web Team", description: "The innovative minds behind our digital presence." },
  ];

  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [showDropdown, setShowDropdown] = useState(false);
  
  const alumniYears = [...new Set(teamData.filter(member => member.category === "Alumni").map(member => member.year))].sort((a, b) => b - a);

  return (
    <div className="my-16 text-center ">
      {categories.map(({ title, key, description }) => (
        <div key={key} className="mb-28">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">{title}</h1>
            <p className="text-[.9em] text-[#7a7676]">{description}</p> 
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12 mt-10 px-8">
            {teamData
              .filter(member => member.category === key)
              .map((member, index) => (
                <motion.div
                  key={index}
                  className="relative flex flex-col items-center opacity-0"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="relative">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="md:w-36 md:h-36 w-32 h-32 rounded-full border-4 border-gray-200"
                    />
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-[1em] right-[-.4em] bg-white p-2 rounded-full shadow-lg transform transition-all hover:rotate-12 hover:scale-110 hover:shadow-2xl"
                      style={{ transformOrigin: "center" }}
                    >
                      <FaLinkedin className="text-blue-600 text-xl transition-all" />
                    </a>
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-800">{member.name}</h3>
                  {member.designation && (
                    <p className="text-[#7a7676] text-sm">{member.designation}</p>
                  )}
                </motion.div>
              ))}
          </div>
        </div>
      ))}

      {/* Alumni Section */}
      <div className="mb-28">
        <div className="flex justify-center items-center gap-4 mb-10">
          <div>
          <h1 className="text-4xl md:text-5xl font-bold text-orange-500">Our Alumni</h1>
          <p className="text-[.9em] text-[#7a7676]">Honoring those who shaped our legacy.</p>
          </div>
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="bg-white p-3 rounded-full shadow-lg transition-all hover:rotate-12 hover:scale-110 hover:shadow-2xl"
            >
              <FaCalendarAlt className="text-orange-500 text-xl" />
            </button>
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 shadow-lg rounded-lg">
                {alumniYears.map(year => (
                  <div
                    key={year}
                    className={`p-2 cursor-pointer ${year === selectedYear ? "bg-orange-100" : "hover:bg-gray-100"}`}
                    onClick={() => {
                      setSelectedYear(year);
                      setShowDropdown(false);
                    }}
                  >
                    {year}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12 mt-10 px-8">
          {teamData
            .filter(member => member.category === "Alumni" && member.year === selectedYear)
            .map((member, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col items-center opacity-0"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="relative">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="md:w-36 md:h-36 w-32 h-32 rounded-full border-4 border-gray-200"
                  />
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-[1em] right-[-.4em] bg-white p-2 rounded-full shadow-lg transform transition-all hover:rotate-12 hover:scale-110 hover:shadow-2xl"
                    style={{ transformOrigin: "center" }}
                  >
                    <FaLinkedin className="text-blue-600 text-xl transition-all" />
                  </a>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-800">{member.name}</h3>
                {member.designation && (
                  <p className="text-[#7a7676] text-sm">{member.designation}</p>
                )}
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;