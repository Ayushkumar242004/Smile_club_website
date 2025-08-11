import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Teams from "./pages/Team";
import Blogs from "./pages/Blogs";
import Gallery from "./pages/Gallery";
import CardPage from "./components/CardPage";
import BlogPage from "./components/BlogPage";
import GalleryPage from "./components/GalleryPage";
import RakshaBandhanPopup from "./components/RakshaBandhanPopup";

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function MainLayout() {
  const location = useLocation();
  const validRoutes = ["/", "/events", "/teams", "/blogs"];
  const is404Page = !validRoutes.includes(location.pathname);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800); // Simulating network delay
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {!is404Page && <Navbar />}  {/* ✅ Ensure Navbar is always present */}
      
      {/* Loader now appears OVER the content instead of blocking the Navbar */}
      {loading ? (
        <Loader />
      ) : (
        <div className="flex-grow">
          {location.pathname === "/" && <RakshaBandhanPopup />} 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/teams" element={<Teams />} /> 
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog/:id" element={<BlogPage />} />
            <Route path="/event/:id" element={<CardPage />} />
            <Route path="/gallery/:id" element={<GalleryPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

        </div>
      )}
      
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
          src="https://res.cloudinary.com/dqlgqfxi6/image/upload/v1743445809/astro_bet9z3.png"
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
