import React from "react";
import { events } from "../constants/EventsCard.jsx";

const EventPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-8">
      {/* Grid Layout for Event Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {events.map((event) => (
          <a
            key={event.id}
            href={event.link}
            className="bg-gray-800 shadow-lg overflow-hidden hover:opacity-80 transition-opacity group"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-4 text-center">
                <h2 className="text-lg font-semibold">{event.title}</h2>
              </div>
            </div>
            {/* Text Section with Black Background */}
            <div className="bg-black p-4 text-white text-center">
              <p>{event.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default EventPage;
