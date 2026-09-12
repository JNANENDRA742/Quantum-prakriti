import { ArrowRight, Menu, Search, Sun, X } from 'lucide-react';

export default function Navbar({ scrolled, menuOpen, setMenuOpen, onScan, onSearch }) {
  const links = [
    ['Platform', 'platform'],
    ['How it works', 'how-it-works'],
    ['For CISOs', 'ciso'],
    ['For Engineering', 'engineering'],
    ['For Procurement', 'procurement'],
    ['DST roadmap', 'roadmap'],
  ];
  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] px-[4vw] transition-all duration-[350ms] ${
        scrolled
          ? 'py-[10px] bg-[rgba(3,10,7,0.82)] backdrop-blur-[20px] border-b border-[rgba(160,255,118,0.08)]'
          : 'py-[18px]'
      }`}
    >
      <div className="h-[62px] max-w-[1450px] mx-auto flex items-center justify-between gap-6">
        <a
          className="flex items-center gap-[11px] min-w-[170px]"
          href="#home"
          onClick={() => setMenuOpen(false)}
        >
          <div className="w-[34px] h-[34px] rounded-[10px] border-2 border-[#a8ff4e] grid place-items-center rotate-45 shadow-[0_0_22px_rgba(151,255,68,0.3)]">
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
          {links.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => go(id)}
              className="transition-colors duration-200 hover:text-[#c7ff7a]"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-[9px] max-[1200px]:[&_.search-button]:hidden max-[1200px]:[&_.theme-button]:hidden max-[950px]:hidden">
          <button
            className="search-button h-[42px] flex items-center gap-2 px-[13px] rounded-[22px] border border-[rgba(210,255,210,0.13)] bg-white/[0.035] text-[#b5c0b7]"
            onClick={onSearch}
          >
            <Search size={16} />
            <span>Search</span>
            <kbd className="px-[7px] py-[2px] border border-white/[0.12] rounded-[5px] text-[10px] text-[#89958c]">
              /
            </kbd>
          </button>
          <button
            className="theme-button w-[42px] h-[42px] grid place-items-center rounded-[22px] border border-[rgba(210,255,210,0.13)] bg-white/[0.035] text-[#eaf3e9]"
            aria-label="Theme"
          >
            <Sun size={16} />
          </button>
          <button
            className="h-[42px] px-[18px] rounded-[22px] border border-[rgba(210,255,210,0.13)] bg-white/[0.035] text-[#eaf3e9]"
            onClick={() => go('readiness')}
          >
            Readiness check
          </button>
          <button
            className="h-[42px] flex items-center gap-2 px-[19px] rounded-[22px] font-semibold text-[#08100a] bg-[#f0f4eb] border border-transparent hover:bg-[#baff67]"
            onClick={onScan}
          >
            Check readiness <ArrowRight size={15} />
          </button>
        </div>

        <button
          className="hidden max-[950px]:grid max-[950px]:place-items-center w-[42px] h-[42px] rounded-full border border-white/[0.14] bg-white/[0.04] text-white"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}