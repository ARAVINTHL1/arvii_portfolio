import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useGameState } from '../hooks/useGameState';
import { personalInfo, aboutText, stats } from '../data/portfolioData';

function StatBar({ label, value, color = '#C9A84C', delay = 0 }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setAnimated(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="font-game text-[11px] tracking-[0.15em]" style={{ color: '#B8A48C' }}>{label}</span>
        <span className="font-game text-[11px]" style={{ color: '#6B5A3E' }}>{value}%</span>
      </div>
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{
            width: animated ? `${value}%` : '0%',
            background: `linear-gradient(90deg, ${color}, #D4AF6A)`,
            transition: `width 1.4s cubic-bezier(0.4,0,0.2,1) ${delay}s`,
          }}
        />
      </div>
    </div>
  );
}

export default function PlayerProfile() {
  const { visitSection } = useGameState();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) visitSection('about'); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [visitSection]);

  return (
    <section id="about" ref={ref} className="relative py-24 overflow-hidden">
      <div className="section-divider" />

      {/* BG decoration — amber radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 -translate-y-1/2 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)' }} />

      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-tag">🧙 CHAPTER II</div>
          <h2 className="font-game text-5xl md:text-7xl gradient-text-gold">ABOUT ME</h2>
          <div className="w-24 h-1 mx-auto mt-4 rounded"
            style={{ background: 'linear-gradient(90deg, #7B5EA7, #C9A84C)' }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Codex Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="game-card p-8 relative overflow-hidden">
              {/* Corner decorations — parchment corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 rounded-tl-lg"
                style={{ borderColor: '#C9A84C' }} />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 rounded-tr-lg"
                style={{ borderColor: '#8EAFC2' }} />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 rounded-bl-lg"
                style={{ borderColor: '#E07B39' }} />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 rounded-br-lg"
                style={{ borderColor: '#D4AF6A' }} />

              {/* Header */}
              <div className="text-center mb-6">
                <div className="font-game text-[10px] tracking-[0.3em] mb-2"
                  style={{ color: '#3D2E1A' }}>── PROFILE ──</div>

                {/* Avatar — glowing rune circle */}
                <div className="relative inline-block mb-4">
                  <div className="w-20 h-20 rounded-full mx-auto flex items-center justify-center text-4xl"
                    style={{
                      background: 'linear-gradient(135deg, #7B5EA7, #C9A84C)',
                      boxShadow: '0 0 20px rgba(201,168,76,0.35)',
                    }}>
                    🧙
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 flex items-center justify-center"
                    style={{ background: '#4A7C59', borderColor: '#1C1409' }}>
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#6FCF97' }} />
                  </div>
                </div>

                <div className="font-game text-3xl glow-gold mb-1" style={{ color: '#EDE0C8' }}>
                  {personalInfo.name}
                </div>
                <div className="font-game text-xs tracking-[0.2em] mt-1" style={{ color: '#8EAFC2' }}>
                  {personalInfo.role}
                </div>
              </div>

              {/* Stats rows */}
              <div className="space-y-2 mb-6">
                {[
                  { label: 'LEVEL',      value: personalInfo.level },
                  { label: 'EXPERIENCE', value: personalInfo.experience },
                  { label: 'LOCATION',   value: personalInfo.location },
                  { label: 'STATUS',     value: '✦ ' + personalInfo.status, highlight: true },
                ].map(item => (
                  <div key={item.label} className="flex justify-between items-center py-2 border-b"
                    style={{ borderColor: 'rgba(61,46,26,0.4)' }}>
                    <span className="font-game text-[10px] tracking-[0.15em]" style={{ color: '#4A3A28' }}>
                      {item.label}
                    </span>
                    <span className="font-game text-[11px] tracking-[0.1em]"
                      style={{ color: item.highlight ? '#4A7C59' : '#EDE0C8' }}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>


            </div>
          </motion.div>

          {/* Right: Lore + Attributes */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-8"
          >
            {/* Lore / Bio */}
            <div>
              <div className="font-game text-[10px] tracking-[0.3em] mb-4"
                style={{ color: '#C9A84C' }}>── ABOUT ME ──</div>
              {aboutText.map((p, i) => (
                <p key={i} className="font-lore italic leading-relaxed mb-4" style={{ color: '#B8A48C' }}>{p}</p>
              ))}
            </div>

            {/* Attribute stats */}
            <div>
              <div className="font-game text-[10px] tracking-[0.3em] mb-6"
                style={{ color: '#C9A84C' }}>── SKILLS ──</div>
              {stats.map((s, i) => (
                <StatBar
                  key={s.label}
                  label={s.label}
                  value={s.value}
                  color={['#7B5EA7', '#8EAFC2', '#E07B39', '#C9A84C'][i % 4]}
                  delay={i * 0.1}
                />
              ))}
            </div>

            {/* Quick links */}
            <div className="flex gap-3 flex-wrap">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                className="px-4 py-2 rounded font-game text-[10px] tracking-widest uppercase transition-all"
                style={{ color: '#EDE0C8', border: '1px solid #3D2E1A' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#C9A84C'; e.currentTarget.style.color = '#C9A84C'; e.currentTarget.style.background = 'rgba(201,168,76,0.06)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#3D2E1A'; e.currentTarget.style.color = '#EDE0C8'; e.currentTarget.style.background = 'transparent'; }}>
                🐙 GitHub
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                className="px-4 py-2 rounded font-game text-[10px] tracking-widest uppercase transition-all"
                style={{ color: '#EDE0C8', border: '1px solid #3D2E1A' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#8EAFC2'; e.currentTarget.style.color = '#8EAFC2'; e.currentTarget.style.background = 'rgba(142,175,194,0.06)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#3D2E1A'; e.currentTarget.style.color = '#EDE0C8'; e.currentTarget.style.background = 'transparent'; }}>
                💼 LinkedIn
              </a>
              <a href={personalInfo.leetcode} target="_blank" rel="noopener noreferrer"
                className="px-4 py-2 rounded font-game text-[10px] tracking-widest uppercase transition-all"
                style={{ color: '#EDE0C8', border: '1px solid #3D2E1A' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#D4AF6A'; e.currentTarget.style.color = '#D4AF6A'; e.currentTarget.style.background = 'rgba(212,175,106,0.06)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#3D2E1A'; e.currentTarget.style.color = '#EDE0C8'; e.currentTarget.style.background = 'transparent'; }}>
                ⚔ LeetCode
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
