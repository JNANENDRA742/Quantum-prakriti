import { useEffect, useState, useRef } from 'react';

const BOOT_LINES = [
  'INITIALIZING QUANTUM SECURITY CORE...',
  'LOADING NIST FIPS 203 · ML-KEM',
  'LOADING NIST FIPS 204 · ML-DSA',
  'LOADING NIST FIPS 205 · SLH-DSA',
  'ENUMERATING CRYPTOGRAPHIC ASSETS',
  'BUILDING CRYPTOGRAPHIC BILL OF MATERIALS',
  'ASSESSING QUANTUM EXPOSURE',
  'MAPPING MIGRATION PATHWAY',
  'ESTABLISHING SECURE CHANNEL',
];

const HASH_CHARS = '0123456789ABCDEF';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [visibleLines, setVisibleLines] = useState([]);
  const [hash, setHash] = useState('0x0000000000000000');
  const [phase, setPhase] = useState('boot'); // boot | ready | exit
  const startRef = useRef(Date.now());

  /* ── Progress bar animation (0 → 100 over 2.8s) ── */
  useEffect(() => {
    const duration = 2800;
    let raf;
    const tick = () => {
      const elapsed = Date.now() - startRef.current;
      const pct = Math.min(100, (elapsed / duration) * 100);
      setProgress(pct);
      if (pct < 100) raf = requestAnimationFrame(tick);
      else setPhase('ready');
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  /* ── Reveal boot lines sequentially ── */
  useEffect(() => {
    const timers = BOOT_LINES.map((line, i) =>
      setTimeout(() => setVisibleLines((v) => [...v, line]), 200 + i * 260)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  /* ── Scramble hash text ── */
  useEffect(() => {
    const id = setInterval(() => {
      let h = '0x';
      for (let i = 0; i < 16; i++) {
        h += HASH_CHARS[Math.floor(Math.random() * HASH_CHARS.length)];
      }
      setHash(h);
    }, 60);
    return () => clearInterval(id);
  }, []);

  /* ── When ready: hold 600ms then fade out ── */
  useEffect(() => {
    if (phase !== 'ready') return;
    const t = setTimeout(() => setPhase('exit'), 650);
    return () => clearTimeout(t);
  }, [phase]);

  /* ── Trigger parent complete after exit animation ── */
  useEffect(() => {
    if (phase !== 'exit') return;
    const t = setTimeout(() => onComplete?.(), 750);
    return () => clearTimeout(t);
  }, [phase, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#03100a] transition-all duration-[750ms] ${
        phase === 'exit' ? 'opacity-0 scale-[1.04] pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* ── Background layers ── */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(74,255,113,0.10),transparent_55%),radial-gradient(circle_at_20%_80%,rgba(19,150,74,0.20),transparent_40%),linear-gradient(120deg,#03100a_0%,#062215_50%,#03100a_100%)]" />

      {/* Cyber grid */}
      <div
        className="absolute inset-0 opacity-[0.18] [mask-image:radial-gradient(circle_at_center,black_30%,transparent_75%)]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(109,255,130,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(109,255,130,0.08) 1px, transparent 1px)',
          backgroundSize: '55px 55px',
        }}
      />

      {/* Breathing glow */}
      <div className="absolute -inset-[25%] opacity-70 blur-[60px] animate-[breathe_6s_ease-in-out_infinite_alternate] bg-[radial-gradient(circle_at_30%_40%,rgba(0,255,132,0.10),transparent_25%),radial-gradient(circle_at_70%_60%,rgba(99,255,53,0.10),transparent_30%)]" />

      {/* Scanline sweep */}
      <div className="absolute left-0 right-0 h-[2px] bg-[linear-gradient(90deg,transparent,#9dff72,transparent)] opacity-70 shadow-[0_0_24px_#9dff72] animate-[scanline_3.4s_ease-in-out_infinite]" />

      {/* Floating particles */}
      <Particles count={26} />

      {/* ── Main content ── */}
      <div className="relative z-10 w-[min(680px,calc(100%-40px))] flex flex-col items-center">
        {/* Radar */}
        <div className="relative w-[220px] h-[220px] mb-12">
          <div className="absolute inset-0 rounded-full border border-[rgba(123,255,154,0.18)]" />
          <div className="absolute inset-[18%] rounded-full border border-[rgba(123,255,154,0.16)]" />
          <div className="absolute inset-[36%] rounded-full border border-[rgba(123,255,154,0.14)]" />
          <div className="absolute inset-[54%] rounded-full border border-[rgba(123,255,154,0.12)]" />

          {/* Rotating sweep */}
          <div className="absolute inset-0 rounded-full animate-[rotateRadar_2.4s_linear_infinite] bg-[conic-gradient(from_0deg,rgba(155,255,120,0.32),transparent_35%)] [mask-image:radial-gradient(circle,black_60%,transparent_72%)]" />

          {/* Pulsing rings */}
          <div className="absolute inset-0 rounded-full border border-[rgba(155,255,120,0.5)] animate-[radarPulse_2.6s_ease-out_infinite]" />
          <div
            className="absolute inset-0 rounded-full border border-[rgba(155,255,120,0.35)] animate-[radarPulse_2.6s_ease-out_infinite]"
            style={{ animationDelay: '1.3s' }}
          />

          {/* Center node */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] rounded-full bg-[#041a0f] border border-[rgba(155,255,120,0.4)] shadow-[0_0_60px_rgba(80,255,126,0.35),inset_0_0_30px_rgba(80,255,126,0.15)] grid place-items-center">
            <div className="relative">
              <div className="w-[26px] h-[26px] border-2 border-[#baff68] rounded-[6px] rotate-45 shadow-[0_0_18px_rgba(186,255,104,0.6)]" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="w-[8px] h-[8px] rounded-full bg-[#aaff61] shadow-[0_0_14px_#aaff61] animate-[pulse_1.6s_infinite]" />
              </div>
            </div>
          </div>

          {/* Orbiting dots */}
          <div className="absolute inset-0 animate-[rotateRadar_3.6s_linear_infinite]">
            <span className="absolute top-[6%] left-1/2 -translate-x-1/2 w-[6px] h-[6px] rounded-full bg-[#aaff61] shadow-[0_0_12px_#aaff61]" />
          </div>
          <div className="absolute inset-[18%] animate-[rotateRadar_5.2s_linear_infinite_reverse]">
            <span className="absolute bottom-[6%] left-1/2 -translate-x-1/2 w-[5px] h-[5px] rounded-full bg-[#68f6c2] shadow-[0_0_10px_#68f6c2]" />
          </div>
        </div>

        {/* Brand */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 rounded-[10px] border-2 border-[#a8ff4e] grid place-items-center rotate-45 shadow-[0_0_22px_rgba(151,255,68,0.4)]">
            <span className="w-[13px] h-[13px] border-2 border-[#baff68] rounded-[4px]" />
          </div>
          <div className="text-center">
            <div className="text-[15px] font-bold tracking-[0.20em] text-[#eaf6ea]">
              Q PRAKRITI
            </div>
            <div className="text-[8px] tracking-[0.28em] text-[#79a88a] mt-[2px]">
              QUANTUM SECURITY PLATFORM
            </div>
          </div>
        </div>

        {/* Status text */}
        <div className="font-mono text-[10px] tracking-[0.30em] text-[#7e9a86] mb-3">
          {phase === 'ready' ? '◆ SYSTEM READY' : '◆ INITIALIZING SECURE SESSION'}
        </div>

        {/* Progress bar */}
        <div className="relative w-full max-w-[480px] h-[3px] rounded-full bg-[rgba(155,255,120,0.10)] overflow-hidden mb-3">
          <div
            className="absolute left-0 top-0 bottom-0 rounded-full bg-[linear-gradient(90deg,#68f6c2,#aaff61,#baff68)] shadow-[0_0_18px_rgba(170,255,97,0.7)] transition-[width] duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
          {/* Moving highlight */}
          <div
            className="absolute top-0 bottom-0 w-[70px] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.55),transparent)] transition-[left] duration-100 ease-linear"
            style={{ left: `calc(${progress}% - 70px)` }}
          />
        </div>

        {/* Progress meta */}
        <div className="w-full max-w-[480px] flex justify-between font-mono text-[9px] tracking-[0.20em] text-[#5f7568] mb-7">
          <span>{hash}</span>
          <span className="text-[#aaff61]">{Math.floor(progress).toString().padStart(3, '0')}%</span>
        </div>

        {/* Boot log */}
        <div className="w-full max-w-[480px] h-[150px] overflow-hidden font-mono text-[10px] leading-[1.9] text-[#8ab294] border-t border-[rgba(155,255,120,0.10)] pt-4">
          {visibleLines.slice(-5).map((line, i, arr) => {
            const isLast = i === arr.length - 1;
            return (
              <div
                key={line}
                className={`flex items-center gap-2 transition-opacity duration-500 ${
                  isLast ? 'opacity-100 text-[#c7ff9d]' : 'opacity-45'
                }`}
              >
                <span className="text-[#68f6c2]">{isLast ? '▸' : '✓'}</span>
                <span>{line}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Corner HUD brackets */}
      <Corner pos="tl" />
      <Corner pos="tr" />
      <Corner pos="bl" />
      <Corner pos="br" />

      {/* Bottom-right version tag */}
      <div className="absolute bottom-5 right-6 font-mono text-[9px] tracking-[0.24em] text-[#4d6557]">
        v2.6.0 · SECURE BOOT
      </div>

      {/* Top-left timestamp */}
      <div className="absolute top-5 left-6 font-mono text-[9px] tracking-[0.24em] text-[#4d6557]">
        {new Date().toISOString().slice(0, 19).replace('T', ' ')}
      </div>
    </div>
  );
}

/* ── Small subcomponents ── */

function Corner({ pos }) {
  const base = 'absolute w-10 h-10 border-[#aaff61]/40 pointer-events-none';
  const map = {
    tl: 'top-4 left-4 border-l-2 border-t-2',
    tr: 'top-4 right-4 border-r-2 border-t-2',
    bl: 'bottom-4 left-4 border-l-2 border-b-2',
    br: 'bottom-4 right-4 border-r-2 border-b-2',
  };
  return <div className={`${base} ${map[pos]}`} />;
}

function Particles({ count = 20 }) {
  const dots = Array.from({ length: count }).map((_, i) => {
    const size = 1 + Math.random() * 2;
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const delay = Math.random() * 4;
    const duration = 4 + Math.random() * 6;
    const color = Math.random() > 0.5 ? '#aaff61' : '#68f6c2';
    return { i, size, left, top, delay, duration, color };
  });

  return (
    <div className="absolute inset-0 pointer-events-none">
      {dots.map((d) => (
        <span
          key={d.i}
          className="absolute rounded-full"
          style={{
            width: `${d.size}px`,
            height: `${d.size}px`,
            left: `${d.left}%`,
            top: `${d.top}%`,
            background: d.color,
            boxShadow: `0 0 8px ${d.color}`,
            opacity: 0.7,
            animation: `floatUp ${d.duration}s ease-in-out ${d.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}