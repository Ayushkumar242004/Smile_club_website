import React from "react";
import Hero from "../components/Hero";
import Sig from "../components/Sig";
import Numbers from "../components/Numbers";
import Vision from "../components/Vision";
import EventsCard from "../components/EventsCard";
import Marquee from "../components/Marquee";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Numbers />
      <Sig />
      <EventsCard />
      <Marquee />
    </div>
  );
}
