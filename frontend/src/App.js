import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Team from "./pages/Team";
import Blogs from "./pages/Blogs";

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function MainLayout() {
  const location = useLocation(); // Get the current path

  // Define all valid routes
  const validRoutes = ["/", "/events", "/team", "/blogs"];
  const is404Page = !validRoutes.includes(location.pathname); // If not a valid route, it's 404

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800); // Simulating network delay
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {loading && <Loader />}
      {!is404Page && <Navbar />}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      {!is404Page && <Footer />}
    </div>
  );
}

function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: (event.clientX - window.innerWidth / 2) / 20,
        y: (event.clientY - window.innerHeight / 2) / 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-maroon-900 to-maroon-700 text-white relative overflow-hidden">
      {/* Glowing Effect */}
      {/* Floating & Parallax Astronaut */}
      <div
        className="mt-10 relative z-10 transition-transform duration-100"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      >
        <img
          src="/astro.png"
          alt="Lost Astronaut"
          className="w-64 opacity-90 animate-floating"
        />
      </div>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-96 h-96 bg-maroon-400 opacity-40 rounded-full blur-3xl"></div>
      </div>

      <h1 className="text-6xl font-bold tracking-widest relative z-10">404</h1>
      <p className="text-xl mt-2 relative z-10">PAGE NOT FOUND</p>
      <p className="mt-2 text-gray-300 relative z-10">
        Your search has ventured beyond the known universe.
      </p>
      <a
        href="/"
        className="mt-6 px-6 py-3 bg-maroon-500 hover:bg-maroon-700 text-white font-semibold rounded-lg transition-shadow shadow-lg relative z-10"
      >
        Return to Home
      </a>

      

      {/* Tailwind Animation for Floating Effect */}
      <style>
        {`
          @keyframes floating {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }

          .animate-floating {
            animation: floating 3s infinite ease-in-out;
          }
        `}
      </style>
    </div>
  );
}

export default App;
