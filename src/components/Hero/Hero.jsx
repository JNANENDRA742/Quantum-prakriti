import { Activity, ArrowRight, ChevronDown, CircleDot, ShieldCheck } from 'lucide-react';
import CryptoNetwork from '../CryptoNetwork/CryptoNetwork';
import './Hero.css';

export default function Hero({ heroRef, scanStarted, onScan }) {
  return <section id="home" className="hero" ref={heroRef}>
    <div className="hero-glow"/><div className="quantum-grid"/><div className="hero-noise"/>
    <div className="floating-label label-one">NIST FIPS 203 · ML-KEM</div>
    <div className="floating-label label-two">NIST FIPS 204 · ML-DSA</div>
    <div className="floating-label label-three">NIST FIPS 205 · SLH-DSA</div>
    <div className="floating-label label-four">CRYPTOGRAPHIC VISIBILITY</div>
    <div className="hero-content">
      <div className="hero-eyebrow"><span className="status-dot"/>CRYPTOGRAPHIC VISIBILITY<span className="slash">/</span>01</div>
      <h1>Know your<br/>cryptography.<br/><em>Prepare for</em><br/><em>what comes next.</em></h1>
      <p className="hero-description">Quantum-safe migration starts with visibility. Discover cryptographic assets, understand your quantum exposure, and build evidence for a confident migration to post-quantum cryptography.</p>
      <div className="hero-buttons">
        <button className="primary-cta" onClick={onScan}>{scanStarted ? <><Activity size={18} className="spin"/>Scanning environment...</> : <>Start readiness scan<ArrowRight size={18}/></>}</button>
        <button className="secondary-cta" onClick={() => document.getElementById('platform')?.scrollIntoView({behavior:'smooth'})}>Explore the platform<ArrowRight size={17}/></button>
      </div>
      <div className="hero-meta"><div><span className="meta-dot"/>Quantum-safe by design</div><div><ShieldCheck size={15}/>Built for migration visibility</div></div>
    </div>
    <CryptoNetwork/>
    <button className="scroll-indicator" onClick={() => document.getElementById('platform')?.scrollIntoView({behavior:'smooth'})}><span/><CircleDot size={9}/>Scroll to explore<ChevronDown size={15}/></button>
  </section>;
}
