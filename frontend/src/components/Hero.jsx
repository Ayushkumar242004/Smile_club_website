import React, { useState, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion'; // Removed useTransform
import './styles.css';
import AboutUs from "./AboutUs";
import Vision from "./Vision";

export default function Hero() {
  const [activeSection, setActiveSection] = useState("about"); 

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // const springConfig = { damping: 25, stiffness: 700 };

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
      {/* Hero Section */}
      {/* <div className="relative w-full lg:h-[43em] md:h-[38em] h-[28em] sm:h-[33em] bg-gradient-to-b from-maroon-900 via-maroon-800 to-maroon-700 text-white overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-fixed opacity-75"
          style={{
            background: `linear-gradient(rgba(128, 0, 0, 0.2), rgba(128, 0, 0, 0.7)), url('shiv.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center text-center lg:mt-[16em] md:mt-[14em] mt-[9em]">
          <motion.h1
            className="sm:text-6xl md:text-8xl text-4xl font-extrabold lg:mb-4 md:mb-2 mb-0 tracking-wide leading-tight font-serif text-amber-400 drop-shadow-[0_4px_20px_rgba(255,255,255,0.8)]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            SMILE CLUB
          </motion.h1>
          <motion.p
            className="text-sm md:text-2xl max-w-2xl font-light tracking-wide leading-relaxed text-amber-200 font-sans drop-shadow-[0_2px_10px_rgba(255,255,255,0.6)]"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            ANCIENT SCIENCE AND TECHNOLOGY FOR MODERN INDIA LIFE ENLIGHTENMENT
          </motion.p>
        </div>

        {/* Flame 
        <motion.div
          className="flame relative bg-fixed opacity-75 lg:top-[12%] xl:top-[18%] md:top-[9.5%] sm:left-[30.6%] left-[28.5%] text-[0.5em] md:text-[0.9em] lg:text-[1.2em] sm:top-[25%] top-[15%] sm:w-[1em] md:h-[3em] w-[.01em] h-[2.5em]"
          style={{
            transform: "translateX(-50%)", 
          }}
          animate={{
            rotate: [0, -5, 5, 0],
            y: [0, -10, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="inner-flame w-[0.6em] h-[2em]"></div>
        </motion.div> 
      </div> */}

    <div className="relative w-full h-screen flex items-center justify-center text-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/Hero/bells.mp4" type="video/mp4" />
      </video>

      {/* Hero Content */}
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
        </div>
      </div>
    </div>

      {/* Button Below Hero */}
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
      

      {/* Render the active section */}
      <div>
        {activeSection === "about" && <AboutUs />}
        {activeSection === "vision" && <Vision />}
      </div>
    </>
  );
}
