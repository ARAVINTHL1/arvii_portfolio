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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32 md:pb-20"
    >
      {/* Radial amber glow behind content */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(201,168,76,0.08) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-20">
        {/* Text Content */}
        <div className="flex-1 text-left">
          {/* Chapter tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="section-tag mb-6 inline-flex"
          >
            📖 CHAPTER I — THE BEGINNING
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <h2 className="font-game text-lg md:text-xl tracking-[0.2em] mb-2"
              style={{ color: '#8EAFC2' }}>
              HARK! THE TALE OF
            </h2>
            <h1 className="font-game text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none mb-4"
              style={{
                background: 'linear-gradient(135deg, #EDE0C8 0%, #C9A84C 50%, #E07B39 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 30px rgba(201,168,76,0.3))',
              }}>
              {personalInfo.name}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="font-game text-sm md:text-base tracking-[0.2em] glow-gold mb-1"
              style={{ color: '#C9A84C' }}>
              {personalInfo.role}
            </div>
            <div className="font-game text-xs md:text-sm tracking-[0.15em] mb-6"
              style={{ color: '#6B5A3E' }}>
              {personalInfo.subtitle}
            </div>
            <p className="font-lore text-base md:text-lg leading-relaxed mb-8 max-w-lg lg:max-w-none italic"
              style={{ color: '#B8A48C' }}>
              {personalInfo.description}
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="flex flex-wrap gap-4 justify-start"
          >
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary px-8 py-4 rounded-lg text-sm flex items-center gap-2 animate-pulse-glow"
              style={{ boxShadow: '0 0 20px rgba(201,168,76,0.3), 0 0 40px rgba(201,168,76,0.15)' }}
            >
              <span>✦</span> BEGIN THE TALE
            </button>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline px-8 py-4 rounded-lg text-sm"
            >
              VIEW PROJECTS
            </button>
            <a
              href={personalInfo.resumePath}
              download="Aravinth_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg font-game text-sm tracking-widest uppercase transition-all duration-200"
              style={{
                color: '#D4AF6A',
                border: '1px solid rgba(212,175,106,0.4)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(212,175,106,0.08)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(212,175,106,0.2)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              📄 DOWNLOAD RESUME
            </a>
          </motion.div>

          {/* Chapter progress indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-10 hidden lg:block"
          >
            <div className="flex items-center gap-4">
              <span className="font-game text-[10px] tracking-widest" style={{ color: '#3D2E1A' }}>CHAPTER</span>
              <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(201,168,76,0.6), rgba(224,123,57,0.3), transparent)' }} />
              <span className="font-game text-[10px]" style={{ color: '#7B5EA7' }}>I ─────── ∞</span>
            </div>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, type: 'spring', stiffness: 80 }}
          className="flex-shrink-0 relative lg:-translate-x-24"
        >
          <div className="p-3 bg-white rounded-xl max-w-xs md:max-w-md border image-border-animated">
            <img 
              src="/aravinthl.jpeg" 
              alt={personalInfo.name} 
              className="w-60 h-72 md:w-72 md:h-96 object-cover rounded-lg" 
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 hidden md:flex"
      >
        <span className="font-lore text-[10px] tracking-widest italic" style={{ color: '#4A3A28' }}>Scroll to continue</span>
        <div className="w-5 h-8 border rounded-full flex items-start justify-center pt-1"
          style={{ borderColor: '#3D2E1A' }}>
          <div className="w-1.5 h-1.5 rounded-full animate-bounce"
            style={{ background: '#C9A84C' }} />
        </div>
      </motion.div>
    </section>
  );
}

function AdventurerCharacter() {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
      className="relative"
    >
      <svg width="260" height="320" viewBox="0 0 260 320" fill="none" xmlns="http://www.w3.org/2000/svg"
        aria-label="Adventurer character with staff and cloak">

        {/* Ground shadow glow */}
        <ellipse cx="130" cy="308" rx="60" ry="10" fill="rgba(201,168,76,0.15)" />

        {/* ── Staff ── */}
        <line x1="68" y1="80" x2="72" y2="280" stroke="#5A4228" strokeWidth="5" strokeLinecap="round" />
        {/* Staff orb */}
        <circle cx="68" cy="76" r="10" fill="rgba(201,168,76,0.15)" stroke="#C9A84C" strokeWidth="1.5">
          <animate attributeName="r" values="10;12;10" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="68" cy="76" r="5" fill="#C9A84C">
          <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
        </circle>
        {/* Staff glow */}
        <circle cx="68" cy="76" r="16" fill="none" stroke="rgba(201,168,76,0.3)" strokeWidth="1">
          <animate attributeName="r" values="16;22;16" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite" />
        </circle>

        {/* ── Cloak ── */}
        <path d="M90 155 Q70 200 65 300 Q90 295 130 298 Q170 295 195 300 Q190 200 170 155 Q150 170 130 168 Q110 170 90 155Z"
          fill="#1a1208" />
        <path d="M90 155 Q70 200 65 300 Q90 295 130 298 Q170 295 195 300 Q190 200 170 155"
          fill="url(#cloakGrad)" opacity="0.8" />
        {/* Cloak trim */}
        <path d="M90 155 Q70 200 65 300" stroke="#3D2E1A" strokeWidth="1.5" fill="none" />
        <path d="M170 155 Q190 200 195 300" stroke="#3D2E1A" strokeWidth="1.5" fill="none" />
        {/* Cloak clasp */}
        <circle cx="130" cy="170" r="6" fill="#C9A84C" opacity="0.9" />
        <circle cx="130" cy="170" r="4" fill="#D4AF6A" />

        {/* ── Body tunic ── */}
        <rect x="100" y="155" width="60" height="80" rx="8" fill="#1C1409" />
        {/* Tunic belt */}
        <rect x="96" y="205" width="68" height="12" rx="4" fill="#3D2E1A" />
        <circle cx="130" cy="211" r="5" fill="#C9A84C" opacity="0.8" />
        {/* Runic emblem on chest */}
        <text x="120" y="195" fontFamily="serif" fontSize="12" fill="#C9A84C" opacity="0.6">✦</text>

        {/* ── Right arm (holding staff) ── */}
        <path d="M100 165 Q82 185 75 240" stroke="#1C1409" strokeWidth="18" strokeLinecap="round" fill="none" />
        {/* Hand */}
        <circle cx="75" cy="245" r="8" fill="#c8a07a" />

        {/* ── Left arm ── */}
        <path d="M160 165 Q178 185 182 210" stroke="#1C1409" strokeWidth="18" strokeLinecap="round" fill="none" />

        {/* ── Neck ── */}
        <rect x="117" y="133" width="26" height="24" rx="4" fill="#c8a07a" />

        {/* ── Head ── */}
        <ellipse cx="130" cy="118" rx="32" ry="30" fill="#c8a07a" />

        {/* ── Hood ── */}
        <path d="M98 120 Q83 92 98 80 Q115 65 130 70 Q145 65 162 80 Q177 92 162 120"
          fill="#1a1208" opacity="0.95" />
        {/* Hood shadow */}
        <path d="M98 120 Q95 110 98 100 Q105 88 115 85" stroke="#3D2E1A" strokeWidth="1" fill="none" opacity="0.5" />

        {/* ── Face ── */}
        {/* Eyes */}
        <ellipse cx="120" cy="118" rx="5" ry="5.5" fill="#1a1208" />
        <ellipse cx="140" cy="118" rx="5" ry="5.5" fill="#1a1208" />
        {/* Eye shine */}
        <ellipse cx="121.5" cy="116.5" rx="2" ry="2" fill="#EDE0C8" />
        <ellipse cx="141.5" cy="116.5" rx="2" ry="2" fill="#EDE0C8" />
        {/* Smile */}
        <path d="M122 128 Q130 134 138 128" stroke="#1a1208" strokeWidth="2" fill="none" strokeLinecap="round" />

        {/* ── Hood decorative rune ── */}
        <text x="123" y="96" fontFamily="serif" fontSize="9" fill="#C9A84C" opacity="0.6">ᚱ</text>

        {/* ── Boots ── */}
        <rect x="105" y="272" width="22" height="36" rx="6" fill="#1a1208" />
        <rect x="133" y="272" width="22" height="36" rx="6" fill="#110E06" />
        {/* Boot buckles */}
        <rect x="108" y="278" width="16" height="6" rx="2" fill="#3D2E1A" />
        <rect x="136" y="278" width="16" height="6" rx="2" fill="#3D2E1A" />
        <rect x="112" y="280" width="8" height="2" rx="1" fill="#C9A84C" opacity="0.7" />
        <rect x="140" y="280" width="8" height="2" rx="1" fill="#C9A84C" opacity="0.7" />

        {/* ── Legs ── */}
        <rect x="107" y="235" width="20" height="40" rx="6" fill="#221810" />
        <rect x="133" y="235" width="20" height="40" rx="6" fill="#1C1409" />

        {/* ── Floating rune particles ── */}
        <text x="195" y="130" fontFamily="serif" fontSize="12" fill="#C9A84C" opacity="0.5">ᚦ
          <animateTransform attributeName="transform" type="translate" from="0 0" to="0 -25" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0;0.5" dur="4s" repeatCount="indefinite" />
        </text>
        <text x="25" y="155" fontFamily="serif" fontSize="10" fill="#7B5EA7" opacity="0.5">✦
          <animateTransform attributeName="transform" type="translate" from="0 0" to="5 -20" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" repeatCount="indefinite" />
        </text>
        <text x="195" y="200" fontFamily="serif" fontSize="9" fill="#8EAFC2" opacity="0.4">⸸
          <animateTransform attributeName="transform" type="translate" from="0 0" to="-5 -18" dur="5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0;0.4" dur="5s" repeatCount="indefinite" />
        </text>

        {/* ── Gradient defs ── */}
        <defs>
          <linearGradient id="cloakGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a1208" />
            <stop offset="50%" stopColor="#140e08" />
            <stop offset="100%" stopColor="#0d0b07" />
          </linearGradient>
        </defs>
      </svg>

      {/* Status badge */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full font-game text-[10px] tracking-widest"
        style={{
          color: '#C9A84C',
          border: '1px solid rgba(201,168,76,0.4)',
          background: 'rgba(201,168,76,0.06)',
          backdropFilter: 'blur(8px)',
        }}>
        ✦ ONLINE — READY TO CRAFT
      </div>
    </motion.div>
  );
}
