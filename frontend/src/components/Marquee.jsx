import React, { useEffect, useState } from "react";

const quotes = [
  "Do your duty, results will follow. - Bhagavad Gita",
  "Fear is born from attachment. - Mahabharata",
  "Truth alone triumphs. - Mundaka Upanishad",
  "Anger leads to destruction. - Ramayana",
  "A calm mind brings strength. - Bhagavad Gita",
  "Time is the greatest teacher. - Mahabharata",
  "Greed destroys wisdom. - Mahabharata",
  "Selfless action brings peace. - Bhagavad Gita",
  "Patience is the greatest virtue. - Ramayana",
  "Desire is the root of suffering. - Bhagavad Gita",
];

export default function Marquee() {
  const [displayedQuotes, setDisplayedQuotes] = useState([]);

  useEffect(() => {
    // Duplicate quotes array to create a seamless scrolling effect
    setDisplayedQuotes([...quotes, ...quotes]);
  }, []);

  return (
    <div className="relative overflow-hidden border-t-2 border-red-700 w-full bg-[#FBFEF9] shadow-lg">
      <div className="flex items-center h-12 px-8 animate-scroll w-max">
        <div className="flex whitespace-nowrap">
          {displayedQuotes.map((quote, index) => (
            <span key={index} className="mr-16 text-[#550505] text-xl text-shadow-md">
              {quote}
            </span>
          ))}
        </div>
      </div>
      
      {/* Keyframes for Animation */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 60s linear infinite;
          }
          .text-shadow-md {
            text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
          }
        `}
      </style>
    </div>
  );
}