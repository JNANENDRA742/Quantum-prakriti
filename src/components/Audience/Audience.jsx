import { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  Cpu,
  FileKey2,
  ShieldCheck,
  Sparkles,
  Compass,
  Briefcase,
  Building2,
  Target,
} from 'lucide-react';

const cards = [
  {
    id: 'ciso',
    icon: <ShieldCheck size={22} />,
    label: 'For CISOs',
    tag: 'STRATEGY',
    title: 'Where are we exposed?',
    text: 'ONE QUESTION CONNECTS THEM ',
    bullets: ['Do we have enough evidence to make the decision?'],
  },
  {
    id: 'security architect',
    icon: <Compass size={22} />,
    label: 'Security Architect',
    tag: 'STRATEGY',
    title: 'Which cryptographic assets require attention?',
    text: 'ONE QUESTION CONNECTS THEM ',
    bullets: ['Do we have enough evidence to make the decision?'],
  },
  {
    id: 'engineering',
    icon: <Cpu size={22} />,
    label: 'For Engineering',
    tag: 'DISCOVERY',
    title: 'Where exactly is the cryptography being used?',
    text: 'ONE QUESTION CONNECTS THEM ',
    bullets: ['SBOM + CBOM generation', 'Algorithm inventory', 'Dependency graph'],
  },
  {
    id: 'procurement',
    icon: <Briefcase size={22} />,
    label: 'For Procurement',
    tag: 'VENDORS',
    title: 'Can our vendors provide cryptographic visibility?',
    text: 'ONE QUESTION CONNECTS THEM ',
    bullets: ['Vendor assessment', 'RFP templates', 'Standards checklist'],
  },
  {
    id: 'cto / cio',
    icon: <Target size={22} />,
    label: 'CTO / CIO',
    tag: 'VENDORS',
    title: 'What should we prioritise first ?',
    text: 'ONE QUESTION CONNECTS THEM ',
    bullets: ['Vendor assessment', 'RFP templates', 'Standards checklist'],
  },
  {
    id: 'board',
    icon: <Building2 size={22} />,
    label: 'Board',
    tag: 'VENDORS',
    title: 'Are we prepared for the transition ?',
    text: 'ONE QUESTION CONNECTS THEM ',
    bullets: ['Vendor assessment', 'RFP templates', 'Standards checklist'],
  },
];

