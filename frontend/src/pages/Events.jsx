import React from "react";
import EventsCard from "../components/EventsCard";
import Broadcast from "../components/Broadcast"
import { motion, useMotionValue, useSpring } from "framer-motion";
export default function Events() {
  return (
    <div className="">
      <div className="relative w-full h-[50vh]">
              <motion.div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(rgba(128, 0, 0, 0.2), rgba(128, 0, 0, 0.7)), url('shiv.jpeg')`,
                  backgroundSize: "160%", // Zoom the image by increasing size
                  backgroundRepeat: "no-repeat",
                  backgroundImage: `url('/shiv3.png')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "brightness(0.5) sepia(0.3) hue-rotate(-10deg)"
                }}
              />
              
              {/* Content Overlay */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                <motion.h1 
                  className="text-6xl font-bold text-white tracking-wider"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  BLOG GRID
                </motion.h1>
              </div>
            </div>
      <EventsCard />    
      <Broadcast/>
    </div>
  );
}