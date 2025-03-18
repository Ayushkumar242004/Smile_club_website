import { useState } from "react";
import { CalendarIcon } from 'lucide-react';
import { events } from "../constants/EventsCard.jsx";
import EventTagFilter from "./event-tag-filter.jsx"; // Import the new EventTagFilter component
import Navbar from "./Navbar.jsx";

const EventPage = () => {
  // Add state for filtered events
  const [filteredEvents, setFilteredEvents] = useState(events);

  // Add filter handler function
  const handleFilterChange = (selectedTags) => {
    if (selectedTags.length === 0) {
      // If no tags selected, show all events
      setFilteredEvents(events);
    } else {
      // Filter events that have at least one of the selected tags
      const filtered = events.filter(event => 
        event.tags.some(tag => selectedTags.includes(tag))
      );
      setFilteredEvents(filtered);
    }
  };

  return (
    <>
      {/* Add the EventTagFilter component here */}
      <EventTagFilter onFilterChange={handleFilterChange} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full py-8 px-[18%] md:px-[7%]">
        {/* Change events.map to filteredEvents.map */}
        {filteredEvents.map((event) => (
          <a
            key={event.id}
            href={`/event/${event.id}`}
            className="shadow-lg overflow-hidden transition-opacity group"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                className="w-full h-72 object-cover transform transition-transform duration-300 hover:scale-110"
              />
            </div>
            
            {/* Date */}
            <div className="p-6 pt-4 text-center">
              <div className="flex flex-row justify-start items-center gap-4 pb-4">
                <div className="flex items-center gap-1">
                  <span><CalendarIcon className="h-4 w-4" color="#7E4555" /></span>
                  <span className="font-semibold text-sm md:text-md text-[#DB4242]">{event.date}</span>
                </div>
              </div>

              {/* Title */}
              <div className="text-left font-bold text-lg sm:text-2xl pl-2 text-[#DB4242]">{event.title}</div>

              {/* Description */}
              <div className="line-clamp-3 text-left font-medium text-sm sm:text-md text-[#DB4242] mt-4 pl-5">
                <span className="mx-5"></span>
                <span>{event.description}</span>
              </div>

              {/* Tags */}
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
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default EventPage;