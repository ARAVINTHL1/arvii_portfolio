import { motion } from 'framer-motion';
import { Globe, Palette, Brain, Cpu, Smartphone } from 'lucide-react';
import { nextMissions } from '../data/portfolioData';

const iconMap = { Globe, Palette, Brain, Cpu, Smartphone };

export default function NextMissions() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(201,168,76,0.02) 50%, transparent 100%)' }} />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-tag">🔮 CHAPTER VII</div>
          <h2 className="font-game text-5xl md:text-7xl" style={{ color: '#EDE0C8' }}>
            UPCOMING <span className="gradient-text-gold">GOALS</span>
          </h2>
          <p className="font-lore italic mt-2 tracking-wider" style={{ color: '#6B5A3E' }}>
            Areas I plan to explore next
          </p>
          <div className="w-24 h-1 mx-auto mt-4 rounded"
            style={{ background: 'linear-gradient(90deg, #7B5EA7, #C9A84C)' }} />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 max-w-5xl mx-auto">
          {nextMissions.map((mission, i) => {
            const Icon = iconMap[mission.icon] || Globe;
            return (
              <motion.div
                key={mission.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.04 }}
                className="game-card p-6 text-center relative overflow-hidden group cursor-default"
              >
                {/* Scroll icon top right */}
                <div className="absolute top-3 right-3 font-game text-[10px] transition-colors"
                  style={{ color: '#2A1E10' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#C9A84C'}
                  onMouseLeave={e => e.currentTarget.style.color = '#2A1E10'}
                >
                  📜
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{
                    background: `${mission.color}10`,
                    border: `1px solid ${mission.color}25`,
                    boxShadow: `0 0 20px ${mission.color}08`,
                  }}>
                  <Icon size={26} style={{ color: mission.color }} strokeWidth={1.5} />
                </div>

                <div className="font-game text-[11px] tracking-[0.1em] leading-tight mb-3"
                  style={{ color: '#EDE0C8' }}>
                  {mission.title}
                </div>

                {/* Status */}
                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded"
                  style={{ background: `${mission.color}0C`, border: `1px solid ${mission.color}22` }}>
                  <span className="font-game text-[9px]" style={{ color: mission.color }}>
                    PLANNED
                  </span>
                </div>

                {/* Hover inner glow */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ boxShadow: `0 0 20px ${mission.color}15 inset` }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
