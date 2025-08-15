import React from 'react';
import { motion, useScroll } from 'framer-motion';
import { Circle } from 'lucide-react';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  const sections = ['Hero', 'Synopsis', 'Tropes'];

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col space-y-4">
        {sections.map((section, index) => (
          <motion.div
            key={section}
            className="relative group cursor-pointer"
            whileHover={{ scale: 1.2 }}
          >
            <Circle 
              className={`w-3 h-3 transition-colors duration-300 ${
                scrollYProgress.get() > (index / sections.length) 
                  ? 'text-red-500 fill-red-500' 
                  : 'text-gray-600'
              }`} 
            />
            <span className="absolute right-6 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {section}
            </span>
          </motion.div>
        ))}
        
        {/* Progress line */}
        <motion.div
          className="absolute left-1/2 top-0 w-[1px] bg-gray-700 transform -translate-x-1/2"
          style={{ height: '100%' }}
        >
          <motion.div
            className="w-full bg-red-500 origin-top"
            style={{ scaleY: scrollYProgress }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollProgress;