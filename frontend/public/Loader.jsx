import { useEffect, useState } from "react";

export default function LoaderPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust timing as needed
  }, []);

  return (
    <div>
      {loading ? (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#7E4555",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          <img
            src="./images/Om-Symbol.png"
            alt="Loading..."
            style={{
              width: "170px",
              height: "170px",
              filter: "brightness(0) saturate(100%) invert(1)", // Converts red to white
              animation: "fadeInOut 2s ease-in-out infinite",
            }}
          />
          <style>
            {`
              @keyframes fadeInOut {
                0% { opacity: 0; }
                50% { opacity: 1; }
                100% { opacity: 0; }
              }
            `}
          </style>
        </div>
      )
  );
}
