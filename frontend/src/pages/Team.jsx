import React from "react";
import OurTeam from "../components/OurTeam";
import Hero_Team from "../components/Hero_Team";

export default function Team() {
  return (
    <div className="bg-red-200 min-h-screen">
      <Hero_Team />
      <OurTeam />
    </div>
  );
}