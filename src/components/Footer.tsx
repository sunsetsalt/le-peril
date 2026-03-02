import { Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative border-t border-white/5 bg-black/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8 md:py-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-5"
        >
          {/* Left — contact + social */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <span className="text-xs text-stone-600">{t('footer.contact')}</span>
              <a
                href="mailto:manon.cqds@gmail.com"
                className="text-xs text-red-500/70 hover:text-red-400 transition-colors duration-200"
              >
                manon.cqds@gmail.com
              </a>
            </div>

            <div className="hidden sm:block w-px h-3 bg-white/10" />

            <div className="flex items-center gap-4 justify-center sm:justify-start">
              <a
                href="https://www.instagram.com/manon.coquard/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-600 hover:text-stone-400 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@manon_coquard"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-600 hover:text-stone-400 transition-colors duration-200"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right — legal */}
          <div className="text-center md:text-right space-y-0.5">
            <p className="text-[11px] text-stone-700">{t('footer.cover')}</p>
            <p className="text-[11px] text-stone-700">{t('footer.rights')}</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
