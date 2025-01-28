import React from "react";
import { content } from "../constants/Timeline";
import { Circle } from "lucide-react";
import { motion } from "framer-motion";

export default function Timeline() {
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
                        className={`basis-2/5 p-8 ${(content.id%2)===0 ? "order-3" : "order-1" }`}>
                            <div className={`font-bold text-red-500 text-3xl ${(content.id%2)===0 ? "justify-self-start": "justify-self-end" }`}>{content.title}</div>
                            <div className={`${(content.id%2)===0 ? "justify-self-start text-left": "justify-self-end text-right" } text-slate-600 text-l`}>{content.description}</div>
                        </motion.div>
                        
                        {/* Create Vertical Line */}
                        <div className="relative basis-20px self-auto order-2"> 
                            <motion.div 
                            initial={{height: 0, opacity:0 }}
                            transition={{delay: (content.id - 1)*0.75, duration: 1}}
                            animate={{height: "100%", opacity: 1 }}
                            className={`absolute h-full ${content.id===1 ? "top-10" : ""} w-0 left-1/2 border border-red-200`}></motion.div>
                            <motion.div
                            initial={{opacity:0}}
                            transition={{delay: (content.id - 1)*0.75, duration: 1}}
                            animate={{opacity: 1 }}
                            className="z-1 pt-8"><Circle style={{color: "#e0761f", backgroundColor: "white"}} size={20} /></motion.div>
                        </div>
                        
                        {/* Create Date and Year Element */}
                        <motion.div
                        initial={{opacity:0}}
                        transition={{delay: (content.id - 1)*0.75, duration: 1}}
                        animate={{opacity: 1 }}
                        className={`basis-2/5 p-8 ${(content.id%2)===0 ? "order-1" : "order-3" }`}>
                            <div className={`font-bold text-red-500 text-xl ${(content.id%2)===0 ? "justify-self-end": "justify-self-start" }`}>2025</div>
                            <div className={`${(content.id%2)===0 ? "justify-self-end": "justify-self-start" } text-slate-600 text-m`}>{content.date}</div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </>
    );
}