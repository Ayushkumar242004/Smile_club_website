import { React, useState, useEffect } from "react";
import { content } from "../constants/Timeline";
import { Circle } from "lucide-react";
import { motion } from "framer-motion"; // Import motion from framer-motion

export default function Timeline() {
    const [hover, setHover] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        // Reset the animation state on page refresh
        setHasAnimated(false);
    }, []);

    return (
        <div className="justify-center my-16 ">
            <div className="text-start mb-16 lg:px-28 md:px-16 sm:px-28 px-14">
                <p className="uppercase text-[#8B1D42] md:text-2xl text-xl">ॐ</p>
                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#c52f2f]">Timeline</h2>
                <a href="/events" className="text-sm text-gray-600 hover:text-[#c52f2f] flex items-center lg:px-32 px-9 mt-2 ">
                    View All Events →
                </a>
            </div>

            {/* Scrollable Timeline Container */}
            <div className="relative overflow-auto max-h-[80vh] pl-4 pr-2">
                {content.map((content) => (
                    <div className="w-full px-8 flex flex-row justify-center" key={content.id}>
                        {/* Title and Description */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            transition={{ delay: (content.id - 1) * 0.75, duration: 1 }}
                            animate={{ opacity: 1 }}
                            className={`basis-3/5 md:basis-2/5 p-8 ${(content.id % 2) === 0 ? "order-3" : "md:order-1 order-3"}`}
                        >
                            <motion.div
                                onHoverStart={() => setHover(content.id)}
                                onHoverEnd={() => setHover(0)}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.7 }}
                                className={`font-bold text-[#E23D3D] text-1xl mb-3 sm:text-2xl ${(content.id % 2) === 0 ? "justify-self-start" : "md:justify-self-end justify-self-start"}`}
                            >
                                {content.title}
                            </motion.div>
                            <motion.div
                                transition={{ type: "inertia" }}
                                className={`${hover === content.id ? "block opacity-100" : "hidden opacity-0"} transition-opacity md:block md:opacity-100 ${(content.id % 2) === 0 ? "justify-self-start text-left" : "md:justify-self-end justify-self-start md:text-right text-left"} text-gray-800 text-sm md:text-l`}
                            >
                                {content.description}
                            </motion.div>
                        </motion.div>

                        {/* Create Vertical Line */}
                        <div className="relative basis-20px self-auto order-2">
                            <motion.div
                                initial={{ height: 0, opacity: 1 }}
                                whileInView={{ height: "100%", opacity: 1 }} // Trigger animation when in view
                                transition={{ delay: (content.id - 1) * 0.75, duration: 1 }}
                                className={`absolute h-full ${content.id === 1 ? "top-11" : ""} w-1 left-1/2 bg-[#E23D3D] z-0`}
                                viewport={{ once: true, amount: 0.5 }} // Trigger animation only once
                            ></motion.div>
                            <motion.div
                                onHoverStart={() => setHover(content.id)}
                                onHoverEnd={() => setHover(0)}
                                whileHover={{ scale: 1.15 }}
                                initial={{ opacity: 0 }}
                                transition={{ delay: (content.id - 1) * 0.75, duration: 1 }}
                                animate={{ opacity: 1 }}
                                className="z-10 mt-9 ml-1 relative"
                            >
                                <Circle style={{ color: "#e0761f", backgroundColor: "white", borderRadius: "50%" }} size={20} />
                            </motion.div>
                        </div>

                        {/* Create Date and Year Element */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            transition={{ delay: (content.id - 1) * 0.75, duration: 1 }}
                            animate={{ opacity: 1 }}
                            className={`basis-1/4 md:basis-2/5 p-8 order-1 ${(content.id % 2) === 0 ? "md:order-1 justify-items-end" : "md:order-3 md:justify-items-start justify-items-end"}`}
                        >
                            <div className={`font-bold text-[#E23D3D] flex ${(content.id % 2) === 0 ? " justify-end" : " md:justify-start justify-end"} text-xl`}>2025</div>
                            <div className={` text-gray-800 text-m flex ${(content.id % 2) === 0 ? " justify-end" : " md:justify-start justify-end"}`}>{content.date}</div>
                        </motion.div>
                    </div>
                ))}
            </div>
            
            <style jsx>{`
                /* Custom scrollbar styles */
                .relative {
                    
                    scrollbar-color: #e23d3d transparent;
                }

                /* For Webkit browsers (Chrome, Safari) */
                .relative::-webkit-scrollbar {
                    width: 10px;
                    margin-right: 5em; /* Shift scrollbar to the left */
                }

                .relative::-webkit-scrollbar-thumb {
                    background-color: #e23d3d;
                    border-radius: 10px;
                }

                .relative::-webkit-scrollbar-track {
                    background-color: transparent;
                }
            `}</style>
        </div>
    );
}
