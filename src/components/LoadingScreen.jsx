import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ── Letter-by-letter stagger ── */
function SplitText({ text, delay = 0, color = '#EDE6D5' }) {
  return (
    <span style={{ display: 'inline-flex', gap: '0.04em' }}>
      {text.split('').map((ch, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + i * 0.055, ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
          style={{ display: 'inline-block', color, minWidth: ch === ' ' ? '0.4em' : undefined }}
        >
          {ch === ' ' ? '\u00A0' : ch}
        </motion.span>
      ))}
    </span>
  );
}

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Initialising...');
  const [visible, setVisible] = useState(true);

  const messages = [
    'Initialising...',
    'Loading modules...',
    'Compiling projects...',
    'Mapping skills...',
    'Almost ready...',
    'Launching...',
  ];

  useEffect(() => {
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
        }, 600);
      }
    }, 300);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.7 }}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            background: '#070D07',
            overflow: 'hidden',
          }}
        >

          {/* ── Radial ambient glows ── */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(91,143,74,0.08) 0%, transparent 70%)',
          }} />
          <motion.div
            animate={{ scale: [1, 1.12, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
            style={{
              position: 'absolute', width: '520px', height: '520px', borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(91,143,74,0.09) 0%, rgba(201,168,120,0.04) 55%, transparent 75%)',
              filter: 'blur(28px)', pointerEvents: 'none',
            }}
          />

          {/* ── Dot grid ── */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: 'radial-gradient(circle, rgba(91,143,74,0.055) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }} />

          {/* ══════════════════════════
              CENTER — Orbital rings
          ══════════════════════════ */}
          <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>

            {/* Ring assembly */}
            <motion.div
              initial={{ scale: 0.4, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.34, 1.4, 0.64, 1] }}
              style={{ position: 'relative', width: '220px', height: '220px', margin: '0 auto 36px' }}
            >

              {/* ── Ring 1 — sage green, flat spin ── */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'linear' }}
                style={{
                  position: 'absolute', inset: 0, borderRadius: '50%',
                  border: '2px solid transparent',
                  borderTopColor: '#5B8F4A',
                  borderRightColor: 'rgba(91,143,74,0.3)',
                  boxShadow: '0 0 14px rgba(91,143,74,0.45)',
                }}
              />

              {/* ── Ring 2 — amber, tilted 60deg, reverse spin ── */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
                style={{
                  position: 'absolute', inset: '16px', borderRadius: '50%',
                  border: '2px solid transparent',
                  borderTopColor: '#C9A878',
                  borderLeftColor: 'rgba(201,168,120,0.3)',
                  boxShadow: '0 0 14px rgba(201,168,120,0.40)',
                  transform: 'rotateX(65deg)',
                }}
              />

              {/* ── Ring 3 — bright green, tilted other axis, faster ── */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2.2, ease: 'linear' }}
                style={{
                  position: 'absolute', inset: '32px', borderRadius: '50%',
                  border: '1.5px solid transparent',
                  borderBottomColor: '#7AAD67',
                  borderRightColor: 'rgba(122,173,103,0.25)',
                  boxShadow: '0 0 10px rgba(122,173,103,0.5)',
                  transform: 'rotateY(60deg)',
                }}
              />

              {/* ── Outer slow pulsing ring ── */}
              <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.55, 0.25] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                style={{
                  position: 'absolute', inset: '-12px', borderRadius: '50%',
                  border: '1px solid rgba(91,143,74,0.3)',
                }}
              />
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.30, 0.12] }}
                transition={{ repeat: Infinity, duration: 3, delay: 0.5, ease: 'easeInOut' }}
                style={{
                  position: 'absolute', inset: '-26px', borderRadius: '50%',
                  border: '1px solid rgba(201,168,120,0.2)',
                }}
              />

              {/* ── Center glyph — initials ── */}
              <div style={{
                position: 'absolute', inset: '48px',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'radial-gradient(circle, rgba(91,143,74,0.15) 0%, rgba(9,14,9,0.95) 70%)',
                border: '1px solid rgba(91,143,74,0.2)',
              }}>
                <motion.span
                  animate={{ opacity: [0.7, 1, 0.7], textShadow: [
                    '0 0 15px rgba(91,143,74,0.5)',
                    '0 0 35px rgba(91,143,74,0.9), 0 0 60px rgba(201,168,120,0.3)',
                    '0 0 15px rgba(91,143,74,0.5)',
                  ]}}
                  transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '28px', fontWeight: 800,
                    letterSpacing: '0.04em',
                    background: 'linear-gradient(135deg, #F0E8D8 0%, #C9A878 45%, #7AAD67 100%)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  AL
                </motion.span>
              </div>

            </motion.div>

            {/* Name — letter by letter reveal */}
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '2.6rem', fontWeight: 800,
              letterSpacing: '0.12em', lineHeight: 1,
              marginBottom: '10px',
              background: 'linear-gradient(135deg, #F0E8D8 0%, #C9A878 45%, #7AAD67 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 30px rgba(91,143,74,0.45))',
            }}>
              <SplitText text="ARAVINTH L" delay={0.5} />
            </div>

            {/* Role */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '10px', letterSpacing: '0.35em',
                color: '#7AAD67', marginBottom: '40px',
              }}
            >
              WEB DEVELOPER &nbsp;·&nbsp; PORTFOLIO
            </motion.p>

            {/* Progress */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              style={{ width: '300px', margin: '0 auto' }}
            >
              {/* Status */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', alignItems: 'center' }}>
                <span style={{
                  fontFamily: 'Inter', fontSize: '10px', fontStyle: 'italic',
                  letterSpacing: '0.10em', color: '#6E8060',
                }}>
                  {statusText}
                </span>
                <span style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '10px', letterSpacing: '0.08em', color: '#5B8F4A',
                }}>
                  {progress}%
                </span>
              </div>

              {/* Bar */}
              <div style={{
                width: '100%', height: '2px', borderRadius: '2px',
                background: 'rgba(91,143,74,0.10)', overflow: 'hidden',
              }}>
                <motion.div
                  style={{
                    height: '100%', borderRadius: '2px',
                    background: 'linear-gradient(90deg, #3A7A2A, #5B8F4A, #C9A878)',
                    boxShadow: '0 0 10px rgba(91,143,74,0.8)',
                    width: `${progress}%`,
                    transition: 'width 0.3s ease',
                  }}
                />
              </div>
            </motion.div>

          </div>

          {/* Bottom accent */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(91,143,74,0.5), rgba(201,168,120,0.6), rgba(91,143,74,0.5), transparent)',
          }} />

          {/* Corner marks */}
          {[
            { top: '22px', left: '28px' }, { top: '22px', right: '28px' },
            { bottom: '22px', left: '28px' }, { bottom: '22px', right: '28px' },
          ].map((pos, i) => (
            <div key={i} style={{
              position: 'absolute', ...pos,
              fontSize: '10px', color: 'rgba(91,143,74,0.28)',
              fontFamily: "'Space Grotesk', sans-serif",
            }}>✦</div>
          ))}

        </motion.div>
      )}
    </AnimatePresence>
  );
}
