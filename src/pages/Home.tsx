import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import coverImgFR from '../assets/bookcover-fr.png';
import coverImgEN from '../assets/bookcover-en.png';
import { ChevronDown, Droplets, Leaf, Zap, Scale, Building, Flame } from 'lucide-react';

const Home = () => {
  const { scrollYProgress } = useScroll();
  const [visibleParagraphs, setVisibleParagraphs] = useState(0);
  const { t, language } = useLanguage();

  const coverY = useTransform(scrollYProgress, [0, 0.5], ['0%', '8%']);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) {
        setVisibleParagraphs(3);
        return;
      }
      const s = window.scrollY;
      const h = window.innerHeight;
      if (s > h * 0.35) setVisibleParagraphs(1);
      if (s > h * 0.55) setVisibleParagraphs(2);
      if (s > h * 0.75) setVisibleParagraphs(3);
    };

    if (window.innerWidth < 768) setVisibleParagraphs(3);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const paragraphs = [t('synopsis.p1'), t('synopsis.p2'), t('synopsis.p3')];

  const scrollToSynopsis = () =>
    document.getElementById('synopsis')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="relative">

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center" id="hero">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 pt-14 md:pt-16">

          {/* ── Desktop two-column layout ── */}
          <div className="hidden md:grid grid-cols-[55fr_45fr] gap-10 lg:gap-16 items-center min-h-[calc(100vh-4rem)] py-16">

            {/* Left — text */}
            <div className="space-y-7">

              {/* Release tag */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-xs tracking-[0.3em] uppercase text-red-600/60 font-medium"
              >
                {t('home.subtitle')}
              </motion.p>

              {/* Main title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.25 }}
              >
                <h1 className="font-serif font-bold text-white leading-none tracking-wider animate-breathe-title"
                  style={{ fontSize: 'clamp(4.5rem, 9vw, 8rem)' }}>
                  {t('home.title')}
                </h1>
                <p className="font-serif italic text-stone-400 mt-2 text-xl lg:text-2xl">
                  {t('home.firstsubtitle')}
                </p>
              </motion.div>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
                className="origin-left h-px w-14 bg-gradient-to-r from-red-800/60 to-transparent"
              />

              {/* Quote */}
              <motion.blockquote
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.75 }}
              >
                <p className="font-serif text-xl lg:text-2xl text-stone-300 leading-relaxed">
                  {t('home.quote')}{' '}
                  <motion.em
                    className="text-red-400 not-italic font-semibold"
                    animate={{ color: ['#f87171', '#dc2626', '#f87171'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    {t('home.greaterGood')}
                  </motion.em>
                  {' '}?
                </p>
              </motion.blockquote>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex items-center gap-4 flex-wrap"
              >
                <motion.button
                  onClick={scrollToSynopsis}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative overflow-hidden bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>{t('home.enterWorld')}</span>
                    <ChevronDown className="w-4 h-4 group-hover:animate-bounce" />
                  </span>
                </motion.button>
                <motion.a
                  href="https://forms.gle/3eMrUnTXJM1xEMJN7"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="group relative text-gray-300 hover:text-white px-6 py-3 font-semibold text-lg transition-all duration-300 border border-gray-600 hover:border-red-600 rounded-lg"
                >
                  <span className="relative z-10">{t('nav.getBook')}</span>
                </motion.a>
              </motion.div>

              {/* Tropes */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.3 }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3 pt-1"
              >
                {[
                  { icon: Droplets, label: t('tropes.dystopian'), color: 'text-red-500', delay: '0s' },
                  { icon: Leaf, label: t('tropes.foundFamily'), color: 'text-orange-500', delay: '0.5s' },
                  { icon: Zap, label: t('tropes.selfDiscovery'), color: 'text-red-500', delay: '1s' },
                  { icon: Scale, label: t('tropes.ethicalDilemmas'), color: 'text-orange-500', delay: '1.5s' },
                  { icon: Building, label: t('tropes.politicalStakes'), color: 'text-red-500', delay: '2s' },
                  { icon: Flame, label: t('tropes.slowBurn'), color: 'text-orange-500', delay: '2.5s' },
                ].map(({ icon: Icon, label, color, delay }) => (
                  <span key={label} className="flex items-center gap-2 text-gray-300 text-base">
                    <Icon className={`w-6 h-6 ${color} animate-pulse flex-shrink-0`} style={{ animationDelay: delay }} />
                    {label}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right — book cover */}
            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.92 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.5 }}
              className="flex justify-end"
            >
              <motion.div
                style={{ y: coverY }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                {/* Outer glow */}
                <motion.div
                  className="absolute -inset-6 bg-red-950/20 rounded-2xl blur-2xl"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
                {/* Cover image */}
                <img
                  src={language === 'fr' ? coverImgFR : coverImgEN}
                  alt={language === 'fr' ? 'Couverture du livre Le Péril' : 'Le Péril book cover'}
                  className="relative z-10 w-56 lg:w-64 xl:w-72 object-cover rounded-lg shadow-2xl shadow-black/80"
                  style={{ aspectRatio: '2/3' }}
                />
                {/* Bottom shadow cast */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-red-950/30 rounded-full blur-xl" />
                {/* Subtle ember overlay */}
                <motion.div
                  className="absolute inset-0 z-20 rounded-lg bg-gradient-to-t from-red-950/25 via-transparent to-transparent"
                  animate={{ opacity: [0, 0.4, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* ── Mobile single-column layout ── */}
          <div className="md:hidden flex flex-col items-center text-center space-y-7 pt-6 pb-10">

            {/* Title first */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
            >
              <p className="text-[10px] tracking-[0.3em] uppercase text-red-600/60 font-medium mb-3">
                {t('home.subtitle')}
              </p>
              <h1
                className="font-serif font-bold text-white leading-none tracking-wider animate-breathe-title"
                style={{ fontSize: 'clamp(3.5rem, 18vw, 5.5rem)' }}
              >
                {t('home.title')}
              </h1>
              <p className="font-serif italic text-stone-400 mt-1.5 text-lg">
                {t('home.firstsubtitle')}
              </p>
            </motion.div>

            {/* Book cover */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="relative"
            >
              <motion.div
                className="absolute -inset-4 bg-red-950/20 rounded-2xl blur-xl"
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.img
                src={language === 'fr' ? coverImgFR : coverImgEN}
                alt={language === 'fr' ? 'Couverture du livre Le Péril' : 'Le Péril book cover'}
                className="relative z-10 w-40 object-cover rounded-lg shadow-xl shadow-black/80"
                style={{ aspectRatio: '2/3' }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>

            {/* Quote */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="font-serif text-lg text-stone-300 leading-relaxed px-4 max-w-xs"
            >
              {t('home.quote')}{' '}
              <em className="text-red-400 not-italic font-semibold">{t('home.greaterGood')}</em>{' '}?
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="flex flex-col gap-3 w-full max-w-xs"
            >
              <button
                onClick={scrollToSynopsis}
                className="bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
              >
                {t('home.enterWorld')}
              </button>
              <a
                href="https://forms.gle/3eMrUnTXJM1xEMJN7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white font-semibold px-6 py-3 border border-gray-600 hover:border-red-600 rounded-lg transition-all duration-300"
              >
                {t('nav.getBook')}
              </a>
            </motion.div>

            {/* Tropes */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-wrap justify-center gap-x-5 gap-y-3"
            >
              {[
                { icon: Droplets, label: t('tropes.dystopian'), color: 'text-red-500', delay: '0s' },
                { icon: Leaf, label: t('tropes.foundFamily'), color: 'text-orange-500', delay: '0.5s' },
                { icon: Zap, label: t('tropes.selfDiscovery'), color: 'text-red-500', delay: '1s' },
                { icon: Scale, label: t('tropes.ethicalDilemmas'), color: 'text-orange-500', delay: '1.5s' },
                { icon: Building, label: t('tropes.politicalStakes'), color: 'text-red-500', delay: '2s' },
                { icon: Flame, label: t('tropes.slowBurn'), color: 'text-orange-500', delay: '2.5s' },
              ].map(({ icon: Icon, label, color, delay }) => (
                <span key={label} className="flex items-center gap-2 text-gray-300 text-sm">
                  <Icon className={`w-5 h-5 ${color}`} style={{ animationDelay: delay }} />
                  {label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.button
            onClick={scrollToSynopsis}
            className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 text-red-700/60 hover:text-red-600/80 transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            aria-label="Scroll down"
          >
            <ChevronDown size={22} />
          </motion.button>
        </div>
      </section>

      {/* ─── SYNOPSIS ─────────────────────────────────────────── */}
      <section id="synopsis" className="relative py-20 md:py-28 lg:py-36">
        <div className="relative z-10 max-w-2xl lg:max-w-3xl mx-auto px-5 sm:px-8">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-transparent to-red-900/30" />
              <span className="text-red-700/50 text-sm">◆</span>
              <span className="h-px flex-1 max-w-[60px] bg-gradient-to-l from-transparent to-red-900/30" />
            </div>
            <h2 className="font-serif font-bold text-white text-3xl md:text-4xl tracking-wide">
              {t('home.synopsis')}
            </h2>
          </motion.div>

          {/* Paragraphs */}
          <div className="space-y-5 md:space-y-7">
            {paragraphs.map((paragraph, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: visibleParagraphs > index ? 1 : 0,
                  y: visibleParagraphs > index ? 0 : 30,
                }}
                transition={{ duration: 0.75, delay: 0.1, ease: 'easeOut' }}
              >
                <p className="font-serif text-lg md:text-xl leading-relaxed text-gray-200 pl-5 border-l border-red-900/30">
                  {paragraph}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FACTION PREVIEW ──────────────────────────────────── */}
      <section className="relative py-16 md:py-24">
        {/* Subtle horizontal ember line above section */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-900/20 to-transparent" />

        <div className="max-w-5xl mx-auto px-5 sm:px-8">

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10 md:mb-14"
          >
            <h2 className="font-serif text-2xl md:text-3xl text-gray-100 tracking-wide">
              {t('home.factions.sectionTitle')}
            </h2>
          </motion.div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">

            {/* Loyal card */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="faction-loyal border rounded-lg p-6 md:p-8"
            >
              <h3 className="font-serif text-xl font-semibold text-slate-100 mb-1">
                {t('home.factions.loyal.name')}
              </h3>
              <p className="text-[10px] tracking-[0.22em] uppercase text-slate-500 mb-4">
                {t('home.factions.loyal.tag')}
              </p>
              <p className="font-serif text-sm md:text-base text-gray-300 italic leading-relaxed">
                {t('home.factions.loyal.desc')}
              </p>
            </motion.div>

            {/* Diamond divider — mobile only */}
            <div className="flex items-center justify-center md:hidden">
              <span className="text-red-800/50 text-xl">◆</span>
            </div>

            {/* Dissident card */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="faction-dissident border rounded-lg p-6 md:p-8"
            >
              <h3 className="font-serif text-xl font-semibold text-red-400 mb-1">
                {t('home.factions.dissident.name')}
              </h3>
              <p className="text-[10px] tracking-[0.22em] uppercase text-red-700/50 mb-4">
                {t('home.factions.dissident.tag')}
              </p>
              <p className="font-serif text-sm md:text-base text-gray-300 italic leading-relaxed">
                {t('home.factions.dissident.desc')}
              </p>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-center mt-10 md:mt-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/quiz"
                className="inline-flex items-center gap-2.5 bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white px-10 py-3.5 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                {t('home.factions.cta')}
                <span className="text-red-200 text-base">→</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Subtle horizontal ember line below section */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-900/20 to-transparent" />
      </section>

    </div>
  );
};

export default Home;
