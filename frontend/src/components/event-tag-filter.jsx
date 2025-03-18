"use client"

import { useState, useEffect } from "react"
import { events } from "../constants/EventsCard.jsx"

const EventTagFilter = ({ onFilterChange }) => {
  // Extract all unique tags from events
  const allTags = [...new Set(events.flatMap((event) => event.tags))]

  const availableTags = [
    "Event", 
    "Culture", 
    "Festival", 
    "Shiva", 
    "Tradition", 
    "Games"
  ];

  // State to track selected tags
  const [selectedTags, setSelectedTags] = useState([])

  // Handle tag selection/deselection
  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }

  // Update parent component when selected tags change
  useEffect(() => {
    onFilterChange(selectedTags)
  }, [selectedTags, onFilterChange])

  return (
    <div className="max-w-7xl px-[18%] md:px-[8%] py-8">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-[#E23D3D] mb-4">Filter by Tags :-</h3>
        <div className="flex flex-wrap gap-3">
          {availableTags.map((tag, index) => (
            <button
              key={index}
              onClick={() => toggleTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedTags.includes(tag) ? "bg-[#DB4242] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        {selectedTags.length > 0 && (
          <button onClick={() => setSelectedTags([])} className="mt-3 text-md text-[#E23D3D] hover:text-[#B22222] no-underline">
            Clear filters
          </button>
        )}
      </div>
    </div>
  )
}

export default EventTagFilter

