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
import './App.css';

export default function App(){
 const [menuOpen,setMenuOpen]=useState(false); const [scrolled,setScrolled]=useState(false); const [scanStarted,setScanStarted]=useState(false); const [searchOpen,setSearchOpen]=useState(false); const heroRef=useRef(null);
 useEffect(()=>{const fn=()=>setScrolled(window.scrollY>30); window.addEventListener('scroll',fn); return()=>window.removeEventListener('scroll',fn)},[]);
 useEffect(()=>{const key=e=>{if(e.key==='/' && !['INPUT','TEXTAREA'].includes(document.activeElement.tagName)){e.preventDefault();setSearchOpen(true)} if(e.key==='Escape'){setSearchOpen(false)}};window.addEventListener('keydown',key);return()=>window.removeEventListener('keydown',key)},[]);
 const handleMouseMove=e=>{if(!heroRef.current)return;const r=heroRef.current.getBoundingClientRect();heroRef.current.style.setProperty('--mouse-x',`${e.clientX-r.left}px`);heroRef.current.style.setProperty('--mouse-y',`${e.clientY-r.top}px`)};
 const startScan=()=>{setScanStarted(true);setTimeout(()=>{document.getElementById('readiness')?.scrollIntoView({behavior:'smooth'});setScanStarted(false)},1200)};
 return <div className="app"><Navbar scrolled={scrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} onScan={startScan} onSearch={()=>setSearchOpen(true)}/><main><div onMouseMove={handleMouseMove}><Hero heroRef={heroRef} scanStarted={scanStarted} onScan={startScan}/></div><Platform/><Workflow/><Audience/><Readiness onScan={startScan}/><Roadmap/></main><Footer/>{searchOpen&&<SearchOverlay close={()=>setSearchOpen(false)}/>}</div>
}

function SearchOverlay({close}){const [q,setQ]=useState('');const results=[['Platform','See the cryptography behind your systems.','platform'],['How it works','From unknown to quantum-ready.','how-it-works'],['CISOs','Understand organizational exposure.','ciso'],['Engineering','Find vulnerable algorithms and dependencies.','engineering'],['Procurement','Build quantum-safe requirements into technology decisions.','procurement'],['Roadmap','Prepare before the transition becomes urgent.','roadmap']];const filtered=results.filter(r=>`${r[0]} ${r[1]}`.toLowerCase().includes(q.toLowerCase()));return <div className="search-overlay" onMouseDown={e=>{if(e.target===e.currentTarget)close()}}><div className="search-modal"><div className="search-modal-head"><div className="search-input"><Search size={18}/><input autoFocus value={q} onChange={e=>setQ(e.target.value)} placeholder="Search cryptography, platform, roadmap..."/><kbd>ESC</kbd></div><button onClick={close}><X size={18}/></button></div><div className="search-results">{filtered.map(r=><button key={r[2]} onClick={()=>{close();document.getElementById(r[2])?.scrollIntoView({behavior:'smooth'})}}><div><strong>{r[0]}</strong><span>{r[1]}</span></div><ArrowRight size={16}/></button>)}{!filtered.length&&<p>No matching section found.</p>}</div></div></div>}
