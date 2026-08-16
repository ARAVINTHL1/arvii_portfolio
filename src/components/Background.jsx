import { useEffect, useRef } from 'react';

// Nature / forest ambient background — deep forest dark with firefly particles
export default function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const PARTICLE_COUNT = 55;
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.8 + 0.4,
      alpha: Math.random() * 0.5 + 0.1,
      // sage green or warm amber — extracted from photo
      color: Math.random() > 0.5 ? '91,143,74' : '201,168,120',
    }));

    let animId;
    const CONNECTION_DIST = 120;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Update positions
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
      }

      // Draw connections — sage green lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            const opacity = (1 - dist / CONNECTION_DIST) * 0.12;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(91,143,74,${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${p.alpha})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Deep forest dark base */}
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, #090E09 0%, #0C130A 40%, #0A1008 100%)' }}
      />

      {/* Subtle radial forest glows */}
      <div className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 20% 20%, rgba(91,143,74,0.055) 0%, transparent 60%)',
        }}
      />
      <div className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 80% 80%, rgba(201,168,120,0.04) 0%, transparent 60%)',
        }}
      />
      <div className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 50% 60% at 50% 10%, rgba(122,173,103,0.030) 0%, transparent 55%)',
        }}
      />

      {/* Animated particle mesh canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.9 }}
      />

      {/* Subtle dot grid overlay — forest green dots */}
      <div className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(91,143,74,0.07) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          opacity: 0.4,
        }}
      />

      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-32"
        style={{ background: 'linear-gradient(180deg, #090E09 0%, transparent 100%)' }}
      />
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32"
        style={{ background: 'linear-gradient(0deg, #090E09 0%, transparent 100%)' }}
      />
    </div>
  );
}
