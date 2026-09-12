import { useEffect, useRef, useState } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Platform from './components/Platform/Platform';
import Workflow from './components/Workflow/Workflow';
import Audience from './components/Audience/Audience';
import Readiness from './components/Readiness/Readiness';
import Roadmap from './components/Roadmap/Roadmap';
import Footer from './components/Footer/Footer';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scanStarted, setScanStarted] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const heroRef = useRef(null);

  /* Prevent scroll while loading */
  useEffect(() => {
    document.body.style.overflow = loaded ? '' : 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [loaded]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const key = (e) => {
      if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === 'Escape') setSearchOpen(false);
    };
    window.addEventListener('keydown', key);
    return () => window.removeEventListener('keydown', key);
  }, []);

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const r = heroRef.current.getBoundingClientRect();
    heroRef.current.style.setProperty('--mouse-x', `${e.clientX - r.left}px`);
    heroRef.current.style.setProperty('--mouse-y', `${e.clientY - r.top}px`);
  };

  const startScan = () => {
    setScanStarted(true);
    setTimeout(() => {
      document.getElementById('readiness')?.scrollIntoView({ behavior: 'smooth' });
      setScanStarted(false);
    }, 1200);
  };

  return (
    <>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}

      <div
        className={`min-h-screen overflow-x-hidden transition-opacity duration-700 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Navbar
          scrolled={scrolled}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          onScan={startScan}
          onSearch={() => setSearchOpen(true)}
        />
        <main>
          <div onMouseMove={handleMouseMove}>
            <Hero heroRef={heroRef} scanStarted={scanStarted} onScan={startScan} />
          </div>
          <Platform />
          <Workflow />
          <Audience />
          <Readiness onScan={startScan} />
          <Roadmap />
        </main>
        <Footer />
        {searchOpen && <SearchOverlay close={() => setSearchOpen(false)} />}
      </div>
    </>
  );
}

/* SearchOverlay unchanged — keep your existing implementation */
function SearchOverlay({ close }) {
  const [q, setQ] = useState('');
  const results = [
    ['Platform', 'See the cryptography behind your systems.', 'platform'],
    ['How it works', 'From unknown to quantum-ready.', 'how-it-works'],
    ['CISOs', 'Understand organizational exposure.', 'ciso'],
    ['Engineering', 'Find vulnerable algorithms and dependencies.', 'engineering'],
    ['Procurement', 'Build quantum-safe requirements into technology decisions.', 'procurement'],
    ['Roadmap', 'Prepare before the transition becomes urgent.', 'roadmap'],
  ];
  const filtered = results.filter((r) =>
    `${r[0]} ${r[1]}`.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div
      className="fixed inset-0 z-[300] bg-[rgba(0,10,5,0.68)] backdrop-blur-[14px] grid justify-center pt-[120px] px-4"
      onMouseDown={(e) => { if (e.target === e.currentTarget) close(); }}
    >
      <div className="w-[min(680px,calc(100%-32px))] border border-[rgba(163,255,175,0.18)] bg-[rgba(5,21,11,0.96)] shadow-[0_40px_120px_rgba(0,0,0,0.45)] rounded-[22px] overflow-hidden">
        <div className="flex gap-[10px] p-[14px] border-b border-white/[0.08]">
          <div className="flex-1 flex items-center gap-[10px] px-3 h-12 border border-white/[0.09] rounded-[13px] bg-white/[0.035] text-[#8ca096]">
            <Search size={18} />
            <input
              autoFocus
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search cryptography, platform, roadmap..."
              className="flex-1 border-0 outline-0 bg-transparent text-[#edf6ee] text-sm"
            />
            <kbd className="text-[9px] text-[#7b8e80]">ESC</kbd>
          </div>
          <button
            onClick={close}
            className="w-12 border border-white/[0.08] rounded-[13px] bg-white/[0.035] text-[#a7b6aa]"
          >
            <X size={18} className="mx-auto" />
          </button>
        </div>
        <div className="p-[10px]">
          {filtered.map((r) => (
            <button
              key={r[2]}
              onClick={() => {
                close();
                document.getElementById(r[2])?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full flex items-center justify-between text-left p-[15px] rounded-[13px] bg-transparent text-[#e8f1e9] hover:bg-[rgba(145,255,157,0.07)]"
            >
              <div>
                <strong className="block text-sm">{r[0]}</strong>
                <span className="block mt-1 text-[#7e9183] text-[11px]">{r[1]}</span>
              </div>
              <ArrowRight size={16} />
            </button>
          ))}
          {!filtered.length && (
            <p className="p-[25px] text-[#7e9183] text-center">No matching section found.</p>
          )}
        </div>
      </div>
    </div>
  );
}