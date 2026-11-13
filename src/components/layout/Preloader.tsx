import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SITE_CONFIG } from '../../data/site';

export function Preloader() {
  const [visible, setVisible] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return false;
    const seen = sessionStorage.getItem('eet_preloader_seen');
    return !seen;
  });

  useEffect(() => {
    if (!visible) return;

    sessionStorage.setItem('eet_preloader_seen', '1');

    const hideTimer = window.setTimeout(() => {
      setVisible(false);
    }, 950);

    // Hard failsafe so preloader can never block the page
    const failsafeTimer = window.setTimeout(() => {
      setVisible(false);
    }, 1400);

    return () => {
      window.clearTimeout(hideTimer);
      window.clearTimeout(failsafeTimer);
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed inset-0 z-50 bg-[#080A09] flex flex-col items-center justify-center pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="absolute inset-0 opacity-35"
            style={{
              background:
                'radial-gradient(circle at 50% 48%, rgba(47, 179, 15, 0.25), transparent 55%)',
            }}
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-center"
          >
            <img
              src={SITE_CONFIG.logoPath}
              alt=""
              className="w-28 h-28 sm:w-32 sm:h-32 object-contain drop-shadow-[0_0_24px_rgba(124,255,58,0.28)]"
            />
            <div className="mt-4 h-[2px] w-28 overflow-hidden rounded-full bg-[#1C211E]">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="h-full w-full metallic-green-gradient"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
