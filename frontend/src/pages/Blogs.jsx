import React, { useEffect, useState } from "react";
import Hero2 from "../components/Hero2";
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
      
      <Hero2 heading="Blogs" image="banner.jpg" />

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