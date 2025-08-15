import React from 'react';
import { motion } from 'framer-motion';

const BookCover = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="flex justify-center mb-8"
    >
      <div className="relative group">
        {/* Book Cover Placeholder */}
        <div className="w-64 h-96 bg-gradient-to-br from-gray-900 via-red-950 to-black rounded-lg shadow-2xl border border-red-900/30 overflow-hidden relative">
          {/* Textured overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><defs><filter id=%22roughPaper%22><feTurbulence baseFrequency=%220.04%22 numOctaves=%225%22 result=%22noise%22/><feColorMatrix in=%22noise%22 type=%22saturate%22 values=%220%22/></filter></defs><rect width=%22100%%22 height=%22100%%22 filter=%22url(%23roughPaper)%22 opacity=%220.1%22/></svg>')] opacity-30"></div>
          
          {/* Content */}
          <div className="relative z-10 p-6 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-serif font-bold text-white mb-2 text-center tracking-wider">
                LE PÉRIL
              </h3>
              <div className="w-16 h-[1px] bg-red-500 mx-auto mb-4"></div>
            </div>
            
            {/* Central symbol */}
            <div className="flex-1 flex items-center justify-center">
              <motion.div
                animate={{ 
                  rotate: [0, 2, -2, 0],
                  scale: [1, 1.05, 1] 
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
                className="relative"
              >
                <div className="w-20 h-20 bg-red-600 transform rotate-45 relative">
                  <div className="absolute inset-2 bg-black transform -rotate-45"></div>
                  <div className="absolute inset-4 bg-red-600 transform -rotate-45"></div>
                </div>
                <motion.div
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 w-20 h-20 bg-red-600/40 transform rotate-45 blur-lg"
                />
              </motion.div>
            </div>
            
            <div className="text-center">
              <p className="text-sm text-gray-400 font-medium tracking-widest">
                A DYSTOPIAN NOVEL
              </p>
            </div>
          </div>
          
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-red-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            animate={{ 
              opacity: [0, 0.3, 0] 
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
        </div>
        
        {/* Shadow */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-8 bg-red-900/30 rounded-full blur-xl"></div>
      </div>
    </motion.div>
  );
};

export default BookCover;