import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Diya } from "./Diya";
import AboutUs from "./AboutUs"; // Import the About component
import Vision from "./Vision"; // Import the OurVision component

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [activeSection, setActiveSection] = useState("about"); // Track active section ("about" or "vision")
    
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 700 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;
            const { innerWidth, innerHeight } = window;
            const x = (clientX / innerWidth) * 2 - 1;
            const y = (clientY / innerHeight) * 2 - 1;
            setMousePosition({ x, y });
            mouseX.set(x);
            mouseY.set(y);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [mouseX, mouseY]);

    const backgroundX = useTransform(springX, [-1, 1], [10, -10]);
    const backgroundY = useTransform(springY, [-1, 1], [10, -10]);

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <>
            {/* Hero Section */}
            <div className="relative w-full h-screen bg-gradient-to-b from-maroon-900 via-maroon-800 to-maroon-700 text-white overflow-hidden">
                <motion.div
                    className="absolute inset-0 opacity-75"
                    style={{
                        background: `linear-gradient(rgba(128, 0, 0, 0.2), rgba(128, 0, 0, 0.7)), url('shiv.jpeg')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />

                <div className="relative z-10 flex flex-col items-center justify-center text-center mt-[16em]">
                    <motion.h1
                        className="text-6xl md:text-8xl font-extrabold mb-4 tracking-wide leading-tight font-serif text-amber-400 drop-shadow-[0_4px_20px_rgba(255,255,255,0.8)]"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        SMILE CLUB
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-2xl max-w-2xl mb-8 font-light tracking-wide leading-relaxed text-amber-200 font-sans drop-shadow-[0_2px_10px_rgba(255,255,255,0.6)]"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Experience spirituality and positivity with every step.
                    </motion.p>
                </div>
                <Diya />
            </div>

            {/* Button Below Hero */}
            <motion.div
                className="relative w-full text-center mt-[-2em] px-8 py-4 bg-[#fff] text-maroon-900 rounded-full font-bold hover:scale-110 transition-all shadow-lg hover:shadow-xl mx-auto max-w-max text-lg tracking-wider drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                whileHover={{ scale: 1.1 }}
            >
                <button onClick={() => handleSectionChange("about")}
                className={` ${activeSection === 'about' ? 'text-maroon-900' : 'text-[#6c736d]'}`}>
                    About Us
                </button> <span className="mx-2">ॐ</span>  
                <button onClick={() => handleSectionChange("vision")}
                className={` ${activeSection === 'vision' ? 'text-maroon-900' : 'text-[#6c736d]'}`}>
                 Our Vision
                </button>
            </motion.div>

            {/* Render the active section */}
            <div>
                {activeSection === "about" && <AboutUs />}
                {activeSection === "vision" && <Vision />}
            </div>
        </>
    );
}
