import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Square, Menu, X, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [isPageChanging, setIsPageChanging] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { path: '/', label: t('nav.synopsis') },
    { path: '/quiz', label: t('nav.test') },
    { path: '/excerpt', label: t('nav.excerpt') },
  ];

  const handleNavClick = () => {
    setIsPageChanging(true);
    setTimeout(() => setIsPageChanging(false), 100);
  };
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-b border-red-900/30 shadow-lg shadow-red-900/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group transition-all duration-300 hover:scale-105">
            <div className="relative">
              <motion.div 
                className="w-5 h-5 border-2 border-red-800 transform rotate-45 relative group-hover:border-red-700 transition-colors duration-300">
                <div className="absolute inset-[1px] border-2 border-gray-600 group-hover:border-gray-500 transition-colors duration-300"></div>
              </motion.div>
              <motion.div
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 w-6 h-6 bg-red-600/30 group-hover:bg-red-500/40 transform rotate-45 blur-md transition-colors duration-300"
              />
            </div>
            <span className="text-xl font-serif font-semibold text-white tracking-wider group-hover:text-red-100 transition-colors duration-300">
              {t('home.title')}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <div
                key={item.path}
                className="relative"
              >
                <Link
                  to={item.path}
                  onClick={handleNavClick}
                  className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-red-400 relative z-10 ${
                    location.pathname === item.path 
                      ? 'text-red-500' 
                      : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </Link>
                {/* Active indicator */}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId={isPageChanging ? undefined : "activeTab"}
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-500 rounded-full"
                    initial={false}
                    transition={{ 
                      type: "spring", 
                      stiffness: 500, 
                      damping: 30,
                      delay: isPageChanging ? 0.1 : 0
                    }}
                  />
                )}
                {/* Hover background */}
                <motion.div
                  className="absolute inset-0 bg-red-600/10 rounded-lg -z-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            ))}
          </div>

          {/* Right Section - Language Toggle + CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Toggle */}
            <div className="flex items-center space-x-1">
              <Globe className="w-4 h-4 text-gray-400" />
              <button
                onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
                className="text-sm font-medium text-gray-300 hover:text-red-400 transition-colors duration-300 px-2 py-1 rounded hover:bg-red-600/10"
              >
                {language === 'en' ? 'EN' : 'FR'}
              </button>
            </div>
            
            {/* CTA Button */}
            <motion.a
              href="https://forms.gle/3eMrUnTXJM1xEMJN7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-red-800 to-red-900 hover:from-red-700 hover:to-red-800 text-white px-6 py-2 rounded-lg font-medium text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/30 relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">{t('nav.getBook')}</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 hover:text-red-400 transition-colors duration-300 hover:bg-red-600/10 rounded-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden overflow-hidden border-t border-red-900/20"
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isMenuOpen ? "auto" : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="py-4">
            <div className="flex flex-col space-y-4">
              {/* Mobile Language Toggle */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-between px-4 py-2"
              >
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-400">Language</span>
                </div>
                <button
                  onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
                  className="text-sm font-medium text-gray-300 hover:text-red-400 transition-colors duration-300 px-3 py-1 rounded hover:bg-red-600/10"
                >
                  {language === 'en' ? 'English' : 'Français'}
                </button>
              </motion.div>
              
              {navItems.map((item) => (
                <motion.div
                  key={item.path}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: navItems.indexOf(item) * 0.1 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleNavClick();
                    }}
                    className={`block text-sm font-medium tracking-wide transition-colors hover:text-red-400 py-2 px-4 rounded-lg hover:bg-red-600/10 ${
                      location.pathname === item.path 
                        ? 'text-red-500 bg-red-600/10' 
                        : 'text-gray-300'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href="https://forms.gle/3eMrUnTXJM1xEMJN7"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-lg font-medium text-sm text-center mt-4 hover:from-red-700 hover:to-red-800 transition-all duration-300"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('nav.getBook')}
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;