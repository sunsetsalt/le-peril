import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import TropesList from '../components/TropesList';
import coverImg from '../assets/cover-1.png';
import { ChevronDown, Flame, Eye, Shield, Zap, Square, Droplets, Leaf, Scale, Building } from 'lucide-react';

const Home = () => {
  const { scrollYProgress } = useScroll();
  const [visibleParagraphs, setVisibleParagraphs] = useState(0);
  const { t } = useLanguage();

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    const handleScroll = () => {
      // Only apply scroll animations on desktop (md and up)
      if (window.innerWidth < 768) {
        setVisibleParagraphs(3); // Show all paragraphs immediately on mobile
        return;
      }
      
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show paragraphs based on scroll position - delayed for better visibility
      if (scrollPosition > windowHeight * 0.4) setVisibleParagraphs(1);
      if (scrollPosition > windowHeight * 0.6) setVisibleParagraphs(2);
      if (scrollPosition > windowHeight * 0.8) setVisibleParagraphs(3);
    };

    // Set initial state based on screen size
    if (window.innerWidth < 768) {
      setVisibleParagraphs(3); // Show all paragraphs immediately on mobile
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // Handle screen size changes
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const paragraphs = [
    t('synopsis.p1'),
    t('synopsis.p2'),
    t('synopsis.p3')
  ];

  return (
    <div className="relative">
      
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden" id="hero">
        <motion.div 
          className="absolute inset-0 bg-transparent"
          style={{ y: backgroundY }}
        />
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 min-h-screen flex items-center">
          {/* Desktop Layout - Two Column */}
          <div className="hidden md:grid w-full grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Text Content */}
            <div className="space-y-8 text-left lg:text-left">
              {/* Title with Dramatic Effect */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="relative"
              >
                <motion.h1
                  className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight relative z-10"
                  animate={{ 
                    textShadow: window.innerWidth >= 768 ? [
                      "0 0 20px rgba(239, 68, 68, 0.3)",
                      "0 0 40px rgba(239, 68, 68, 0.5)",
                      "0 0 20px rgba(239, 68, 68, 0.3)"
                    ] : "0 0 20px rgba(239, 68, 68, 0.3)"
                  }}
                  transition={{ duration: window.innerWidth >= 768 ? 3 : 0, repeat: window.innerWidth >= 768 ? Infinity : 0, ease: "easeInOut" }}
                >
                  {t('home.title')}
                </motion.h1>
                
                {/* Glowing backdrop */}
                <motion.div
                  className="absolute inset-0 text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-red-600/20 blur-sm"
                  animate={{ 
                    scale: [1, 1.02, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  {t('home.title')}
                </motion.div>
              </motion.div>

              {/* First Subtitle */}
              <motion.div
                className="!mt-2"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <p className="text-xl md:text-2xl text-gray-200 font-light italic tracking-wide">
                  {t('home.firstsubtitle')}
                </p>
              </motion.div>

              {/* Subtitle */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <p className="text-lg md:text-xl text-gray-300 font-light tracking-wide">
                  {t('home.subtitle')}
                </p>
              </motion.div>

              {/* Quote */}
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="text-xl md:text-2xl lg:text-3xl font-serif text-red-400 italic leading-relaxed"
              >
                {t('home.quote')}{' '}
                <motion.span 
                  className="text-red-500 font-semibold relative"
                  animate={{ 
                    color: ["#ef4444", "#dc2626", "#ef4444"]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {t('home.greaterGood')}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-red-500"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 1.5 }}
                  />
                </motion.span>
                ?
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="space-y-4"
              >
                <div className="hidden md:flex flex-col sm:flex-row gap-4">
                  <motion.button
                    onClick={() => {
                      document.getElementById('synopsis')?.scrollIntoView({ 
                        behavior: 'smooth' 
                      });
                    }}
                    className="group relative overflow-hidden bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/50"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 flex items-center space-x-2">
                      <span>{t('home.enterWorld')}</span>
                      <ChevronDown className="w-4 h-4 group-hover:animate-bounce" />
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                  
                  <motion.a
                    href="https://forms.gle/3eMrUnTXJM1xEMJN7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative text-gray-400 hover:text-white px-6 py-3 font-semibold text-lg transition-all duration-300 border border-gray-600 hover:border-red-600 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="relative z-10">{t('nav.getBook')}</span>
                    <motion.div
                      className="absolute inset-0 bg-red-600/10 rounded-lg"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                </div>
                
                {/* Mobile-only Get the Book button */}
                <div className="md:hidden">
                  <motion.a
                    href="https://forms.gle/3eMrUnTXJM1xEMJN7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative text-gray-400 hover:text-white px-6 py-3 font-semibold text-lg transition-all duration-300 border border-gray-600 hover:border-red-600 rounded-lg block text-center"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="relative z-10">{t('nav.getBook')}</span>
                    <motion.div
                      className="absolute inset-0 bg-red-600/10 rounded-lg"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                </div>
                
                {/* Teaser Stats */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.8 }}
                  className="grid grid-cols-3 gap-4 text-sm text-gray-500 pt-4 max-w-2xl"
                >
                  <div className="flex items-center space-x-2 justify-start">
                    <Droplets className="w-6 h-6 text-red-500 animate-pulse" />
                    <span className="text-gray-300 text-base">{t('tropes.dystopian')}</span>
                  </div>
                  <div className="flex items-center space-x-2 justify-start">
                    <Leaf className="w-6 h-6 text-orange-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
                    <span className="text-gray-300 text-base">{t('tropes.foundFamily')}</span>
                  </div>
                  <div className="flex items-center space-x-2 justify-start">
                    <Zap className="w-6 h-6 text-red-500 animate-pulse" style={{ animationDelay: '1s' }} />
                    <span className="text-gray-300 text-base">{t('tropes.selfDiscovery')}</span>
                  </div>
                  <div className="flex items-center space-x-2 justify-start">
                    <Scale className="w-6 h-6 text-orange-500 animate-pulse" style={{ animationDelay: '1.5s' }} />
                    <span className="text-gray-300 text-base">{t('tropes.ethicalDilemmas')}</span>
                  </div>
                  <div className="flex items-center space-x-2 justify-start">
                    <Building className="w-6 h-6 text-red-500 animate-pulse" style={{ animationDelay: '2s' }} />
                    <span className="text-gray-300 text-base">{t('tropes.politicalStakes')}</span>
                  </div>
                  <div className="flex items-center space-x-2 justify-start">
                    <Flame className="w-6 h-6 text-orange-500 animate-pulse" style={{ animationDelay: '2.5s' }} />
                    <span className="text-gray-300 text-base">{t('tropes.slowBurn')}</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Column - Book Cover */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.8 }}
              className="flex justify-center lg:justify-end"
            >
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotateY: [0, 2, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative group cursor-pointer"
                whileHover={{ scale: 1.05, rotateY: 5 }}
              >
                <img
                  src={coverImg}
                  alt="Le Péril book cover"
                  className="w-64 h-96 lg:w-72 lg:h-[432px] object-cover rounded-lg shadow-2xl border border-red-900/30 transition-all duration-500"
                />
                
                {/* Multiple Glow Layers */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-red-600/30 via-transparent to-transparent rounded-lg"
                  animate={{ 
                    opacity: [0, 0.5, 0] 
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                />
                
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-transparent to-red-600/20 rounded-lg"
                  animate={{ 
                    opacity: [0.2, 0.4, 0.2] 
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
                
                {/* Enhanced Shadow */}
                <motion.div
                  className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-56 h-12 bg-red-900/40 rounded-full blur-2xl"
                  animate={{ 
                    scaleX: [1, 1.1, 1],
                    opacity: [0.4, 0.6, 0.4]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile Layout - Single Column Optimized */}
          <div className="md:hidden w-full flex flex-col items-center text-center space-y-8">
            
            {/* Mobile spacing from top - reduced */}
            <div className="pt-2"></div>
            
            {/* Book Cover - Mobile First */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex justify-center mb-2"
            >
              <motion.div
                animate={{ 
                  y: [0, -12, 0]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="relative group"
              >
                <img
                  src={coverImg}
                  alt="Le Péril book cover"
                  className="w-40 h-60 object-cover rounded-lg shadow-xl border border-red-900/30"
                />
                
                {/* Simplified glow for mobile */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-red-600/20 via-transparent to-transparent rounded-lg"
                  animate={{ 
                    opacity: [0, 0.3, 0] 
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                />
                
                {/* Mobile shadow */}
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-red-900/30 rounded-full blur-xl"></div>
              </motion.div>
            </motion.div>

            {/* Title - Mobile Optimized */}
            {/* Mobile Tropes - Replacing Title */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="grid grid-cols-2 gap-3 text-sm text-white max-w-xs mx-auto"
            >
              <div className="flex items-center space-x-2 justify-center">
                <Droplets className="w-5 h-5 text-red-500" />
                <span>{t('tropes.dystopian')}</span>
              </div>
              <div className="flex items-center space-x-2 justify-center">
                <Leaf className="w-5 h-5 text-orange-500" />
                <span>{t('tropes.foundFamily')}</span>
              </div>
              <div className="flex items-center space-x-2 justify-center">
                <Zap className="w-5 h-5 text-orange-500" />
                <span>{t('tropes.selfDiscovery')}</span>
              </div>
              <div className="flex items-center space-x-2 justify-center">
                <Scale className="w-5 h-5 text-red-500" />
                <span>{t('tropes.ethicalDilemmasMobile')}</span>
              </div>
            </motion.div>

            {/* Quote - Mobile Optimized */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl font-serif text-red-400 italic leading-relaxed px-4 max-w-xs"
            >
              {t('home.quote')}{' '}
              <span className="text-red-500 font-semibold">
                {t('home.greaterGood')}
              </span>
              ?
            </motion.p>

            {/* Mobile CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="pt-2"
            >
              <div className="flex flex-col gap-3">
                <motion.button
                  onClick={() => {
                    document.getElementById('synopsis')?.scrollIntoView({ 
                      behavior: 'smooth' 
                    });
                  }}
                  className="bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white px-6 py-2.5 rounded-lg font-semibold text-base transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('home.enterWorld')}
                </motion.button>
                
                <motion.a
                  href="https://forms.gle/3eMrUnTXJM1xEMJN7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white px-6 py-2.5 font-semibold text-base transition-all duration-300 border border-gray-600 hover:border-red-600 rounded-lg text-center"
                  whileHover={{ scale: 1.02 }}
                >
                  {t('nav.getBook')}
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator arrow */}
        <motion.button
          onClick={() => {
            document.getElementById('synopsis')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 p-0 bg-transparent"
          initial={{ opacity: 0.5, y: 20 }}
          animate={{ opacity: 1, y: [-10, 14, -10] }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          aria-label="Scroll down"
        >
          <ChevronDown className="w-8 h-8 text-red-500" />
        </motion.button>
      </section>

      {/* Synopsis Section */}
      <section className="relative py-8 md:py-20" id="synopsis">
        
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 md:mb-16 text-center">
            {t('home.synopsis')}
          </h2>

          <div className="space-y-4 md:space-y-8">
            {paragraphs.map((paragraph, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ 
                  opacity: visibleParagraphs > index ? 1 : 0,
                  y: visibleParagraphs > index ? 0 : 50 
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.2,
                  ease: "easeOut"
                }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 to-transparent rounded-lg blur-sm"></div>
                <p className="relative text-lg md:text-lg lg:text-xl font-serif leading-relaxed text-gray-200 p-4 md:p-6 rounded-lg bg-black/30 backdrop-blur-sm border border-red-900/20">
                  {paragraph}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative pt-4 pb-12 md:pb-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Link
            to="/quiz"
            className="inline-block bg-gradient-to-r from-orange-800 to-red-700 hover:from-orange-700 hover:to-red-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/25"
          >
            {t('home.discoverAllegiance')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;