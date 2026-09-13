import { useEffect, useRef, useState } from 'react';

const items = [
  { when: 'NOW',      title: 'Discover', text: 'Know your cryptographic estate — every algorithm, key, and certificate across services.' },
  { when: 'NEXT',     title: 'Assess',   text: 'Prioritize quantum-vulnerable systems by business impact, exposure, and migration effort.' },
  { when: 'THEN',     title: 'Migrate',  text: 'Adopt quantum-safe cryptography with a phased, testable, evidence-backed rollout.' },
  { when: 'ALWAYS',   title: 'Adapt',    text: 'Build crypto-agility into your architecture so the next transition is a config change, not a rebuild.' },
];

export default function Roadmap() {
  const [activeIdx, setActiveIdx] = useState(0);
  const refs = useRef([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = Number(e.target.dataset.idx);
            setActiveIdx(i);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="roadmap" className="px-[7vw] py-[160px] bg-[#07140c] relative overflow-hidden">
      {/* faint background */}
      <div className="absolute inset-0 opacity-[0.05] [mask-image:radial-gradient(circle_at_50%_50%,black,transparent_75%)]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(109,255,130,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(109,255,130,0.5) 1px, transparent 1px)',
          backgroundSize: '70px 70px',
        }}
      />

      <div className="relative max-w-[1400px] mx-auto">
        {/* Heading */}
        <div className="max-w-[900px] mb-[90px]">
          <div className="w-fit flex items-center gap-[9px] px-[14px] py-[9px] rounded-[20px] text-[10px] font-semibold tracking-[0.14em] text-[#8fac98] border border-[rgba(149,255,103,0.18)] bg-[rgba(18,71,35,0.35)]">
            <span className="w-[7px] h-[7px] rounded-full bg-[#9cff43] shadow-[0_0_12px_#91ff50]" />
            INDIA'S QUANTUM ROADMAP / 05
          </div>
          <h2 className="mt-[26px] font-serif font-normal text-[clamp(48px,5.6vw,84px)] leading-[0.96] tracking-[-0.04em] text-[#edf5ed]">
            Prepare before
            <br />
            <span className="text-[#7bffc0] italic">the transition becomes urgent.</span>
          </h2>
        </div>

        {/* Timeline + narrative */}
        <div className="grid grid-cols-[0.95fr_1.05fr] gap-[100px] max-[950px]:grid-cols-1 max-[950px]:gap-16">
          {/* Left: sticky number */}
          <div className="max-[950px]:hidden">
            <div className="sticky top-[140px]">
              <div className="font-mono text-[10px] tracking-[0.28em] text-[#5f7568] mb-6">
                PHASE {String(activeIdx + 1).padStart(2, '0')} / 04
              </div>
              <div className="font-serif text-[clamp(80px,10vw,160px)] leading-none text-[#eaf6ea] transition-all duration-500">
                {items[activeIdx].when}
              </div>
              <div className="mt-6 h-[2px] w-[100px] bg-[linear-gradient(90deg,#aaff61,transparent)]" />
              <p className="mt-8 max-w-[340px] text-[#8fa79a] leading-[1.7] text-[15px]">
                A phased migration framework aligned with global PQC standards and India's
                quantum roadmap.
              </p>

              {/* Progress dots */}
              <div className="mt-10 flex items-center gap-3">
                {items.map((_, i) => (
                  <span
                    key={i}
                    className={`rounded-full transition-all duration-500 ${
                      i === activeIdx
                        ? 'w-10 h-[3px] bg-[#aaff61]'
                        : 'w-[3px] h-[3px] bg-[#3a5443]'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: scroll cards */}
          <div className="space-y-6">
            {items.map((it, i) => {
              const isActive = i === activeIdx;
              return (
                <div
                  key={it.when}
                  ref={(el) => (refs.current[i] = el)}
                  data-idx={i}
                  className={`relative rounded-[24px] border p-8 transition-all duration-500 ${
                    isActive
                      ? 'border-[rgba(160,255,118,0.30)] bg-[rgba(20,55,32,0.55)] shadow-[0_30px_80px_rgba(0,0,0,0.35)] -translate-y-1'
                      : 'border-white/[0.06] bg-white/[0.02] opacity-60'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <span className={`font-mono text-[10px] tracking-[0.24em] ${isActive ? 'text-[#aaff61]' : 'text-[#5f7568]'}`}>
                      {String(i + 1).padStart(2, '0')} · {it.when}
                    </span>
                    <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-[#aaff61] shadow-[0_0_15px_#aaff61]' : 'bg-[#3a5443]'}`} />
                  </div>
                  <h3 className={`font-serif font-normal text-[34px] leading-none ${isActive ? 'text-[#eaf6ea]' : 'text-[#8fa79a]'}`}>
                    {it.title}
                  </h3>
                  <p className={`mt-4 leading-[1.7] text-[14.5px] ${isActive ? 'text-[#b8d6be]' : 'text-[#5f7568]'}`}>
                    {it.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}