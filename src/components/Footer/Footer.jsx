import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const columns = [
    { title: 'Platform', links: ['Cryptographic visibility', 'Algorithm inventory', 'Migration planning', 'Crypto-agility'] },
    { title: 'Solutions', links: ['For CISOs', 'For Engineering', 'For Procurement', 'For Compliance'] },
    { title: 'Resources', links: ['NIST PQC standards', 'India DST roadmap', 'Documentation', 'Security'] },
    { title: 'Company', links: ['About', 'Careers', 'Contact', 'Press'] },
  ];

  const socials = [
    { Icon: FaXTwitter, href: 'https://twitter.com', label: 'X / Twitter' },
    { Icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { Icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
  ];

  const reveal = (delay = 0, from = 'up') => {
    const initial = {
      up: 'translateY(35px)',
      left: 'translateX(-30px)',
      right: 'translateX(30px)',
    }[from];
    return {
      opacity: visible ? 1 : 0,
      transform: visible ? 'translate(0)' : initial,
      filter: visible ? 'blur(0)' : 'blur(6px)',
      transition: `opacity 1s ${delay}s cubic-bezier(0.16,1,0.3,1), transform 1s ${delay}s cubic-bezier(0.16,1,0.3,1), filter 1s ${delay}s`,
    };
  };

  return (
    <>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.5; transform: scale(1.4); }
        }
        @keyframes shimmerText {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>

      <footer ref={footerRef} className="bg-[#030b06] border-t border-white/[0.07] pt-[80px] pb-10 px-[7vw]">
        <div className="max-w-[1500px] mx-auto">
          <div className="grid grid-cols-[1.2fr_1fr] gap-[80px] pb-[60px] border-b border-white/[0.07] max-[950px]:grid-cols-1 max-[950px]:gap-10">
            <div style={reveal(0.1, 'left')}>
              <div className="flex items-center gap-[13px] mb-6">
                <div className="w-[38px] h-[38px] rounded-[11px] border-2 border-[#a8ff4e] grid place-items-center rotate-45 shadow-[0_0_22px_rgba(151,255,68,0.35)]">
                  <span className="w-[15px] h-[15px] border-2 border-[#baff68] rounded-[4px]" />
                </div>
                <div>
                  <strong className="block text-[#e8f2e9] tracking-[0.14em] text-[15px]">
                    Q PRAKRITI
                  </strong>
                  <small className="block mt-[3px] text-[7px] tracking-[0.20em] text-[#79a88a] font-mono">
                    QUANTUM SECURITY PLATFORM
                  </small>
                </div>
              </div>
              <p className="max-w-[440px] text-[#8fa79a] leading-[1.7] text-[15px]">
                Visibility today. Quantum-safe infrastructure tomorrow. Discover your
                cryptographic estate and prepare for the post-quantum transition.
              </p>

              <div className="flex items-center gap-3 mt-7">
                {socials.map(({ Icon, href, label }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-full border border-white/[0.10] grid place-items-center text-[#8fa79a] hover:border-[#aaff61]/40 hover:text-[#aaff61] transition-colors"
                    style={{
                      opacity: visible ? 1 : 0,
                      transform: visible ? 'scale(1)' : 'scale(0.6)',
                      transition: `opacity 0.7s ${0.4 + i * 0.1}s cubic-bezier(0.34,1.56,0.64,1), transform 0.7s ${0.4 + i * 0.1}s cubic-bezier(0.34,1.56,0.64,1)`,
                    }}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            <div style={reveal(0.3, 'right')}>
              <div className="font-mono text-[10px] tracking-[0.24em] text-[#79a88a] mb-4">
                POST-QUANTUM BRIEFING
              </div>
              <h4 className="font-serif text-[28px] text-[#eaf6ea] leading-[1.15] mb-3">
                Monthly crypto-visibility insights.
              </h4>
              <p className="text-[#8fa79a] text-[14px] leading-[1.6] mb-6 max-w-[380px]">
                Standards updates, migration playbooks, and PQC readiness benchmarks.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2 max-w-[440px]">
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="flex-1 h-[52px] px-5 rounded-full border border-white/[0.10] bg-white/[0.03] text-[#eaf6ea] placeholder:text-[#5f7568] outline-none focus:border-[#aaff61]/40 transition-colors text-[14px]"
                />
                <button
                  type="submit"
                  className="group/sub h-[52px] px-5 rounded-full bg-[linear-gradient(100deg,#b4ff50,#5ff2a9)] text-[#071008] font-semibold inline-flex items-center gap-2 hover:-translate-y-[1px] hover:shadow-[0_15px_40px_rgba(80,255,126,0.30)] transition-all"
                >
                  Subscribe <ArrowRight size={15} className="group-hover/sub:translate-x-0.5 transition-transform" />
                </button>
              </form>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-10 py-[60px] max-[950px]:grid-cols-2 max-[600px]:grid-cols-1">
            {columns.map((col, i) => (
              <div key={col.title} style={reveal(0.5 + i * 0.12, 'up')}>
                <div className="font-mono text-[10px] tracking-[0.24em] text-[#79a88a] mb-5">
                  {col.title.toUpperCase()}
                </div>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-[#a8b8ac] text-[14px] hover:text-[#aaff61] transition-colors">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div
            className="pt-[28px] border-t border-white/[0.07] flex items-center justify-between gap-6 text-[11px] text-[#5f7568] max-[950px]:flex-col max-[950px]:items-start"
            style={reveal(1.2, 'up')}
          >
            <span>© 2026 Q Prakriti. All rights reserved.</span>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-[#aaff61] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#aaff61] transition-colors">Terms</a>
              <a href="#" className="hover:text-[#aaff61] transition-colors">Security</a>
              <div className="flex items-center gap-2 text-[#79a88a] font-mono tracking-[0.16em]">
                <span className="w-[6px] h-[6px] rounded-full bg-[#9cff43] shadow-[0_0_10px_#91ff50]" style={{ animation: 'pulse 2s infinite' }} />
                ALL SYSTEMS OPERATIONAL
              </div>
            </div>
          </div>
        </div>
      </footer>

      <button
        className="fixed right-[25px] bottom-[25px] z-50 w-[60px] h-[60px] rounded-full border border-white/[0.15] bg-[#b9ff61] text-[#10200f] grid place-items-center shadow-[0_15px_40px_rgba(100,255,100,0.25)] transition-all duration-[250ms] hover:scale-[1.08] hover:-rotate-6"
        aria-label="Security status"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'scale(1) rotate(0deg)' : 'scale(0.5) rotate(-90deg)',
          transition: 'opacity 0.9s 1.4s cubic-bezier(0.16,1,0.3,1), transform 0.9s 1.4s cubic-bezier(0.34,1.56,0.64,1)',
        }}
      >
        <ShieldCheck size={21} />
      </button>
    </>
  );
}