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
      className="relative min-h-screen lg:h-screen lg:overflow-hidden flex flex-col lg:flex-row w-full pt-20 lg:pt-16"
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 70% at 25% 50%, rgba(91,143,74,0.09) 0%, transparent 65%)',
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 50% 55% at 80% 50%, rgba(201,168,120,0.05) 0%, transparent 65%)',
      }} />

      {/* ══════════════════════════
          LEFT — Image card, centered
      ══════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
        className="w-full lg:w-[48%] flex items-center justify-center flex-shrink-0 relative py-8 lg:py-0 min-h-[400px] lg:min-h-0"
      >
        {/* Thin glowing divider on right edge */}
        <div 
          className="hidden lg:block absolute top-[10%] right-0 w-[1px] h-[80%]"
          style={{
            background: 'linear-gradient(180deg, transparent, rgba(91,143,74,0.4), rgba(201,168,120,0.35), rgba(91,143,74,0.3), transparent)',
            animation: 'dividerGlow 3.5s ease-in-out infinite',
            pointerEvents: 'none',
          }} 
        />

        {/* Card wrapper */}
        <div className="relative">
          {/* Ambient glow behind card */}
          <div style={{
            position: 'absolute', inset: '-32px', borderRadius: '28px',
            filter: 'blur(40px)', opacity: 0.22,
            background: 'radial-gradient(circle, #5B8F4A 0%, #C9A878 55%, transparent 80%)',
            pointerEvents: 'none',
          }} />

          {/* White border card */}
          <div 
            className="relative z-10 p-[3px] sm:p-1 rounded-[14px] sm:rounded-[18px] bg-white"
            style={{
              boxShadow: '0 0 0 4px rgba(255,255,255,0.15), 0 0 30px rgba(255,255,255,0.12), 0 0 60px rgba(91,143,74,0.20)',
              animation: 'whiteBorderPulse 3s ease-in-out infinite',
            }}
          >
            <div className="rounded-[10px] sm:rounded-[14px] overflow-hidden">
              <img
                src="/aravinthl.jpeg"
                alt={personalInfo.name}
                className="w-[240px] h-[310px] sm:w-[280px] sm:h-[370px] lg:w-[320px] lg:h-[420px] object-cover"
                style={{
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
            className="absolute bottom-[-18px] sm:bottom-[-20px] left-1/2 -translate-x-1/2 text-[9px] sm:text-[10px] font-bold tracking-[0.2em] whitespace-nowrap text-white px-4 py-1.5 sm:px-5 sm:py-2 rounded-full z-10"
            style={{
              background: 'linear-gradient(135deg, #5B8F4A, #7AAD67)',
              fontFamily: "'Space Grotesk', sans-serif",
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
        className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:pl-10 lg:pr-16 py-8 lg:py-0 relative overflow-hidden"
      >
        {/* Bg glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 80% 60% at 55% 50%, rgba(91,143,74,0.06) 0%, transparent 70%)',
        }} />

        <div className="relative z-10">

          {/* Chapter tag */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.38 }}>
            <div className="section-tag mb-4 sm:mb-5 inline-flex">
              📖 CHAPTER I — THE BEGINNING
            </div>
          </motion.div>

          {/* Sub-heading */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.48 }}>
            <p className="text-[10px] sm:text-[11px] tracking-[0.28em] text-[#A8B89A] mb-2" style={{ fontFamily: "'Space Grotesk'" }}>
              HARK! THE TALE OF
            </p>

            {/* Name */}
            <h1
              className="font-game mb-4 sm:mb-5 leading-none"
              style={{
                fontSize: 'clamp(2.2rem, 5.2vw, 5rem)',
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
            <p className="text-xs sm:text-[14px] tracking-[0.18em] text-[#C9A878] mb-1" style={{ fontFamily: "'Space Grotesk'" }}>
              {personalInfo.role}
            </p>
            <p className="text-[10px] sm:text-[11px] tracking-[0.13em] text-[#6E8060] mb-4" style={{ fontFamily: "'Space Grotesk'" }}>
              {personalInfo.subtitle}
            </p>
            <div className="h-[1px] w-[52px] mb-4" style={{ background: 'linear-gradient(90deg, #5B8F4A, transparent)' }} />
          </motion.div>

          {/* Description */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.64 }}>
            <p 
              className="text-sm sm:text-base leading-relaxed text-[#A8B89A] italic max-w-lg mb-6 sm:mb-8"
              style={{ fontFamily: 'Inter' }}
            >
              {personalInfo.description}
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.72 }}>
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-7">
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary font-game rounded-lg px-6 py-3 sm:px-7 sm:py-3.5 text-[10px] sm:text-[11px] tracking-wider"
                style={{ boxShadow: '0 0 24px rgba(91,143,74,0.42), 0 0 52px rgba(91,143,74,0.12)' }}
              >
                ✦ BEGIN THE TALE
              </button>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline font-game rounded-lg px-6 py-3 sm:px-7 sm:py-3.5 text-[10px] sm:text-[11px] tracking-wider"
              >
                VIEW PROJECTS
              </button>
              <a
                href={personalInfo.resumePath}
                download="Aravinth_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-game rounded-lg transition-all duration-300 px-6 py-3 sm:px-7 sm:py-3.5 text-[10px] sm:text-[11px] tracking-wider border border-[rgba(201,168,120,0.38)] text-[#C9A878]"
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
            <div className="flex items-center gap-3">
              <div className="w-[52px] h-[1px]" style={{ background: 'linear-gradient(90deg, rgba(91,143,74,0.5), transparent)' }} />
              <span className="text-[8px] sm:text-[9px] tracking-[0.2em] text-[#3A5030]" style={{ fontFamily: "'Space Grotesk'" }}>
                SCROLL TO CONTINUE ↓
              </span>
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
