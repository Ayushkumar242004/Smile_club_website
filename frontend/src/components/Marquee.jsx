import React from "react";

export default function Marquee() {
  return (
    <div className="relative overflow-hidden h-24 mb-8 border-y-2 border-red-700 w-full">
      {/* Marquee Strip */}
      <div className="flex items-center h-24 px-8 bg-[#FBFEF9] shadow-lg w-full animate-scroll">
        <div className="flex whitespace-nowrap">
          <span className="mr-8 text-[#770707] font-bold text-2xl text-shadow-md">
            "You have the right to work, but never to the fruit of work. Let not the fruits of action be your motive, nor let your attachment be to inaction."
            (तुम्हारा कर्तव्य कार्य करना है, परंतु उसके फल का अधिकार तुम्हारा नहीं है। तुम्हारे कार्य के फलों पर तुम्हारा कोई अधिकार नहीं होना चाहिए, और न ही तुम्हें निष्क्रियता में आसक्ति होनी चाहिए।)
          </span>
          <span className="mr-8 text-[#770707] font-extrabold text-2xl text-shadow-md">
            "You have the right to work, but never to the fruit of work. Let not the fruits of action be your motive, nor let your attachment be to inaction."
            (तुम्हारा कर्तव्य कार्य करना है, परंतु उसके फल का अधिकार तुम्हारा नहीं है। तुम्हारे कार्य के फलों पर तुम्हारा कोई अधिकार नहीं होना चाहिए, और न ही तुम्हें निष्क्रियता में आसक्ति होनी चाहिए।)
          </span>
        </div>
      </div>

      {/* Keyframes for Animation */}
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            display: flex;
            white-space: nowrap;
            animation: scroll 20s linear infinite;
            width: max-content;
          }
          .text-shadow-md {
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
          }
        `}
      </style>
    </div>
  );
}
