"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Sig = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      title: "Web Dev",
      description:
        "Building the web, one line at a time! We design and develop dynamic, responsive websites using modern technologies.",
      icon: "num1.png",
      bgColor: "bg-[#7e4555]",
    },
    {
      title: "Media",
      description:
        "Creativity through visuals! From graphic design to video production, we bring ideas to life with stunning media content.",
      icon: "num2.png",
      bgColor: "bg-[#db4242]",
    },
    {
      title: "Content",
      description:
        "Words that connect! We craft engaging blogs, social media posts, and website content that inform and inspire.",
      icon: "num3.png",
      bgColor: "bg-[#7e4555]",
    },
    {
      title: "Marketing",
      description:
        "Spreading the word! Strategic campaigns that boost visibility and connect your brand with the right audience.",
      icon: "num1.png",
      bgColor: "bg-[#db4242]",
    },
    {
      title: "Publicity",
      description:
        "Making an impact! We strategize and execute campaigns to enhance outreach, engagement, and visibility.",
      icon: "num2.png",
      bgColor: "bg-[#7e4555]",
    },
    {
      title: "Event Management",
      description:
        "Seamless events, lasting impressions! We plan and organize events with precision to ensure success and engagement.",
      icon: "num3.png",
      bgColor: "bg-[#db4242]",
    },
  ];

  const totalCards = services.length;
  const maxSlide = totalCards - 3; // Max slide index where the last card appears in the rightmost position

  const nextSlide = () => {
    if (currentSlide < maxSlide) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  return (
    <div
      className="bg-orange-100 flex flex-col md:h-screen md:py-0 py-16 w-full lg:px-28 md:px-16 sm:px-20 px-10 md:items-start content-center justify-center self-center text-[#fff] relative"
      style={{
        backgroundImage: "url('bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-start mb-10">
        <p className="uppercase md:text-2xl text-xl">ॐ</p>
        <h2 className="lg:text-6xl text-4xl font-bold">Our SIGs</h2>
      </div>

      {/* Mobile view - vertical stack of all cards */}
      <div className="grid grid-cols-1 gap-3 md:hidden">
        {services.map((service, index) => (
          <div
            key={index}
            className={`${service.bgColor} ${service.textColor || "text-white"} p-5 h-[16em] rounded-lg shadow-2xl relative transform transition-transform duration-500 hover:-translate-y-1`}
          >
            <div className="absolute top-0 left-0 w-[60%] h-[0.05em] bg-gradient-to-r from-[#ffffff52] via-[#ffffffc1] to-transparent animate-move-light rounded-2xl"></div>
            <div className="relative items-start mb-6">
              <img src={service.icon || `/placeholder.svg?height=48&width=48`} alt="icon" className="h-12 w-12" />
            </div>
            <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
            <p className="text-sm">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Desktop view - smooth one-card sliding effect */}
      <div className="hidden md:block relative w-full">
        {/* Sliding container with navigation wrapper */}
        <div className="relative w-full">
          {/* Navigation buttons - now relative within the container */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`
              absolute 
              z-20 
              left-[-40px] 
              top-1/2 
              -translate-y-1/2 
              ${currentSlide === 0 
                ? "opacity-30 cursor-not-allowed" 
                : "bg-white/30 hover:bg-white/50 backdrop-blur-sm"
              } 
              p-3 
              rounded-full 
              transition-all 
              duration-300 
              ease-in-out
              hidden 
              md:block
            `}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-8 w-8 text-white" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentSlide >= maxSlide}
            className={`
              absolute 
              z-20 
              right-[-40px] 
              top-1/2 
              -translate-y-1/2 
              ${currentSlide >= maxSlide 
                ? "opacity-30 cursor-not-allowed" 
                : "bg-white/30 hover:bg-white/50 backdrop-blur-sm"
              } 
              p-3 
              rounded-full 
              transition-all 
              duration-300 
              ease-in-out
              hidden 
              md:block
            `}
            aria-label="Next slide"
          >
            <ChevronRight className="h-8 w-8 text-white" />
          </button>

          {/* Sliding container with increased gap */}
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out space-x-6"
              style={{ 
                transform: `translateX(-${currentSlide * (32.9)}%)`,
                width: `calc(100% + ${maxSlide * 1.5}%)` // Adjust width to accommodate gap
              }}
            >
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`
                    ${service.bgColor} 
                    ${service.textColor || "text-white"} 
                    lg:p-9 p-5 
                    md:h-[19em] 
                    w-[calc(33.333%-1.9rem)] // Adjust width to create gap
                    flex-shrink-0 
                    rounded-lg 
                    shadow-2xl 
                    relative 
                    transform 
                    transition-transform 
                    duration-500 
                    hover:-translate-y-1
                  `}
                >
                  <div className="absolute top-0 left-0 w-[60%] h-[0.05em] bg-gradient-to-r from-[#ffffff52] via-[#ffffffc1] to-transparent animate-move-light rounded-2xl"></div>
                  <div className="relative items-start mb-6">
                    <img 
                      src={service.icon || `/placeholder.svg?height=64&width=64`} 
                      alt="icon" 
                      className="lg:h-16 lg:w-16 h-12 w-12" 
                    />
                  </div>
                  <h3 className="lg:text-4xl text-3xl font-bold mb-4">{service.title}</h3>
                  <p className="text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: maxSlide + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === index ? "w-8 bg-white" : "w-2 bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sig;