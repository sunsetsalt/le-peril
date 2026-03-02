import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Excerpt = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-14 md:pt-16">
      <div className="max-w-2xl mx-auto px-5 sm:px-8 py-16 md:py-24">

        {/* Chapter header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-red-900/25" />
            <span className="text-red-700/40 text-sm">◆</span>
            <span className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-red-900/25" />
          </div>

          <p className="text-[10px] tracking-[0.35em] uppercase text-stone-500 mb-4">
            {t('excerpt.title')}
          </p>

          <h1 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
            {t('excerpt.subtitle')}
          </h1>

          <div className="flex items-center justify-center gap-3 mt-5">
            <span className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-red-900/25" />
            <span className="text-red-700/40 text-sm">◆</span>
            <span className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-red-900/25" />
          </div>
        </motion.div>

        {/* Book text */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div
            className="rounded-lg border border-white/5 bg-black/25 backdrop-blur-sm px-7 py-8 md:px-10 md:py-10"
            style={{ boxShadow: 'inset 0 0 60px rgba(0,0,0,0.3)' }}
          >
            <div className="font-serif text-gray-200 leading-[1.9] text-justify space-y-5 text-lg md:text-xl">

              {/* Drop cap paragraph */}
              <p className="first-letter:text-[4.5rem] first-letter:leading-[0.8] first-letter:font-bold first-letter:text-red-500 first-letter:float-left first-letter:mr-2 first-letter:mt-1">
                {t('excerpt.content.p1')}
              </p>

              <p>{t('excerpt.content.p2')}</p>

              <p>{t('excerpt.content.p3')}</p>

              <p>{t('excerpt.content.p4')}</p>

              {/* Closing line — styled differently */}
              <p className="pt-2 text-stone-400 italic">
                {t('excerpt.content.p5')}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Continue prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="my-12 md:my-16 text-center"
        >
          <p className="font-serif text-xl md:text-2xl text-red-400/70 italic leading-relaxed">
            {t('excerpt.continue')}
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <motion.a
            href="https://forms.gle/3eMrUnTXJM1xEMJN7"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white px-12 py-4 rounded-lg font-semibold text-xl transition-all duration-300"
          >
            {t('excerpt.getBook')}
          </motion.a>
          <p className="text-xs text-stone-400 mt-4 tracking-wide">
            {t('excerpt.available')}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Excerpt;
