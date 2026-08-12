import { motion } from 'framer-motion';
import { GitBranch, Globe, Code2, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const socials = [
  { icon: GitBranch, href: personalInfo.github,   label: 'GitHub' },
  { icon: Globe,     href: personalInfo.linkedin,  label: 'LinkedIn' },
  { icon: Code2,    href: personalInfo.leetcode,  label: 'LeetCode' },
  { icon: Mail,     href: `mailto:${personalInfo.email}`, label: 'Email' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-12 overflow-hidden"
      style={{ background: 'linear-gradient(0deg, #060502 0%, #0D0B07 100%)' }}>
      {/* Top accent */}
      <div className="h-px w-full mb-12"
        style={{ background: 'linear-gradient(90deg, transparent, #3D2E1A, #C9A84C, #E07B39, #C9A84C, #3D2E1A, transparent)' }} />

      {/* Closing seal */}
      <div className="text-center mb-8">
        <div className="text-5xl mb-3">📜</div>
        <div className="font-game text-3xl md:text-4xl glow-gold mb-1"
          style={{ color: '#C9A84C' }}>
          STORY COMPLETE
        </div>
        <div className="font-game text-[10px] tracking-[0.4em]"
          style={{ color: '#3D2E1A' }}>
          THANKS FOR VISITING
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-sm mx-auto h-px mb-8"
        style={{ background: 'linear-gradient(90deg, transparent, #3D2E1A, transparent)' }} />

      {/* Name + Role */}
      <div className="text-center mb-6">
        <div className="font-game text-3xl" style={{ color: '#EDE0C8' }}>{personalInfo.name}</div>
        <div className="font-lore text-xs italic tracking-[0.2em] mt-1" style={{ color: '#7B5EA7' }}>
          {personalInfo.role}
        </div>
      </div>

      {/* Social links */}
      <div className="flex justify-center gap-4 mb-8">
        {socials.map(s => {
          const Icon = s.icon;
          return (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              className="w-10 h-10 rounded-lg flex items-center justify-center transition-all"
              style={{ border: '1px solid #2A1E10', color: '#4A3A28' }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#EDE0C8';
                e.currentTarget.style.borderColor = '#C9A84C';
                e.currentTarget.style.boxShadow = '0 0 12px rgba(201,168,76,0.2)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = '#4A3A28';
                e.currentTarget.style.borderColor = '#2A1E10';
                e.currentTarget.style.boxShadow = 'none';
              }}
              aria-label={s.label}
            >
              <Icon size={17} />
            </motion.a>
          );
        })}
      </div>

      {/* Built with */}
      <div className="text-center mb-6">
        <p className="font-ui text-sm" style={{ color: '#6B5A3E' }}>
        </p>
      </div>

      {/* Copyright */}
      <div className="text-center">
        <p className="font-game text-[10px] tracking-[0.15em]" style={{ color: '#7A6848' }}>
          © {year} ARAVINTH L. ALL RIGHTS RESERVED.
        </p>
        <p className="font-game text-[9px] tracking-widest mt-1" style={{ color: '#5A4A30' }}>
          BUILT WITH REACT + VITE + TAILWIND + FRAMER MOTION
        </p>
      </div>

      {/* Bottom stone path */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 track-line" />

      {/* Corner runes */}
      <div className="absolute bottom-4 left-8 font-game text-xs opacity-10" style={{ color: '#C9A84C' }}>✦</div>
      <div className="absolute bottom-4 right-8 font-game text-xs opacity-10" style={{ color: '#C9A84C' }}>✦</div>
    </footer>
  );
}
