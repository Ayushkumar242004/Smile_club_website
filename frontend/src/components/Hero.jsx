import React, { useState, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion'; // Removed useTransform
import './styles.css';
import AboutUs from "./AboutUs";
import Vision from "./Vision";

export default function Hero() {
  const [activeSection, setActiveSection] = useState("about"); 

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth) * 2 - 1;
      const y = (clientY / innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <div className="relative w-full h-screen flex items-center justify-center text-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="https://res.cloudinary.com/dqlgqfxi6/video/upload/v1743444280/shiva_vid_uswekr.mp4" type="video/mp4" />
        </video>

        <div className='h-full w-full flex items-center justify-center text-center absolute bg-[rgba(96,9,9,0.4)] '>
          <div className="relative z-10  rounded-3xl text-white px-10">
            <motion.h1
              className="sm:text-6xl md:text-8xl mt-2 text-4xl font-extrabold lg:mb-4 md:mb-2 mb-0 tracking-wide leading-tight font-serif text-amber-400 drop-shadow-[0_4px_20px_rgba(255,255,255,0.8)]"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              SMILE CLUB
            </motion.h1>
            <motion.p
              className="text-sm md:text-2xl max-w-2xl font-light tracking-wide leading-relaxed text-amber-200 font-sans drop-shadow-[0_2px_10px_rgba(255,255,255,0.6)] mb-4"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              SCIENCE AND TECHNOLOGY FOR MODERN INDIA LIFE ENLIGHTENMENT
            </motion.p>

            <div className="flex justify-center items-center space-x-6 mt-6">
              <button 
                onClick={() => window.open("https://www.instagram.com/smile._.club_nitk/", "_blank", "noopener,noreferrer")} 
                className="text-white text-xl transition duration-300 hover:text-maroon-200"
              >
                <i className="fa-brands fa-instagram"></i>
              </button>
              
              <button 
                onClick={() => window.open("https://www.linkedin.com/company/smile-club-nitk/", "_blank", "noopener,noreferrer")} 
                className="text-white text-xl transition duration-300 hover:text-maroon-200"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </button>
              
              <button 
                onClick={() => window.open("https://youtube.com/@SMILEClub_NITK?si=qk-v-oJZi8M7igKn", "_blank", "noopener,noreferrer")} 
                className="text-white text-xl transition duration-300 hover:text-maroon-200"
              >
                <i className="fa-brands fa-youtube"></i>
              </button>
              
              <button 
  onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=smileclub@nitk.edu.in", "_blank", "noopener,noreferrer")} 
  className="text-white text-xl transition duration-300 hover:text-maroon-200"
>
  <i className="fa-solid fa-envelope"></i>
</button>

            </div>
          </div>
        </div>
      </div>

      <motion.div
        className="relative w-full text-center mt-[-2em] px-8 py-4 bg-[#fff] text-maroon-900 rounded-full font-bold hover:scale-110 transition-all shadow-lg hover:shadow-xl mx-auto max-w-max text-lg tracking-wider drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
        whileHover={{ scale: 1.1 }}
      >
        <button onClick={() => handleSectionChange("about")}
          className={`${activeSection === 'about' ? 'text-maroon-900' : 'text-[#6c736d]'}`}>
          About Us
        </button> <span className="mx-2">ॐ</span>
        <button onClick={() => handleSectionChange("vision")}
          className={`${activeSection === 'vision' ? 'text-maroon-900' : 'text-[#6c736d]'}`}>
          Our Vision
        </button>
      </motion.div>

      <div>
        {activeSection === "about" && <AboutUs />}
        {activeSection === "vision" && <Vision />}
      </div>
    </>
  );
}
