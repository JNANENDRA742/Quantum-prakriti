import { Activity, ArrowRight, ChevronDown, CircleDot, ShieldCheck, Sparkles } from 'lucide-react';
import CryptoNetwork from '../CryptoNetwork/CryptoNetwork';

export default function Hero({ heroRef, scanStarted, onScan }) {
  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-[1000px] px-[6vw] pt-[150px] pb-[100px] overflow-hidden max-[950px]:min-h-[1350px] max-[950px]:pt-[140px] max-[600px]:!px-5 max-[600px]:!pt-[120px] max-[600px]:!pb-[60px]"
      style={{
        background:
          'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(74,255,113,0.10), transparent 25%), radial-gradient(circle at 70% 30%, rgba(19,150,74,0.28), transparent 35%), linear-gradient(120deg, #03100a 0%, #062215 48%, #03100a 100%)',
      }}
    >
      {/* Background layers */}
      <div className="absolute -inset-[20%] opacity-70 blur-[40px] animate-[breathe_7s_ease-in-out_infinite_alternate]"
        style={{
          background:
            'radial-gradient(circle at 20% 30%, rgba(0,255,132,0.10), transparent 22%), radial-gradient(circle at 80% 65%, rgba(99,255,53,0.10), transparent 26%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.14] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(109,255,130,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(109,255,130,0.10) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.12] scale-[1.4] animate-[water_18s_linear_infinite]"
        style={{
          backgroundImage:
            'repeating-radial-gradient(ellipse at 50% 50%, rgba(71,255,118,0.12) 0, rgba(71,255,118,0.02) 2px, transparent 4px, transparent 13px)',
        }}
      />

      {/* Floating standard labels */}
      <FloatLabel className="top-[24%] left-[3%]" delay="0s">NIST FIPS 203 · ML-KEM</FloatLabel>
      <FloatLabel className="top-[26%] right-[4%]" delay="1.2s">NIST FIPS 204 · ML-DSA</FloatLabel>
      <FloatLabel className="bottom-[30%] left-[5%]" delay="2.4s">NIST FIPS 205 · SLH-DSA</FloatLabel>

      {/* Grid */}
      <div className="relative z-[4] grid grid-cols-[1.05fr_0.95fr] gap-[60px] max-w-[1500px] mx-auto items-center max-[950px]:grid-cols-1 max-[950px]:gap-[60px]">

        {/* ── LEFT: Text ── */}
        <div className="max-w-[720px]">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-[9px] px-[14px] py-[9px] border border-[rgba(149,255,103,0.20)] bg-[rgba(18,71,35,0.35)] rounded-[20px] text-[#b8dcb9] text-[10px] font-semibold tracking-[0.14em] backdrop-blur-sm">
            <span className="w-[7px] h-[7px] rounded-full bg-[#9cff43] shadow-[0_0_12px_#91ff50] animate-[pulse_2s_infinite]" />
            CRYPTOGRAPHIC VISIBILITY
            <span className="text-[#52685a]">/</span>
            <span className="text-[#7aa584]">01</span>
          </div>

          {/* H1 — refined scale */}
          <h1 className="mt-8 mb-7 font-serif font-normal text-[clamp(56px,6.4vw,104px)] leading-[0.92] tracking-[-0.05em] max-[600px]:text-[52px]">
            Know your
            <br />
            cryptography.
            <br />
            <em className="text-[#68f6c2] italic pr-2">Prepare for</em>
            <br />
            <em className="text-[#68f6c2] italic">what comes next.</em>
          </h1>

          {/* Divider accent */}
          <div className="w-[60px] h-[2px] bg-gradient-to-r from-[#aaff61] to-transparent mb-6" />

          <p className="max-w-[560px] text-[#a8b8ac] text-[17px] leading-[1.75] max-[600px]:text-[15px]">
            Quantum-safe migration starts with visibility. Discover cryptographic assets,
            understand your quantum exposure, and build evidence for a confident migration
            to post-quantum cryptography.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-[13px] mt-[36px] max-[600px]:flex-col max-[600px]:items-stretch">
            <button
              className="group h-14 pl-6 pr-5 rounded-[30px] font-semibold flex items-center justify-center gap-3 border-none text-[#071008] bg-[linear-gradient(100deg,#b4ff50,#5ff2a9)] shadow-[0_15px_45px_rgba(80,255,126,0.22)] hover:-translate-y-[2px] hover:shadow-[0_20px_55px_rgba(80,255,126,0.34)] transition-all"
              onClick={onScan}
            >
              {scanStarted ? (
                <>
                  <Activity size={18} className="animate-[rotateRadar_1s_linear_infinite]" />
                  Scanning environment...
                </>
              ) : (
                <>
                  Start readiness scan
                  <span className="w-7 h-7 rounded-full bg-[#071008]/10 grid place-items-center group-hover:bg-[#071008]/20 transition-colors">
                    <ArrowRight size={15} />
                  </span>
                </>
              )}
            </button>
            <button
              className="h-14 px-6 rounded-[30px] font-semibold flex items-center justify-center gap-3 text-[#e1eae2] border border-[rgba(191,255,196,0.22)] bg-white/[0.04] hover:bg-white/[0.09] hover:border-[rgba(191,255,196,0.35)] transition-all"
              onClick={() => document.getElementById('platform')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore the platform <ArrowRight size={17} />
            </button>
          </div>

          {/* Trust meta */}
          <div className="flex flex-wrap gap-x-7 gap-y-3 mt-[32px] text-[#7e9183] text-[11px]">
            <div className="flex items-center gap-[7px]">
              <span className="w-[7px] h-[7px] rounded-full bg-[#9cff43] shadow-[0_0_12px_#91ff50]" />
              Quantum-safe by design
            </div>
            <div className="flex items-center gap-[7px]">
              <ShieldCheck size={15} className="text-[#68f6c2]" /> Built for migration visibility
            </div>
            <div className="flex items-center gap-[7px]">
              <Sparkles size={15} className="text-[#aaff61]" /> Aligned with NIST PQC standards
            </div>
          </div>

          {/* NIST trust strip */}
          <div className="mt-[52px] pt-[26px] border-t border-[rgba(160,255,118,0.10)] flex items-center gap-6 flex-wrap">
            <span className="font-mono text-[9px] tracking-[0.22em] text-[#556b5d]">
              ALIGNED WITH
            </span>
            <div className="flex items-center gap-5 text-[10px] font-mono tracking-[0.14em] text-[#8aa690]">
              <span>NIST</span>
              <span className="w-px h-3 bg-[rgba(160,255,118,0.20)]" />
              <span>FIPS 203</span>
              <span className="w-px h-3 bg-[rgba(160,255,118,0.20)]" />
              <span>FIPS 204</span>
              <span className="w-px h-3 bg-[rgba(160,255,118,0.20)]" />
              <span>FIPS 205</span>
              <span className="w-px h-3 bg-[rgba(160,255,118,0.20)]" />
              <span>DST · INDIA</span>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Layered visual ── */}
        <div className="relative h-[640px] max-[950px]:h-auto">
          {/* Floating stat card top */}
          <div className="hidden min-[950px]:block absolute -top-2 -left-8 z-[6] px-5 py-4 rounded-2xl border border-[rgba(160,255,118,0.16)] bg-[rgba(5,20,11,0.82)] backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            <div className="font-mono text-[9px] tracking-[0.20em] text-[#7e9a86] mb-2">
              CRYPTO ASSETS · TRACKED
            </div>
            <div className="flex items-end gap-2">
              <span className="font-serif text-[34px] leading-none text-[#eaf6ea]">12,847</span>
              <span className="text-[11px] text-[#9cff43] mb-[3px]">+18%</span>
            </div>
            <div className="mt-3 flex items-end gap-[3px] h-7">
              {[30, 45, 38, 60, 55, 72, 68, 85, 78, 92, 88, 100].map((h, i) => (
                <span
                  key={i}
                  className="w-[6px] rounded-t bg-gradient-to-t from-[#68f6c2] to-[#aaff61]"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          {/* Floating alert card bottom */}
          <div className="hidden min-[950px]:block absolute bottom-4 -right-4 z-[6] px-5 py-4 rounded-2xl border border-[rgba(255,191,120,0.22)] bg-[rgba(40,24,8,0.86)] backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.35)] max-w-[240px]">
            <div className="flex items-center gap-2 font-mono text-[9px] tracking-[0.20em] text-[#ffbf68] mb-2">
              <span className="w-[7px] h-[7px] rounded-full bg-[#ffbf68] shadow-[0_0_12px_#ffbf68] animate-[pulse_1.4s_infinite]" />
              QUANTUM EXPOSURE
            </div>
            <div className="text-[13px] text-[#f0e3d0] leading-[1.4]">
              4 RSA-2048 dependencies found in <span className="text-[#ffbf68] font-semibold">payments-svc</span>
            </div>
          </div>

          {/* Constellation */}
          <div className="absolute inset-0 flex items-center justify-center max-[950px]:relative max-[950px]:mt-16">
            <CryptoNetwork />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        className="absolute bottom-[26px] left-1/2 -translate-x-1/2 z-[5] flex items-center gap-[9px] text-[#718277] border-none bg-transparent text-[11px] hover:text-[#a7ff5c] transition-colors"
        onClick={() => document.getElementById('platform')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="w-[5px] h-[5px] rounded-full bg-[#a7ff5c] animate-[pulse_2s_infinite]" />
        <CircleDot size={9} />
        Scroll to explore <ChevronDown size={15} className="animate-bounce" />
      </button>
    </section>
  );
}

function FloatLabel({ children, className = '', delay = '0s' }) {
  return (
    <div
      className={`hidden min-[950px]:block absolute z-[2] text-[rgba(150,238,166,0.28)] font-mono text-[9px] tracking-[0.15em] px-3 py-2 border border-[rgba(125,255,150,0.08)] rounded-[20px] bg-[rgba(8,35,19,0.22)] backdrop-blur-[5px] animate-[pulse_4s_ease-in-out_infinite] ${className}`}
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  );
}