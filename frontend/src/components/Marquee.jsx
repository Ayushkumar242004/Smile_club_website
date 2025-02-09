import React from "react";

export default function Marquee() {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        height: "64px",
        marginBottom: "30px",
        border: "2px solid #D32F2F",  // Border color to match the red gradient
        borderLeft: "none",  // Removing left border
        borderRight: "none", // Removing right border
      }}
    >
      
      {/* Marquee Strip */}
      <div
        style={{
          padding: "12px 20px",
          background: "white", // Background color for the box
          position: "absolute",
          display: "inline-flex",
          whiteSpace: "nowrap",
          animation: "scroll 25s linear infinite",
          alignItems: "center",
          height: "64px",
          boxShadow: "0 14px 28px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
          fontFamily: "'Roboto', sans-serif", // Font style
        }}
      >
        <span
          style={{
            marginRight: "32px",
            color: "#E23D3D", // Text color for contrast
            fontWeight: "600",
            fontSize: "22px", // Font size for better fit
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)", // Text shadow for readability
          }}
        >
          "You have the right to work, but never to the fruit of work. Let not the fruits of action be your motive, nor let your attachment be to inaction."
          (तुम्हारा कर्तव्य कार्य करना है, परंतु उसके फल का अधिकार तुम्हारा नहीं है। तुम्हारे कार्य के फलों पर तुम्हारा कोई अधिकार नहीं होना चाहिए, और न ही तुम्हें निष्क्रियता में आसक्ति होनी चाहिए।)
        </span>
      </div>

      {/* Keyframes for Animation */}
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(100vw); /* Start from the right side of the page */
            }
            100% {
              transform: translateX(-100%); /* End by scrolling off the left side */
            }
          }
        `}
      </style>
    </div>
  );
}
