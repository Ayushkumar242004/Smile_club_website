import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar'
import './styles.css';

export default function Hero2({ heading, image }) {
  return (
    <>
    <Navbar />
      {/* Hero Section */}
      <div className="relative w-full sm:h-[28em] h-[10em] bg-gradient-to-b from-maroon-900 via-maroon-800 to-maroon-700 text-white overflow-hidden">
        {/* Background Image */}
        <motion.div
          className="absolute inset-0 bg-fixed opacity-75"
          style={{
            background: `linear-gradient(rgba(128, 0, 0, 0.2), rgba(128, 0, 0, 0.7)), url('${image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Centered Heading */}
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <motion.h1
            className="sm:text-4xl md:text-6xl text-4xl font-extrabold tracking-wide font-serif text-amber-400 drop-shadow-[0_4px_20px_rgba(255,255,255,0.8)]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {heading}
          </motion.h1>
        </div>
      </div>
    </>
  );
}
