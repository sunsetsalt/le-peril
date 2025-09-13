import React from 'react';
import { Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

// Custom TikTok icon component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="relative bg-black/60 backdrop-blur-md border-t border-red-900/20">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          {/* Contact and Social Links - Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-8"
          >
            {/* Contact - First */}
            <div className="flex items-center space-x-2 justify-center sm:justify-start">
              <span className="text-sm text-gray-400">{t('footer.contact')}</span>
              <a
                href="mailto:manon.cqds@gmail.com"
                className="text-sm text-red-400 hover:text-red-300 transition-colors duration-300 font-medium"
              >
                manon.cqds@gmail.com
              </a>
            </div>
            
            {/* Separator */}
            <div className="hidden sm:block w-px h-4 bg-gray-600"></div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4 justify-center sm:justify-start">
              <a
                href="https://www.instagram.com/manon.coquard/"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-gray-400 hover:text-red-400 transition-all duration-300"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              
              <a
                href="https://www.tiktok.com/@manon.cqd"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-gray-400 hover:text-red-400 transition-all duration-300"
              >
                <TikTokIcon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </motion.div>
          
          {/* Legal mention - Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-xs text-gray-500 text-center md:text-right">
              {t('footer.cover')}
            </p>
            <p className="text-xs text-gray-500 text-center md:text-right">
              {t('footer.rights')}
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;