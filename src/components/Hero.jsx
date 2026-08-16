import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useGameState } from '../hooks/useGameState';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const { visitSection } = useGameState();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) visitSection('hero'); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [visitSection]);

  return (
    <section
      id="hero"
      ref={ref}
      style={{
        display: 'flex',
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        position: 'relative',
        paddingTop: '64px', /* offset for fixed navbar */
      }}
    >
      {/* Background glows */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 70% at 25% 50%, rgba(91,143,74,0.09) 0%, transparent 65%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 50% 55% at 80% 50%, rgba(201,168,120,0.05) 0%, transparent 65%)',
      }} />

      {/* ══════════════════════════
          LEFT — Image card, centered
      ══════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
        style={{
          width: '48%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          position: 'relative',
        }}
      >
        {/* Thin glowing divider on right edge */}
        <div style={{
          position: 'absolute', top: '10%', right: 0, width: '1px', height: '80%',
          background: 'linear-gradient(180deg, transparent, rgba(91,143,74,0.4), rgba(201,168,120,0.35), rgba(91,143,74,0.3), transparent)',
          animation: 'dividerGlow 3.5s ease-in-out infinite',
          pointerEvents: 'none',
        }} />

        {/* Card wrapper */}
        <div style={{ position: 'relative' }}>
          {/* Ambient glow behind card */}
          <div style={{
            position: 'absolute', inset: '-32px', borderRadius: '28px',
            filter: 'blur(40px)', opacity: 0.22,
            background: 'radial-gradient(circle, #5B8F4A 0%, #C9A878 55%, transparent 80%)',
            pointerEvents: 'none',
          }} />

          {/* White border card */}
          <div style={{
            position: 'relative', zIndex: 1,
            padding: '4px',
            borderRadius: '18px',
            background: 'white',
            boxShadow: '0 0 0 4px rgba(255,255,255,0.15), 0 0 30px rgba(255,255,255,0.12), 0 0 60px rgba(91,143,74,0.20)',
            animation: 'whiteBorderPulse 3s ease-in-out infinite',
          }}>
            <div style={{ borderRadius: '14px', overflow: 'hidden' }}>
              <img
                src="/aravinthl.jpeg"
                alt={personalInfo.name}
                style={{
                  width: '320px',
                  height: '420px',
                  objectFit: 'cover',
                  objectPosition: '50% 62%',
                  display: 'block',
                }}
              />
            </div>
          </div>

          {/* WEB DEVELOPER label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            style={{
              position: 'absolute', bottom: '-20px',
              left: '50%', transform: 'translateX(-50%)',
              fontSize: '10px', fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700, letterSpacing: '0.2em',
              whiteSpace: 'nowrap', color: '#fff',
              background: 'linear-gradient(135deg, #5B8F4A, #7AAD67)',
              padding: '7px 20px', borderRadius: '999px', zIndex: 2,
              boxShadow: '0 0 16px rgba(91,143,74,0.5)',
            }}
          >
            WEB DEVELOPER
          </motion.div>
        </div>
      </motion.div>

      {/* ══════════════════════════
          RIGHT — All content centered
      ══════════════════════════ */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',   /* vertically center everything */
          padding: '0 60px 0 44px',
          position: 'relative',
          gap: '0',
        }}
      >
        {/* Bg glow */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 80% 60% at 55% 50%, rgba(91,143,74,0.06) 0%, transparent 70%)',
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>

          {/* Chapter tag */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.38 }}>
            <div className="section-tag mb-5 inline-flex">
              📖 CHAPTER I — THE BEGINNING
            </div>
          </motion.div>

          {/* Sub-heading */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.48 }}>
            <p style={{ fontFamily: "'Space Grotesk'", fontSize: '11px', letterSpacing: '0.28em', color: '#A8B89A', marginBottom: '8px' }}>
              HARK! THE TALE OF
            </p>

            {/* Name */}
            <h1
              className="font-game"
              style={{
                fontSize: 'clamp(2.8rem, 5.2vw, 5rem)',
                lineHeight: 1,
                marginBottom: '20px',
                background: 'linear-gradient(135deg, #F0E8D8 0%, #C9A878 45%, #7AAD67 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 40px rgba(91,143,74,0.45))',
              }}
            >
              {personalInfo.name}
            </h1>
          </motion.div>

          {/* Role + subtitle */}
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.57 }}>
            <p style={{ fontFamily: "'Space Grotesk'", fontSize: '14px', letterSpacing: '0.18em', color: '#C9A878', marginBottom: '4px' }}>
              {personalInfo.role}
            </p>
            <p style={{ fontFamily: "'Space Grotesk'", fontSize: '11px', letterSpacing: '0.13em', color: '#6E8060', marginBottom: '18px' }}>
              {personalInfo.subtitle}
            </p>
            <div style={{ height: '1px', width: '52px', background: 'linear-gradient(90deg, #5B8F4A, transparent)', marginBottom: '16px' }} />
          </motion.div>

          {/* Description */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.64 }}>
            <p style={{
              fontFamily: 'Inter', fontSize: '15px', lineHeight: 1.75,
              color: '#A8B89A', fontStyle: 'italic',
              maxWidth: '420px', marginBottom: '32px',
            }}>
              {personalInfo.description}
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.72 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '28px' }}>
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary font-game rounded-lg"
                style={{ padding: '13px 28px', fontSize: '11px', letterSpacing: '0.08em', boxShadow: '0 0 24px rgba(91,143,74,0.42), 0 0 52px rgba(91,143,74,0.12)' }}
              >
                ✦ BEGIN THE TALE
              </button>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline font-game rounded-lg"
                style={{ padding: '13px 28px', fontSize: '11px', letterSpacing: '0.08em' }}
              >
                VIEW PROJECTS
              </button>
              <a
                href={personalInfo.resumePath}
                download="Aravinth_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-game rounded-lg transition-all duration-300"
                style={{ padding: '13px 28px', fontSize: '11px', letterSpacing: '0.08em', color: '#C9A878', border: '1px solid rgba(201,168,120,0.38)' }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(201,168,120,0.09)';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(201,168,120,0.24)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                📄 DOWNLOAD RESUME
              </a>
            </div>

            {/* Bottom accent line */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '52px', height: '1px', background: 'linear-gradient(90deg, rgba(91,143,74,0.5), transparent)' }} />
              <span style={{ fontFamily: "'Space Grotesk'", fontSize: '9px', letterSpacing: '0.2em', color: '#3A5030' }}>
                SCROLL TO CONTINUE ↓
              </span>
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
