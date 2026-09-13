import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Sparkles, Shield, Fingerprint, Lock, Radar, Network } from 'lucide-react';

const items = [
  {
    year: '2027',
    number: '01',
    label: 'ROADMAP REFERENCE',
    title: 'CII foundation milestone',
    text: 'Build the foundation for critical infrastructure.',
  },
  {
    year: '2028',
    number: '02',
    label: 'ROADMAP REFERENCE',
    title: 'Enterprise foundation milestone',
    text: 'Broaden the foundation across enterprise environments.',
  },
  {
    year: '2029',
    number: '03',
    label: 'ROADMAP REFERENCE',
    title: 'CII quantum resiliency target',
    text: 'A reference target for critical infrastructure resilience.',
  },
  {
    year: '2033',
    number: '04',
    label: 'ROADMAP REFERENCE',
    title: 'Enterprise-wide PQC adoption target',
    text: 'A long-range direction for enterprise-wide adoption.',
  },
];

export default function Roadmap() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [visible, setVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const sectionRef = useRef(null);
  const nodeRefs = useRef([]);
  const titleRef = useRef(null);

  // Auto-advance active node if not hovering
  useEffect(() => {
    if (!visible || hoveredIdx !== null) return;
    const interval = setInterval(() => {
      setActiveIdx((p) => (p + 1) % items.length);
    }, 4200);
    return () => clearInterval(interval);
  }, [visible, hoveredIdx]);

  // Intersection observer for reveal
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Cursor spotlight
  const handleMouseMove = (e) => {
    const r = sectionRef.current?.getBoundingClientRect();
    if (!r) return;
    setMousePos({ x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height });
  };

  // Letter-by-letter title animation
  const titleLine1 = 'A reference point';
  const titleLine2 = 'for the road ahead.';

  return (
    <section
      id="roadmap"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="px-[7vw] py-[160px] bg-[#f4f8f1] relative overflow-hidden max-[950px]:py-[100px] max-[950px]:px-[6vw]"
    >
      {/* ====================================================
          BACKGROUND — MULTI-LAYER ANIMATED SYSTEM
          ==================================================== */}

      {/* 1. Large drifting aurora blob — top right */}
      <div
        className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(186,255,120,0.25) 0%, rgba(22,169,97,0.06) 50%, transparent 75%)',
          filter: 'blur(90px)',
          animation: 'blobDrift1 22s ease-in-out infinite alternate, blobPulse 6s ease-in-out infinite',
        }}
      />

      {/* 2. Large drifting aurora blob — bottom left */}
      <div
        className="absolute bottom-[-20%] left-[-12%] w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(104,246,194,0.20) 0%, transparent 70%)',
          filter: 'blur(100px)',
          animation: 'blobDrift2 28s ease-in-out infinite alternate, blobPulse 8s 2s ease-in-out infinite',
        }}
      />

      {/* 3. Third accent blob — center */}
      <div
        className="absolute top-[40%] left-[45%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(154,255,67,0.12) 0%, transparent 70%)',
          filter: 'blur(110px)',
          animation: 'blobDrift3 32s ease-in-out infinite alternate',
        }}
      />

      {/* 4. Rotating conic gradient glow */}
      <div
        className="absolute top-[15%] left-[8%] w-[550px] h-[550px] rounded-full pointer-events-none opacity-[0.08]"
        style={{
          background: 'conic-gradient(from 0deg, transparent, #16a961, transparent, #9cff43, transparent)',
          filter: 'blur(60px)',
          animation: 'spinSlow 45s linear infinite',
        }}
      />

      {/* 5. Pulsing dot matrix */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(22,169,97,0.16) 1px, transparent 1px)`,
          backgroundSize: '42px 42px',
          maskImage: 'radial-gradient(ellipse 90% 70% at 50% 40%, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 50% 40%, black 20%, transparent 80%)',
          animation: 'gridPulse 8s ease-in-out infinite',
        }}
      />

      {/* 6. Diagonal animated scan lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #16a961 0px, #16a961 1px, transparent 1px, transparent 60px)',
          animation: 'scanDiagonal 80s linear infinite',
        }}
      />

      {/* 7. Big rotating orbital ring — top right */}
      <div
        className="absolute top-[12%] right-[8%] w-[220px] h-[220px] rounded-full border border-dashed border-[rgba(22,169,97,0.20)] pointer-events-none"
        style={{ animation: 'spinSlow 35s linear infinite' }}
      >
        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#16a961] shadow-[0_0_16px_#16a961]" />
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#9cff43] shadow-[0_0_12px_#9cff43]" />
      </div>

      {/* 8. Big rotating orbital ring — bottom left */}
      <div
        className="absolute bottom-[15%] left-[6%] w-[180px] h-[180px] rounded-full border border-[rgba(22,169,97,0.14)] pointer-events-none"
        style={{ animation: 'spinSlowReverse 40s linear infinite' }}
      >
        <span className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#9cff43] shadow-[0_0_14px_#9cff43]" />
      </div>

      {/* 9. Concentric pulse rings — center-right */}
      <div className="absolute top-[55%] right-[18%] pointer-events-none">
        {[0, 1.2, 2.4].map((d, i) => (
          <span
            key={i}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#9cff43]/30"
            style={{
              width: 40 + i * 30,
              height: 40 + i * 30,
              animation: `pulseRingExpand 4s ${d}s ease-out infinite`,
            }}
          />
        ))}
      </div>

      {/* 10. Horizontal drifting glow streak */}
      <div
        className="absolute top-[30%] left-0 w-[300px] h-[2px] pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent, #9cff43, transparent)',
          filter: 'blur(1px)',
          opacity: 0.4,
          animation: 'streakDrift 12s linear infinite',
        }}
      />
      <div
        className="absolute top-[68%] left-0 w-[250px] h-[1.5px] pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent, #16a961, transparent)',
          filter: 'blur(1px)',
          opacity: 0.35,
          animation: 'streakDrift 16s 4s linear infinite',
        }}
      />

      {/* 11. Cursor spotlight */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: `radial-gradient(700px circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(186,255,120,0.14), transparent 60%)`,
        }}
      />

      {/* 12. Floating particles */}
      {[
        { top: '12%', left: '6%', size: 6, delay: 0, dur: 5 },
        { top: '70%', left: '94%', size: 7, delay: 1.5, dur: 6 },
        { top: '45%', left: '3%', size: 5, delay: 3, dur: 4.5 },
        { top: '88%', left: '18%', size: 6, delay: 2, dur: 5.5 },
        { top: '20%', left: '90%', size: 5, delay: 4, dur: 5 },
        { top: '55%', left: '48%', size: 4, delay: 2.5, dur: 4 },
        { top: '75%', left: '35%', size: 4, delay: 1, dur: 5.5 },
        { top: '30%', left: '72%', size: 5, delay: 3.5, dur: 6 },
      ].map((d, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-[#9cff43] pointer-events-none"
          style={{
            top: d.top, left: d.left, width: d.size, height: d.size,
            opacity: 0.45, boxShadow: '0 0 16px #9cff43',
            animation: `floatOrbit ${d.dur}s ${d.delay}s ease-in-out infinite`,
          }}
        />
      ))}

      {/* 13. Floating crypto icons */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {[
          { Icon: Shield, top: '18%', left: '5%', delay: 0, size: 26 },
          { Icon: Fingerprint, top: '65%', left: '92%', delay: 2, size: 30 },
          { Icon: Lock, top: '82%', left: '8%', delay: 3, size: 24 },
          { Icon: Radar, top: '30%', left: '95%', delay: 1.5, size: 28 },
          { Icon: Network, top: '10%', left: '55%', delay: 4, size: 26 },
        ].map(({ Icon, top, left, delay, size }, i) => (
          <div
            key={i}
            className="absolute text-[#16a961]"
            style={{
              top, left, opacity: 0.07,
              animation: `floatOrbit ${11 + i * 2}s ${delay}s ease-in-out infinite`,
            }}
          >
            <Icon size={size} strokeWidth={1} />
          </div>
        ))}
      </div>

      {/* 14. Corner accent hexagons */}
      <svg
        className="absolute top-[6%] left-[4%] w-24 h-24 opacity-[0.06] pointer-events-none"
        viewBox="0 0 100 100"
        style={{ animation: 'spinSlow 60s linear infinite' }}
      >
        <polygon points="50,5 95,27 95,73 50,95 5,73 5,27" fill="none" stroke="#16a961" strokeWidth="1" />
      </svg>
      <svg
        className="absolute bottom-[6%] right-[4%] w-28 h-28 opacity-[0.06] pointer-events-none"
        viewBox="0 0 100 100"
        style={{ animation: 'spinSlowReverse 70s linear infinite' }}
      >
        <polygon points="50,5 95,27 95,73 50,95 5,73 5,27" fill="none" stroke="#9cff43" strokeWidth="1" />
        <polygon points="50,20 82,36 82,64 50,80 18,64 18,36" fill="none" stroke="#16a961" strokeWidth="0.5" />
      </svg>

      {/* ====================================================
          CONTENT
          ==================================================== */}
      <div className="relative max-w-[1400px] mx-auto z-10">

        {/* ==================== HEADING ==================== */}
        <div className="mb-[80px]">
          {/* Kicker with animated line and dot */}
          <div
            className="flex items-center gap-3 text-[10px] font-bold tracking-[0.22em] uppercase mb-6"
            style={{
              color: '#16a961',
              opacity: visible ? 1 : 0,
              animation: visible ? 'kickerSlide 1s 0.05s cubic-bezier(0.16,1,0.3,1) both' : 'none',
            }}
          >
            <span
              className="w-6 h-[1.5px] bg-[#16a961] origin-left"
              style={{ animation: visible ? 'lineGrowX 0.9s 0.2s cubic-bezier(0.16,1,0.3,1) both' : 'none' }}
            />
            <span
              className="relative flex items-center justify-center"
            >
              <span className="absolute w-1.5 h-1.5 rounded-full bg-[#9cff43]/60"
                style={{ animation: 'pulseRingSmall 2s infinite' }} />
              <span className="relative w-1.5 h-1.5 rounded-full bg-[#9cff43]"
                style={{ animation: 'dotPulse 2s infinite' }} />
            </span>
            DST TASK FORCE · QUANTUM-SAFE MIGRATION ROADMAP
          </div>

          {/* Title row */}
          <div className="grid grid-cols-[1.2fr_0.8fr] gap-[60px] items-end max-[950px]:grid-cols-1 max-[950px]:gap-8">
            <h2 className="font-sans font-bold text-[clamp(44px,5.4vw,78px)] leading-[1.02] tracking-[-0.035em] text-[#0a1f14]">
              {/* Line 1 — letter by letter reveal */}
              <span className="block overflow-hidden">
                <span className="inline-block">
                  {titleLine1.split('').map((ch, i) => (
                    <span
                      key={i}
                      className="inline-block"
                      style={{
                        opacity: visible ? 1 : 0,
                        animation: visible
                          ? `letterUp 0.8s ${0.15 + i * 0.03}s cubic-bezier(0.16,1,0.3,1) both`
                          : 'none',
                        whiteSpace: 'pre',
                      }}
                    >
                      {ch}
                    </span>
                  ))}
                </span>
              </span>

              {/* Line 2 — gradient shimmer */}
              <span className="block overflow-hidden mt-1">
                <span className="inline-block">
                  {titleLine2.split('').map((ch, i) => (
                    <span
                      key={i}
                      className="inline-block"
                      style={{
                        opacity: visible ? 1 : 0,
                        animation: visible
                          ? `letterUp 0.8s ${0.5 + i * 0.025}s cubic-bezier(0.16,1,0.3,1) both`
                          : 'none',
                        whiteSpace: 'pre',
                        background: 'linear-gradient(90deg, #0e9c5b 0%, #16a961 40%, #9cff43 50%, #16a961 60%, #0e9c5b 100%)',
                        backgroundSize: '250% auto',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        animation: visible
                          ? `letterUp 0.8s ${0.5 + i * 0.025}s cubic-bezier(0.16,1,0.3,1) both, gradientShift 6s ${1.5 + i * 0.05}s ease-in-out infinite, shimmerText 8s ${1.5 + i * 0.05}s linear infinite`
                          : 'none',
                      }}
                    >
                      {ch}
                    </span>
                  ))}
                </span>
              </span>
            </h2>

            {/* CTA — Read the DST roadmap */}
            <div
              className="flex justify-end max-[950px]:justify-start"
              style={{
                opacity: visible ? 1 : 0,
                animation: visible ? 'fadeSlideUp 1s 1s cubic-bezier(0.16,1,0.3,1) both' : 'none',
              }}
            >
              <a
                href="#"
                className="group inline-flex items-center gap-2 pb-1 text-[13px] font-semibold tracking-wide text-[#0e9c5b] relative overflow-hidden"
              >
                <span className="relative">
                  Read the DST roadmap
                  <span
                    className="absolute -bottom-1 left-0 h-[1.5px] w-full bg-[#0e9c5b] origin-left transition-transform duration-500 group-hover:scale-x-0"
                    style={{ transform: 'scaleX(1)' }}
                  />
                  <span
                    className="absolute -bottom-1 left-0 h-[1.5px] w-full bg-gradient-to-r from-[#9cff43] to-[#16a961] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                  />
                </span>
                <ArrowUpRight
                  size={14}
                  className="transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#9cff43] group-hover:rotate-[15deg]"
                />
              </a>
            </div>
          </div>
        </div>

        {/* ==================== TIMELINE ==================== */}
        <div className="relative">

          {/* Dashed connecting line with flowing gradient */}
          <div
            className="absolute top-[26px] left-[3%] right-[3%] h-[2px] max-[950px]:hidden"
            style={{
              opacity: visible ? 1 : 0,
              transition: 'opacity 1.5s ease 0.6s',
            }}
          >
            {/* Base dashed line */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'repeating-linear-gradient(90deg, rgba(22,169,97,0.40) 0px, rgba(22,169,97,0.40) 6px, transparent 6px, transparent 16px)',
              }}
            />
            {/* Flowing gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(154,255,67,0.5), transparent)',
                backgroundSize: '200% 100%',
                animation: 'lineFlow 4s linear infinite',
              }}
            />
            {/* Traveling glow dot */}
            <span
              className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#9cff43]"
              style={{
                boxShadow: '0 0 20px 6px rgba(154,255,67,0.7)',
                animation: 'travelRight 6s ease-in-out infinite',
              }}
            />
            {/* Second delayed traveling dot */}
            <span
              className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#16a961]"
              style={{
                boxShadow: '0 0 15px 4px rgba(22,169,97,0.6)',
                animation: 'travelRight 6s 3s ease-in-out infinite',
              }}
            />
          </div>

          {/* Timeline nodes */}
          <div className="grid grid-cols-4 gap-8 max-[950px]:grid-cols-1 max-[950px]:gap-10">
            {items.map((it, i) => {
              const isActive = i === activeIdx;
              return (
                <div
                  key={it.year}
                  ref={(el) => (nodeRefs.current[i] = el)}
                  data-idx={i}
                  onMouseEnter={() => { setActiveIdx(i); setHoveredIdx(i); }}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className="group/node relative cursor-default"
                  style={{
                    opacity: visible ? 1 : 0,
                    animation: visible
                      ? `nodeEnter 1s ${0.5 + i * 0.15}s cubic-bezier(0.16,1,0.3,1) both`
                      : 'none',
                  }}
                >
                  {/* ===== Year badge ===== */}
                  <div className="relative inline-block mb-8">
                    {/* Expanding pulse rings (active) */}
                    {isActive && (
                      <>
                        <span
                          className="absolute inset-0 rounded-full border-2 border-[#9cff43] pointer-events-none"
                          style={{ animation: 'pulseRing 3s ease-out infinite' }}
                        />
                        <span
                          className="absolute inset-0 rounded-full border border-[#16a961] pointer-events-none"
                          style={{ animation: 'pulseRing 3s 1s ease-out infinite' }}
                        />
                        <span
                          className="absolute inset-0 rounded-full border border-[#9cff43]/50 pointer-events-none"
                          style={{ animation: 'pulseRing 3s 2s ease-out infinite' }}
                        />
                      </>
                    )}

                    {/* Rotating dashed orbit */}
                    {isActive && (
                      <span
                        className="absolute -inset-2.5 rounded-full border border-dashed border-[#9cff43]/60 pointer-events-none"
                        style={{ animation: 'spinSlow 5s linear infinite' }}
                      >
                        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#9cff43] shadow-[0_0_10px_#9cff43]" />
                      </span>
                    )}

                    {/* Rotating outer orbital on hover */}
                    {hoveredIdx === i && !isActive && (
                      <span
                        className="absolute -inset-3 rounded-full border border-dotted border-[#9cff43]/40 pointer-events-none"
                        style={{ animation: 'spinSlow 8s linear infinite' }}
                      />
                    )}

                    <div
                      className={`relative w-[56px] h-[56px] rounded-full grid place-items-center font-mono text-[11px] font-semibold transition-all duration-500 ${
                        isActive
                          ? 'bg-gradient-to-br from-[#16a961] to-[#0e7a44] text-white border-2 border-[#9cff43]/70 shadow-[0_10px_40px_rgba(22,169,97,0.45),0_0_0_6px_rgba(154,255,67,0.12)] scale-110'
                          : 'bg-white text-[#0e9c5b] border border-[#c9e3cc] group-hover/node:border-[#9cff43] group-hover/node:scale-110 group-hover/node:shadow-[0_10px_30px_rgba(22,169,97,0.20)] group-hover/node:bg-[#f6fbf3]'
                      }`}
                    >
                      {it.year}

                      {/* Glow dot */}
                      {isActive && (
                        <span
                          className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#9cff43]"
                          style={{ animation: 'dotPulse 1.8s infinite' }}
                        />
                      )}
                    </div>
                  </div>

                  {/* ===== Number + Label ===== */}
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`font-mono text-[10px] tracking-[0.24em] transition-all duration-500 ${
                        isActive ? 'text-[#16a961] -translate-y-0.5' : 'text-[#7a8f82]'
                      }`}
                    >
                      {it.number}
                    </span>
                    <span
                      className={`h-[1px] transition-all duration-700 ${
                        isActive ? 'w-6 bg-gradient-to-r from-[#16a961] to-[#9cff43]' : 'w-4 bg-[#c9e3cc]'
                      }`}
                    />
                    <span
                      className={`font-mono text-[10px] tracking-[0.24em] transition-all duration-500 ${
                        isActive ? 'text-[#16a961] -translate-y-0.5' : 'text-[#7a8f82]'
                      }`}
                    >
                      {it.label}
                    </span>
                  </div>

                  {/* ===== Title ===== */}
                  <h3
                    className={`font-serif font-normal text-[clamp(20px,2vw,26px)] leading-[1.15] tracking-[-0.02em] transition-all duration-500 ${
                      isActive ? 'text-[#0a1f14] translate-x-0' : 'text-[#3b4e42]'
                    }`}
                    style={{
                      background: isActive
                        ? 'linear-gradient(90deg, #0a1f14 0%, #0e9c5b 50%, #0a1f14 100%)'
                        : 'none',
                      backgroundSize: '200% auto',
                      WebkitBackgroundClip: isActive ? 'text' : 'border-box',
                      WebkitTextFillColor: isActive ? 'transparent' : '#3b4e42',
                      backgroundClip: isActive ? 'text' : 'border-box',
                      animation: isActive ? 'gradientShift 6s ease-in-out infinite' : 'none',
                    }}
                  >
                    {it.title}
                  </h3>

                  {/* ===== Animated underline ===== */}
                  <span
                    className={`block mt-3 h-[2px] rounded-full transition-all duration-700 ${
                      isActive ? 'w-14 bg-gradient-to-r from-[#16a961] to-[#9cff43]' : 'w-0 bg-[#c9e3cc]'
                    }`}
                    style={isActive ? {
                      backgroundSize: '200% 100%',
                      animation: 'borderFlow 3s linear infinite',
                    } : {}}
                  />

                  {/* ===== Description ===== */}
                  <p
                    className={`mt-4 leading-[1.7] text-[14px] max-w-[280px] transition-all duration-500 ${
                      isActive ? 'text-[#3b4e42] translate-y-0' : 'text-[#7a8f82]'
                    }`}
                  >
                    {it.text}
                  </p>

                  {/* Active glow halo */}
                  <span
                    className={`absolute -inset-6 rounded-3xl pointer-events-none -z-10 transition-opacity duration-700 ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                      background: 'radial-gradient(circle at 30% 30%, rgba(154,255,67,0.15), transparent 65%)',
                      filter: 'blur(24px)',
                      animation: isActive ? 'glowPulseSlow 4s ease-in-out infinite' : 'none',
                    }}
                  />

                  {/* Hover underline shimmer */}
                  <span
                    className={`absolute bottom-[-10px] left-0 h-[1px] transition-all duration-700 ${
                      hoveredIdx === i && !isActive ? 'w-full opacity-100' : 'w-0 opacity-0'
                    }`}
                    style={{
                      background: 'linear-gradient(90deg, transparent, #9cff43, transparent)',
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* Mobile connecting line */}
          <div className="hidden max-[950px]:block absolute left-[26px] top-8 bottom-8 w-[2px]"
            style={{
              backgroundImage: 'repeating-linear-gradient(180deg, rgba(22,169,97,0.40) 0px, rgba(22,169,97,0.40) 6px, transparent 6px, transparent 14px)',
            }}
          >
            <span
              className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#9cff43]"
              style={{
                boxShadow: '0 0 15px 4px rgba(154,255,67,0.6)',
                animation: 'travelDown 6s ease-in-out infinite',
              }}
            />
          </div>
        </div>

        {/* ==================== BOTTOM ACCENT ==================== */}
        <div
          className="mt-20 flex items-center justify-center gap-4"
          style={{
            opacity: visible ? 1 : 0,
            animation: visible ? 'fadeSlideUp 1s 1.4s cubic-bezier(0.16,1,0.3,1) both' : 'none',
          }}
        >
          <span
            className="h-[1px] w-24 origin-right"
            style={{
              background: 'linear-gradient(90deg, transparent, #c9e3cc)',
              animation: visible ? 'lineGrowX 1s 1.6s cubic-bezier(0.16,1,0.3,1) both' : 'none',
            }}
          />
          <span className="relative flex items-center justify-center">
            <span className="absolute w-3 h-3 rounded-full bg-[#9cff43]/40"
              style={{ animation: 'pulseRingSmall 2s infinite' }} />
            <Sparkles size={14} className="relative text-[#9cff43]"
              style={{ animation: 'spinSlow 8s linear infinite' }} />
          </span>
          <span
            className="h-[1px] w-24 origin-left"
            style={{
              background: 'linear-gradient(90deg, #c9e3cc, transparent)',
              animation: visible ? 'lineGrowX 1s 1.6s cubic-bezier(0.16,1,0.3,1) both' : 'none',
            }}
          />
        </div>
      </div>

      <style>{`
        /* ===== BACKGROUND ===== */
        @keyframes blobDrift1 {
          0%   { transform: translate(0, 0) scale(1); }
          100% { transform: translate(-70px, 60px) scale(1.18); }
        }
        @keyframes blobDrift2 {
          0%   { transform: translate(0, 0) scale(1); }
          100% { transform: translate(80px, -50px) scale(1.12); }
        }
        @keyframes blobDrift3 {
          0%   { transform: translate(0, 0) scale(1); }
          100% { transform: translate(-50px, -60px) scale(1.2); }
        }
        @keyframes blobPulse {
          0%, 100% { opacity: 0.9; }
          50%      { opacity: 1; }
        }
        @keyframes gridPulse {
          0%, 100% { opacity: 0.5; }
          50%      { opacity: 0.75; }
        }
        @keyframes scanDiagonal {
          0%   { background-position: 0 0; }
          100% { background-position: 800px 800px; }
        }
        @keyframes spinSlow {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes spinSlowReverse {
          0%   { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
        @keyframes floatOrbit {
          0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
          25%      { transform: translateY(-15px) rotate(8deg) scale(1.06); }
          50%      { transform: translateY(-8px) rotate(-5deg) scale(1); }
          75%      { transform: translateY(-20px) rotate(6deg) scale(1.1); }
        }
        @keyframes pulseRingExpand {
          0%   { transform: translate(-50%, -50%) scale(0.6); opacity: 0.6; }
          100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
        }
        @keyframes streakDrift {
          0%   { transform: translateX(-100%); opacity: 0; }
          15%  { opacity: 0.5; }
          85%  { opacity: 0.5; }
          100% { transform: translateX(calc(100vw + 300px)); opacity: 0; }
        }
        @keyframes lineFlow {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        @keyframes travelRight {
          0%   { left: 0%;   opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        @keyframes travelDown {
          0%   { top: 0%;   opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }

        /* ===== TEXT ===== */
        @keyframes kickerSlide {
          0%   { opacity: 0; transform: translateX(-30px); filter: blur(4px); }
          100% { opacity: 1; transform: translateX(0); filter: blur(0); }
        }
        @keyframes lineGrowX {
          0%   { transform: scaleX(0); opacity: 0; }
          100% { transform: scaleX(1); opacity: 1; }
        }
        @keyframes letterUp {
          0%   { opacity: 0; transform: translateY(60%) rotate(4deg); filter: blur(6px); }
          100% { opacity: 1; transform: translateY(0) rotate(0); filter: blur(0); }
        }
        @keyframes fadeSlideUp {
          0%   { opacity: 0; transform: translateY(25px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }
        @keyframes shimmerText {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        /* ===== NODES ===== */
        @keyframes nodeEnter {
          0%   { opacity: 0; transform: translateY(50px) scale(0.9); filter: blur(8px); }
          100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }
        @keyframes pulseRing {
          0%   { transform: scale(1); opacity: 0.7; }
          100% { transform: scale(1.9); opacity: 0; }
        }
        @keyframes pulseRingSmall {
          0%   { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(2.4); opacity: 0; }
        }
        @keyframes dotPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%      { transform: scale(1.7); opacity: 0.55; }
        }
        @keyframes borderFlow {
          0%   { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        @keyframes glowPulseSlow {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50%      { opacity: 1; transform: scale(1.05); }
        }
      `}</style>
    </section>
  );
}