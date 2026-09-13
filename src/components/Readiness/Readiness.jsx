import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function Readiness({ onScan }) {
  const [visible, setVisible] = useState(false);
  const [score, setScore] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold: 0.35 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let raf;
    const start = performance.now();
    const dur = 1400;
    const target = 68;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      setScore(Math.round(eased * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible]);

  const arcLen = 270;
  const dash = `${(score / 100) * arcLen} ${arcLen}`;

  return (
    <section id="readiness" ref={ref} className="px-[7vw] py-[140px] bg-[#f4f7f1]">
      <div className="max-w-[1400px] mx-auto">
        <div
          className="relative rounded-[34px] overflow-hidden bg-[#0a1a12] grid grid-cols-[1.1fr_0.9fr] max-[950px]:grid-cols-1 shadow-[0_50px_120px_rgba(7,20,12,0.30)]"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.96)',
            filter: visible ? 'blur(0)' : 'blur(10px)',
            transition: 'opacity 1.2s cubic-bezier(0.16,1,0.3,1), transform 1.2s cubic-bezier(0.16,1,0.3,1), filter 1.2s',
          }}
        >
          <div
            className="absolute inset-0 opacity-[0.10]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(109,255,130,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(109,255,130,0.5) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />

          <div className="relative p-[70px] max-[600px]:p-[36px_26px] z-[2]">
            <div
              className="w-fit flex items-center gap-[9px] px-[14px] py-[9px] rounded-[20px] text-[10px] font-semibold tracking-[0.14em] text-[#a8cbaa] border border-[rgba(149,255,103,0.20)] bg-[rgba(18,71,35,0.35)]"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateX(0)' : 'translateX(-30px)',
                filter: visible ? 'blur(0)' : 'blur(4px)',
                transition: 'opacity 0.9s 0.2s cubic-bezier(0.16,1,0.3,1), transform 0.9s 0.2s cubic-bezier(0.16,1,0.3,1), filter 0.9s 0.2s',
              }}
            >
              <span className="w-[7px] h-[7px] rounded-full bg-[#9cff43] shadow-[0_0_12px_#91ff50]"
                style={{ animation: 'pulse 2s infinite' }} />
              QUANTUM READINESS / 04
            </div>

            <h2 className="mt-[26px] font-serif font-normal text-[clamp(46px,5vw,78px)] leading-[0.96] tracking-[-0.04em] text-[#eaf6ea]">
              <span className="block overflow-hidden">
                <span className="inline-block">
                  {'How ready is'.split('').map((ch, i) => (
                    <span
                      key={i}
                      className="inline-block"
                      style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(60%)',
                        filter: visible ? 'blur(0)' : 'blur(6px)',
                        transition: `opacity 0.9s ${0.3 + i * 0.03}s cubic-bezier(0.16,1,0.3,1), transform 0.9s ${0.3 + i * 0.03}s cubic-bezier(0.16,1,0.3,1), filter 0.9s ${0.3 + i * 0.03}s`,
                        whiteSpace: 'pre',
                      }}
                    >
                      {ch}
                    </span>
                  ))}
                </span>
              </span>
              <span className="block overflow-hidden italic text-[#7bffc0]">
                <span className="inline-block">
                  {'your cryptography?'.split('').map((ch, i) => (
                    <span
                      key={i}
                      className="inline-block"
                      style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(60%)',
                        filter: visible ? 'blur(0)' : 'blur(6px)',
                        transition: `opacity 0.9s ${0.65 + i * 0.025}s cubic-bezier(0.16,1,0.3,1), transform 0.9s ${0.65 + i * 0.025}s cubic-bezier(0.16,1,0.3,1), filter 0.9s ${0.65 + i * 0.025}s`,
                        whiteSpace: 'pre',
                      }}
                    >
                      {ch}
                    </span>
                  ))}
                </span>
              </span>
            </h2>

            <p
              className="mt-6 max-w-[480px] text-[#9bafa0] leading-[1.7] text-[16px]"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(25px)',
                filter: visible ? 'blur(0)' : 'blur(6px)',
                transition: 'opacity 1s 1.1s cubic-bezier(0.16,1,0.3,1), transform 1s 1.1s cubic-bezier(0.16,1,0.3,1), filter 1s 1.1s',
              }}
            >
              Run a guided readiness check to understand your current cryptographic posture
              and identify where migration should begin.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 max-w-[520px] max-[600px]:grid-cols-1">
              {[
                ['12.8K', 'Assets'],
                ['318', 'Services'],
                ['4', 'Exposed'],
              ].map(([n, l], i) => (
                <div
                  key={l}
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(25px)',
                    filter: visible ? 'blur(0)' : 'blur(6px)',
                    transition: `opacity 0.9s ${1.3 + i * 0.15}s cubic-bezier(0.16,1,0.3,1), transform 0.9s ${1.3 + i * 0.15}s cubic-bezier(0.16,1,0.3,1), filter 0.9s ${1.3 + i * 0.15}s`,
                  }}
                >
                  <div className="font-serif text-[34px] text-[#eaf6ea] leading-none">{n}</div>
                  <div className="mt-2 text-[10px] font-mono tracking-[0.20em] text-[#5f7568]">
                    {l.toUpperCase()}
                  </div>
                </div>
              ))}
            </div>

            <button
              className="mt-10 inline-flex items-center gap-3 px-6 py-[18px] rounded-[30px] bg-[linear-gradient(100deg,#b4ff50,#5ff2a9)] text-[#071008] font-semibold shadow-[0_15px_45px_rgba(80,255,126,0.25)] hover:-translate-y-[2px] hover:shadow-[0_20px_55px_rgba(80,255,126,0.35)] transition-all group/rd"
              onClick={onScan}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(25px)',
                transition: 'opacity 1s 1.8s cubic-bezier(0.16,1,0.3,1), transform 1s 1.8s cubic-bezier(0.16,1,0.3,1)',
              }}
            >
              Run readiness check
              <ArrowRight size={17} className="group-hover/rd:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="relative bg-[radial-gradient(circle_at_50%_50%,rgba(59,255,121,0.15),transparent_55%)] grid place-items-center p-[60px] max-[600px]:p-[30px] min-h-[520px]">
            <div className="relative w-[340px] h-[340px] max-[600px]:w-[260px] max-[600px]:h-[260px]">
              <svg viewBox="0 0 220 220" className="w-full h-full -rotate-[135deg]">
                <defs>
                  <linearGradient id="dialGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#68f6c2" />
                    <stop offset="100%" stopColor="#aaff61" />
                  </linearGradient>
                </defs>
                <circle
                  cx="110" cy="110" r="90"
                  fill="none"
                  stroke="rgba(160,255,118,0.10)"
                  strokeWidth="10"
                  strokeDasharray={`${arcLen} ${360 - arcLen}`}
                  strokeLinecap="round"
                />
                <circle
                  cx="110" cy="110" r="90"
                  fill="none"
                  stroke="url(#dialGrad)"
                  strokeWidth="10"
                  strokeDasharray={dash}
                  strokeLinecap="round"
                  style={{ transition: 'stroke-dasharray 0.4s ease-out' }}
                />
              </svg>

              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center">
                  <div className="font-serif text-[68px] leading-none text-[#eaf6ea] tabular-nums max-[600px]:text-[54px]">
                    {score}
                    <span className="text-[26px] text-[#7bffc0] align-top ml-1">%</span>
                  </div>
                  <div className="mt-3 font-mono text-[9px] tracking-[0.26em] text-[#7e9a86]">
                    CRYPTO READINESS
                  </div>
                  <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(160,255,118,0.25)] text-[10px] text-[#a8cbaa]">
                    <ShieldCheck size={12} className="text-[#68f6c2]" />
                    PARTIALLY READY
                  </div>
                </div>
              </div>

              <span className="absolute -top-2 left-1/2 -translate-x-1/2 font-mono text-[8px] tracking-[0.20em] text-[#5f7568]">
                POST-QUANTUM
              </span>
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 font-mono text-[8px] tracking-[0.20em] text-[#5f7568]">
                CLASSICAL
              </span>
            </div>

            <span
              className="absolute top-[16%] right-[14%] px-3 py-2 rounded-full border border-[rgba(160,255,118,0.25)] bg-[rgba(8,30,18,0.75)] backdrop-blur font-mono text-[9px] tracking-[0.16em] text-[#b8d6be]"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 1s 0.7s cubic-bezier(0.16,1,0.3,1), transform 1s 0.7s cubic-bezier(0.16,1,0.3,1)',
              }}
            >
              RSA · 4
            </span>
            <span
              className="absolute bottom-[18%] left-[14%] px-3 py-2 rounded-full border border-[rgba(160,255,118,0.25)] bg-[rgba(8,30,18,0.75)] backdrop-blur font-mono text-[9px] tracking-[0.16em] text-[#b8d6be]"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 1s 0.9s cubic-bezier(0.16,1,0.3,1), transform 1s 0.9s cubic-bezier(0.16,1,0.3,1)',
              }}
            >
              ECC · 12
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}