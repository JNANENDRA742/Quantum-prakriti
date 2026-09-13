import { useState } from 'react';
import { ArrowRight, Cpu, FileKey2, ShieldCheck } from 'lucide-react';

const cards = [
  {
    id: 'ciso',
    icon: <ShieldCheck size={22} />,
    label: 'For CISOs',
    tag: 'STRATEGY',
    title: 'Understand organizational exposure.',
    text: 'Communicate cryptographic risk to the board, track quantum readiness over time, and align security investment with migration milestones.',
    bullets: ['Executive risk dashboard', 'Board-ready reporting', 'Compliance mapping'],
  },
  {
    id: 'engineering',
    icon: <Cpu size={22} />,
    label: 'For Engineering',
    tag: 'DISCOVERY',
    title: 'Find vulnerable algorithms and dependencies.',
    text: 'Discover every cryptographic asset across services, libraries, and certificates. Identify what needs to change and where to start.',
    bullets: ['SBOM + CBOM generation', 'Algorithm inventory', 'Dependency graph'],
  },
  {
    id: 'procurement',
    icon: <FileKey2 size={22} />,
    label: 'For Procurement',
    tag: 'VENDORS',
    title: 'Build quantum-safe requirements in.',
    text: 'Ask vendors the right cryptographic questions, evaluate their PQC readiness, and embed quantum-safe requirements into every technology decision.',
    bullets: ['Vendor assessment', 'RFP templates', 'Standards checklist'],
  },
];

export default function Audience() {
  const [activeId, setActiveId] = useState('ciso');
  const active = cards.find((c) => c.id === activeId);

  return (
    <section className="px-[7vw] py-[160px] bg-[#f4f7f1] text-[#08140d] relative overflow-hidden">
      {/* soft blob */}
      <div className="absolute -bottom-[200px] -left-[150px] w-[600px] h-[600px] rounded-full bg-[#68f6c2] blur-[160px] opacity-[0.15] pointer-events-none" />

      <div className="relative max-w-[1500px] mx-auto">
        {/* Heading */}
        <div className="max-w-[900px] mb-[70px]">
          <div className="w-fit flex items-center gap-[9px] px-[14px] py-[9px] rounded-[20px] text-[10px] font-semibold tracking-[0.14em] text-[#34704a] border border-[rgba(15,100,45,0.14)] bg-[rgba(63,255,116,0.06)]">
            <span className="w-[7px] h-[7px] rounded-full bg-[#9cff43] shadow-[0_0_12px_#91ff50]" />
            BUILT FOR THE PEOPLE WHO MOVE SYSTEMS
          </div>
          <h2 className="mt-[26px] font-serif font-normal text-[clamp(48px,5.6vw,82px)] leading-[0.96] tracking-[-0.04em]">
            One cryptographic picture.
            <br />
            <span className="text-[#13a864] italic">Different decisions.</span>
          </h2>
        </div>

        {/* Tab selector */}
        <div className="flex flex-wrap gap-3 mb-[44px]">
          {cards.map((c) => {
            const isActive = activeId === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setActiveId(c.id)}
                className={`flex items-center gap-3 px-5 py-4 rounded-[18px] text-[14px] font-semibold transition-all duration-300 border ${
                  isActive
                    ? 'bg-[#07150d] text-white border-[#07150d] shadow-[0_20px_45px_rgba(22,64,36,0.20)] -translate-y-[2px]'
                    : 'bg-white text-[#3a5343] border-[#dbe6db] hover:border-[#9cff43] hover:text-[#07150d]'
                }`}
              >
                <span
                  className={`w-9 h-9 rounded-[10px] grid place-items-center transition-colors ${
                    isActive ? 'bg-[#aaff61] text-[#07150d]' : 'bg-[#e6f3e0] text-[#16a961]'
                  }`}
                >
                  {c.icon}
                </span>
                {c.label}
              </button>
            );
          })}
        </div>

        {/* Active panel */}
        <div
          key={active.id}
          className="grid grid-cols-[1.1fr_0.9fr] gap-0 rounded-[30px] overflow-hidden border border-[#dbe6db] bg-white shadow-[0_40px_100px_rgba(22,64,36,0.08)] max-[950px]:grid-cols-1 animate-[fadeIn_0.5s_ease-out]"
        >
          {/* Text side */}
          <div className="p-[60px] max-[600px]:p-[36px_26px]">
            <span className="font-mono text-[10px] tracking-[0.24em] text-[#0e9c5b]">
              {active.tag} · {active.label.toUpperCase()}
            </span>
            <h3 className="mt-5 font-serif font-normal text-[clamp(34px,3.6vw,52px)] leading-[1.05] tracking-[-0.03em]">
              {active.title}
            </h3>
            <p className="mt-6 max-w-[520px] text-[#556356] leading-[1.75] text-[16px]">
              {active.text}
            </p>

            <ul className="mt-8 space-y-3">
              {active.bullets.map((b) => (
                <li key={b} className="flex items-center gap-3 text-[14px] text-[#2e4132]">
                  <span className="w-[18px] h-[18px] rounded-full bg-[#dcf2d7] grid place-items-center text-[#16a961] text-[11px] font-bold">
                    ✓
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            <button
              onClick={() => document.getElementById('platform')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-10 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#07150d] text-[#d0ff82] font-semibold hover:bg-[#0d2418] hover:gap-3 transition-all"
            >
              Explore {active.label} <ArrowRight size={15} />
            </button>
          </div>

          {/* Visual side */}
          <div className="relative bg-gradient-to-br from-[#eaf7e4] via-[#dcebdc] to-[#c8e3c6] p-[60px] flex items-center justify-center max-[600px]:p-[40px_26px] max-[950px]:min-h-[320px]">
            {/* Decorative rings */}
            <div className="absolute inset-0 grid place-items-center pointer-events-none">
              <div className="w-[340px] h-[340px] rounded-full border border-[rgba(22,169,97,0.15)]" />
              <div className="absolute w-[240px] h-[240px] rounded-full border border-[rgba(22,169,97,0.18)]" />
              <div className="absolute w-[140px] h-[140px] rounded-full border border-[rgba(22,169,97,0.22)]" />
            </div>

            <div className="relative z-[2] w-[130px] h-[130px] rounded-full bg-white grid place-items-center shadow-[0_25px_60px_rgba(22,64,36,0.15)]">
              <span className="text-[#16a961] scale-[2.4]">{active.icon}</span>
            </div>

            {/* Floating tags */}
            <span className="absolute top-[18%] left-[12%] px-3 py-2 rounded-full bg-white/90 backdrop-blur border border-[rgba(22,169,97,0.20)] font-mono text-[9px] tracking-[0.16em] text-[#34704a]">
              {active.tag}
            </span>
            <span className="absolute bottom-[20%] right-[12%] px-3 py-2 rounded-full bg-white/90 backdrop-blur border border-[rgba(22,169,97,0.20)] font-mono text-[9px] tracking-[0.16em] text-[#34704a]">
              {active.label.toUpperCase()}
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}