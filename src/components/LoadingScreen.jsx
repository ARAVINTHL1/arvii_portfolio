import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Opening the tome...');
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const messages = [
      'Loading portfolio...',
      'Setting up the lights...',
      'Loading projects...',
      'Loading skills...',
      'Almost ready...',
      'Welcome!',
    ];
    let current = 0;
    const interval = setInterval(() => {
      current++;
      const pct = Math.min(current * 18, 100);
      setProgress(pct);
      setStatusText(messages[Math.min(current - 1, messages.length - 1)]);
      if (pct >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setVisible(false);
          setTimeout(onComplete, 700);
        }, 700);
      }
    }, 320);
    return () => clearInterval(interval);
  }, [onComplete]);

  const filledBlocks = Math.floor(progress / 5);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.7 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: 'linear-gradient(180deg, #050404 0%, #0D0B07 40%, #1A1208 100%)' }}
        >
          {/* Parchment texture grid */}
          <div className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'linear-gradient(rgba(201,168,76,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.4) 1px, transparent 1px)',
              backgroundSize: '80px 80px',
            }}
          />

          {/* Warm amber stars */}
          {Array.from({ length: 35 }).map((_, i) => (
            <div
              key={i}
              className="star-particle"
              style={{
                width: Math.random() * 2.5 + 0.5 + 'px',
                height: Math.random() * 2.5 + 0.5 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                background: ['#D4AF6A','#EDE0C8','#8EAFC2'][Math.floor(Math.random()*3)],
                '--duration': (Math.random() * 4 + 3) + 's',
                '--delay': (Math.random() * 3) + 's',
              }}
            />
          ))}

          {/* Fireflies */}
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={`ff-${i}`} className="firefly"
              style={{
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                '--ff-duration': (Math.random() * 5 + 4) + 's',
                '--ff-delay': (Math.random() * 4) + 's',
              }}
            />
          ))}

          <div className="relative z-10 text-center px-8 max-w-lg w-full">
            {/* Chapter badge */}
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="mb-2"
            >
              {/* Decorative rune */}
              <div className="text-3xl mb-4 rune-text" style={{ color: '#C9A84C' }}>✦ ⸸ ✦</div>
              <div className="text-xs font-game tracking-[0.3em] mb-3"
                style={{ color: '#7B5EA7' }}>
                [ THE HERO'S CODEX · MMXXVI ]
              </div>
              {/* Name */}
              <h1 className="font-game text-5xl md:text-7xl mb-1 leading-tight"
                style={{
                  color: '#EDE0C8',
                  textShadow: '0 0 20px rgba(201,168,76,0.4), 0 0 60px rgba(201,168,76,0.15)',
                }}>
                ARAVINTH L
              </h1>
              <p className="font-ui text-sm tracking-[0.3em] mb-10"
                style={{ color: '#C9A84C' }}>
                WEB DEVELOPER
              </p>
            </motion.div>

            {/* Loading scroll */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="mb-6"
            >
              <p className="font-lore text-xs italic tracking-[0.15em] mb-4 h-5"
                style={{ color: '#8EAFC2' }}>
                {statusText}
              </p>

              {/* Scroll bar container */}
              <div className="w-full h-3 rounded border overflow-hidden mb-2"
                style={{ background: '#1C1409', borderColor: '#3D2E1A' }}>
                <div
                  className="loading-bar-inner"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Progress runes */}
              <div className="flex items-center justify-between">
                <div className="font-game text-xs tracking-widest"
                  style={{ color: '#3D2E1A' }}>
                  {'▰'.repeat(filledBlocks)}{'▱'.repeat(20 - filledBlocks)}
                </div>
                <span className="font-game text-xs" style={{ color: '#C9A84C' }}>{progress}%</span>
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.45 }}
              transition={{ delay: 0.9 }}
              className="font-lore text-xs italic tracking-wider"
              style={{ color: '#8EAFC2' }}
            >
              "Building great things, one line at a time..."
            </motion.p>
          </div>

          {/* Bottom amber accent */}
          <div className="absolute bottom-0 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, #3D2E1A, #C9A84C, #E07B39, #C9A84C, #3D2E1A, transparent)' }}
          />
          {/* Corner runes */}
          <div className="absolute top-6 left-8 font-game text-xs opacity-20" style={{ color: '#C9A84C' }}>✦</div>
          <div className="absolute top-6 right-8 font-game text-xs opacity-20" style={{ color: '#C9A84C' }}>✦</div>
          <div className="absolute bottom-6 left-8 font-game text-xs opacity-20" style={{ color: '#C9A84C' }}>✦</div>
          <div className="absolute bottom-6 right-8 font-game text-xs opacity-20" style={{ color: '#C9A84C' }}>✦</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
