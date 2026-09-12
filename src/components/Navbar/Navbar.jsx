import { ArrowRight, Menu, Search, Sun, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ scrolled, menuOpen, setMenuOpen, onScan, onSearch }) {
  const links = [
    ['Platform', 'platform'], ['How it works', 'how-it-works'], ['For CISOs', 'ciso'],
    ['For Engineering', 'engineering'], ['For Procurement', 'procurement'], ['DST roadmap', 'roadmap'],
  ];
  const go = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); };
  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-inner">
        <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
          <div className="brand-symbol"><span /></div>
          <div className="brand-name">Q PRAKRITI<small>QUANTUM SECURITY</small></div>
        </a>
        <nav className={`nav-links ${menuOpen ? 'mobile-open' : ''}`}>
          {links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => go(id)}>{label}</a>)}
        </nav>
        <div className="nav-actions">
          <button className="search-button" onClick={onSearch}><Search size={16} /><span>Search</span><kbd>/</kbd></button>
          <button className="theme-button" aria-label="Theme"><Sun size={16} /></button>
          <button className="nav-outline-button" onClick={() => go('readiness')}>Readiness check</button>
          <button className="nav-primary-button" onClick={onScan}>Check readiness <ArrowRight size={15} /></button>
        </div>
        <button className="mobile-menu-button" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
      </div>
    </header>
  );
}
