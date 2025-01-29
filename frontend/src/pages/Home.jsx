import React from "react";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Vision from "../components/Vision";
import EventsCard from "../components/EventsCard";
import Marquee from "../components/Marquee";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Hero />
      <AboutUs />
      <Vision />
      <EventsCard />
      <Marquee />
    </div>
  );
}
