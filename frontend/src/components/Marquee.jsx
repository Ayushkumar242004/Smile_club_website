import React from "react";

const eventText = "SMILE Club presents ADIPARAMPARA- The Grand One-Day Event on 1st March 2025!";

export default function Marquee() {
  return (
    <div className="relative overflow-hidden w-full bg-[#770707] py-4">
      {/* Decorative border elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#d4af37]"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#d4af37]"></div>
      
      {/* Main scrolling content */}
      <div className="flex items-center justify-center h-full">
        <div className="marquee-container w-full overflow-hidden">
          <div className="marquee-scroll flex whitespace-nowrap items-center">
            {/* Repeat the text multiple times with decorative elements */}
            {[...Array(5)].map((_, i) => (
              <div key={i} className="inline-flex items-center">
                <span className="text-[#e8c98f] text-lg">✦</span>
                <span className="mx-4 text-lg md:text-xl font-semibold text-[#ffefd5] tracking-wide">
                  {eventText}
                </span>
                <span className="mx-4 text-[#e8c98f] text-lg">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Animation styles */}
      <style jsx>{`
        @keyframes scrolling {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .marquee-scroll {
          animation: scrolling 30s linear infinite;
        }
      `}</style>
    </div>
  );
}