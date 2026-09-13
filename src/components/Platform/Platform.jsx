import { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, Shield, Cloud, Cpu, Sparkles, Key, Layers, Activity, Eye, Fingerprint, Box, GitBranch } from 'lucide-react';

function BackgroundElements() {
  return (
    <>
      <div
        className="absolute top-[-10%] left-[-10%] w-[900px] h-[900px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(186,255,120,0.18) 0%, rgba(22,169,97,0.06) 40%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'auroraFloat1 25s ease-in-out infinite alternate',
        }}
      />
      <div
        className="absolute bottom-[-20%] right-[-15%] w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(154,255,67,0.14) 0%, rgba(22,169,97,0.05) 40%, transparent 70%)',
          filter: 'blur(100px)',
          animation: 'auroraFloat2 30s ease-in-out infinite alternate',
        }}
      />
      <div
        className="absolute top-[30%] left-[40%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(176,240,176,0.12) 0%, transparent 70%)',
          filter: 'blur(90px)',
          animation: 'auroraFloat3 35s ease-in-out infinite alternate',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(22,169,97,0.12) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 90% 70% at 50% 40%, black 10%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 50% 40%, black 10%, transparent 75%)',
        }}
      />
    </>
  );
}

function ParticleField() {
  const particles = useRef(
    Array.from({ length: 22 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 2.5 + 1,
      delay: Math.random() * 20,
      duration: Math.random() * 15 + 15,
      drift: (Math.random() - 0.5) * 120,
    }))
  ).current;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            bottom: '-20px',
            width: p.size,
            height: p.size,
            background: p.size > 2 ? '#9cff43' : '#16a961',
            opacity: 0.18,
            boxShadow: p.size > 2 ? '0 0 10px #9cff43' : 'none',
            animation: `particleDrift ${p.duration}s linear ${p.delay}s infinite`,
            '--drift': `${p.drift}px`,
          }}
        />
      ))}
    </div>
  );
}

