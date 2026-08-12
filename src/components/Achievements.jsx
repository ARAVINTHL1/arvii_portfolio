import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameState } from '../hooks/useGameState';

export default function Achievements() {
  const { achievementQueue, dismissAchievement } = useGameState();
  const current = achievementQueue[0];

  useEffect(() => {
    if (!current) return;
    const t = setTimeout(dismissAchievement, 4000);
    return () => clearTimeout(t);
  }, [current, dismissAchievement]);

  return (
    <AnimatePresence>
      {current && (
        <motion.div
          key={current.id}
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 200, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 120 }}
          className="achievement-toast"
          onClick={dismissAchievement}
          role="alert"
          aria-live="polite"
        >
          <div className="relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(28,20,9,0.98), rgba(34,24,16,0.96))',
              border: '1px solid rgba(201,168,76,0.5)',
              borderRadius: '12px',
              padding: '16px 20px',
              minWidth: '260px',
              boxShadow: '0 0 30px rgba(201,168,76,0.2), 0 8px 32px rgba(0,0,0,0.6)',
            }}>
            {/* Top shimmer */}
            <div className="absolute top-0 left-0 right-0 h-0.5"
              style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }} />

            <div className="flex items-center gap-3">
              <div className="text-3xl flex-shrink-0">{current.emoji}</div>
              <div className="flex-1">
                <div className="font-game text-[9px] tracking-[0.3em] mb-0.5" style={{ color: '#C9A84C' }}>
                  ✦ LORE UNLOCKED
                </div>
                <div className="font-game text-sm tracking-wider" style={{ color: '#EDE0C8' }}>{current.title}</div>
                <div className="font-lore italic text-xs mt-0.5" style={{ color: '#7A6848' }}>{current.description}</div>
                <div className="font-game text-[9px] mt-1" style={{ color: '#C9A84C' }}>+{current.points} LORE</div>
              </div>
            </div>

            {/* Bottom progress bar (auto-dismiss) */}
            <motion.div
              initial={{ width: '100%' }}
              animate={{ width: '0%' }}
              transition={{ duration: 4, ease: 'linear' }}
              className="absolute bottom-0 left-0 h-0.5 rounded-b-xl"
              style={{ background: 'linear-gradient(90deg, #7B5EA7, #C9A84C)' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
