import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameState } from '../hooks/useGameState';
import { skills } from '../data/portfolioData';

/* Nature-themed category colours */
const categoryColors = {
  Frontend: '#7AAD67',
  Backend:  '#5B8F4A',
  Database: '#C9A878',
  'AI / ML': '#A8B89A',
  Tools:    '#D4B896',
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
      initial={{ opacity: 0, y: 28, scale: 0.88 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -10, scale: 1.06, transition: { duration: 0.22 } }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="skill-card relative overflow-hidden cursor-pointer"
      style={{ cursor: 'none' }}
    >
      {/* Shimmer sweep on hover */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.06) 50%, transparent 60%)',
          backgroundSize: '200% 100%',
          animation: hovered ? 'shimmerSweep 0.6s ease forwards' : 'none',
        }}
      />

      {/* Glow border */}
      <div className="absolute inset-0 rounded-xl pointer-events-none transition-all duration-300"
        style={{
          boxShadow: hovered ? `0 0 20px ${color}50, 0 0 50px ${color}20, inset 0 0 20px ${color}08` : 'none',
          border: `1px solid ${hovered ? color + '70' : color + '20'}`,
          borderRadius: '12px',
        }}
      />

      <div className="relative text-center">
        {/* Icon ring */}
        <motion.div
          animate={hovered ? { rotate: [0, -8, 8, 0], scale: 1.15 } : { rotate: 0, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-11 h-11 rounded-full mx-auto mb-3 flex items-center justify-center text-sm font-bold"
          style={{ background: `${color}1A`, border: `1px solid ${color}40`, color }}
        >
          {skill.name[0]}
        </motion.div>

        <div className="font-game text-[11px] tracking-[0.1em] mb-2" style={{ color: '#EDE6D5' }}>{skill.name}</div>

        {/* Mastery bar */}
        <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(91,143,74,0.12)' }}>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: delay + 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="h-full rounded-full"
            style={{ background: `linear-gradient(90deg, ${color}, #EDE6D5)` }}
          />
        </div>

        {/* Level badge on hover */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 4 }}
          transition={{ duration: 0.18 }}
          className="font-game text-[9px] mt-1.5"
          style={{ color }}
        >
          LVL {Math.floor(skill.level / 10)}
        </motion.div>
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(91,143,74,0.05) 0%, transparent 70%)', filter: 'blur(40px)' }} />

      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="section-tag">⚔ CHAPTER III</div>
          <h2 className="font-game text-5xl md:text-7xl" style={{
            background: 'linear-gradient(135deg, #EDE6D5 0%, #C9A878 45%, #7AAD67 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>SKILLS</h2>
          <p className="font-lore italic mt-2 tracking-wider" style={{ color: '#6E8060' }}>Tools and technologies I work with</p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '96px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 mx-auto mt-4 rounded"
            style={{ background: 'linear-gradient(90deg, #5B8F4A, #C9A878)' }}
          />
        </motion.div>

        {/* Tab selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat, i) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActiveTab(cat)}
              className="px-4 py-2 rounded-lg font-game text-[11px] tracking-[0.1em] uppercase transition-all duration-200"
              style={{
                background: activeTab === cat ? `${categoryColors[cat]}1A` : 'rgba(9,14,9,0.8)',
                border: `1px solid ${activeTab === cat ? categoryColors[cat] : 'rgba(91,143,74,0.2)'}`,
                color: activeTab === cat ? categoryColors[cat] : '#6E8060',
                boxShadow: activeTab === cat ? `0 0 14px ${categoryColors[cat]}30` : 'none',
                cursor: 'none',
              }}
            >
              {categoryIcons[cat]} {cat}
            </motion.button>
          ))}
        </div>

        {/* Skills grid with AnimatePresence for tab switching */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 max-w-4xl mx-auto"
          >
            {skills[activeTab].map((skill, i) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                color={categoryColors[activeTab]}
                delay={i * 0.055}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
