import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useGameState } from '../hooks/useGameState';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  const { visitSection } = useGameState();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) visitSection('certifications'); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [visitSection]);

  return (
    <section id="certifications" ref={ref} className="relative py-24 overflow-hidden">
      <div className="section-divider" />

      {/* BG glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(201,168,76,0.04) 0%, transparent 70%)' }} />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-tag">🏺 CHAPTER VI</div>
          <h2 className="font-game text-5xl md:text-7xl gradient-text-gold">CERTIFICATIONS</h2>
          <p className="font-lore italic mt-2 tracking-wider" style={{ color: '#6B5A3E' }}>
            Courses completed — skills recognized
          </p>
          <div className="w-24 h-1 mx-auto mt-4 rounded"
            style={{ background: 'linear-gradient(90deg, #C9A84C, #E07B39)' }} />
        </motion.div>

        {/* Trophy cabinet */}
        <div className="game-card p-8 max-w-3xl mx-auto"
          style={{ border: '1px solid rgba(201,168,76,0.2)' }}>
          <div className="font-game text-[10px] tracking-[0.3em] text-center mb-8" style={{ color: '#3D2E1A' }}>
            ── CERTIFICATIONS ──
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.15, type: 'spring', stiffness: 100 }}
                className="trophy-card p-6 relative overflow-hidden"
              >
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'linear-gradient(135deg, transparent 30%, rgba(255,214,0,0.05) 50%, transparent 70%)' }}
                />

                <div className="flex items-center gap-4">
                  {/* Trophy icon */}
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl"
                      style={{
                        background: `radial-gradient(circle at 35% 35%, ${cert.color}30, ${cert.color}10)`,
                        border: `2px solid ${cert.color}40`,
                        boxShadow: `0 0 20px ${cert.color}25`,
                      }}>
                      {cert.icon}
                    </div>
                    {/* Glow ring */}
                    <div className="absolute -inset-1 rounded-full opacity-0 hover:opacity-100 transition-opacity"
                      style={{ boxShadow: `0 0 15px ${cert.color}50` }} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="font-game text-[10px] tracking-[0.15em] mb-1"
                      style={{ color: cert.color }}>
                      {cert.issuer}
                    </div>
                    <div className="font-game text-sm leading-tight mb-2" style={{ color: '#EDE0C8' }}>{cert.title}</div>
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded"
                      style={{
                        background: 'rgba(201,168,76,0.08)',
                        border: '1px solid rgba(201,168,76,0.3)',
                      }}>
                      <span style={{ color: '#C9A84C', fontSize: '9px' }}>✦</span>
                      <span className="font-game text-[9px] tracking-[0.15em]" style={{ color: '#C9A84C' }}>
                        EARNED {cert.year}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer hint */}
          <div className="text-center mt-8">
            <p className="font-lore italic text-[11px] tracking-[0.15em]" style={{ color: '#3D2E1A' }}>
              More certifications in progress...
            </p>
            <div className="flex justify-center gap-1 mt-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="w-6 h-6 rounded flex items-center justify-center text-sm"
                  style={{ border: '1px solid #2A1E10', color: '#2A1E10' }}>
                  ?
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
