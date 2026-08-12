import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameState } from '../hooks/useGameState';
import { personalInfo } from '../data/portfolioData';

const navItems = [
  { id: 'hero',           icon: '📖', label: 'HOME',          game: 'Home' },
  { id: 'about',          icon: '🧙', label: 'ABOUT',         game: 'About' },
  { id: 'skills',         icon: '⚔', label: 'SKILLS',        game: 'Skills' },
  { id: 'projects',       icon: '🗺', label: 'PROJECTS',      game: 'Projects' },
  { id: 'certifications', icon: '🏺', label: 'CERTIFICATIONS',game: 'Certs' },
  { id: 'journey',        icon: '🌿', label: 'JOURNEY',       game: 'Journey' },
  { id: 'contact',        icon: '✉',  label: 'CONTACT',       game: 'Contact' },
];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function GameHUD() {
  const { } = useGameState();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  return (
    <>
      {/* ── Desktop HUD ── */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
        className="fixed top-0 left-0 right-0 z-[100] hidden md:flex items-center justify-between px-6 py-3 hud-panel"
        style={{ borderBottom: '1px solid rgba(61,46,26,0.8)' }}
      >
        {/* Left: Branding */}
        <button
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-3 group focus-visible:outline-none"
          aria-label="Go to top"
        >
          <span className="text-xl" style={{ color: '#C9A84C' }}>📖</span>
          <div>
            <div className="font-game text-sm font-bold tracking-[0.12em] transition-colors"
              style={{ color: '#EDE0C8' }}
              onMouseEnter={e => e.target.style.color = '#C9A84C'}
              onMouseLeave={e => e.target.style.color = '#EDE0C8'}
            >
              {personalInfo.name}
            </div>
            <div className="font-ui text-[10px] tracking-[0.2em] uppercase"
              style={{ color: '#7B5EA7' }}>
              {personalInfo.role}
            </div>
          </div>
        </button>

        {/* Center: Nav */}
        <nav className="flex items-center gap-1" aria-label="Main navigation">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded font-game text-[10px] tracking-[0.1em] uppercase transition-all duration-200 focus-visible:outline-[#C9A84C]"
              style={{ color: '#B8A48C' }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#EDE0C8';
                e.currentTarget.style.background = 'rgba(201,168,76,0.08)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = '#B8A48C';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Right: Resume */}
        <div className="flex items-center">
          <a
            href={personalInfo.resumePath}
            download="Aravinth_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded font-game text-[10px] tracking-[0.1em] uppercase transition-all duration-200"
            style={{
              border: '1px solid rgba(201,168,76,0.5)',
              color: '#C9A84C',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(201,168,76,0.12)';
              e.currentTarget.style.borderColor = '#C9A84C';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(201,168,76,0.5)';
            }}
          >
            📄 RESUME
          </a>
        </div>
      </motion.div>

      {/* ── Mobile Top Bar ── */}
      <div className="fixed top-0 left-0 right-0 z-[100] md:hidden hud-panel flex items-center justify-between px-4 py-2"
        style={{ borderBottom: '1px solid rgba(61,46,26,0.8)' }}>
        <div className="font-game text-sm font-bold tracking-wider" style={{ color: '#EDE0C8' }}>
          📖 {personalInfo.name}
        </div>

      </div>

      {/* ── Mobile Bottom Nav ── */}
      <nav className="mobile-bottom-nav md:hidden" aria-label="Mobile navigation">
        <div className="flex items-center justify-around px-2">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="flex flex-col items-center gap-0.5 px-2 py-2 transition-colors focus-visible:outline-[#C9A84C]"
              style={{ color: '#5A4228' }}
              onMouseEnter={e => e.currentTarget.style.color = '#C9A84C'}
              onMouseLeave={e => e.currentTarget.style.color = '#5A4228'}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-game text-[8px] tracking-wider uppercase">{item.game}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* ── Floating Scroll Button (Desktop) ── */}
      <motion.a
        href={personalInfo.resumePath}
        download="Aravinth_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 z-[100] hidden md:flex items-center gap-2 px-4 py-3 rounded-full font-game text-xs tracking-widest uppercase text-white box-glow-gold"
        style={{ background: 'linear-gradient(135deg, #7B5EA7, #C9A84C)' }}
        aria-label="Download Resume"
      >
        📄 RESUME
      </motion.a>
    </>
  );
}
