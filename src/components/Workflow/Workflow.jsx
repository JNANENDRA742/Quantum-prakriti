import { useEffect, useRef, useState, useCallback } from 'react';
import { ArrowRight } from 'lucide-react';
import { workflowSteps } from '../../data/cryptoData';

export default function Workflow() {
  const sectionRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [visible, setVisible] = useState(false);

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

  return (
    <>
      <style>{`
        @keyframes gridPulse { 0%, 100% { opacity: 0.04; } 50% { opacity: 0.08; } }
        @keyframes auroraDrift1 { 0% { transform: translate(0, 0) scale(1); opacity: 0.6; } 100% { transform: translate(80px, -60px) scale(1.2); opacity: 1; } }
        @keyframes auroraDrift2 { 0% { transform: translate(0, 0) scale(1); opacity: 0.5; } 100% { transform: translate(-70px, 70px) scale(1.15); opacity: 0.95; } }
        @keyframes kickerDot { 0%, 100% { box-shadow: 0 0 0 0 rgba(154,255,67,0.5); } 50% { box-shadow: 0 0 0 10px rgba(154,255,67,0); } }
        @keyframes titleReveal { 0% { opacity: 0; transform: translateY(60px) skewY(4deg); filter: blur(10px); } 100% { opacity: 1; transform: translateY(0) skewY(0); filter: blur(0); } }
        @keyframes letterUp { 0% { opacity: 0; transform: translateY(60%) rotate(4deg); filter: blur(6px); } 100% { opacity: 1; transform: translateY(0) rotate(0); filter: blur(0); } }
        @keyframes underlineSweep { 0% { transform: scaleX(0); transform-origin: left; opacity: 0; } 100% { transform: scaleX(1); transform-origin: left; opacity: 1; } }
        @keyframes gradientShift { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes shimmerText { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes fadeSlideUp { 0% { opacity: 0; transform: translateY(40px); filter: blur(6px); } 100% { opacity: 1; transform: translateY(0); filter: blur(0); } }
        @keyframes cardEnter { 0% { opacity: 0; transform: translateY(40px) scale(0.95); filter: blur(8px); } 100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); } }
        @keyframes dotPulse { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.6); opacity: 0.6; } }
        @keyframes pulseRing { 0% { transform: translate(-50%,-50%) scale(1); opacity: 0.7; } 100% { transform: translate(-50%,-50%) scale(2.4); opacity: 0; } }
        @keyframes lineFlow { 0% { background-position: 0% 0%; } 100% { background-position: 0% -200%; } }
        @keyframes travelDown { 0% { top: 0%; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { top: 100%; opacity: 0; } }
        @keyframes scanLine { 0% { left: -40%; opacity: 0; } 20% { opacity: 1; } 80% { opacity: 1; } 100% { left: 110%; opacity: 0; } }
        @keyframes borderFlow { 0% { background-position: 0% 50%; } 100% { background-position: 200% 50%; } }
        @keyframes floatSoft { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        @keyframes rotateSlow { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
      `}</style>

      <section
        id="how-it-works"
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        className="relative min-h-[850px] px-[7vw] py-[160px] bg-[#07140c] overflow-hidden"
      >
        <div
          className="absolute inset-0 [mask-image:radial-gradient(circle_at_50%_50%,black,transparent_75%)]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(109,255,130,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(109,255,130,0.4) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            animation: 'gridPulse 8s ease-in-out infinite',
          }}
        />
        <div
          className="absolute top-[-15%] left-[-10%] w-[800px] h-[800px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(186,255,120,0.10) 0%, transparent 70%)',
            filter: 'blur(90px)',
            animation: 'auroraDrift1 28s ease-in-out infinite alternate',
          }}
        />
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(154,255,67,0.08) 0%, transparent 70%)',
            filter: 'blur(100px)',
            animation: 'auroraDrift2 32s ease-in-out infinite alternate',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(154,255,67,0.07), transparent 60%)`,
          }}
        />

        <div className="relative max-w-[1500px] mx-auto grid grid-cols-[0.85fr_1.15fr] gap-[100px] max-[950px]:grid-cols-1 max-[950px]:gap-[60px]">
          <div className="max-[950px]:static">
            <div className="max-[950px]:static max-[950px]:mb-12 min-[950px]:sticky min-[950px]:top-[140px]">
              <div
                className="w-fit flex items-center gap-[9px] px-[14px] py-[9px] rounded-[20px] text-[10px] font-semibold tracking-[0.14em] text-[#8fac98] border border-[rgba(149,255,103,0.18)] bg-[rgba(18,71,35,0.35)] backdrop-blur-sm"
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
                MIGRATION WORKFLOW / 03
              </div>

              <h2 className="mt-[30px] font-serif font-normal text-[clamp(52px,5.8vw,88px)] leading-[0.94] tracking-[-0.04em] text-[#eaf6ea]">
                <span className="block overflow-hidden">
                  <span className="inline-block">
                    {'From'.split('').map((ch, i) => (
                      <span key={i} className="inline-block" style={{
                        opacity: visible ? 1 : 0,
                        animation: visible ? `letterUp 0.9s ${0.2 + i * 0.03}s cubic-bezier(0.16,1,0.3,1) both` : 'none',
                        whiteSpace: 'pre',
                      }}>{ch}</span>
                    ))}
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span className="inline-block italic">
                    {'unknown'.split('').map((ch, i) => (
                      <span key={i} className="inline-block" style={{
                        opacity: visible ? 1 : 0,
                        whiteSpace: 'pre',
                        background: 'linear-gradient(90deg, #7bffc0 0%, #9cff43 50%, #7bffc0 100%)',
                        backgroundSize: '250% auto',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        animation: visible
                          ? `letterUp 0.9s ${0.35 + i * 0.03}s cubic-bezier(0.16,1,0.3,1) both, gradientShift 6s ${1.5 + i * 0.05}s ease-in-out infinite, shimmerText 8s ${1.5 + i * 0.05}s linear infinite`
                          : 'none',
                      }}>{ch}</span>
                    ))}
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span className="inline-block">
                    {'to'.split('').map((ch, i) => (
                      <span key={i} className="inline-block" style={{
                        opacity: visible ? 1 : 0,
                        animation: visible ? `letterUp 0.9s ${0.6 + i * 0.03}s cubic-bezier(0.16,1,0.3,1) both` : 'none',
                        whiteSpace: 'pre',
                      }}>{ch}</span>
                    ))}
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span className="inline-block">
                    {'quantum-ready.'.split('').map((ch, i) => (
                      <span key={i} className="inline-block" style={{
                        opacity: visible ? 1 : 0,
                        animation: visible ? `letterUp 0.9s ${0.75 + i * 0.03}s cubic-bezier(0.16,1,0.3,1) both` : 'none',
                        whiteSpace: 'pre',
                      }}>{ch}</span>
                    ))}
                  </span>
                </span>
              </h2>

              <p
                className="mt-8 max-w-[380px] text-[#8fa79a] leading-[1.7] text-[15px]"
                style={{
                  opacity: visible ? 1 : 0,
                  animation: visible ? 'fadeSlideUp 0.9s 1.4s cubic-bezier(0.16,1,0.3,1) both' : 'none',
                }}
              >
                A guided path from cryptographic discovery to a quantum-safe migration plan —
                without guesswork.
              </p>

              <div
                className="mt-8 flex items-center gap-3 text-[11px] text-[#5f7568] font-mono tracking-[0.2em]"
                style={{
                  opacity: visible ? 1 : 0,
                  animation: visible ? 'fadeSlideUp 0.9s 1.6s cubic-bezier(0.16,1,0.3,1) both' : 'none',
                }}
              >
                <span className="w-8 h-px bg-[rgba(160,255,118,0.3)]" />
                04 STEPS · ~12 WEEKS
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-[26px] top-2 bottom-2 w-px overflow-visible"
              style={{
                background: 'linear-gradient(180deg, rgba(170,255,97,0.4) 0%, rgba(104,246,194,0.3) 50%, transparent 100%)',
                backgroundSize: '100% 200%',
                animation: 'lineFlow 6s linear infinite',
                opacity: visible ? 1 : 0,
                transition: 'opacity 1.2s 0.6s',
              }}
            >
              <span
                className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#9cff43]"
                style={{
                  boxShadow: '0 0 20px 6px rgba(154,255,67,0.6)',
                  animation: 'travelDown 5s ease-in-out infinite',
                }}
              />
            </div>

            <div className="space-y-4">
              {workflowSteps.map(([number, title, text], i) => {
                const isHovered = hoveredIdx === i;
                return (
                  <div
                    key={number}
                    onMouseEnter={() => setHoveredIdx(i)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    className="relative pl-[70px] group cursor-default"
                    style={{
                      opacity: visible ? 1 : 0,
                      transform: visible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.94)',
                      filter: visible ? 'blur(0)' : 'blur(8px)',
                      transition: `opacity 1s ${0.3 + i * 0.15}s cubic-bezier(0.16,1,0.3,1), transform 1s ${0.3 + i * 0.15}s cubic-bezier(0.16,1,0.3,1), filter 1s ${0.3 + i * 0.15}s`,
                    }}
                  >
                    <div className="absolute left-0 top-[26px] z-10">
                      {isHovered && (
                        <>
                          <span
                            className="absolute top-1/2 left-1/2 w-[54px] h-[54px] rounded-full border-2 border-[#9cff43]/60 pointer-events-none"
                            style={{ animation: 'pulseRing 2.4s ease-out infinite' }}
                          />
                          <span
                            className="absolute top-1/2 left-1/2 w-[54px] h-[54px] rounded-full border border-[#16a961] pointer-events-none"
                            style={{ animation: 'pulseRing 2.4s 1.2s ease-out infinite' }}
                          />
                        </>
                      )}
                      <div className="relative w-[54px] h-[54px] rounded-full grid place-items-center border border-[rgba(160,255,118,0.20)] bg-[#07140c] text-[#7db58a] font-mono text-[12px] transition-all duration-300 group-hover:border-[#aaff61] group-hover:text-[#c7ff7d] group-hover:shadow-[0_0_30px_rgba(170,255,97,0.35)] group-hover:scale-110">
                        {number}
                        {isHovered && (
                          <span
                            className="absolute -inset-2 rounded-full border border-dashed border-[#9cff43]/60"
                            style={{ animation: 'rotateSlow 4s linear infinite' }}
                          />
                        )}
                      </div>
                    </div>

                    <div className="relative rounded-[20px] border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm px-7 py-6 transition-all duration-300 group-hover:bg-white/[0.05] group-hover:border-[rgba(160,255,118,0.22)] group-hover:translate-x-1 overflow-hidden">
                      <span
                        className={`absolute top-0 h-full w-1/3 pointer-events-none z-[1] ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                        style={{
                          background: 'linear-gradient(90deg, transparent, rgba(154,255,67,0.14), transparent)',
                          animation: isHovered ? 'scanLine 1.2s ease-out' : 'none',
                        }}
                      />
                      <span
                        className={`absolute -top-20 -right-20 w-40 h-40 rounded-full pointer-events-none transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                        style={{
                          background: 'radial-gradient(circle, rgba(154,255,67,0.15), transparent 70%)',
                          filter: 'blur(40px)',
                          animation: isHovered ? 'floatSoft 5s ease-in-out infinite' : 'none',
                        }}
                      />
                      <span
                        className={`absolute top-0 left-0 h-[2px] z-10 pointer-events-none transition-all duration-700 ${isHovered ? 'w-full opacity-100' : 'w-0 opacity-0'}`}
                        style={{ background: 'linear-gradient(90deg, transparent, #9cff43, transparent)' }}
                      />
                      <span
                        className={`absolute bottom-0 left-0 h-[2px] transition-all duration-700 ${isHovered ? 'w-full' : 'w-0'}`}
                        style={{
                          background: 'linear-gradient(90deg, #16a961, #9cff43, #16a961)',
                          backgroundSize: '200% 100%',
                          animation: isHovered ? 'borderFlow 3s linear infinite' : 'none',
                        }}
                      />
                      <div className="relative flex items-start justify-between gap-6 z-[2]">
                        <div>
                          <h3 className={`text-[22px] font-medium font-serif transition-colors duration-400 ${isHovered ? 'text-[#eef5ef]' : 'text-[#c9d6cc]'}`}>
                            {title}
                          </h3>
                          <p className={`mt-2 text-[14px] leading-[1.6] max-w-[520px] transition-colors duration-400 ${isHovered ? 'text-[#b8d6be]' : 'text-[#8ea99a]'}`}>
                            {text}
                          </p>
                        </div>
                        <div
                          className={`shrink-0 mt-1 w-10 h-10 rounded-full grid place-items-center transition-all duration-500 ${isHovered ? 'bg-[#9cff43] text-[#0a1f14] scale-110 shadow-[0_0_25px_rgba(154,255,67,0.5)]' : 'bg-white/[0.04] text-[#4d6557] border border-white/[0.06]'}`}
                        >
                          <ArrowRight size={18} className={`transition-transform duration-400 ${isHovered ? 'translate-x-0.5' : ''}`} />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}