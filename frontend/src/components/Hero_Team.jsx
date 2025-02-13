
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion'; // Removed useTransform
import './styles.css';

export default function Hero_Team() {
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
      <div className="relative w-full lg:h-[43em] md:h-[38em] h-[28em] sm:h-[33em] bg-gradient-to-b from-maroon-900 via-maroon-800 to-maroon-700 text-white overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-fixed opacity-75"
          style={{
            background: `linear-gradient(rgba(128, 0, 0, 0.2), rgba(128, 0, 0, 0.7)), url('/shiv.jpeg')`,
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
            Meet the team
          </motion.h1>
        </div>

      </div>
    </>
  );
}
