import { React, useState } from "react";
import { Minus, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "../constants/FAQ.jsx";

function Panel({ faq, isActive, setIsActive }) {
    return (
        <div className={`${isActive === faq.id ? "shadow-md shadow-[#bababa]" : ""} rounded-lg m-2`}>
            {/* Question Section */}
            <button
                className={`${isActive === faq.id ? "bg-[#7e4555] rounded-t-lg" : "bg-[#f7f7f7] rounded-lg"} flex justify-between items-center w-full py-4 px-4`}
                onClick={() => { isActive === faq.id ? setIsActive(0) : setIsActive(faq.id) }}
                aria-expanded={isActive}
            >
                <div className={`text-left ${isActive === faq.id ? "text-white" : "text-[#db4242]"} font-bold`}>{faq.question}</div>
                <div className={`${isActive === faq.id ? "" : "rotate-90"} ease-in-out duration-300 ml-6 flex-shrink-0`}>
                    {isActive === faq.id ? <Minus className="h-6 w-6" color="#FFFFFF" /> : <Plus className="h-6 w-6" color="#848486" />}
                </div>
            </button>
            {/* Answer Section */}
            <div className="">
                <AnimatePresence>
                    {isActive === faq.id && (
                        <motion.div
                            initial={{ opacity: 0, y: -50, height: 0 }}
                            animate={{ opacity: 1, y: 0, height: "auto" }}
                            exit={{ opacity: 0, y: -50, height: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-[#f7f7f7] rounded-b-lg"
                        >
                            <p
                                dangerouslySetInnerHTML={{ __html: faq.answer }}
                                className="text-[#767e88] px-4 py-3"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default function FAQSection() {
    const [isActive, setIsActive] = useState(0);

    return (
        <div className="w-full px-4 py-16 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
                    <div>
                        {faqs.map((faq) => (
                            (faq.id % 2) === 0 ? <Panel key={faq.id} faq={faq} isActive={isActive} setIsActive={setIsActive} /> : null
                        ))}
                    </div>
                    <div>
                        {faqs.map((faq) => (
                            (faq.id % 2) === 0 ? null : <Panel key={faq.id} faq={faq} isActive={isActive} setIsActive={setIsActive} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}