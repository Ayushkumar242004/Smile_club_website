import React from "react";
import OurTeam from "../components/OurTeam";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Team() {
  return (
    <div className="bg-red-200 min-h-screen">
      <Navbar />
      <OurTeam />
      <Footer />
    </div>
  );
}
