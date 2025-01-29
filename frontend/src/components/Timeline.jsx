import { React, useState } from "react";
import { content } from "../constants/Timeline";
import { Circle } from "lucide-react";
import { motion } from "framer-motion";

export default function Timeline() {

    const [hover,setHover] = useState(0)

    return(
        <>
            <div className="justify-center ">
                {content.map((content) => (
                    <div className="w-full px-16 flex flex-row justify-center">
                        
                        {/* Title and Description */}
                        <motion.div
                        initial={{opacity:0}}
                        transition={{delay: (content.id - 1)*0.75, duration: 1}}
                        animate={{opacity: 1 }}
                        className={`basis-3/5 md:basis-2/5 p-8 ${(content.id%2)===0 ? "order-3" : "md:order-1 order-3" }`}>
                            <motion.div
                            onHoverStart={() => setHover(content.id)}
                            onHoverEnd={() => setHover(0)}
                            whileHover={{ scale: 1.15 }}
                            transition={{duration:0.7,}}
                            className={`font-bold text-orange-700 text-3xl ${(content.id%2)===0 ? "justify-self-start": "md:justify-self-end justify-self-start" }`}>{content.title}</motion.div>
                            <motion.div
                            transition={{type:"inertia"}}
                            className={`${hover===content.id ? "block opacity-100" : "hidden opacity-0" } transition-opacity md:block md:opacity-100 ${(content.id%2)===0 ? "justify-self-start text-left": "md:justify-self-end justify-self-start md:text-right text-left" } text-gray-800 text-sm md:text-l`}>{content.description}</motion.div>
                        </motion.div>
                        
                        {/* Create Vertical Line */}
                        <div className="relative basis-20px self-auto order-2"> 
                            <motion.div 
                            initial={{height: 0, opacity:0 }}
                            transition={{delay: (content.id - 1)*0.75, duration: 1}}
                            animate={{height: "100%", opacity: 1 }}
                            className={`absolute h-full ${content.id===1 ? "top-11" : ""} w-0 left-1/2 border border-red-200`}></motion.div>
                            <motion.div
                            onHoverStart={() => setHover(content.id)}
                            onHoverEnd={() => setHover(0)}
                            whileHover={{ scale: 1.15 }}
                            initial={{opacity:0}}
                            transition={{delay: (content.id - 1)*0.75, duration: 1}}
                            animate={{opacity: 1 }}
                            className="z-1 mt-9 "><Circle style={{color: "#e0761f", backgroundColor: "white"}} size={20} /></motion.div>
                        </div>
                        
                        {/* Create Date and Year Element */}
                        <motion.div
                        initial={{opacity:0}}
                        transition={{delay: (content.id - 1)*0.75, duration: 1}}
                        animate={{opacity: 1 }}
                        className={`basis-1/4 md:basis-2/5 p-8 order-1 ${(content.id%2)===0 ? "md:order-1 justify-items-end" : "md:order-3 md:justify-items-start justify-items-end" }`}>
                            <div className={`font-bold text-orange-500 text-xl `}>2025</div>
                            <div className={` text-gray-800 text-m`}>{content.date}</div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </>
    );
}