export default function Audience({ activeId = 'ciso', onSelect = () => {} }) {
  const active = cards.find((c) => c.id === activeId) ?? cards[0];
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const r = sectionRef.current?.getBoundingClientRect();
    if (!r) return;
    setMousePos({ x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height });
  };

  const titleLine1 = 'One cryptographic picture.';
  const titleLine2 = 'Different decisions.';

  return (
    <>
      <style>{`
        @keyframes letterUp {
          0%   { opacity: 0; transform: translateY(60%) rotate(4deg); filter: blur(6px); }
          100% { opacity: 1; transform: translateY(0) rotate(0); filter: blur(0); }
        }
        @keyframes fadeSlideUp {
          0%   { opacity: 0; transform: translateY(25px); filter: blur(6px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes kickerDot {
          0%, 100% { box-shadow: 0 0 0 0 rgba(154,255,67,0.5); }
          50%      { box-shadow: 0 0 0 10px rgba(154,255,67,0); }
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }
        @keyframes shimmerText {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes blobFloat {
          0%   { transform: translate(0, 0) scale(1); opacity: 0.12; }
          100% { transform: translate(60px, -40px) scale(1.15); opacity: 0.18; }
        }
        @keyframes blobFloat2 {
          0%   { transform: translate(0, 0) scale(1); opacity: 0.08; }
          100% { transform: translate(-50px, 50px) scale(1.2); opacity: 0.15; }
        }
        @keyframes spinSlow {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes spinSlowReverse {
          0%   { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
        @keyframes floatSoft {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-10px); }
        }
        @keyframes tagFloat {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-6px); }
        }
        @keyframes pulseRing2 {
          0%   { transform: translate(-50%, -50%) scale(1); opacity: 0.7; }
          100% { transform: translate(-50%, -50%) scale(2.4); opacity: 0; }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 25px 60px rgba(22,64,36,0.15), 0 0 0 0 rgba(154,255,67,0); }
          50%      { box-shadow: 0 25px 60px rgba(22,64,36,0.20), 0 0 40px 6px rgba(154,255,67,0.25); }
        }
        @keyframes borderFlow {
          0%   { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        @keyframes iconPop {
          0%   { opacity: 0; transform: scale(0.4); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes glowBreath {
          0%, 100% { opacity: 0.25; transform: translate(-50%, -50%) scale(1); }
          50%      { opacity: 0.45; transform: translate(-50%, -50%) scale(1.15); }
        }
        @keyframes dotPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%      { transform: scale(1.6); opacity: 0.6; }
        }
      `}</style>

      <section
        id="audience"
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        className="px-[7vw] py-[160px] bg-[#f4f7f1] text-[#08140d] relative overflow-hidden"
      >
        {/* ============ BACKGROUND ============ */}
        <div
          className="absolute -bottom-[200px] -left-[150px] w-[600px] h-[600px] rounded-full bg-[#68f6c2] blur-[160px] pointer-events-none"
          style={{ animation: 'blobFloat 18s ease-in-out infinite alternate' }}
        />
        <div
          className="absolute top-[-150px] right-[-100px] w-[500px] h-[500px] rounded-full bg-[#9cff43] blur-[150px] pointer-events-none"
          style={{ animation: 'blobFloat2 22s ease-in-out infinite alternate' }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.25]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(22,169,97,0.15) 1px, transparent 1px)`,
            backgroundSize: '36px 36px',
            maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 80%)',
          }}
        />
        <div
          className="absolute top-[15%] right-[10%] w-[400px] h-[400px] rounded-full pointer-events-none opacity-[0.08]"
          style={{
            background: 'conic-gradient(from 0deg, transparent, #16a961, transparent, #9cff43, transparent)',
            filter: 'blur(50px)',
            animation: 'spinSlow 40s linear infinite',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(186,255,120,0.08), transparent 60%)`,
          }}
        />

        {[
          { top: '12%', left: '8%', size: 4, delay: 0 },
          { top: '75%', left: '92%', size: 5, delay: 1.5 },
          { top: '45%', left: '5%', size: 3, delay: 3 },
          { top: '88%', left: '15%', size: 4, delay: 2 },
          { top: '20%', left: '88%', size: 3, delay: 4 },
        ].map((d, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-[#9cff43] pointer-events-none"
            style={{
              top: d.top, left: d.left, width: d.size, height: d.size,
              opacity: 0.4, boxShadow: '0 0 12px #9cff43',
              animation: `floatSoft ${4 + i * 0.6}s ${d.delay}s ease-in-out infinite`,
            }}
          />
        ))}

        <div className="relative max-w-[1500px] mx-auto z-10">
          {/* ============ HEADING ============ */}
          <div className="max-w-[900px] mb-[70px]">
            <div
              className="w-fit flex items-center gap-[9px] px-[14px] py-[9px] rounded-[20px] text-[10px] font-semibold tracking-[0.14em] text-[#34704a] border border-[rgba(15,100,45,0.14)] bg-[rgba(63,255,116,0.06)] backdrop-blur-sm"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateX(0)' : 'translateX(-30px)',
                filter: visible ? 'blur(0)' : 'blur(4px)',
                transition: 'opacity 0.9s 0.1s cubic-bezier(0.16,1,0.3,1), transform 0.9s 0.1s cubic-bezier(0.16,1,0.3,1), filter 0.9s 0.1s',
              }}
            >
              <span
                className="w-[7px] h-[7px] rounded-full bg-[#9cff43] shadow-[0_0_12px_#91ff50]"
                style={{ animation: 'kickerDot 2s infinite' }}
              />
              BUILT FOR THE PEOPLE WHO MOVE SYSTEMS
              <Sparkles size={10} className="text-[#9cff43]" style={{ animation: 'dotPulse 2s infinite' }} />
            </div>

            <h2 className="mt-[26px] font-serif font-normal text-[clamp(48px,5.6vw,82px)] leading-[0.96] tracking-[-0.04em]">
              <span className="block overflow-hidden">
                <span className="inline-block">
                  {titleLine1.split('').map((ch, i) => (
                    <span
                      key={i}
                      className="inline-block"
                      style={{
                        opacity: visible ? 1 : 0,
                        animation: visible
                          ? `letterUp 0.9s ${0.2 + i * 0.025}s cubic-bezier(0.16,1,0.3,1) both`
                          : 'none',
                        whiteSpace: 'pre',
                      }}
                    >
                      {ch}
                    </span>
                  ))}
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="inline-block italic">
                  {titleLine2.split('').map((ch, i) => (
                    <span
                      key={i}
                      className="inline-block"
                      style={{
                        opacity: visible ? 1 : 0,
                        whiteSpace: 'pre',
                        background: 'linear-gradient(90deg, #13a864 0%, #9cff43 50%, #13a864 100%)',
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
            </h2>
          </div>

          {/* ============ TAB SELECTOR ============ */}
          <div className="flex flex-wrap gap-3 mb-[44px]">
            {cards.map((c, i) => {
              const isActive = activeId === c.id;
              return (
                <button
                  key={c.id}
                  id={c.id}
                  onClick={() => onSelect(c.id)}
                  className={`group/tab relative flex items-center gap-3 px-5 py-4 rounded-[18px] text-[14px] font-semibold transition-all duration-400 border overflow-hidden ${
                    isActive
                      ? 'bg-[#07150d] text-white border-[#07150d] shadow-[0_20px_45px_rgba(22,64,36,0.25)] -translate-y-[2px]'
                      : 'bg-white text-[#3a5343] border-[#dbe6db] hover:border-[#9cff43] hover:text-[#07150d] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(22,64,36,0.1)]'
                  }`}
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.9)',
                    filter: visible ? 'blur(0)' : 'blur(6px)',
                    transition: `opacity 0.9s ${0.3 + i * 0.1}s cubic-bezier(0.16,1,0.3,1), transform 0.9s ${0.3 + i * 0.1}s cubic-bezier(0.16,1,0.3,1), filter 0.9s ${0.3 + i * 0.1}s`,
                  }}
                >
                  <span
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover/tab:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(154,255,67,0.15), transparent)',
                      backgroundSize: '200% 100%',
                      animation: 'shimmerText 2.5s linear infinite',
                    }}
                  />
                  <span
                    className={`relative w-9 h-9 rounded-[10px] grid place-items-center transition-all duration-400 ${
                      isActive
                        ? 'bg-[#aaff61] text-[#07150d]'
                        : 'bg-[#e6f3e0] text-[#16a961] group-hover/tab:scale-110 group-hover/tab:bg-[#d4f0c8] group-hover/tab:rotate-6'
                    }`}
                  >
                    {c.icon}
                  </span>
                  <span className="relative">{c.label}</span>
                  {isActive && (
                    <span
                      className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#9cff43]"
                      style={{ animation: 'dotPulse 1.8s infinite' }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* ============ ACTIVE PANEL ============ */}
          <div
            key={active.id}
            className="grid grid-cols-[1.1fr_0.9fr] gap-0 rounded-[30px] overflow-hidden border border-[#dbe6db] bg-white shadow-[0_40px_100px_rgba(22,64,36,0.08)] max-[950px]:grid-cols-1 relative"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.96)',
              filter: visible ? 'blur(0)' : 'blur(8px)',
              transition: 'opacity 1.1s 0.6s cubic-bezier(0.16,1,0.3,1), transform 1.1s 0.6s cubic-bezier(0.16,1,0.3,1), filter 1.1s 0.6s',
            }}
          >
            <span
              className="absolute top-0 left-0 h-[3px] w-full z-10"
              style={{
                background: 'linear-gradient(90deg, #16a961, #9cff43, #68f6c2, #9cff43, #16a961)',
                backgroundSize: '200% 100%',
                animation: 'borderFlow 5s linear infinite',
              }}
            />

            {/* TEXT SIDE */}
            <div className="p-[60px] max-[600px]:p-[36px_26px] relative">
              <span
                className="inline-block font-mono text-[10px] tracking-[0.24em] text-[#0e9c5b]"
                style={{
                  opacity: visible ? 1 : 0,
                  animation: visible ? 'fadeSlideUp 0.7s 0.75s cubic-bezier(0.16,1,0.3,1) both' : 'none',
                }}
              >
                {active.tag} · {active.label.toUpperCase()}
              </span>
              <h3
                className="mt-5 font-serif font-normal text-[clamp(34px,3.6vw,52px)] leading-[1.05] tracking-[-0.03em] text-[#08140d]"
                style={{
                  opacity: visible ? 1 : 0,
                  animation: visible ? 'fadeSlideUp 0.7s 0.85s cubic-bezier(0.16,1,0.3,1) both' : 'none',
                }}
              >
                {active.title}
              </h3>
              <p
                className="mt-6 max-w-[520px] text-[#556356] leading-[1.75] text-[16px]"
                style={{
                  opacity: visible ? 1 : 0,
                  animation: visible ? 'fadeSlideUp 0.7s 0.95s cubic-bezier(0.16,1,0.3,1) both' : 'none',
                }}
              >
                {active.text}
              </p>
              <ul className="mt-8 space-y-3">
                {active.bullets.map((b, i) => (
                  <li
                    key={b}
                    className="group/bullet flex items-center gap-3 text-[14px] text-[#2e4132] transition-all duration-300 hover:translate-x-1.5"
                    style={{
                      opacity: visible ? 1 : 0,
                      animation: visible ? `fadeSlideUp 0.6s ${1.05 + i * 0.1}s cubic-bezier(0.16,1,0.3,1) both` : 'none',
                    }}
                  >
                    <span className="w-[18px] h-[18px] rounded-full bg-[#dcf2d7] grid place-items-center text-[#16a961] text-[11px] font-bold transition-all duration-300 group-hover/bullet:bg-[#16a961] group-hover/bullet:text-white group-hover/bullet:scale-110 group-hover/bullet:shadow-[0_0_15px_rgba(22,169,97,0.4)]">
                      ✓
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => document.getElementById('platform')?.scrollIntoView({ behavior: 'smooth' })}
                className="group/btn mt-10 relative inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#07150d] text-[#d0ff82] font-semibold overflow-hidden transition-all duration-400 hover:gap-3 hover:shadow-[0_15px_40px_rgba(22,64,36,0.3)]"
                style={{
                  opacity: visible ? 1 : 0,
                  animation: visible ? 'fadeSlideUp 0.7s 1.3s cubic-bezier(0.16,1,0.3,1) both' : 'none',
                }}
              >
                <span className="relative z-10">Explore {active.label}</span>
                <ArrowRight size={15} className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1" />
                <span className="absolute inset-0 bg-gradient-to-r from-[#0e9c5b] to-[#16a961] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
              </button>
            </div>

            {/* VISUAL SIDE */}
            <div className="relative bg-gradient-to-br from-[#eaf7e4] via-[#dcebdc] to-[#c8e3c6] p-[60px] flex items-center justify-center max-[600px]:p-[40px_26px] max-[950px]:min-h-[320px] overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.15] pointer-events-none"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(22,169,97,0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(22,169,97,0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: '36px 36px',
                  maskImage: 'radial-gradient(circle at 50% 50%, black 20%, transparent 70%)',
                  WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 20%, transparent 70%)',
                }}
              />
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(154,255,67,0.35), transparent 70%)',
                  filter: 'blur(60px)',
                  animation: 'glowBreath 5s ease-in-out infinite',
                }}
              />
              <div className="absolute inset-0 grid place-items-center pointer-events-none">
                <div
                  className="w-[340px] h-[340px] rounded-full border border-[rgba(22,169,97,0.15)]"
                  style={{ animation: 'spinSlow 30s linear infinite' }}
                >
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#16a961] shadow-[0_0_15px_#16a961]" />
                </div>
                <div
                  className="absolute w-[240px] h-[240px] rounded-full border border-[rgba(22,169,97,0.18)]"
                  style={{ animation: 'spinSlowReverse 22s linear infinite' }}
                >
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-[#9cff43] shadow-[0_0_12px_#9cff43]" />
                </div>
                <div
                  className="absolute w-[140px] h-[140px] rounded-full border border-dashed border-[rgba(22,169,97,0.25)]"
                  style={{ animation: 'spinSlow 16s linear infinite' }}
                />
              </div>
              <span
                className="absolute top-1/2 left-1/2 w-[130px] h-[130px] rounded-full border-2 border-[#9cff43] pointer-events-none"
                style={{ animation: 'pulseRing2 3s ease-out infinite' }}
              />
              <span
                className="absolute top-1/2 left-1/2 w-[130px] h-[130px] rounded-full border border-[#16a961] pointer-events-none"
                style={{ animation: 'pulseRing2 3s 1.5s ease-out infinite' }}
              />
              <div
                className="relative z-[2] w-[130px] h-[130px] rounded-full bg-white grid place-items-center shadow-[0_25px_60px_rgba(22,64,36,0.15)]"
                style={{ animation: 'floatSoft 4s ease-in-out infinite, glowPulse 4s ease-in-out infinite' }}
              >
                <span className="text-[#16a961] scale-[2.4] block" style={{ animation: 'iconPop 0.8s cubic-bezier(0.34,1.56,0.64,1) both' }}>
                  {active.icon}
                </span>
              </div>
              <span
                className="absolute top-[18%] left-[12%] px-3 py-2 rounded-full bg-white/90 backdrop-blur border border-[rgba(22,169,97,0.20)] font-mono text-[9px] tracking-[0.16em] text-[#34704a] shadow-[0_8px_20px_rgba(22,64,36,0.08)]"
                style={{ animation: 'tagFloat 5s ease-in-out infinite, fadeSlideUp 0.8s 0.9s both' }}
              >
                {active.tag}
              </span>
              <span
                className="absolute bottom-[20%] right-[12%] px-3 py-2 rounded-full bg-white/90 backdrop-blur border border-[rgba(22,169,97,0.20)] font-mono text-[9px] tracking-[0.16em] text-[#34704a] shadow-[0_8px_20px_rgba(22,64,36,0.08)]"
                style={{ animation: 'tagFloat 5s 1s ease-in-out infinite, fadeSlideUp 0.8s 1.1s both' }}
              >
                {active.label.toUpperCase()}
              </span>
              <span className="absolute top-[30%] right-[20%] w-1.5 h-1.5 rounded-full bg-[#9cff43]" style={{ animation: 'dotPulse 2s infinite' }} />
              <span className="absolute bottom-[30%] left-[18%] w-2 h-2 rounded-full bg-[#16a961]" style={{ animation: 'dotPulse 2s 0.8s infinite' }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}