function TiltCard({ children, className = '', intensity = 6 }) {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50 });

  const move = useCallback((e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    setTilt({ x: (y - 0.5) * -intensity, y: (x - 0.5) * intensity });
    setGlare({ x: x * 100, y: y * 100 });
  }, [intensity]);

  const leave = useCallback(() => { setTilt({ x: 0, y: 0 }); setGlare({ x: 50, y: 50 }); }, []);

  return (
    <div
      ref={ref}
      onMouseMove={move}
      onMouseLeave={leave}
      className={className}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.4s cubic-bezier(0.2,0.9,0.3,1)',
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
      <div
        className="absolute inset-0 pointer-events-none rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"
        style={{ background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(186,255,120,0.15), transparent 55%)` }}
      />
    </div>
  );
}

export default function Platform() {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

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

  const handleMouseMove = useCallback((e) => {
    const r = sectionRef.current?.getBoundingClientRect();
    if (!r) return;
    setMousePos({ x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height });
  }, []);

  const line1 = 'Cryptography is';
  const line2 = 'already everywhere.';

  return (
    <>
      <style>{`
        @keyframes auroraFloat1 { 0% { transform: translate(0,0) scale(1); opacity: 0.7; } 100% { transform: translate(80px,-60px) scale(1.2); opacity: 1; } }
        @keyframes auroraFloat2 { 0% { transform: translate(0,0) scale(1); opacity: 0.6; } 100% { transform: translate(-70px,70px) scale(1.15); opacity: 1; } }
        @keyframes auroraFloat3 { 0% { transform: translate(0,0) scale(1); opacity: 0.5; } 100% { transform: translate(-50px,-80px) scale(1.25); opacity: 0.9; } }
        @keyframes dotPulse { 0%,100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.6); opacity: 0.6; } }
        @keyframes particleDrift { 0% { transform: translateY(0) translateX(0); opacity: 0; } 10% { opacity: 0.4; } 90% { opacity: 0.4; } 100% { transform: translateY(-100vh) translateX(var(--drift)); opacity: 0; } }
        @keyframes letterUp { 0% { opacity: 0; transform: translateY(60%) rotate(4deg); filter: blur(6px); } 100% { opacity: 1; transform: translateY(0) rotate(0); filter: blur(0); } }
        @keyframes underlineSweep { 0% { transform: scaleX(0); transform-origin: left; opacity: 0; } 100% { transform: scaleX(1); transform-origin: left; opacity: 1; } }
        @keyframes gradientShift { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes shimmerText { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes nodeEnter { 0% { opacity: 0; transform: translateY(30px) scale(0.9); filter: blur(6px); } 100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); } }
        @keyframes lineGrow { 0% { stroke-dashoffset: 1000; opacity: 0; } 100% { stroke-dashoffset: 0; opacity: 0.5; } }
        @keyframes lineFlow { 0% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: -40; } }
        @keyframes pulseRing { 0% { transform: translate(-50%,-50%) scale(1); opacity: 0.6; } 100% { transform: translate(-50%,-50%) scale(2.4); opacity: 0; } }
        @keyframes rotateSlow { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes rotateSlowReverse { 0% { transform: rotate(360deg); } 100% { transform: rotate(0deg); } }
        @keyframes floatSoft { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @keyframes badgeRise { 0%,100% { transform: translateY(0) translateX(-50%); } 50% { transform: translateY(-6px) translateX(-50%); } }
        @keyframes kickerDot { 0%,100% { box-shadow: 0 0 0 0 rgba(154,255,67,0.4); } 50% { box-shadow: 0 0 0 8px rgba(154,255,67,0); } }
      `}</style>

      <section
        id="platform"
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        className="relative min-h-screen pt-24 pb-20 px-[7vw] bg-[#f8fbf7] overflow-hidden max-[950px]:pt-16 max-[950px]:px-[6vw]"
      >
        <BackgroundElements />
        <ParticleField />

        <div
          className="absolute inset-0 pointer-events-none z-[2]"
          style={{
            background: `radial-gradient(700px circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(186,255,120,0.10), transparent 60%)`,
          }}
        />

        <div className="relative max-w-[1400px] mx-auto z-10">
          {/* HEADER */}
          <div className="grid grid-cols-[1.15fr_0.85fr] gap-[60px] items-start mb-14 max-[950px]:grid-cols-1 max-[950px]:gap-8">
            <div>
              <div
                className="flex items-center gap-3 text-[10px] font-bold tracking-[0.22em] text-[#16a961] uppercase mb-7"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateX(0)' : 'translateX(-30px)',
                  filter: visible ? 'blur(0)' : 'blur(4px)',
                  transition: 'opacity 0.9s 0.1s cubic-bezier(0.16,1,0.3,1), transform 0.9s 0.1s cubic-bezier(0.16,1,0.3,1), filter 0.9s 0.1s',
                }}
              >
                <span className="relative flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-[#9cff43]" style={{ animation: 'kickerDot 2s infinite' }} />
                </span>
                <span className="w-8 h-[1.5px] bg-gradient-to-r from-[#16a961] to-transparent" />
                THE ENVIRONMENT
              </div>

              <h1 className="font-sans font-bold text-[clamp(44px,5.2vw,72px)] leading-[1.02] tracking-[-0.035em] text-[#0a1f14]">
                <span className="block overflow-hidden">
                  <span className="inline-block">
                    {line1.split('').map((ch, i) => (
                      <span
                        key={i}
                        className="inline-block"
                        style={{
                          opacity: visible ? 1 : 0,
                          animation: visible ? `letterUp 0.9s ${0.2 + i * 0.03}s cubic-bezier(0.16,1,0.3,1) both` : 'none',
                          whiteSpace: 'pre',
                        }}
                      >
                        {ch}
                      </span>
                    ))}
                  </span>
                </span>
                <span className="block overflow-hidden mt-1">
                  <span className="inline-block">
                    {line2.split('').map((ch, i) => (
                      <span
                        key={i}
                        className="inline-block"
                        style={{
                          opacity: visible ? 1 : 0,
                          whiteSpace: 'pre',
                          background: 'linear-gradient(90deg, #16a961 0%, #0e9c5b 40%, #9cff43 50%, #0e9c5b 60%, #16a961 100%)',
                          backgroundSize: '250% auto',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          animation: visible
                            ? `letterUp 0.9s ${0.6 + i * 0.025}s cubic-bezier(0.16,1,0.3,1) both, gradientShift 6s ${1.5 + i * 0.05}s ease-in-out infinite, shimmerText 8s ${1.5 + i * 0.05}s linear infinite`
                            : 'none',
                        }}
                      >
                        {ch}
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
            </div>

            <div
              className="pt-10 max-[950px]:pt-0"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(25px)',
                filter: visible ? 'blur(0)' : 'blur(6px)',
                transition: 'opacity 1s 1s cubic-bezier(0.16,1,0.3,1), transform 1s 1s cubic-bezier(0.16,1,0.3,1), filter 1s 1s',
              }}
            >
              <p className="text-[16px] leading-[1.75] text-[#5a6a5f] max-w-[340px]">
                A sample topology — not a customer environment — to make the invisible easier to investigate.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-14 h-[2px] bg-gradient-to-r from-[#16a961] to-[#9cff43] rounded-full" />
                <Sparkles size={14} className="text-[#9cff43]" />
              </div>
            </div>
          </div>

          {/* TOPOLOGY CANVAS */}
          <div
            className="relative rounded-[28px] border border-[#e0ece0] bg-white/70 backdrop-blur-md overflow-hidden"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.96)',
              filter: visible ? 'blur(0)' : 'blur(10px)',
              transition: 'opacity 1.2s 0.6s cubic-bezier(0.16,1,0.3,1), transform 1.2s 0.6s cubic-bezier(0.16,1,0.3,1), filter 1.2s 0.6s',
              boxShadow: '0 4px 60px rgba(10,31,20,0.05), 0 1px 0 rgba(255,255,255,0.9) inset',
            }}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#e8f0e8]">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#9cff43] shadow-[0_0_10px_#9cff43]" style={{ animation: 'dotPulse 2s infinite' }} />
                <span className="text-[10px] font-bold tracking-[0.18em] text-[#7a8f82] uppercase">
                  SAMPLE ENVIRONMENT · SIMULATED TOPOLOGY
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                {['#c94f4f', '#e8a33d', '#16a961'].map((c, i) => (
                  <span key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: c, opacity: 0.6 }} />
                ))}
              </div>
            </div>

            <div className="relative h-[560px] max-[950px]:h-[640px] p-6 max-[950px]:p-4">
              <div
                className="absolute inset-4 rounded-2xl pointer-events-none"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(154,255,67,0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(154,255,67,0.05) 1px, transparent 1px)
                  `,
                  backgroundSize: '38px 38px',
                }}
              />

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="relative flex flex-col items-center">
                  <div
                    className="absolute top-1/2 left-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#a9d9ac]/60"
                    style={{ animation: 'rotateSlow 25s linear infinite' }}
                  />
                  <div
                    className="absolute top-1/2 left-1/2 w-44 h-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#16a961]/15"
                    style={{ animation: 'rotateSlowReverse 35s linear infinite' }}
                  />
                  <span
                    className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full border-2 border-[#9cff43] pointer-events-none"
                    style={{ animation: 'pulseRing 3s ease-out infinite' }}
                  />
                  <span
                    className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full border border-[#16a961] pointer-events-none"
                    style={{ animation: 'pulseRing 3s 1s ease-out infinite' }}
                  />
                  <div
                    className="relative w-24 h-24 rounded-3xl grid place-items-center bg-white border-2 border-[#16a961]/30 shadow-[0_10px_50px_rgba(22,169,97,0.25)] transition-all duration-500 hover:scale-110 hover:shadow-[0_10px_60px_rgba(22,169,97,0.4)] cursor-default"
                    style={{ animation: 'floatSoft 5s ease-in-out infinite' }}
                  >
                    <Shield size={38} className="text-[#16a961]" strokeWidth={1.4} />
                    <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#9cff43] shadow-[0_0_12px_#9cff43]" style={{ animation: 'dotPulse 1.8s infinite' }} />
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-[10px] font-bold tracking-[0.16em] text-[#16a961] uppercase leading-tight">
                      Cryptographic
                      <br />
                      Environment
                    </p>
                  </div>
                </div>
              </div>

              {/* LEFT — Applications */}
              <div className="absolute top-[20%] left-[8%] z-10 max-[950px]:top-[12%] max-[950px]:left-[4%]">
                <div
                  className="group/app p-4 rounded-2xl bg-white border border-[#e0ece0] shadow-[0_6px_24px_rgba(10,31,20,0.05)] transition-all duration-500 hover:shadow-[0_12px_40px_rgba(22,169,97,0.12)] hover:-translate-y-1.5 hover:border-[#a9d9ac] min-w-[170px]"
                  style={{ animation: 'nodeEnter 0.9s 0.8s cubic-bezier(0.16,1,0.3,1) both' }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-lg bg-[#16a961]/10 grid place-items-center transition-all duration-500 group-hover/app:scale-110 group-hover/app:bg-[#16a961]/20">
                      <Layers size={13} className="text-[#16a961]" />
                    </div>
                    <p className="text-[10px] font-bold tracking-[0.14em] text-[#0a1f14] uppercase">Applications</p>
                  </div>
                  <div className="space-y-2">
                    {['Payment app', 'Auth service', 'Legacy system'].map((app, i) => (
                      <div
                        key={app}
                        className="flex items-center gap-2 text-[12px] text-[#5a6a5f] hover:text-[#16a961] hover:translate-x-1 transition-all duration-300 cursor-default"
                        style={{ animation: `nodeEnter 0.6s ${1 + i * 0.1}s both` }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#a9d9ac] group-hover/app:bg-[#16a961] transition-colors duration-300" />
                        {app}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT — Supply Chain */}
              <div className="absolute top-[60%] right-[6%] z-10 max-[950px]:top-[54%] max-[950px]:right-[4%]">
                <div
                  className="group/sup p-4 rounded-2xl bg-white border border-[#e0ece0] shadow-[0_6px_24px_rgba(10,31,20,0.05)] transition-all duration-500 hover:shadow-[0_12px_40px_rgba(22,169,97,0.12)] hover:-translate-y-1.5 hover:border-[#a9d9ac] min-w-[170px]"
                  style={{ animation: 'nodeEnter 0.9s 0.9s cubic-bezier(0.16,1,0.3,1) both' }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-lg bg-[#16a961]/10 grid place-items-center transition-all duration-500 group-hover/sup:scale-110 group-hover/sup:bg-[#16a961]/20">
                      <Box size={13} className="text-[#16a961]" />
                    </div>
                    <p className="text-[10px] font-bold tracking-[0.14em] text-[#0a1f14] uppercase">Supply Chain</p>
                  </div>
                  <div className="space-y-2">
                    {['Vendor product', 'Libraries', 'Certificates'].map((item, i) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-[12px] text-[#5a6a5f] hover:text-[#16a961] hover:translate-x-1 transition-all duration-300 cursor-default"
                        style={{ animation: `nodeEnter 0.6s ${1.1 + i * 0.1}s both` }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#a9d9ac] group-hover/sup:bg-[#16a961] transition-colors duration-300" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* TOP — Cloud */}
              <div className="absolute top-[10%] left-1/2 -translate-x-1/2 z-10 max-[950px]:top-[6%]">
                <div
                  className="group/cloud flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#e0ece0] shadow-[0_6px_20px_rgba(10,31,20,0.05)] transition-all duration-500 hover:shadow-[0_10px_30px_rgba(22,169,97,0.15)] hover:-translate-y-1 hover:border-[#a9d9ac] cursor-default"
                  style={{ animation: 'nodeEnter 0.9s 0.7s cubic-bezier(0.16,1,0.3,1) both' }}
                >
                  <Cloud size={14} className="text-[#16a961] transition-transform duration-500 group-hover/cloud:scale-110" />
                  <span className="text-[10px] font-bold tracking-[0.14em] text-[#0a1f14] uppercase">Cloud / Servers</span>
                </div>
              </div>

              {/* BOTTOM — APIs */}
              <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 z-10 max-[950px]:bottom-[4%]">
                <div
                  className="group/api flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#e0ece0] shadow-[0_6px_20px_rgba(10,31,20,0.05)] transition-all duration-500 hover:shadow-[0_10px_30px_rgba(22,169,97,0.15)] hover:-translate-y-1 hover:border-[#a9d9ac] cursor-default"
                  style={{ animation: 'nodeEnter 0.9s 0.7s cubic-bezier(0.16,1,0.3,1) both' }}
                >
                  <Cpu size={14} className="text-[#16a961] transition-transform duration-500 group-hover/api:scale-110" />
                  <span className="text-[10px] font-bold tracking-[0.14em] text-[#0a1f14] uppercase">APIs / Devices</span>
                </div>
              </div>

              {/* Crypto badges */}
              {[
                { label: 'ECC', color: '#16a961', top: '36%', left: '26%', delay: 0 },
                { label: 'RSA', color: '#e8a33d', top: '64%', left: '20%', delay: 0.6 },
                { label: 'ECDH', color: '#16a961', top: '30%', right: '24%', delay: 1.2 },
                { label: 'Unknown', color: '#c94f4f', top: '60%', right: '20%', delay: 1.8 },
              ].map((b, i) => (
                <div
                  key={b.label}
                  className="absolute z-10 transition-transform duration-300 hover:scale-125 cursor-default"
                  style={{
                    top: b.top,
                    left: b.left,
                    right: b.right,
                    animation: `badgeRise 4.5s ${b.delay}s ease-in-out infinite`,
                  }}
                >
                  <span
                    className="px-3 py-1.5 rounded-lg text-[10px] font-bold tracking-wider uppercase border backdrop-blur-sm"
                    style={{
                      color: b.color,
                      background: `${b.color}12`,
                      borderColor: `${b.color}35`,
                      boxShadow: `0 4px 16px ${b.color}18`,
                    }}
                  >
                    {b.label}
                  </span>
                </div>
              ))}

              {/* Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-[5]">
                <defs>
                  <linearGradient id="lineG" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#a9d9ac" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#9cff43" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
                <line x1="50%" y1="50%" x2="16%" y2="26%" stroke="url(#lineG)" strokeWidth="1.3" strokeDasharray="7 7"
                  style={{ animation: 'lineGrow 1.6s 1s ease-out both, lineFlow 3s 2.5s linear infinite' }} />
                <line x1="50%" y1="50%" x2="84%" y2="64%" stroke="url(#lineG)" strokeWidth="1.3" strokeDasharray="7 7"
                  style={{ animation: 'lineGrow 1.6s 1.1s ease-out both, lineFlow 3s 2.6s linear infinite' }} />
                <line x1="50%" y1="50%" x2="50%" y2="14%" stroke="url(#lineG)" strokeWidth="1.3" strokeDasharray="7 7"
                  style={{ animation: 'lineGrow 1.6s 1.2s ease-out both, lineFlow 3s 2.7s linear infinite' }} />
                <line x1="50%" y1="50%" x2="50%" y2="88%" stroke="url(#lineG)" strokeWidth="1.3" strokeDasharray="7 7"
                  style={{ animation: 'lineGrow 1.6s 1.3s ease-out both, lineFlow 3s 2.8s linear infinite' }} />
                <line x1="16%" y1="26%" x2="50%" y2="14%" stroke="url(#lineG)" strokeWidth="1" strokeDasharray="5 7" opacity="0.35"
                  style={{ animation: 'lineGrow 1.6s 1.4s ease-out both' }} />
                <line x1="84%" y1="64%" x2="50%" y2="88%" stroke="url(#lineG)" strokeWidth="1" strokeDasharray="5 7" opacity="0.35"
                  style={{ animation: 'lineGrow 1.6s 1.5s ease-out both' }} />
                <line x1="16%" y1="26%" x2="84%" y2="64%" stroke="url(#lineG)" strokeWidth="0.8" strokeDasharray="3 9" opacity="0.2"
                  style={{ animation: 'lineGrow 1.6s 1.6s ease-out both' }} />
              </svg>

              {[
                { top: '18%', left: '6%', size: 4, delay: 0 },
                { top: '78%', left: '88%', size: 3, delay: 1 },
                { top: '42%', left: '94%', size: 5, delay: 2 },
                { top: '88%', left: '12%', size: 3, delay: 0.5 },
                { top: '5%', left: '45%', size: 3, delay: 1.5 },
              ].map((dot, i) => (
                <span
                  key={i}
                  className="absolute rounded-full bg-[#9cff43]"
                  style={{
                    top: dot.top,
                    left: dot.left,
                    width: dot.size,
                    height: dot.size,
                    opacity: 0.35,
                    boxShadow: '0 0 10px #9cff43',
                    animation: `floatSoft ${3 + i * 0.4}s ${dot.delay}s ease-in-out infinite`,
                  }}
                />
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-t border-[#e8f0e8] bg-gradient-to-r from-[#fafdf8] to-[#f5faf3]">
              <div className="flex items-center gap-2 text-[11px] text-[#7a8f82]">
                <Key size={11} className="text-[#16a961]" />
                <span className="font-medium text-[#5a6a5f]">Payment application</span>
                <span className="text-[#c5d5c8]">›</span>
                <span>TLS</span>
                <span className="text-[#c5d5c8]">›</span>
                <span>Certificate</span>
                <span className="text-[#c5d5c8]">›</span>
                <span className="text-[#e8a33d] font-semibold">ECC</span>
              </div>
              <div className="hidden md:flex items-center gap-2 text-[11px] text-[#7a8f82]">
                <Fingerprint size={11} className="text-[#16a961]" />
                <span>Vendor product</span>
                <span className="text-[#c5d5c8]">›</span>
                <span className="text-[#c94f4f] font-medium">Unknown crypto dependency</span>
              </div>
            </div>
          </div>

          {/* BOTTOM FEATURE STRIP */}
          <div className="mt-10 grid grid-cols-3 gap-4 max-[950px]:grid-cols-1">
            {[
              { icon: <Eye size={16} />, title: 'Full visibility', desc: 'Discover every key, cert & algorithm across your estate.' },
              { icon: <Activity size={16} />, title: 'Risk scoring', desc: 'Prioritize weak crypto before it becomes an incident.' },
              { icon: <GitBranch size={16} />, title: 'Migration path', desc: 'A step-by-step roadmap toward post-quantum readiness.' },
            ].map((f, i) => (
              <TiltCard
                key={f.title}
                intensity={5}
                className="group relative p-5 rounded-2xl border border-[#e0ece0] bg-white/60 backdrop-blur-sm cursor-default"
              >
                <div
                  className="contents"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0) scale(1)' : 'translateY(35px) scale(0.94)',
                    filter: visible ? 'blur(0)' : 'blur(6px)',
                    transition: `opacity 0.9s ${1.4 + i * 0.15}s cubic-bezier(0.16,1,0.3,1), transform 0.9s ${1.4 + i * 0.15}s cubic-bezier(0.16,1,0.3,1), filter 0.9s ${1.4 + i * 0.15}s`,
                  }}
                >
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#16a961]/10 grid place-items-center text-[#16a961] transition-all duration-500 group-hover:bg-[#16a961]/20 group-hover:scale-110">
                      {f.icon}
                    </div>
                    <p className="text-[12px] font-bold tracking-wide text-[#0a1f14] uppercase">{f.title}</p>
                  </div>
                  <p className="text-[12.5px] leading-[1.6] text-[#5a6a5f]">{f.desc}</p>
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#16a961] to-[#9cff43] rounded-full transition-all duration-500 group-hover:w-full" />
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}