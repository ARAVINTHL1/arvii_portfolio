import { motion } from 'framer-motion';
import { Users, Clock, Star, Lightbulb, MessageCircle, Zap } from 'lucide-react';
import { softSkills } from '../data/portfolioData';

const iconMap = { Users, Clock, Star, Lightbulb, MessageCircle, Zap };

const abilityColors = ['#7B5EA7','#8EAFC2','#C85A2A','#C9A84C','#D4AF6A','#E07B39'];

export default function SoftSkills() {
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
          <div className="section-tag">✨ BONUS CHAPTER</div>
          <h2 className="font-game text-5xl md:text-7xl gradient-text-amber">SOFT SKILLS</h2>
          <div className="w-24 h-1 mx-auto mt-4 rounded"
            style={{ background: 'linear-gradient(90deg, #C9A84C, #E07B39)' }} />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {softSkills.map((skill, i) => {
            const Icon = iconMap[skill.icon] || Star;
            const color = abilityColors[i % abilityColors.length];

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.04, y: -6 }}
                className="game-card p-6 relative overflow-hidden group cursor-default"
              >
                {/* BG glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"
                  style={{ background: `radial-gradient(ellipse at 50% 0%, ${color}15 0%, transparent 70%)` }}
                />

                {/* Top bar */}
                <div className="h-0.5 w-full rounded mb-5"
                  style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
                    <Icon size={22} style={{ color }} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="font-game text-xs tracking-[0.15em]" style={{ color: '#EDE0C8' }}>{skill.name}</div>
                    <div className="font-lore italic text-[11px] mt-0.5" style={{ color: '#6B5A3E' }}>{skill.description}</div>
                  </div>
                </div>

                {/* "Unlocked" badge */}
                <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded text-[9px] font-game tracking-wider"
                  style={{ background: `${color}12`, color, border: `1px solid ${color}28` }}>
                  ✦ ACTIVE
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
