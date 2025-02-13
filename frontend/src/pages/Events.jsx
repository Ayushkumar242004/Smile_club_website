import React from "react";
import EventsCard from "../components/EventsCard";
import Broadcast from "../components/Broadcast";
import Videos from "../components/Videos";
import Testimonial from "../components/Testimonial";
import FAQSection from "../components/FAQ";
import Hero_event from "../components/Hero_event";
import { motion, useMotionValue, useSpring } from "framer-motion";
export default function Events() {
  return (
    <div className="">
      <Hero_event />
      <EventsCard />    
      <Videos />    
      <Testimonial/>
      <FAQSection/>
    </div>
  );
}