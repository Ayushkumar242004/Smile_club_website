"use client"

import { useState, useEffect } from "react"
import { CalendarIcon, AlertCircle } from "lucide-react"
import { events } from "../constants/EventsCard.jsx"
import EventTagFilter from "./event-tag-filter.jsx"
import YearFilter from "./year-filter.jsx"

const EventPage = () => {
  // Extract all unique years from events and sort in descending order
  const eventYears = [
    ...new Set(
      events.map((event) => {
        // Extract year from date string (assuming format like "25 Dec 2023")
        const dateMatch = event.date.match(/\d{4}$/)
        return dateMatch ? dateMatch[0] : null
      }),
    ),
  ]
    .filter(Boolean)
    .sort((a, b) => b - a) // Sort in descending order

  // Set default year to the latest year
  const latestYear = eventYears.length > 0 ? eventYears[0] : null

  // Add state for filtered events and selected year
  const [filteredEvents, setFilteredEvents] = useState([])
  const [selectedTags, setSelectedTags] = useState([])
  const [selectedYear, setSelectedYear] = useState(latestYear)

  // Filter events based on both tags and year
  useEffect(() => {
    let filtered = events

    // Apply tag filter
    if (selectedTags.length > 0) {
      filtered = filtered.filter((event) => event.tags.some((tag) => selectedTags.includes(tag)))
    }

    // Apply year filter
    if (selectedYear) {
      filtered = filtered.filter((event) => {
        const dateMatch = event.date.match(/\d{4}$/)
        const eventYear = dateMatch ? dateMatch[0] : null
        return eventYear === selectedYear
      })
    }

    setFilteredEvents(filtered)
  }, [selectedTags, selectedYear])

  // Initialize filtered events with the default year filter
  useEffect(() => {
    if (selectedYear) {
      const filtered = events.filter((event) => {
        const dateMatch = event.date.match(/\d{4}$/)
        const eventYear = dateMatch ? dateMatch[0] : null
        return eventYear === selectedYear
      })
      setFilteredEvents(filtered)
    }
  }, [])

  // Handle tag filter changes
  const handleTagFilterChange = (tags) => {
    setSelectedTags(tags)
  }

  // Handle year filter changes
  const handleYearChange = (year) => {
    setSelectedYear(year)
  }

  return (
    <>
<div className="max-w-7xl px-[18%] md:px-[7%] pt-8 pb-2"> 
  {/* Tag filters */}
  <div className="flex flex-wrap items-start gap-4">
    <EventTagFilter onFilterChange={handleTagFilterChange} />
    <div className="flex-1"> 
      {/* Year filter */} 
      <YearFilter years={eventYears} selectedYear={selectedYear} onYearChange={handleYearChange} /> 
    </div> 
  </div> 
</div>

      <div className="w-full py-8 px-[18%] md:px-[7%]">
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="bg-[#FFF0F0] rounded-full p-4 mb-4">
              <AlertCircle className="h-8 w-8 text-[#DB4242]" />
            </div>
            <h3 className="text-xl font-bold text-[#DB4242] mb-2">No events found</h3>
            <p className="text-[#7E4555] max-w-md">
              There are no events available for the selected year and filters. Try selecting different filters or
              another year.
            </p>
          </div>
        )}
      </div>
    </>
  )
}

export default EventPage

