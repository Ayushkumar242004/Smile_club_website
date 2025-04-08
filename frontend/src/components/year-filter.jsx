"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronDown } from "lucide-react"

const YearFilter = ({ years, selectedYear, onYearChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleYearSelect = (year) => {
    onYearChange(year)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-[#DB4242] text-white rounded-full text-sm font-medium"
      >
        <span>Year: {selectedYear}</span>
        <ChevronDown className="h-4 w-4" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md z-10 min-w-[120px]">
          <div className="py-1">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => handleYearSelect(year)}
                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default YearFilter

