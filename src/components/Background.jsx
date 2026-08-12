import { useEffect, useState } from 'react';

// Ancient forest background with lanterns, fireflies, castle silhouette
export default function Background() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Layer 1: Sky — deep night forest gradient */}
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #050404 0%, #0D0B07 25%, #110D08 55%, #1A1208 100%)' }}
      />

      {/* Stars — warm amber-tinted */}
      {Array.from({ length: 60 }).map((_, i) => {
        const size = Math.random() * 2 + 0.5;
        const warmness = Math.random();
        const starColor = warmness > 0.6 ? '#D4AF6A' : warmness > 0.3 ? '#EDE0C8' : '#8EAFC2';
        return (
          <div
            key={`star-${i}`}
            className="star-particle"
            style={{
              width: size + 'px',
              height: size + 'px',
              top: `${Math.random() * 50}%`,
              left: `${Math.random() * 100}%`,
              background: starColor,
              '--duration': `${Math.random() * 5 + 3}s`,
              '--delay': `${Math.random() * 4}s`,
            }}
          />
        );
      })}

      {/* Moon — warm amber glow */}
      <div className="absolute top-[6%] right-[10%] w-16 h-16 rounded-full"
        style={{
          background: 'radial-gradient(circle at 38% 38%, #FFF5D0, #D4AF6A)',
          boxShadow: '0 0 40px rgba(212,175,106,0.4), 0 0 80px rgba(212,175,106,0.15)',
          transform: `translateY(${scrollY * 0.04}px)`,
        }}
      />
      {/* Moon halo */}
      <div className="absolute top-[4.5%] right-[8.5%] w-24 h-24 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(212,175,106,0.08) 0%, transparent 70%)',
          transform: `translateY(${scrollY * 0.04}px)`,
        }}
      />

      {/* Fireflies */}
      {Array.from({ length: 22 }).map((_, i) => (
        <div
          key={`ff-${i}`}
          className="firefly"
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: `${Math.random() * 100}%`,
            '--ff-duration': `${Math.random() * 6 + 5}s`,
            '--ff-delay': `${Math.random() * 6}s`,
            opacity: Math.random() * 0.6 + 0.2,
          }}
        />
      ))}

      {/* Mist layer */}
      <div className="absolute inset-0 mist-layer pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 120% 40% at 50% 80%, rgba(201,168,76,0.04) 0%, transparent 70%)',
        }}
      />

      {/* Far castle silhouette */}
      <div
        className="absolute bottom-0 left-0 right-0 parallax-layer"
        style={{ transform: `translateY(${scrollY * 0.06}px)` }}
      >
        <CastleSilhouette />
      </div>

      {/* Mid forest trees */}
      <div
        className="absolute bottom-0 left-0 right-0 parallax-layer"
        style={{ transform: `translateY(${scrollY * 0.12}px)` }}
      >
        <ForestTrees />
      </div>

      {/* Floating lanterns */}
      <div
        className="absolute bottom-[25%] left-0 right-0 parallax-layer"
        style={{ transform: `translateY(${scrollY * 0.09}px)` }}
      >
        <FloatingLanterns />
      </div>

      {/* Near foreground trees */}
      <div
        className="absolute bottom-0 left-0 right-0 parallax-layer"
        style={{ transform: `translateY(${scrollY * 0.18}px)` }}
      >
        <ForegroundTrees />
      </div>

      {/* Ground path */}
      <div className="absolute bottom-0 left-0 right-0">
        <GroundPath />
      </div>

      {/* Atmospheric warm glow at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3"
        style={{ background: 'linear-gradient(0deg, rgba(201,168,76,0.06) 0%, transparent 100%)' }}
      />
    </div>
  );
}

function CastleSilhouette() {
  return (
    <svg viewBox="0 0 1440 300" preserveAspectRatio="xMidYMax slice" className="w-full h-auto">
      <defs>
        <linearGradient id="castleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a1208" />
          <stop offset="100%" stopColor="#0d0b07" />
        </linearGradient>
      </defs>
      {/* Castle towers */}
      {/* Main keep */}
      <rect x={560} y={80} width={320} height={220} fill="url(#castleGrad)" />
      {/* Battlements on main keep */}
      {[560,600,640,680,720,760,800,840].map((x, i) => (
        <rect key={i} x={x} y={70} width={30} height={20} fill="#100d08" />
      ))}
      {/* Left tower */}
      <rect x={480} y={120} width={90} height={180} fill="#110e09" />
      {[480,510,540,550].map((x,i) => <rect key={i} x={x} y={110} width={22} height={18} fill="#100d08" />)}
      {/* Left tower top spire */}
      <polygon points="525,60 480,120 570,120" fill="#0f0c08" />
      {/* Right tower */}
      <rect x={870} y={120} width={90} height={180} fill="#110e09" />
      {[870,900,930,950].map((x,i) => <rect key={i} x={x} y={110} width={22} height={18} fill="#100d08" />)}
      <polygon points="915,60 870,120 960,120" fill="#0f0c08" />
      {/* Far left small tower */}
      <rect x={320} y={160} width={60} height={140} fill="#0d0b07" />
      <polygon points="350,120 320,165 380,165" fill="#0c0a07" />
      {/* Far right small tower */}
      <rect x={1060} y={150} width={65} height={150} fill="#0d0b07" />
      <polygon points="1092,108 1060,155 1125,155" fill="#0c0a07" />
      {/* Castle gate arch */}
      <rect x={665} y={200} width={110} height={100} fill="#080604" rx={4} />
      <ellipse cx={720} cy={200} rx={55} ry={30} fill="#080604" />
      {/* Lit window — amber glow */}
      <ellipse cx={720} cy={140} rx={18} ry={22} fill="rgba(201,168,76,0.6)">
        <animate attributeName="opacity" values="0.5;0.9;0.5" dur="3s" repeatCount="indefinite" />
      </ellipse>
      <rect x={380} y={170} width={180} height={130} fill="#0e0b08" />
      <rect x={980} y={170} width={80} height={130} fill="#0e0b08" />
    </svg>
  );
}

