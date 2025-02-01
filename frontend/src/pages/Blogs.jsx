import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Home from "./Home";
import { motion, useMotionValue, useSpring } from "framer-motion";
import '../blogs.css'
import RecentPosts from "../components/SideComponent";
import CardGridPage from "../components/Card";
export default function Blogs() {
  const [activeSection, setActiveSection] = useState("home");
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 700 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

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

  return (
    <div className="min-h-screen bg-black">
      {/* <Navbar /> */}
      
      {/* Hero Section */}
      <div className="relative w-full h-[50vh]">
        <motion.div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(rgba(128, 0, 0, 0.2), rgba(128, 0, 0, 0.7)), url('shiv.jpeg')`,
            backgroundSize: "160%", // Zoom the image by increasing size
            backgroundRepeat: "no-repeat",
            backgroundImage: `url('/shiv.jpeg')`,
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

      {/* Section Switch Buttons */}
      <motion.div
              className="relative w-full text-center mt-[-2em] px-6 py-2 bg-[#fff] text-maroon-900 rounded-full font-bold hover:scale-110 transition-all shadow-lg hover:shadow-xl mx-auto max-w-max text-lg tracking-wider drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
              whileHover={{ scale: 1.1 }}
            >
        <motion.button
          className={`px-6 py-2 rounded ${
            activeSection === "home" 
              ? 'text-maroon-900' 
              : 'text-[#6c736d]'}
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => (window.location.href = "/")}
        >
          Home
        </motion.button>
        <motion.button
          className={`px-6 py-2 rounded ${
            activeSection === "blogs" 
              ? 'text-maroon-900' 
              : 'text-[#6c736d]'}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveSection("blogs")}
        >
          Blogs
        </motion.button>
      </motion.div>
      {/* Section Content */}
      <div className="mt-8 px-4">
        {activeSection === "blogs" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-center text-xl blog-text">Welcome to Blogs Section!</p>
          </motion.div>
        )}
      </div>
      <div className="flex flex-col lg:flex-row w-full min-h-screen p-6">
      {/* Recent Posts Section (30% width on large screens) */}
        <div className="lg:w-1/3 w-full">
          <RecentPosts />
        </div>

      {/* Card Grid Section (70% width on large screens) */}
        <div className="lg:w-2/3 w-full mt-6 lg:mt-0">
          <CardGridPage />
        </div>
      </div>
    </div>
  );
}