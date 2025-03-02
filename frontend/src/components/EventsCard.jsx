import React from "react";
import { CalendarIcon } from "lucide-react"
import { events } from "../constants/EventsCard.jsx";
import  Navbar  from "./Navbar.jsx";

const EventPage = () => {
  return (
    <>
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full py-8 px-[18%] md:px-[7%]" >
        {events.map((event) => (
          <a
            key={event.id}
            href={`/event/${event.id}`} // Link to the event page
            className="shadow-lg overflow-hidden transition-opacity group"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-72 object-cover transform transition-transform duration-300 hover:scale-110"
              />
            </div>
            
            {/* Cateogarey and Date */}
            <div className="p-6 pt-4 text-center">
              <div className="flex flex-row justify-start items-center gap-4 pb-4">
                {/* <div className="flex items-center font-bold gap-1">
                  <span className="text-[#7E4555] text-sm">ॐ</span>
                  <span className="text-[#DB4242] font-medium text-sm sm:text-md">{event.category}</span> {/* Category /
                </div> */}
                <div className="flex items-center gap-1">
                  <span><CalendarIcon className="h-4 w-4 " color="#7E4555" /></span>
                  <span className="font-semibold text-sm md:text-md text-[#DB4242]">{event.date}</span> {/* Date */}
                </div>
              </div>

              {/* Title */}
              <div className="text-left font-bold text-lg sm:text-2xl pl-2 text-[#DB4242]">{event.title}</div>

              {/* Description */}
              <div className="line-clamp-3 text-left font-medium text-sm sm:text-md text-[#DB4242] mt-4 pl-5">
                <span className="mx-5"></span>
                <span>{event.description}</span>
              </div>

              <div className="flex flex-wrap gap-2 mt-4 pl-5">
                {event.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#DB4242] text-white text-xs sm:text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {/* author credit */}
              {/* <div className="text-left text-md text-[#7E4555] px-4 py-2"><span className="text-md text-[#767E9B]">By </span><span className="font-bold">{event.author}</span></div> */}
              
            </div>
          </a>
        ))}
      </div>
      </>
  );
};

export default EventPage;
