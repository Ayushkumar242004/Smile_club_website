import React, { useState, useEffect } from "react";
import joinSmileClubImg from "../images/joinsmileclub.jpg"

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
        className={`relative transform transition-all duration-300 ${
          animate ? "opacity-100 scale-100" : "opacity-0 scale-75"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-white hover:text-gray-300 text-2xl z-10"
          onClick={closePopup}
        >
          ✕
        </button>

        <img
          src={joinSmileClubImg}
          alt="Join Smile Club"
          className="rounded-lg max-w-full max-h-[80vh] shadow-lg"
        />
      </div>
    </div>
  );
};

export default RakshaBandhanPopup;
