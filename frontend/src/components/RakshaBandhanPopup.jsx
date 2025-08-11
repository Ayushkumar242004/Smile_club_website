import React, { useState, useEffect } from "react";
import rakshaBandhanImg from "../images/rakshabandhan.jpg";

const RakshaBandhanPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const hasSeen = localStorage.getItem("rakshaBandhanPopupSeen");
    console.log("Popup seen in localStorage?", hasSeen);

    // Always show popup (or check !hasSeen to only show first time)
    setIsOpen(true);

    // Trigger animation slightly after mounting
    setTimeout(() => setAnimate(true), 50);
  }, []);

  const closePopup = () => {
    setAnimate(false); // trigger scale down animation
    setTimeout(() => {
      setIsOpen(false);
      localStorage.setItem("rakshaBandhanPopupSeen", "true");
    }, 300); // match transition duration
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        className={`relative bg-white rounded-lg shadow-lg w-96 p-4 transform transition-all duration-300 ${
          animate ? "opacity-100 scale-100" : "opacity-0 scale-75"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-800 hover:text-gray-900 text-xl"
          onClick={closePopup}
        >
          ✕
        </button>

        {/* Banner Image */}
        <img
          src={rakshaBandhanImg}
          alt="Raksha Bandhan"
          className="rounded-lg mb-4"
        />

        {/* Well wishes text */}
        <div className="text-center text-gray-900">
          <h2 className="text-lg font-semibold mb-2">
            Wishing you a bond of love and joy forever 💖
          </h2>
          <p className="text-sm font-semibold">
            Raksha Bandhan - 9 August 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default RakshaBandhanPopup;
