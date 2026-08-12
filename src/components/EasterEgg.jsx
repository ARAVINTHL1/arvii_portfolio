import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameState } from '../hooks/useGameState';
import { useKonamiCode } from '../hooks/useKonamiCode';

export default function EasterEgg() {
  useKonamiCode();
  const { devMode } = useGameState();

  return (
    <AnimatePresence>
      {devMode && (
        <>
          {/* Scanline overlay */}
          <div className="scanline-effect" aria-hidden="true" />

          {/* Dev mode banner */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-[9998] text-center pointer-events-none"
          >
            <div className="px-8 py-4 rounded-xl"
              style={{
                background: 'linear-gradient(135deg, rgba(28,20,9,0.98), rgba(34,24,16,0.96))',
                border: '2px solid #C9A84C',
                boxShadow: '0 0 40px rgba(201,168,76,0.5), 0 0 80px rgba(123,94,167,0.3)',
              }}>
              <div className="font-game text-3xl mb-1" style={{ color: '#EDE0C8' }}>
                ✦ SECRET FOUND!
              </div>
              <div className="font-lore italic text-xs tracking-[0.3em]" style={{ color: '#C9A84C' }}>
                ↑↑↓↓←→←→ — You discovered a hidden secret!
              </div>
            </div>
          </motion.div>

          {/* Neon flash particles */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 1, scale: 0 }}
              animate={{ opacity: 0, scale: 3, x: (Math.random() - 0.5) * 400, y: (Math.random() - 0.5) * 400 }}
              transition={{ duration: 1, delay: i * 0.05 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full pointer-events-none z-[9997]"
              style={{ background: ['#7B5EA7','#C9A84C','#E07B39','#D4AF6A'][i % 4] }}
            />
          ))}
        </>
      )}
    </AnimatePresence>
  );
}
