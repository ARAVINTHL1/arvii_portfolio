import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useGameState } from '../hooks/useGameState';
import { skills } from '../data/portfolioData';

const categoryColors = {
  Frontend: '#8EAFC2',
  Backend:  '#7B5EA7',
  Database: '#E07B39',
  'AI / ML': '#C85A2A',
  Tools:    '#C9A84C',
};

const categoryIcons = {
  Frontend: '🖥️',
  Backend:  '⚔',
  Database: '📦',
  'AI / ML': '🔮',
  Tools:    '🛠️',
};

function SkillCard({ skill, color, delay }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -8, rotate: 1 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="skill-card relative overflow-hidden"
    >
      {/* Glow ring on hover */}
      <div className="absolute inset-0 rounded-xl transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: hovered ? `0 0 20px ${color}40, 0 0 60px ${color}20` : 'none',
          border: `1px solid ${hovered ? color + '60' : 'transparent'}`,
          borderRadius: '12px',
        }}
      />

      <div className="relative text-center">
        {/* Icon ring */}
        <div className="w-10 h-10 rounded-full mx-auto mb-3 flex items-center justify-center text-sm font-bold"
          style={{ background: `${color}20`, border: `1px solid ${color}40`, color }}>
          {skill.name[0]}
        </div>

        <div className="font-game text-[11px] tracking-[0.1em] mb-2" style={{ color: '#EDE0C8' }}>{skill.name}</div>

        {/* Mastery bar */}
        <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: '#2A1E10' }}>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: delay + 0.2 }}
            className="h-full rounded-full"
            style={{ background: `linear-gradient(90deg, ${color}, #fff)` }}
          />
        </div>

        {/* Mastery text (on hover) */}
        <div className={`font-game text-[9px] mt-1 transition-opacity duration-200 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          style={{ color }}>
          LVL {Math.floor(skill.level / 10)}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { visitSection } = useGameState();
  const ref = useRef(null);
  const [activeTab, setActiveTab] = useState(Object.keys(skills)[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) visitSection('skills'); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [visitSection]);

  const categories = Object.keys(skills);

  return (
    <section id="skills" ref={ref} className="relative py-24 overflow-hidden">
      <div className="section-divider" />

      {/* BG glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 -translate-y-1/2 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(123,94,167,0.06) 0%, transparent 70%)' }} />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="section-tag">⚔ CHAPTER III</div>
          <h2 className="font-game text-5xl md:text-7xl gradient-text-gold">SKILLS</h2>
          <p className="font-lore italic mt-2 tracking-wider" style={{ color: '#6B5A3E' }}>Tools and technologies I work with</p>
          <div className="w-24 h-1 mx-auto mt-4 rounded"
            style={{ background: 'linear-gradient(90deg, #7B5EA7, #C9A84C)' }} />
        </motion.div>

        {/* Tab selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className="px-4 py-2 rounded-lg font-game text-[11px] tracking-[0.1em] uppercase transition-all duration-250"
              style={{
                background: activeTab === cat ? `${categoryColors[cat]}18` : 'rgba(28,20,9,0.8)',
                border: `1px solid ${activeTab === cat ? categoryColors[cat] : '#3D2E1A'}`,
                color: activeTab === cat ? categoryColors[cat] : '#4A3A28',
                boxShadow: activeTab === cat ? `0 0 12px ${categoryColors[cat]}28` : 'none',
              }}
            >
              {categoryIcons[cat]} {cat}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 max-w-4xl mx-auto"
        >
          {skills[activeTab].map((skill, i) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              color={categoryColors[activeTab]}
              delay={i * 0.06}
            />
          ))}
        </motion.div>


      </div>
    </section>
  );
}
