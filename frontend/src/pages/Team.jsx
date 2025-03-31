import React from "react";
import OurTeam from "../components/OurTeam";
import Hero2 from "../components/Hero2";

export default function Team() {
  return (
    <div className="bg-red-200 min-h-screen">
      <Hero2 title="Meet the Team." vid="https://res.cloudinary.com/dqlgqfxi6/video/upload/v1743444282/shiva2_ax7cqc.mp4"/>
      <OurTeam />
    </div>
  );
}