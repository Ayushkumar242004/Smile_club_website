"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { testimonial } from "../constants/Testimonial.jsx"

export default function Testimonial() {
  const [view, setView] = useState(0)
  const cardWidth = 108.69 // Width percentage per testimonial card
  const visibleCards = 2 // Number of cards visible at a time

  const handleNext = useCallback(() => {
    setView((prevView) => {
      const newView = prevView + 1
      return newView > testimonial.length - visibleCards ? 0 : newView
    })
  }, [testimonial.length])

  const handlePrev = useCallback(() => {
    setView((prevView) => {
      const newView = prevView - 1
      return newView < 0 ? testimonial.length - visibleCards : newView
    })
  }, [testimonial.length])

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 3000)

    return () => clearInterval(interval)
  }, [handleNext])

  return (
    <div>
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="text-[#7E4555] text-2xl">ॐ</span>
          <h2 className="text-[#7E4555] text-3xl font-bold tracking-wide">TESTIMONIALS</h2>
          <span className="text-[#7E4555] text-2xl">ॐ</span>
        </div>
        <div className="text-[#DB4242] text-5xl font-bold">
          What Our
          <br />
          Congregation Say
        </div>
      </div>

      {/* Individual testimonial card */}
      <div className="flex flex-nowrap w-[80%] transform-flat scrollbar-hidden overflow-hidden mx-[10%]">
        {testimonial.map((item, index) => (
          <div
            key={item.id}
            style={{ transform: `translateX(-${view * cardWidth}%)` }}
            className={`shadow-[#a1a1a1] min-w-[92%] lg:min-w-[46%] rounded-lg shadow-md transform duration-500 ease-out flex flex-col sm:flex-row p-6 mx-[4%] lg:mx-[2%] my-8`}
          >
            <div className="w-full sm:basis-1/3 flex justify-center sm:justify-start mb-4 sm:mb-0">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                className="object-cover w-[210px] h-[260px] sm:w-[250px] sm:h-[180px] md:w-[280px] md:h-[280px] lg:w-[300px] lg:h-[250px] xl:w-[300px] xl:h-[300px] rounded-lg"
              />
            </div>
            <div className="flex flex-col w-full sm:basis-2/3 p-2.5 text-center sm:text-left">
              <div className="text-[#E47474] text-sm lg:text-lg font-bold">
                {item.quote}
              </div>
              <div className="border border-[#a5a5a5] opacity-40 mt-5 md:mt-8 lg:mt-10 mb-3 md:mb-4 lg:mb-5"></div>
              <div className="text-[#DB4242] text-lg lg:text-2xl font-bold p-1 md:p-2">{item.name}</div>
              <div className="text-[#767E88] text-sm lg:text-lg font-bold pl-2 md:pl-2">{item.role}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex justify-center">
        <div className="rounded-full bg-[#e6e6e6]">
          <button
            onClick={handlePrev}
            className="bg-[#f7f7f7] rounded-full justify-items-center size-12 md:size-14 lg:size-16 m-2 md:m-3"
          >
            <ChevronLeft color="#777777" className="size-5 md:size-6" />
          </button>
          <button
            onClick={handleNext}
            className="bg-[#f7f7f7] rounded-full size-12 md:size-14 lg:size-16 justify-items-center m-2 md:m-3"
          >
            <ChevronRight color="#777777" className="size-5 md:size-6" />
          </button>
        </div>
      </div>
    </div>
  )
}
