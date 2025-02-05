import React from "react";
import Hero from "../components/Hero";
import Sig from "../components/Sig";
import Numbers from "../components/Numbers";
import Timeline from "../components/Timeline";
import Marquee from "../components/Marquee";
import Navbar from "../components/Navbar";
import Mission from "../components/mission";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Hero />
      <Numbers />
      <Sig />
      <Timeline />
      <Marquee />
    </div>
  );
}
