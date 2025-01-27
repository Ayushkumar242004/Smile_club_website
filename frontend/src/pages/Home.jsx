import React from "react";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Vision from "../components/Vision";
import EventsCard from "../components/EventsCard";
import Marquee from "../components/Marquee";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Vision />
      <EventsCard />
      <Marquee />
    </div>
  );
}
