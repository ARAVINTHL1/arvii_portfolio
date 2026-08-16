import { useEffect, useRef, useState } from 'react';

export default function CursorGlow() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const pos     = useRef({ x: -200, y: -200 });
  const ring    = useRef({ x: -200, y: -200 });
  const raf     = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const onMove = (e) => { pos.current = { x: e.clientX, y: e.clientY }; };
    const onOver = (e) => {
      const t = e.target;
      const interactive = t.closest('a, button, [role="button"], input, textarea, select, .skill-card, .mission-card, .game-card');
      setIsHovering(!!interactive);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);

    const animate = () => {
      // Dot snaps instantly
      if (dotRef.current) {
        dotRef.current.style.left = `${pos.current.x}px`;
        dotRef.current.style.top  = `${pos.current.y}px`;
      }
      // Ring lags behind (lerp)
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x}px`;
        ringRef.current.style.top  = `${ring.current.y}px`;
      }
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      {/* Outer lagging ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          width: isHovering ? '44px' : '32px',
          height: isHovering ? '44px' : '32px',
          borderRadius: '50%',
          border: `1px solid ${isHovering ? 'rgba(201,168,120,0.55)' : 'rgba(91,143,74,0.40)'}`,
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9998,
          transition: 'width 0.25s ease, height 0.25s ease, border-color 0.25s ease',
          mixBlendMode: 'normal',
        }}
      />
      {/* Inner dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          width: isHovering ? '6px' : '5px',
          height: isHovering ? '6px' : '5px',
          borderRadius: '50%',
          background: isHovering ? '#C9A878' : '#7AAD67',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9999,
          boxShadow: isHovering ? '0 0 10px rgba(201,168,120,0.8)' : '0 0 8px rgba(91,143,74,0.8)',
          transition: 'width 0.2s, height 0.2s, background 0.2s, box-shadow 0.2s',
        }}
      />
    </>
  );
}
