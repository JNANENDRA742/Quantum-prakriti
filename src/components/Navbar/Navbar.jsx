import { useEffect, useState } from 'react';
import { ArrowRight, Menu, Search, X } from 'lucide-react';

export default function Navbar({ scrolled, menuOpen, setMenuOpen, onScan, onSearch, onAudienceSelect }) {
  const [visible, setVisible] = useState(false);
  const links = [
    ['Platform', 'platform'],
    ['How it works', 'how-it-works'],
    ['For CISOs', 'ciso'],
    ['For Engineering', 'engineering'],
    ['For Procurement', 'procurement'],
    ['DST roadmap', 'roadmap'],
  ];

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  const go = (id) => {
    if (['ciso', 'engineering', 'procurement'].includes(id)) {
      onAudienceSelect?.(id);
      document.getElementById('audience')?.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <style>{`
        @keyframes navSlideDown {
          0%   { opacity: 0; transform: translateY(-30px); filter: blur(6px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes navLinkFade {
          0%   { opacity: 0; transform: translateY(-12px); filter: blur(4px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes logoDraw {
          0%   { stroke-dashoffset: 100; opacity: 0; }
          100% { stroke-dashoffset: 0; opacity: 1; }
        }
        @keyframes logoPulse {
          0%, 100% { transform: rotate(45deg) scale(1); }
          50%      { transform: rotate(45deg) scale(1.08); }
        }
      `}</style>

      <header
        className={`fixed top-0 left-0 w-full z-[100] px-[4vw] transition-all duration-[350ms] ${
          scrolled
            ? 'py-[10px] bg-[rgba(3,10,7,0.82)] backdrop-blur-[20px] border-b border-[rgba(160,255,118,0.08)]'
            : 'py-[18px]'
        }`}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(-30px)',
          filter: visible ? 'blur(0)' : 'blur(6px)',
          transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1), filter 0.8s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        <div className="h-[62px] max-w-[1450px] mx-auto flex items-center justify-between gap-6">
          <a
            className="flex items-center gap-[11px] min-w-[170px] group/logo"
            href="#home"
            onClick={() => setMenuOpen(false)}
            style={{
              opacity: visible ? 1 : 0,
              animation: visible ? 'navSlideDown 0.9s 0.1s cubic-bezier(0.16,1,0.3,1) both' : 'none',
            }}
          >
            <div
              className="w-[34px] h-[34px] rounded-[10px] border-2 border-[#a8ff4e] grid place-items-center rotate-45 shadow-[0_0_22px_rgba(151,255,68,0.3)] transition-all duration-500 group-hover/logo:shadow-[0_0_35px_rgba(151,255,68,0.55)]"
              style={{ animation: 'logoPulse 4s ease-in-out infinite' }}
            >
              <span className="w-[14px] h-[14px] border-2 border-[#baff68] rounded-[4px]" />
            </div>
            <div className="text-[15px] font-bold tracking-[0.14em]">
              Q PRAKRITI
              <small className="block mt-[2px] text-[#79a88a] text-[7px] tracking-[0.17em]">
                QUANTUM SECURITY
              </small>
            </div>
          </a>

          <nav
            className={`flex items-center gap-[25px] text-[#9ca99f] text-[13px] whitespace-nowrap ${
              menuOpen
                ? 'max-[950px]:fixed max-[950px]:flex max-[950px]:flex-col max-[950px]:items-start max-[950px]:top-20 max-[950px]:left-5 max-[950px]:right-5 max-[950px]:p-[25px] max-[950px]:border max-[950px]:border-white/10 max-[950px]:rounded-[18px] max-[950px]:bg-[rgba(5,18,10,0.96)] max-[950px]:backdrop-blur-[20px] max-[950px]:z-[120]'
                : 'max-[950px]:hidden'
            }`}
          >
            {links.map(([label, id], i) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => go(id)}
                className="relative transition-colors duration-200 hover:text-[#c7ff7a] group/navlink"
                style={{
                  opacity: visible ? 1 : 0,
                  animation: visible
                    ? `navLinkFade 0.7s ${0.25 + i * 0.06}s cubic-bezier(0.16,1,0.3,1) both`
                    : 'none',
                }}
              >
                {label}
                <span
                  className="absolute -bottom-1 left-0 h-[1.5px] w-full bg-gradient-to-r from-[#9cff43] to-[#16a961] origin-left scale-x-0 group-hover/navlink:scale-x-100 transition-transform duration-400 rounded-full"
                />
              </a>
            ))}
          </nav>

          <div
            className="flex items-center gap-[9px] max-[1200px]:[&_.search-button]:hidden max-[1200px]:[&_.theme-button]:hidden max-[950px]:hidden"
            style={{
              opacity: visible ? 1 : 0,
              animation: visible ? 'navSlideDown 0.9s 0.6s cubic-bezier(0.16,1,0.3,1) both' : 'none',
            }}
          >
            <button
              className="search-button h-[42px] flex items-center gap-2 px-[13px] rounded-[22px] border border-[rgba(210,255,210,0.13)] bg-white/[0.035] text-[#b5c0b7] transition-all duration-300 hover:border-[rgba(210,255,210,0.25)] hover:bg-white/[0.07] hover:scale-[1.02]"
              onClick={onSearch}
            >
              <Search size={16} />
              <span>Search</span>
              <kbd className="px-[7px] py-[2px] border border-white/[0.12] rounded-[5px] text-[10px] text-[#89958c]">
                /
              </kbd>
            </button>

            <button
              className="group/cta relative h-[42px] flex items-center gap-2 px-[19px] rounded-[22px] font-semibold text-[#08100a] bg-[#f0f4eb] border border-transparent hover:bg-[#baff67] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_30px_rgba(186,255,103,0.3)] overflow-hidden"
              onClick={onScan}
            >
              <span className="relative z-10">Check readiness</span>
              <ArrowRight
                size={15}
                className="relative z-10 transition-transform duration-300 group-hover/cta:translate-x-1"
              />
            </button>
          </div>

          <button
            className="hidden max-[950px]:grid max-[950px]:place-items-center w-[42px] h-[42px] rounded-full border border-white/[0.14] bg-white/[0.04] text-white transition-all duration-300 hover:bg-white/[0.10] hover:scale-105"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            style={{
              opacity: visible ? 1 : 0,
              animation: visible ? 'navSlideDown 0.9s 0.6s cubic-bezier(0.16,1,0.3,1) both' : 'none',
            }}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>
    </>
  );
}