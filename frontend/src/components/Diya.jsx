import React from 'react';
import { motion } from 'framer-motion';
import './styles.css';

export function Diya() {
  return (
    
<div>
      {/* Waving flame */}
      <motion.div
        className="flame absolute top-[10%] right-[-2em] transform -translate-x-1/2 opacity-75" 
        animate={{
          rotate: [0, -5, 5, 0],
          y: [0, -10, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="inner-flame"></div>
      </motion.div>
      
      </div>
  );
}
