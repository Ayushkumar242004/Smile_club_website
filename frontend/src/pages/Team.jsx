import React from "react";
import OurTeam from "../components/OurTeam";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero_Team from "../components/Hero_Team";

export default function Team() {
  return (
    <div className="bg-red-200 min-h-screen">
      {/* <Navbar /> */}
      <Hero_Team />
      <OurTeam />
      {/* <Footer /> */}
    </div>
  );
}
