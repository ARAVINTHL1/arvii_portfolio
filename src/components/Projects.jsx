import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { GitBranch, ExternalLink } from 'lucide-react';
import { useGameState } from '../hooks/useGameState';
import { projects } from '../data/portfolioData';

function DifficultyStars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-sm" style={{ color: i < count ? '#C9A84C' : '#2A2014' }}>★</span>
      ))}
    </div>
  );
}

function QuestCard({ project, index }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const onMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    setTilt({ x, y });
  };
  const onMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        transform: `perspective(800px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
      className="mission-card relative"
    >
      <div className="game-card overflow-hidden"
        style={{ border: `1px solid ${project.color}28` }}>
        {/* Top accent — parchment stripe */}
        <div className="h-1 w-full"
          style={{ background: `linear-gradient(90deg, ${project.color}, #C9A84C)` }} />

        <div className="p-6">
          {/* Quest header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="font-game text-[10px] tracking-[0.3em] mb-1" style={{ color: '#3D2E1A' }}>
                PROJECT {project.id}
              </div>
              <div className="font-game text-[10px] tracking-[0.2em]"
                style={{ color: project.color }}>
                ● ACTIVE
              </div>
            </div>
            <DifficultyStars count={project.difficulty} />
          </div>

          {/* Title */}
          <h3 className="font-game text-xl mb-1 leading-tight" style={{ color: '#EDE0C8' }}>{project.title}</h3>
          <div className="font-ui text-sm mb-4" style={{ color: project.color }}>{project.subtitle}</div>

          {/* Description */}
          <p className="font-lore italic text-sm leading-relaxed mb-5 line-clamp-3"
            style={{ color: '#7A6848' }}>{project.description}</p>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.technologies.map(tech => (
              <span key={tech}
                className="px-2 py-0.5 rounded font-game text-[9px] tracking-wider"
                style={{
                  background: `${project.color}0D`,
                  border: `1px solid ${project.color}28`,
                  color: project.color,
                }}>
                {tech}
              </span>
            ))}
          </div>

          {/* Quest progress */}
          <div className="mb-5">
            <div className="flex justify-between mb-1">
              <span className="font-game text-[9px]" style={{ color: '#3D2E1A' }}>PROGRESS</span>
              <span className="font-game text-[9px]" style={{ color: project.color }}>COMPLETE</span>
            </div>
            <div className="progress-track">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, delay: index * 0.1 }}
                className="progress-fill"
                style={{ background: `linear-gradient(90deg, ${project.color}, #C9A84C)` }}
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded font-game text-[10px] tracking-wider uppercase transition-all"
              style={{ color: '#EDE0C8', border: '1px solid #3D2E1A' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#C9A84C'; e.currentTarget.style.background = 'rgba(201,168,76,0.06)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#3D2E1A'; e.currentTarget.style.background = 'transparent'; }}
            >
              <GitBranch size={13} />
              GITHUB
            </a>
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded font-game text-[10px] tracking-wider uppercase transition-all"
                style={{
                  background: `${project.color}15`,
                  border: `1px solid ${project.color}35`,
                  color: project.color,
                }}
              >
                <ExternalLink size={13} />
                VIEW PROJECT
              </a>
            ) : (
              <span className="flex items-center gap-2 px-4 py-2 rounded font-game text-[10px] tracking-wider uppercase cursor-not-allowed"
                style={{ color: '#3D2E1A', border: '1px solid #1C1409' }}>
                <ExternalLink size={13} />
                COMING SOON
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { visitSection } = useGameState();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) visitSection('projects'); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [visitSection]);

  return (
    <section id="projects" ref={ref} className="relative py-24 overflow-hidden">
      <div className="section-divider" />

      {/* BG parchment texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-tag">🗺 CHAPTER V</div>
          <h2 className="font-game text-5xl md:text-7xl" style={{ color: '#EDE0C8' }}>
            <span className="gradient-text-gold">PROJECTS</span>
          </h2>
          <p className="font-lore italic mt-2 tracking-wider" style={{ color: '#6B5A3E' }}>
            Things I have built — real-world impact through code
          </p>
          <div className="w-24 h-1 mx-auto mt-4 rounded"
            style={{ background: 'linear-gradient(90deg, #7B5EA7, #C9A84C)' }} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <QuestCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
