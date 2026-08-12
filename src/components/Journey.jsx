import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useGameState } from '../hooks/useGameState';
import { education } from '../data/portfolioData';

export default function Journey() {
  const { visitSection } = useGameState();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) visitSection('journey'); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [visitSection]);

  return (
    <section id="journey" ref={ref} className="relative py-24 overflow-hidden">
      <div className="section-divider" />

      {/* BG glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(201,168,76,0.03) 0%, transparent 70%)' }} />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="section-tag">🌿 CHAPTER IV</div>
          <h2 className="font-game text-5xl md:text-7xl" style={{ color: '#EDE0C8' }}>
            MY{' '}
            <span className="gradient-text-gold">JOURNEY</span>
          </h2>
          <p className="font-lore italic mt-2 tracking-wider" style={{ color: '#6B5A3E' }}>
            My education and milestones so far
          </p>
          <div className="w-24 h-1 mx-auto mt-4 rounded"
            style={{ background: 'linear-gradient(90deg, #C9A84C, #E07B39)' }} />
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-2xl mx-auto">
          {/* Vertical chronicle line */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-1 rounded-full"
            style={{ background: 'linear-gradient(180deg, #7B5EA7, #C9A84C, #E07B39)' }} />

          {/* START waypoint */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <div className="px-6 py-2 rounded-full font-game text-xs tracking-[0.2em]"
              style={{
                color: '#C9A84C',
                border: '1px solid rgba(201,168,76,0.5)',
                background: 'rgba(201,168,76,0.06)',
                boxShadow: '0 0 12px rgba(201,168,76,0.2)',
              }}>
              ✦ WHERE IT ALL BEGAN
            </div>
          </motion.div>

          {education.map((edu, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div key={i} className="relative flex items-center mb-16">
                {/* Waypoint dot */}
                <div className="absolute left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.15 }}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
                    style={{
                      background: 'linear-gradient(135deg, #7B5EA7, #C9A84C)',
                      boxShadow: '0 0 16px rgba(201,168,76,0.4)',
                      border: '2px solid rgba(212,175,106,0.3)',
                    }}
                  >
                    {edu.icon}
                  </motion.div>
                </div>

                {/* Chronicle card */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className={`w-5/12 ${isLeft ? 'mr-auto pr-8 text-right' : 'ml-auto pl-8 text-left'}`}
                >
                  <div className="game-card p-5 relative overflow-hidden">
                    {/* Chapter badge */}
                    <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded mb-3 ${isLeft ? 'ml-auto' : ''}`}
                      style={{
                        background: 'rgba(201,168,76,0.08)',
                        border: '1px solid rgba(201,168,76,0.3)',
                      }}>
                      <span className="font-game text-[9px] tracking-[0.2em]" style={{ color: '#C9A84C' }}>
                        ✦ {edu.stage}
                      </span>
                    </div>

                    <div className="font-game text-[11px] tracking-[0.1em] mb-1" style={{ color: '#EDE0C8' }}>
                      {edu.degree}
                    </div>
                    <div className="font-ui text-sm mb-1" style={{ color: '#8EAFC2' }}>{edu.institution}</div>
                    <div className="font-ui text-xs mb-2" style={{ color: '#4A3A28' }}>{edu.location}</div>
                    <div className="flex items-center gap-2 flex-wrap mt-2">
                      <span className="font-game text-[9px] tracking-wider px-2 py-0.5 rounded"
                        style={{ color: '#C9A84C', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)' }}>
                        📅 {edu.year}
                      </span>
                      <span className="font-game text-[9px] tracking-wider px-2 py-0.5 rounded"
                        style={{ color: '#8EAFC2', background: 'rgba(142,175,194,0.08)', border: '1px solid rgba(142,175,194,0.2)' }}>
                        {edu.score}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}

          {/* CURRENT waypoint */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mt-4"
          >
            <div className="text-center">
              <div className="px-6 py-3 rounded-lg font-game text-xs tracking-[0.2em]"
                style={{
                  background: 'linear-gradient(135deg, rgba(123,94,167,0.15), rgba(201,168,76,0.08))',
                  border: '1px solid rgba(201,168,76,0.35)',
                  boxShadow: '0 0 20px rgba(201,168,76,0.12)',
                  color: '#EDE0C8',
                }}>
                ✦ WHERE I AM NOW
                <div className="font-game text-[10px] mt-1 tracking-widest" style={{ color: '#C9A84C' }}>
                  WEB DEVELOPER
                </div>
              </div>
              <div className="mt-2 flex justify-center">
                <div className="w-0.5 h-8 animate-pulse" style={{ background: '#C9A84C' }} />
              </div>
              <div className="font-lore text-[10px] italic tracking-widest animate-bounce"
                style={{ color: '#4A3A28' }}>▼ NEXT STOP: DREAM JOB</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
