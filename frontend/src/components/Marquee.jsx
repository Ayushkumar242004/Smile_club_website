import React from "react";

export default function Marquee() {
  return (
    <div className="relative overflow-hidden h-20 border-t-2 border-red-700 w-full bg-[#FBFEF9] shadow-lg">
      {/* Marquee Strip */}
      <div className="flex items-center h-20 px-8 animate-scroll w-max">
        <div className="flex whitespace-nowrap">
          <span className="mr-16 text-[#550505] font-bold text-xl text-shadow-md">
            "You have the right to work, but never to the fruit of work. Let not the fruits of action be your motive, nor let your attachment be to inaction."
            (तुम्हारा कर्तव्य कार्य करना है, परंतु उसके फल का अधिकार तुम्हारा नहीं है। तुम्हारे कार्य के फलों पर तुम्हारा कोई अधिकार नहीं होना चाहिए, और न ही तुम्हें निष्क्रियता में आसक्ति होनी चाहिए।)
          </span>
          <span className="mr-16 text-[#550505] font-bold text-xl text-shadow-md">
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
            animation: scroll 30s linear infinite; /* Slower speed */
          }
          .text-shadow-md {
            text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
          }
        `}
      </style>
    </div>
  );
}
