import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Globe, GitBranch, Code2, Send, CheckCircle } from 'lucide-react';
import { useGameState } from '../hooks/useGameState';
import { personalInfo } from '../data/portfolioData';

const contactLinks = [
  { icon: Phone,    label: 'MESSENGER', value: personalInfo.phone,    href: `tel:${personalInfo.phone}`,     color: '#8EAFC2' },
  { icon: Mail,     label: 'SCROLL',    value: personalInfo.email,    href: `mailto:${personalInfo.email}`,  color: '#E07B39' },
  { icon: Globe,    label: 'LINKEDIN',  value: 'aravinth-logesh2632a', href: personalInfo.linkedin,           color: '#8EAFC2' },
  { icon: GitBranch,label: 'CODEX',     value: 'ARAVINTHL1',          href: personalInfo.github,             color: '#7B5EA7' },
  { icon: Code2,    label: 'ARENA',     value: '23CSR021',            href: personalInfo.leetcode,           color: '#C9A84C' },
];

export default function Contact() {
  const { visitSection } = useGameState();
  const ref = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) visitSection('contact'); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [visitSection]);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Hero name required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Valid scroll address required';
    if (!form.message.trim() || form.message.length < 10) errs.message = 'Message too brief for the realm';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    // TODO: integrate EmailJS / Formspree here
    setSubmitted(true);
  };

  const inputClass = (field) =>
    `w-full rounded-lg px-4 py-3 font-lore text-sm placeholder-[#3D2E1A] focus:outline-none transition-colors ${errors[field] ? 'border-[#C85A2A]' : 'border-[#3D2E1A]'} border`;

  return (
    <section id="contact" ref={ref} className="relative py-24 overflow-hidden">
      <div className="section-divider" />

      {/* Chapter opening glow */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }} />

      {/* BG decor */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 90%, rgba(108,43,217,0.1) 0%, transparent 70%)' }} />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Chapter seal */}
          <div className="text-5xl mb-4">✉</div>
          <div className="section-tag">✉ CHAPTER VIII</div>
          <h2 className="font-game text-5xl md:text-7xl" style={{ color: '#EDE0C8' }}>
            CONTACT <span className="gradient-text-gold">ME</span>
          </h2>
          <p className="font-lore italic mt-3 text-lg tracking-wide" style={{ color: '#8EAFC2' }}>
            Let's build something great together.
          </p>
          <div className="w-24 h-1 mx-auto mt-4 rounded"
            style={{ background: 'linear-gradient(90deg, #C9A84C, #E07B39)' }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-game text-[10px] tracking-[0.3em] mb-6" style={{ color: '#3D2E1A' }}>── CONTACT LINKS ──</div>

            <div className="space-y-4">
              {contactLinks.map((link, i) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-4 p-4 game-card group"
                    style={{ border: `1px solid ${link.color}20` }}
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `${link.color}15`,
                        border: `1px solid ${link.color}30`,
                      }}>
                      <Icon size={18} style={{ color: link.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-game text-[9px] tracking-[0.2em] mb-0.5" style={{ color: '#4A3A28' }}>{link.label}</div>
                      <div className="font-lore text-sm transition-colors truncate" style={{ color: '#EDE0C8' }}
                        onMouseEnter={e => e.currentTarget.style.color = link.color}
                        onMouseLeave={e => e.currentTarget.style.color = '#EDE0C8'}>
                        {link.value}
                      </div>
                    </div>
                    <div style={{ color: link.color }} className="opacity-0 group-hover:opacity-100 transition-opacity">→</div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="game-card p-8"
              style={{ border: '1px solid rgba(201,168,76,0.25)' }}>
              <div className="font-game text-[10px] tracking-[0.3em] mb-6" style={{ color: '#3D2E1A' }}>── SEND A MESSAGE ──</div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <CheckCircle size={48} className="mx-auto mb-4" style={{ color: '#4A7C59' }} />
                  <div className="font-game text-3xl mb-2" style={{ color: '#EDE0C8' }}>MESSAGE SENT!</div>
                  <div className="font-game text-sm tracking-widest mb-4" style={{ color: '#C9A84C' }}>DONE ✦</div>
                  <p className="font-lore italic text-sm" style={{ color: '#7A6848' }}>
                    I'll get back to you as soon as possible. Thanks for reaching out!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div>
                    <label className="font-game text-[10px] tracking-[0.15em] block mb-2" style={{ color: '#4A3A28' }}>
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      placeholder="Enter your name..."
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className={inputClass('name')}
                      style={{ background: '#1C1409', color: '#EDE0C8' }}
                    />
                    {errors.name && <p className="font-lore italic text-[9px] mt-1" style={{ color: '#C85A2A' }}>{errors.name}</p>}
                  </div>

                  <div>
                    <label className="font-game text-[10px] tracking-[0.15em] block mb-2" style={{ color: '#4A3A28' }}>
                      EMAIL
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className={inputClass('email')}
                      style={{ background: '#1C1409', color: '#EDE0C8' }}
                    />
                    {errors.email && <p className="font-lore italic text-[9px] mt-1" style={{ color: '#C85A2A' }}>{errors.email}</p>}
                  </div>

                  <div>
                    <label className="font-game text-[10px] tracking-[0.15em] block mb-2" style={{ color: '#4A3A28' }}>
                      MESSAGE
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      placeholder="What's on your mind?"
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      className={inputClass('message') + ' resize-none'}
                      style={{ background: '#1C1409', color: '#EDE0C8' }}
                    />
                    {errors.message && <p className="font-lore italic text-[9px] mt-1" style={{ color: '#C85A2A' }}>{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    id="contact-submit"
                    className="btn-primary w-full py-4 rounded-lg flex items-center justify-center gap-2 text-sm"
                  >
                    <Send size={15} />
                     SEND MESSAGE
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