function ForestTrees() {
  const trees = [
    [0,320],[80,280],[160,310],[240,260],[320,300],[400,270],[500,285],
    [600,260],[700,300],[800,275],[900,295],[1000,265],[1100,290],[1200,280],[1300,300],[1380,260],
  ];
  return (
    <svg viewBox="0 0 1440 340" preserveAspectRatio="xMidYMax slice" className="w-full h-auto">
      <defs>
        <linearGradient id="treeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e1a0e" />
          <stop offset="100%" stopColor="#0d0b07" />
        </linearGradient>
      </defs>
      {trees.map(([x, treeH], i) => (
        <g key={i}>
          {/* Tree trunk */}
          <rect x={x + 22} y={treeH + 60} width={16} height={280 - treeH} fill="#150f08" />
          {/* Tree canopy layers */}
          <polygon points={`${x+30},${treeH} ${x},${treeH+80} ${x+60},${treeH+80}`} fill="url(#treeGrad)" />
          <polygon points={`${x+30},${treeH+40} ${x-5},${treeH+110} ${x+65},${treeH+110}`} fill="#1a1508" />
          <polygon points={`${x+30},${treeH+70} ${x-10},${treeH+140} ${x+70},${treeH+140}`} fill="#161208" />
        </g>
      ))}
    </svg>
  );
}

function ForegroundTrees() {
  const positions = [0, 140, 320, 560, 780, 1000, 1180, 1350];
  return (
    <svg viewBox="0 0 1440 260" preserveAspectRatio="xMidYMax slice" className="w-full h-auto">
      {positions.map((x, i) => (
        <g key={i}>
          <rect x={x + 18} y={140} width={20} height={120} fill="#0f0b06" />
          <polygon points={`${x+28},60 ${x-10},150 ${x+66},150`} fill="#0d0a06" />
          <polygon points={`${x+28},100 ${x-15},180 ${x+71},180`} fill="#0c0906" />
          <polygon points={`${x+28},135 ${x-18},210 ${x+74},210`} fill="#0b0805" />
        </g>
      ))}
    </svg>
  );
}

function FloatingLanterns() {
  const lanterns = [
    { x: '12%', delay: '0s', dur: '4s', color: '#C9A84C' },
    { x: '28%', delay: '1.5s', dur: '5s', color: '#E07B39' },
    { x: '45%', delay: '0.8s', dur: '3.5s', color: '#D4AF6A' },
    { x: '62%', delay: '2s', dur: '4.5s', color: '#C9A84C' },
    { x: '78%', delay: '0.3s', dur: '3.8s', color: '#E07B39' },
    { x: '90%', delay: '1.2s', dur: '5.5s', color: '#D4AF6A' },
  ];
  return (
    <div className="relative w-full h-20">
      {lanterns.map((l, i) => (
        <div key={i} className="absolute"
          style={{
            left: l.x, top: '10px',
            animation: `lanternSway ${l.dur} ease-in-out infinite`,
            animationDelay: l.delay,
          }}>
          {/* Lantern string */}
          <div style={{ width: '1px', height: '20px', background: '#5A4228', margin: '0 auto' }} />
          {/* Lantern body */}
          <div style={{
            width: '14px', height: '20px',
            borderRadius: '3px',
            background: `rgba(${l.color === '#C9A84C' ? '201,168,76' : l.color === '#E07B39' ? '224,123,57' : '212,175,106'},0.15)`,
            border: `1px solid ${l.color}60`,
            boxShadow: `0 0 12px ${l.color}80, 0 0 25px ${l.color}40`,
            position: 'relative',
          }}>
            {/* Inner flame */}
            <div style={{
              position: 'absolute', top: '4px', left: '4px',
              width: '6px', height: '10px',
              borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
              background: l.color,
              opacity: 0.9,
              animation: `candleFlicker ${parseFloat(l.dur) * 0.5}s ease-in-out infinite`,
              animationDelay: l.delay,
            }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function GroundPath() {
  return (
    <div className="w-full">
      {/* Mossy platform */}
      <div className="w-full h-6" style={{ background: 'linear-gradient(0deg, #0a0805 0%, #1a1208 100%)' }} />
      {/* Stone path */}
      <div className="w-full h-1 track-line" />
      {/* Ground */}
      <div className="w-full h-10" style={{ background: '#0D0B07' }} />
    </div>
  );
}
