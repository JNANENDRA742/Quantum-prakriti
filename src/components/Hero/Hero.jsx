import { useEffect, useState, useRef } from 'react';
import { Activity, ArrowRight, ChevronDown, CircleDot, ShieldCheck, Sparkles } from 'lucide-react';

export default function Hero({ heroRef, scanStarted, onScan }) {
  const [visible, setVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const localRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  // Track mouse for parallax + spotlight
  useEffect(() => {
    const el = localRef.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      setMousePos({ x, y });
      el.style.setProperty('--mouse-x', `${x * 100}%`);
      el.style.setProperty('--mouse-y', `${y * 100}%`);
    };
    el.addEventListener('mousemove', onMove);
    return () => el.removeEventListener('mousemove', onMove);
  }, []);

  const line1 = 'Know your';
  const line2 = 'cryptography.';
  const line3 = 'Prepare for';
  const line4 = 'what comes next.';

  const reveal = (text, baseDelay = 0, stagger = 0.03, className = '', style = {}) => (
    <span className="inline-block">
      {text.split('').map((ch, i) => (
        <span
          key={i}
          className={`inline-block ${className}`}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0) rotate(0)' : 'translateY(60%) rotate(3deg)',
            filter: visible ? 'blur(0)' : 'blur(6px)',
            transition: `opacity 0.9s ${baseDelay + i * stagger}s cubic-bezier(0.16,1,0.3,1), transform 0.9s ${baseDelay + i * stagger}s cubic-bezier(0.16,1,0.3,1), filter 0.9s ${baseDelay + i * stagger}s`,
            whiteSpace: 'pre',
            ...style,
          }}
        >
          {ch}
        </span>
      ))}
    </span>
  );

  // Precompute random particles so they don't change on re-render
  const dustParticles = useRef(
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 2.2 + 0.6,
      delay: Math.random() * 20,
      duration: Math.random() * 16 + 14,
      drift: (Math.random() - 0.5) * 220,
      hue: Math.random() > 0.5 ? '#9cff43' : '#68f6c2',
    }))
  ).current;

  const shootingStars = useRef(
    Array.from({ length: 4 }, (_, i) => ({
      id: i,
      top: 10 + i * 22,
      delay: i * 5,
      duration: 9 + i * 2,
    }))
  ).current;

  return (
    <>
      <style>{`
        /* ============ EXISTING ============ */
        @keyframes breathe {
          0%, 100% { opacity: 0.55; transform: scale(1); }
          50%      { opacity: 0.85; transform: scale(1.04); }
        }
        @keyframes water {
          0%   { background-position: 0% 0%; }
          100% { background-position: 200% 200%; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.5; transform: scale(1.4); }
        }
        @keyframes rotateRadar {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* ============ NEW LIVE BACKGROUND ============ */
        @keyframes auroraDrift1 {
          0%   { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 0.55; }
          50%  { transform: translate(60px, -40px) scale(1.15) rotate(6deg); opacity: 0.85; }
          100% { transform: translate(-40px, 40px) scale(1.05) rotate(-4deg); opacity: 0.65; }
        }
        @keyframes auroraDrift2 {
          0%   { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 0.45; }
          50%  { transform: translate(-70px, 50px) scale(1.2) rotate(-8deg); opacity: 0.75; }
          100% { transform: translate(50px, -30px) scale(1.1) rotate(5deg); opacity: 0.55; }
        }
        @keyframes auroraDrift3 {
          0%   { transform: translate(0, 0) scale(1); opacity: 0.4; }
          50%  { transform: translate(80px, 60px) scale(1.18); opacity: 0.7; }
          100% { transform: translate(-50px, -50px) scale(1.08); opacity: 0.5; }
        }
        @keyframes gridShift {
          0%   { background-position: 0 0, 0 0; }
          100% { background-position: 80px 80px, 80px 80px; }
        }
        @keyframes dotMatrixShift {
          0%   { background-position: 0 0; }
          100% { background-position: 32px 32px; }
        }
        @keyframes conicSpin {
          0%   { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes conicSpinReverse {
          0%   { transform: translate(-50%, -50%) rotate(360deg); }
          100% { transform: translate(-50%, -50%) rotate(0deg); }
        }
        @keyframes scanLineVertical {
          0%   { top: -5%; opacity: 0; }
          10%  { opacity: 0.6; }
          90%  { opacity: 0.6; }
          100% { top: 105%; opacity: 0; }
        }
        @keyframes scanLineHorizontal {
          0%   { left: -10%; opacity: 0; }
          10%  { opacity: 0.5; }
          90%  { opacity: 0.5; }
          100% { left: 110%; opacity: 0; }
        }
        @keyframes dustRise {
          0%   { transform: translateY(0) translateX(0) scale(1); opacity: 0; }
          10%  { opacity: 0.7; }
          50%  { opacity: 0.9; transform: translateY(-50vh) translateX(calc(var(--drift) * 0.5)) scale(1.3); }
          90%  { opacity: 0.5; }
          100% { transform: translateY(-110vh) translateX(var(--drift)) scale(0.7); opacity: 0; }
        }
        @keyframes shootingStar {
          0%   { transform: translateX(-150px) translateY(0); opacity: 0; }
          5%   { opacity: 1; }
          90%  { opacity: 1; }
          100% { transform: translateX(calc(100vw + 300px)) translateY(120px); opacity: 0; }
        }
        @keyframes pulseRingLarge {
          0%   { transform: translate(-50%, -50%) scale(0.6); opacity: 0.6; }
          100% { transform: translate(-50%, -50%) scale(2.2); opacity: 0; }
        }
        @keyframes rotateRing {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes rotateRingReverse {
          0%   { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
        @keyframes floatOrbital {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25%      { transform: translate(8px, -12px) scale(1.05); }
          50%      { transform: translate(-6px, -8px) scale(1); }
          75%      { transform: translate(10px, 6px) scale(1.08); }
        }
        @keyframes hexRotate {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes hexRotateReverse {
          0%   { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
        @keyframes cornerPulse {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50%      { opacity: 0.35; transform: scale(1.15); }
        }
        @keyframes waveShift {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes waveShiftReverse {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes noiseFlicker {
          0%, 100% { opacity: 0.03; }
          50%      { opacity: 0.06; }
        }
        @keyframes orbitDot {
          0%   { transform: rotate(0deg) translateX(140px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(140px) rotate(-360deg); }
        }
        @keyframes orbitDotReverse {
          0%   { transform: rotate(360deg) translateX(200px) rotate(-360deg); }
          100% { transform: rotate(0deg) translateX(200px) rotate(0deg); }
        }
        @keyframes dataStreak {
          0%   { transform: translateY(0) scaleY(0.3); opacity: 0; }
          15%  { opacity: 0.7; }
          50%  { transform: translateY(-40vh) scaleY(1.2); opacity: 0.9; }
          85%  { opacity: 0.5; }
          100% { transform: translateY(-90vh) scaleY(0.4); opacity: 0; }
        }
      `}</style>

      <section
        id="home"
        ref={localRef}
        className="relative min-h-[1000px] px-[6vw] pt-[150px] pb-[100px] overflow-hidden max-[950px]:min-h-[900px] max-[950px]:pt-[140px] max-[600px]:!px-5 max-[600px]:!pt-[120px] max-[600px]:!pb-[60px]"
        style={{
          background:
            'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(74,255,113,0.14), transparent 28%), radial-gradient(circle at 70% 30%, rgba(19,150,74,0.32), transparent 40%), linear-gradient(120deg, #03100a 0%, #062215 48%, #03100a 100%)',
        }}
      >
        {/* ============================================================
            LAYER 1 — BIG AURORA BLOBS (3 large drifting gradient clouds)
            ============================================================ */}
        <div
          className="absolute -top-[20%] -left-[15%] w-[900px] h-[900px] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(0,255,132,0.22) 0%, rgba(0,255,132,0.05) 40%, transparent 70%)',
            filter: 'blur(80px)',
            animation: 'auroraDrift1 20s ease-in-out infinite alternate',
          }}
        />
        <div
          className="absolute top-[10%] -right-[20%] w-[1000px] h-[1000px] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(99,255,53,0.20) 0%, rgba(99,255,53,0.05) 40%, transparent 70%)',
            filter: 'blur(90px)',
            animation: 'auroraDrift2 26s ease-in-out infinite alternate',
          }}
        />
        <div
          className="absolute -bottom-[25%] left-[30%] w-[850px] h-[850px] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(104,246,194,0.18) 0%, transparent 65%)',
            filter: 'blur(100px)',
            animation: 'auroraDrift3 32s ease-in-out infinite alternate',
          }}
        />

        {/* Breathe overlay (existing) */}
        <div
          className="absolute -inset-[20%] opacity-70 blur-[40px] pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 20% 30%, rgba(0,255,132,0.10), transparent 22%), radial-gradient(circle at 80% 65%, rgba(99,255,53,0.10), transparent 26%)',
            animation: 'breathe 7s ease-in-out infinite alternate',
          }}
        />

        {/* ============================================================
            LAYER 2 — SHIFTING GRID + DOT MATRIX
            ============================================================ */}
        <div
          className="absolute inset-0 opacity-[0.14] pointer-events-none [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(109,255,130,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(109,255,130,0.10) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            animation: 'gridShift 24s linear infinite',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.10] pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(150,255,150,0.55) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
            maskImage:
              'radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 80%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 80%)',
            animation: 'dotMatrixShift 12s linear infinite',
          }}
        />

        {/* ============================================================
            LAYER 3 — ROTATING CONIC GRADIENTS (aura)
            ============================================================ */}
        <div
          className="absolute top-[35%] left-[-8%] w-[600px] h-[600px] rounded-full pointer-events-none opacity-[0.10]"
          style={{
            background:
              'conic-gradient(from 0deg, transparent, #00ff84, transparent, #63ff35, transparent)',
            filter: 'blur(70px)',
            animation: 'conicSpin 45s linear infinite',
          }}
        />
        <div
          className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.09]"
          style={{
            background:
              'conic-gradient(from 90deg, transparent, #68f6c2, transparent, #9cff43, transparent)',
            filter: 'blur(80px)',
            animation: 'conicSpinReverse 60s linear infinite',
          }}
        />

        {/* ============================================================
            LAYER 4 — VERTICAL + HORIZONTAL SCAN LINES
            ============================================================ */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute left-[8%] right-[8%] h-[1.5px]"
            style={{
              background:
                'linear-gradient(90deg, transparent, #9cff43, transparent)',
              boxShadow: '0 0 22px rgba(156,255,67,0.6)',
              animation: 'scanLineVertical 9s ease-in-out infinite',
            }}
          />
          <div
            className="absolute left-[8%] right-[8%] h-[1px]"
            style={{
              background:
                'linear-gradient(90deg, transparent, #68f6c2, transparent)',
              boxShadow: '0 0 18px rgba(104,246,194,0.5)',
              animation: 'scanLineVertical 12s 3s ease-in-out infinite',
            }}
          />
          <div
            className="absolute top-[15%] bottom-[15%] w-[1px]"
            style={{
              background:
                'linear-gradient(180deg, transparent, #9cff43, transparent)',
              boxShadow: '0 0 20px rgba(156,255,67,0.5)',
              animation: 'scanLineHorizontal 14s 2s ease-in-out infinite',
            }}
          />
        </div>

        {/* ============================================================
            LAYER 5 — SHOOTING STARS
            ============================================================ */}
        {shootingStars.map((s) => (
          <span
            key={s.id}
            className="absolute h-[1px] pointer-events-none rounded-full"
            style={{
              top: `${s.top}%`,
              left: 0,
              width: '160px',
              background:
                'linear-gradient(90deg, transparent, #9cff43, transparent)',
              boxShadow: '0 0 12px #9cff43',
              opacity: 0,
              animation: `shootingStar ${s.duration}s ${s.delay}s linear infinite`,
            }}
          />
        ))}

        {/* ============================================================
            LAYER 6 — FLOATING DUST PARTICLES
            ============================================================ */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {dustParticles.map((p) => (
            <span
              key={p.id}
              className="absolute rounded-full"
              style={{
                left: `${p.left}%`,
                bottom: '-20px',
                width: p.size,
                height: p.size,
                background: p.hue,
                opacity: 0.3,
                boxShadow:
                  p.size > 1.6 ? `0 0 12px ${p.hue}` : 'none',
                animation: `dustRise ${p.duration}s linear ${p.delay}s infinite`,
                '--drift': `${p.drift}px`,
              }}
            />
          ))}
        </div>

        {/* ============================================================
            LAYER 7 — PULSING CONCENTRIC RINGS (background aura)
            ============================================================ */}
        <div className="absolute top-[40%] left-[65%] pointer-events-none">
          {[0, 1.3, 2.6].map((d, i) => (
            <span
              key={i}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#9cff43]/25"
              style={{
                width: 120 + i * 60,
                height: 120 + i * 60,
                animation: `pulseRingLarge 5s ${d}s ease-out infinite`,
              }}
            />
          ))}
        </div>

        {/* ============================================================
            LAYER 8 — ROTATING ORBITAL RINGS WITH DOTS
            ============================================================ */}
        <div
          className="absolute top-[20%] right-[6%] w-[280px] h-[280px] rounded-full border border-dashed border-[rgba(156,255,67,0.18)] pointer-events-none"
          style={{ animation: 'rotateRing 45s linear infinite' }}
        >
          <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#9cff43] shadow-[0_0_16px_#9cff43]" />
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#68f6c2] shadow-[0_0_12px_#68f6c2]" />
        </div>
        <div
          className="absolute bottom-[18%] left-[4%] w-[220px] h-[220px] rounded-full border border-[rgba(104,246,194,0.16)] pointer-events-none"
          style={{ animation: 'rotateRingReverse 55s linear infinite' }}
        >
          <span className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#68f6c2] shadow-[0_0_14px_#68f6c2]" />
        </div>

        {/* Orbiting satellites */}
        <div
          className="absolute top-1/2 left-1/2 w-0 h-0 pointer-events-none"
          style={{ animation: 'rotateRing 32s linear infinite' }}
        >
          <span className="absolute w-2 h-2 rounded-full bg-[#9cff43] shadow-[0_0_20px_#9cff43]"
            style={{ animation: 'orbitDot 32s linear infinite' }} />
        </div>
        <div
          className="absolute top-1/2 left-1/2 w-0 h-0 pointer-events-none"
          style={{ animation: 'rotateRingReverse 40s linear infinite' }}
        >
          <span className="absolute w-1.5 h-1.5 rounded-full bg-[#68f6c2] shadow-[0_0_16px_#68f6c2]"
            style={{ animation: 'orbitDotReverse 40s linear infinite' }} />
        </div>

        {/* ============================================================
            LAYER 9 — VERTICAL DATA STREAKS (fiber-optic feel)
            ============================================================ */}
        {[
          { left: '12%', delay: 0, dur: 8 },
          { left: '32%', delay: 2, dur: 10 },
          { left: '58%', delay: 4, dur: 9 },
          { left: '76%', delay: 1, dur: 11 },
          { left: '90%', delay: 3, dur: 7.5 },
        ].map((s, i) => (
          <span
            key={i}
            className="absolute bottom-0 w-[1.5px] pointer-events-none rounded-full"
            style={{
              left: s.left,
              height: '120px',
              background:
                'linear-gradient(180deg, transparent, #9cff43, transparent)',
              boxShadow: '0 0 14px rgba(156,255,67,0.7)',
              transformOrigin: 'bottom',
              animation: `dataStreak ${s.dur}s ${s.delay}s ease-in-out infinite`,
            }}
          />
        ))}

        {/* ============================================================
            LAYER 10 — ROTATING HEXAGONS (top + bottom corners)
            ============================================================ */}
        <svg
          className="absolute top-[8%] left-[3%] w-24 h-24 opacity-[0.08] pointer-events-none"
          viewBox="0 0 100 100"
          style={{ animation: 'hexRotate 60s linear infinite' }}
        >
          <polygon points="50,5 95,27 95,73 50,95 5,73 5,27" fill="none" stroke="#9cff43" strokeWidth="1.5" />
        </svg>
        <svg
          className="absolute bottom-[8%] right-[3%] w-32 h-32 opacity-[0.07] pointer-events-none"
          viewBox="0 0 100 100"
          style={{ animation: 'hexRotateReverse 70s linear infinite' }}
        >
          <polygon points="50,5 95,27 95,73 50,95 5,73 5,27" fill="none" stroke="#68f6c2" strokeWidth="1.5" />
          <polygon points="50,20 82,36 82,64 50,80 18,64 18,36" fill="none" stroke="#9cff43" strokeWidth="0.7" />
        </svg>

        {/* ============================================================
            LAYER 11 — WAVE SILHOUETTES (bottom)
            ============================================================ */}
        <div className="absolute bottom-0 left-0 right-0 h-[220px] pointer-events-none overflow-hidden opacity-[0.10]">
          <svg
            className="absolute bottom-0 left-0 w-[200%] h-full"
            viewBox="0 0 2400 220"
            preserveAspectRatio="none"
            style={{ animation: 'waveShift 26s linear infinite' }}
          >
            <defs>
              <linearGradient id="waveGrad1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#9cff43" stopOpacity="0" />
                <stop offset="100%" stopColor="#9cff43" stopOpacity="0.55" />
              </linearGradient>
            </defs>
            <path
              d="M0,120 C300,60 600,180 900,120 C1200,60 1500,180 1800,120 C2100,60 2400,180 2400,120 L2400,220 L0,220 Z"
              fill="url(#waveGrad1)"
            />
          </svg>
          <svg
            className="absolute bottom-0 left-0 w-[200%] h-full"
            viewBox="0 0 2400 220"
            preserveAspectRatio="none"
            style={{ animation: 'waveShiftReverse 34s linear infinite' }}
          >
            <defs>
              <linearGradient id="waveGrad2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#68f6c2" stopOpacity="0" />
                <stop offset="100%" stopColor="#68f6c2" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <path
              d="M0,160 C400,100 800,220 1200,160 C1600,100 2000,220 2400,160 L2400,220 L0,220 Z"
              fill="url(#waveGrad2)"
            />
          </svg>
        </div>

        {/* ============================================================
            LAYER 12 — CORNER PULSES
            ============================================================ */}
        {[
          { top: '20%', left: '15%' },
          { top: '65%', right: '12%' },
          { bottom: '25%', right: '25%' },
          { top: '35%', left: '40%' },
        ].map((pos, i) => (
          <span
            key={i}
            className="absolute w-2 h-2 rounded-full bg-[#9cff43] pointer-events-none"
            style={{
              ...pos,
              boxShadow: '0 0 16px #9cff43',
              animation: `cornerPulse ${3 + i * 0.8}s ${i * 0.5}s ease-in-out infinite`,
            }}
          />
        ))}

        {/* ============================================================
            LAYER 13 — SUBTLE NOISE / FLICKER OVERLAY
            ============================================================ */}
        <div
          className="absolute inset-0 pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, rgba(154,255,67,0.05) 0px, rgba(154,255,67,0.05) 1px, transparent 1px, transparent 3px)',
            animation: 'noiseFlicker 5s ease-in-out infinite',
          }}
        />

        {/* Existing radial ripple overlay */}
        <div
          className="absolute inset-0 opacity-[0.12] scale-[1.4] pointer-events-none"
          style={{
            backgroundImage:
              'repeating-radial-gradient(ellipse at 50% 50%, rgba(71,255,118,0.12) 0, rgba(71,255,118,0.02) 2px, transparent 4px, transparent 13px)',
            animation: 'water 18s linear infinite',
          }}
        />

        {/* Floating NIST labels */}
        <FloatLabel className="top-[24%] left-[3%]" delay="0s">NIST FIPS 203 · ML-KEM</FloatLabel>
        <FloatLabel className="top-[26%] right-[4%]" delay="1.2s">NIST FIPS 204 · ML-DSA</FloatLabel>
        <FloatLabel className="bottom-[30%] left-[5%]" delay="2.4s">NIST FIPS 205 · SLH-DSA</FloatLabel>

        {/* ============================================================
            CONTENT (unchanged)
            ============================================================ */}
        <div className="relative z-[4] max-w-[1500px] mx-auto">
          <div className="max-w-[900px]">
            <div
              className="inline-flex items-center gap-[9px] px-[14px] py-[9px] border border-[rgba(149,255,103,0.20)] bg-[rgba(18,71,35,0.35)] rounded-[20px] text-[#b8dcb9] text-[10px] font-semibold tracking-[0.14em] backdrop-blur-sm"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateX(0)' : 'translateX(-30px)',
                filter: visible ? 'blur(0)' : 'blur(4px)',
                transition: 'opacity 0.9s 0.1s cubic-bezier(0.16,1,0.3,1), transform 0.9s 0.1s cubic-bezier(0.16,1,0.3,1), filter 0.9s 0.1s',
              }}
            >
              <span className="w-[7px] h-[7px] rounded-full bg-[#9cff43] shadow-[0_0_12px_#91ff50]"
                style={{ animation: 'pulse 2s infinite' }} />
              CRYPTOGRAPHIC VISIBILITY
              <span className="text-[#52685a]">/</span>
              <span className="text-[#7aa584]">01</span>
            </div>

            <h1 className="mt-8 mb-7 font-serif font-normal text-[clamp(56px,6.4vw,104px)] leading-[0.92] tracking-[-0.05em] max-[600px]:text-[52px]">
              <span className="block overflow-hidden">{reveal(line1, 0.2, 0.03)}</span>
              <span className="block overflow-hidden">{reveal(line2, 0.42, 0.03)}</span>
              <span className="block overflow-hidden">
                {reveal(line3, 0.75, 0.03, 'italic text-[#68f6c2]')}
              </span>
              <span className="block overflow-hidden">
                {reveal(line4, 0.95, 0.03, 'italic text-[#68f6c2]')}
              </span>
            </h1>

            <div
              className="w-[60px] h-[2px] bg-gradient-to-r from-[#aaff61] to-transparent mb-6 origin-left"
              style={{
                transform: visible ? 'scaleX(1)' : 'scaleX(0)',
                transition: 'transform 1.1s 1.3s cubic-bezier(0.16,1,0.3,1)',
              }}
            />

            <p
              className="max-w-[560px] text-[#a8b8ac] text-[17px] leading-[1.75] max-[600px]:text-[15px]"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(25px)',
                filter: visible ? 'blur(0)' : 'blur(6px)',
                transition: 'opacity 1s 1.5s cubic-bezier(0.16,1,0.3,1), transform 1s 1.5s cubic-bezier(0.16,1,0.3,1), filter 1s 1.5s',
              }}
            >
              Quantum-safe migration starts with visibility. Discover cryptographic assets,
              understand your quantum exposure, and build evidence for a confident migration
              to post-quantum cryptography.
            </p>

            <div
              className="flex items-center gap-[13px] mt-[36px] max-[600px]:flex-col max-[600px]:items-stretch"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(25px)',
                transition: 'opacity 1s 1.75s cubic-bezier(0.16,1,0.3,1), transform 1s 1.75s cubic-bezier(0.16,1,0.3,1)',
              }}
            >
              <button
                className="group h-14 pl-6 pr-5 rounded-[30px] font-semibold flex items-center justify-center gap-3 border-none text-[#071008] bg-[linear-gradient(100deg,#b4ff50,#5ff2a9)] shadow-[0_15px_45px_rgba(80,255,126,0.22)] hover:-translate-y-[2px] hover:shadow-[0_20px_55px_rgba(80,255,126,0.34)] transition-all"
                onClick={onScan}
              >
                {scanStarted ? (
                  <>
                    <Activity size={18} style={{ animation: 'rotateRadar 1s linear infinite' }} />
                    Scanning environment...
                  </>
                ) : (
                  <>
                    Start readiness scan
                    <span className="w-7 h-7 rounded-full bg-[#071008]/10 grid place-items-center group-hover:bg-[#071008]/20 transition-colors">
                      <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </>
                )}
              </button>
              <button
                className="h-14 px-6 rounded-[30px] font-semibold flex items-center justify-center gap-3 text-[#e1eae2] border border-[rgba(191,255,196,0.22)] bg-white/[0.04] hover:bg-white/[0.09] hover:border-[rgba(191,255,196,0.35)] transition-all group/exp hover:scale-[1.02]"
                onClick={() => document.getElementById('platform')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore the platform
                <ArrowRight size={17} className="group-hover/exp:translate-x-1 transition-transform" />
              </button>
            </div>

            <div
              className="flex flex-wrap gap-x-7 gap-y-3 mt-[32px] text-[#7e9183] text-[11px]"
              style={{ opacity: visible ? 1 : 0, transition: 'opacity 1s 2s' }}
            >
              {[
                { dot: true, label: 'Quantum-safe by design' },
                { Icon: ShieldCheck, label: 'Built for migration visibility', cls: 'text-[#68f6c2]' },
                { Icon: Sparkles, label: 'Aligned with NIST PQC standards', cls: 'text-[#aaff61]' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-[7px]"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(12px)',
                    transition: `opacity 0.8s ${2 + i * 0.1}s cubic-bezier(0.16,1,0.3,1), transform 0.8s ${2 + i * 0.1}s cubic-bezier(0.16,1,0.3,1)`,
                  }}
                >
                  {item.dot ? (
                    <span className="w-[7px] h-[7px] rounded-full bg-[#9cff43] shadow-[0_0_12px_#91ff50]" />
                  ) : (
                    <item.Icon size={15} className={item.cls} />
                  )}
                  {item.label}
                </div>
              ))}
            </div>

            <div
              className="mt-[52px] pt-[26px] border-t border-[rgba(160,255,118,0.10)] flex items-center gap-6 flex-wrap"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 1s 2.4s cubic-bezier(0.16,1,0.3,1), transform 1s 2.4s cubic-bezier(0.16,1,0.3,1)',
              }}
            >
              <span className="font-mono text-[9px] tracking-[0.22em] text-[#556b5d]">
                ALIGNED WITH
              </span>
              <div className="flex items-center gap-5 text-[10px] font-mono tracking-[0.14em] text-[#8aa690]">
                <span>NIST</span>
                <span className="w-px h-3 bg-[rgba(160,255,118,0.20)]" />
                <span>FIPS 203</span>
                <span className="w-px h-3 bg-[rgba(160,255,118,0.20)]" />
                <span>FIPS 204</span>
                <span className="w-px h-3 bg-[rgba(160,255,118,0.20)]" />
                <span>FIPS 205</span>
                <span className="w-px h-3 bg-[rgba(160,255,118,0.20)]" />
                <span>DST · INDIA</span>
              </div>
            </div>
          </div>
        </div>

        <button
          className="absolute bottom-[26px] left-1/2 -translate-x-1/2 z-[5] flex items-center gap-[9px] text-[#718277] border-none bg-transparent text-[11px] hover:text-[#a7ff5c] transition-colors"
          onClick={() => document.getElementById('platform')?.scrollIntoView({ behavior: 'smooth' })}
          style={{ opacity: visible ? 1 : 0, transition: 'opacity 1s 2.6s' }}
        >
          <span className="w-[5px] h-[5px] rounded-full bg-[#a7ff5c]" style={{ animation: 'pulse 2s infinite' }} />
          <CircleDot size={9} />
          Scroll to explore <ChevronDown size={15} className="animate-bounce" />
        </button>
      </section>
    </>
  );
}

function FloatLabel({ children, className = '', delay = '0s' }) {
  return (
    <div
      className={`hidden min-[950px]:block absolute z-[2] text-[rgba(150,238,166,0.28)] font-mono text-[9px] tracking-[0.15em] px-3 py-2 border border-[rgba(125,255,150,0.08)] rounded-[20px] bg-[rgba(8,35,19,0.22)] backdrop-blur-[5px] ${className}`}
      style={{ animation: `pulse 4s ease-in-out infinite`, animationDelay: delay }}
    >
      {children}
    </div>
  );
}