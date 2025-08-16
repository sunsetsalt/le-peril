import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Excerpt = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            {t('excerpt.title')}
          </h1>
          <p className="text-xl text-red-400 font-light italic">
            {t('excerpt.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="prose prose-lg prose-invert max-w-none"
        >
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-red-900/20">
            <div className="font-serif text-gray-200 leading-relaxed space-y-6">
              <p className="text-xl md:text-xl first-letter:text-7xl first-letter:font-bold first-letter:text-red-500 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                {t('excerpt.content.p1')}
              </p>
              
              <p className="text-xl md:text-lg lg:text-xl">
                {t('excerpt.content.p2')}
              </p>
              
              <p className="text-xl md:text-lg lg:text-xl">
                {t('excerpt.content.p3')}
              </p>
              
              <p className="text-xl md:text-lg lg:text-xl">
                {t('excerpt.content.p4')}
              </p>
              
              <p className="text-xl md:text-lg lg:text-xl">
                {t('excerpt.content.p5')}
              </p>
              
              <p className="text-xl md:text-lg lg:text-xl italic text-red-400">
                {t('excerpt.content.p6')}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="mb-8">
            <p className="text-gray-400 mb-6 text-lg">
              {t('excerpt.continue')}
            </p>
          </div>
          
          <a
            href="https://forms.gle/3eMrUnTXJM1xEMJN7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white px-12 py-4 rounded-lg font-semibold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50 relative overflow-hidden group"
          >
            <span className="relative z-10">{t('excerpt.getBook')}</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </a>
          
          <div className="mt-8">
            <p className="text-sm text-gray-500">
              {t('excerpt.available')}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Excerpt;