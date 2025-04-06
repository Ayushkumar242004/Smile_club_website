import React, { useState, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import "./styles.css";

export default function Hero_event({ title = "SMILE CLUB",  vid = "https://res.cloudinary.com/dqlgqfxi6/video/upload/v1743444280/shiva_vid_uswekr.mp4"  }) {

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center justify-center text-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={vid} type="video/mp4" />
        </video>

        {/* Hero Content */}
        <div className="h-full w-full flex items-center justify-center text-center absolute bg-[rgba(96,9,9,0.4)]">
          <div className="relative z-10 rounded-3xl text-white px-10">
            <motion.h1
              className="sm:text-6xl md:text-8xl mt-2 text-4xl font-extrabold lg:mb-4 md:mb-2 mb-0 tracking-wide leading-tight font-serif text-amber-400 drop-shadow-[0_4px_20px_rgba(255,255,255,0.8)]"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {title}
            </motion.h1>
          </div>
        </div>
      </div>
    </>
  );
}
