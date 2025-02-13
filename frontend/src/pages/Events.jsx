import React from "react";
import EventsCard from "../components/EventsCard";
import Broadcast from "../components/Broadcast";
import Videos from "../components/Videos";
import Testimonial from "../components/Testimonial";
import FAQSection from "../components/FAQ";
import Hero2 from "../components/Hero2";
import { motion, useMotionValue, useSpring } from "framer-motion";
export default function Events() {
  return (
    <div className="">
      <Hero2 heading="Events" image="banner.jpg" />
      {/* <EventsCard />     */}
      <Videos />    
      <Testimonial/>
      <FAQSection/>
    </div>
  );
}