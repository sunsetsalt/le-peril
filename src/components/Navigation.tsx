import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Square, Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { path: '/', label: t('nav.synopsis') },
    { path: '/quiz', label: t('nav.test') },
    { path: '/excerpt', label: t('nav.excerpt') },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/75 backdrop-blur-md border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-14 md:h-16 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group transition-all duration-300 hover:scale-105" onClick={() => setIsMenuOpen(false)}>
            <div className="relative">
              <motion.div
                className="w-5 h-5 border-2 border-red-800 transform rotate-45 relative group-hover:border-red-700 transition-colors duration-300"
              >
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

          {/* Desktop center nav */}
          <div className="hidden md:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-sm tracking-wide transition-colors duration-200 py-1 ${
                  location.pathname === item.path
                    ? 'text-red-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-px left-0 right-0 h-px bg-red-600/70"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop right side */}
          <div className="hidden md:flex items-center gap-5">
            <button
              onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
              className="flex items-center gap-1.5 text-xs tracking-[0.18em] uppercase text-stone-400 hover:text-stone-200 transition-colors duration-200"
            >
              <Globe className="w-3.5 h-3.5" />
              {language === 'en' ? 'FR' : 'EN'}
            </button>

            <motion.a
              href="https://forms.gle/3eMrUnTXJM1xEMJN7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-red-800 to-red-900 hover:from-red-700 hover:to-red-800 text-white px-6 py-2 rounded-lg font-medium text-sm transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('nav.getBook')}
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-stone-400 hover:text-stone-200 p-1 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile dropdown menu — top only, not full screen */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-14 left-0 right-0 z-40 bg-black/95 backdrop-blur-lg border-b border-red-900/30 shadow-2xl shadow-black/60 md:hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {/* Nav links */}
              {navItems.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.05 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-3 text-xl font-serif transition-colors duration-200 border-b border-white/5 ${
                      location.pathname === item.path
                        ? 'text-red-400'
                        : 'text-gray-200 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              {/* Language toggle + CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.2 }}
                className="pt-3 pb-2 flex items-center justify-between gap-4"
              >
                <button
                  onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
                  className="flex items-center gap-2 text-sm text-stone-400 hover:text-stone-200 transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  {language === 'en' ? 'FR' : 'EN'}
                </button>

                <a
                  href="https://forms.gle/3eMrUnTXJM1xEMJN7"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white px-6 py-2.5 rounded-lg font-semibold text-base transition-all duration-300 whitespace-nowrap"
                >
                  {t('nav.getBook')}
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
