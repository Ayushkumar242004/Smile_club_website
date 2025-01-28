import { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const PercentageCircle = ({ percentage, label, description }) => {
  const [inView, setInView] = useState(false);
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start({
        strokeDashoffset: 282 - (282 * percentage) / 100,
        transition: { duration: 2, ease: "easeInOut" },
      });
      let start = 0;
      const interval = setInterval(() => {
        start += 1;
        setAnimatedPercentage(start);
        if (start >= percentage) clearInterval(interval);
      }, 20);
    }
  }, [inView, controls, percentage]);

  return (
    <div ref={ref} className="flex items-center justify-center lg:space-x-12 md:space-x-16 sm:space-x-5 space-x-14 md:max-w-[40%]  mb-11  whitespace-nowrap">
      <div className="relative w-24 h-24 ">
        <svg width="96" height="96" viewBox="0 0 100 100" className="absolute">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="transparent"
            stroke="#ddd"
            strokeWidth="10"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="transparent"
            stroke="#d9534f"
            strokeWidth="10"
            strokeDasharray="282"
            strokeDashoffset="282"
            animate={controls}
            strokeLinecap="round"
            transform="rotate(-90 50 50)"
          />
        </svg>
        <div className="absolute inset-0 flex md:left-[3em] lg:right-[2em] sm:left-0 left-[1.5em] items-center md:justify-end justify-center text-2xl font-bold text-[#520d24]">
          {animatedPercentage}%
        </div>
      </div>
      <div>
        <h3 className="md:text-lg text-xl font-bold text-red-600">{label}</h3>
        <p className="text-gray-600 text-sm  text-wrap">{description}</p>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="md:flex md:gap-9 items-center justify-center md:p-6 sm:p-12 p-7">
      <PercentageCircle percentage={75} label="Hindu Community" description="A strong and united community striving for growth and development." />
      <PercentageCircle percentage={50} label="Active Members" description="Dedicated individuals actively contributing to the community's welfare." />
    </div>
  );
};

export default App;
