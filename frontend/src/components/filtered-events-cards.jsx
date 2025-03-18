"use client"

import { useState } from "react"
import { CalendarIcon } from "lucide-react"
import { events } from "../constants/EventsCard.jsx"
import EventTagFilter from "./event-tag-filter.jsx"

const FilteredEventsCards = () => {
  const [filteredEvents, setFilteredEvents] = useState(events)

  // Filter events based on selected tags - using AND logic
  const handleFilterChange = (selectedTags) => {
    if (selectedTags.length === 0) {
      // If no tags selected, show all events
      setFilteredEvents(events)
    } else {
      // Filter events that have ALL of the selected tags (AND logic)
      const filtered = events.filter((event) => selectedTags.every((tag) => event.tags.includes(tag)))
      setFilteredEvents(filtered)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Tag filter component */}
      <EventTagFilter onFilterChange={handleFilterChange} />

      {/* Events grid */}
      <div className="py-4">
        {filteredEvents.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-lg text-gray-600">No events match the selected tags.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full py-4 px-[18%] md:px-[7%]">
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
                      <span>
                        <CalendarIcon className="h-4 w-4" color="#7E4555" />
                      </span>
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
                      <span key={index} className="bg-[#DB4242] text-white text-xs sm:text-sm px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default FilteredEventsCards

