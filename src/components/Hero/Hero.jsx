import { Activity, ArrowRight, ChevronDown, CircleDot, ShieldCheck } from 'lucide-react';
import CryptoNetwork from '../CryptoNetwork/CryptoNetwork';

export default function Hero({ heroRef, scanStarted, onScan }) {
  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-[900px] px-[6vw] pt-[155px] pb-[80px] flex items-center overflow-hidden max-[950px]:min-h-[1250px] max-[950px]:pt-[150px] max-[950px]:block max-[600px]:!px-5 max-[600px]:!pt-[140px] max-[600px]:!pb-[70px] max-[600px]:min-h-[1150px]"
      style={{
        background:
          'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(74,255,113,0.11), transparent 22%), radial-gradient(circle at 70% 40%, rgba(19,150,74,0.25), transparent 30%), linear-gradient(120deg, #03100a 0%, #062215 48%, #03100a 100%)',
      }}
    >
      {/* Glow */}
      <div className="absolute -inset-[20%] opacity-80 blur-[30px] animate-[breathe_7s_ease-in-out_infinite_alternate]"
        style={{
          background:
            'radial-gradient(circle at 20% 30%, rgba(0,255,132,0.08), transparent 20%), radial-gradient(circle at 80% 65%, rgba(99,255,53,0.09), transparent 24%)',
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.16] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(109,255,130,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(109,255,130,0.08) 1px, transparent 1px)',
          backgroundSize: '70px 70px',
        }}
      />

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.15] scale-[1.4] animate-[water_18s_linear_infinite]"
        style={{
          backgroundImage:
            'repeating-radial-gradient(ellipse at 50% 50%, rgba(71,255,118,0.12) 0, rgba(71,255,118,0.02) 2px, transparent 4px, transparent 13px)',
        }}
      />

      {/* Floating labels */}
      <div className="hidden min-[950px]:block absolute z-[2] text-[rgba(150,238,166,0.28)] font-mono text-[9px] tracking-[0.15em] px-3 py-2 border border-[rgba(125,255,150,0.08)] rounded-[20px] bg-[rgba(8,35,19,0.22)] backdrop-blur-[5px] top-[28%] left-[3%]">
        NIST FIPS 203 · ML-KEM
      </div>
      <div className="hidden min-[950px]:block absolute z-[2] text-[rgba(150,238,166,0.28)] font-mono text-[9px] tracking-[0.15em] px-3 py-2 border border-[rgba(125,255,150,0.08)] rounded-[20px] bg-[rgba(8,35,19,0.22)] backdrop-blur-[5px] top-[30%] right-[6%]">
        NIST FIPS 204 · ML-DSA
      </div>
      <div className="hidden min-[950px]:block absolute z-[2] text-[rgba(150,238,166,0.28)] font-mono text-[9px] tracking-[0.15em] px-3 py-2 border border-[rgba(125,255,150,0.08)] rounded-[20px] bg-[rgba(8,35,19,0.22)] backdrop-blur-[5px] bottom-[18%] left-[7%]">
        NIST FIPS 205 · SLH-DSA
      </div>
      <div className="hidden min-[950px]:block absolute z-[2] text-[rgba(150,238,166,0.28)] font-mono text-[9px] tracking-[0.15em] px-3 py-2 border border-[rgba(125,255,150,0.08)] rounded-[20px] bg-[rgba(8,35,19,0.22)] backdrop-blur-[5px] bottom-[26%] right-[3%]">
        CRYPTOGRAPHIC VISIBILITY
      </div>

      {/* Content */}
      <div className="relative z-[4] w-[47%] max-w-[720px] max-[950px]:w-full">
        <div className="w-fit flex items-center gap-[9px] px-[14px] py-[9px] border border-[rgba(149,255,103,0.17)] bg-[rgba(18,71,35,0.25)] rounded-[20px] text-[#a8cbab] text-[10px] font-semibold tracking-[0.12em]">
          <span className="w-[7px] h-[7px] rounded-full bg-[#9cff43] shadow-[0_0_12px_#91ff50]" />
          CRYPTOGRAPHIC VISIBILITY
          <span className="text-[#52685a]">/</span>01
        </div>

        <h1 className="mt-7 mb-6 font-serif font-normal text-[clamp(55px,6.2vw,100px)] leading-[0.94] tracking-[-0.045em] max-[600px]:text-[52px]">
          Know your
          <br />
          cryptography.
          <br />
          <em className="text-[#68f6c2] italic">Prepare for</em>
          <br />
          <em className="text-[#68f6c2] italic">what comes next.</em>
        </h1>

        <p className="max-w-[650px] text-[#afbbb1] text-[17px] leading-[1.75] max-[600px]:text-[15px]">
          Quantum-safe migration starts with visibility. Discover cryptographic assets,
          understand your quantum exposure, and build evidence for a confident migration
          to post-quantum cryptography.
        </p>

        <div className="flex items-center gap-[13px] mt-[34px] max-[600px]:flex-col max-[600px]:items-stretch">
          <button
            className="h-14 px-6 rounded-[30px] font-semibold flex items-center justify-center gap-3 border-none text-[#071008] bg-[linear-gradient(100deg,#b4ff50,#5ff2a9)] shadow-[0_15px_45px_rgba(80,255,126,0.18)] hover:-translate-y-[2px] hover:shadow-[0_20px_55px_rgba(80,255,126,0.28)] transition-all"
            onClick={onScan}
          >
            {scanStarted ? (
              <>
                <Activity size={18} className="animate-[rotateRadar_1s_linear_infinite]" />
                Scanning environment...
              </>
            ) : (
              <>
                Start readiness scan <ArrowRight size={18} />
              </>
            )}
          </button>
          <button
            className="h-14 px-6 rounded-[30px] font-semibold flex items-center justify-center gap-3 text-[#e1eae2] border border-[rgba(191,255,196,0.2)] bg-white/[0.035] hover:bg-white/[0.08] transition-all"
            onClick={() => document.getElementById('platform')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore the platform <ArrowRight size={17} />
          </button>
        </div>

        <div className="flex gap-[26px] mt-[25px] text-[#74857a] text-[11px] max-[600px]:flex-col max-[600px]:gap-[10px]">
          <div className="flex items-center gap-[7px]">
            <span className="w-[7px] h-[7px] rounded-full bg-[#9cff43] shadow-[0_0_12px_#91ff50]" />
            Quantum-safe by design
          </div>
          <div className="flex items-center gap-[7px]">
            <ShieldCheck size={15} /> Built for migration visibility
          </div>
        </div>
      </div>

      <CryptoNetwork />

      <button
        className="absolute bottom-[25px] left-1/2 -translate-x-1/2 z-[5] flex items-center gap-[9px] text-[#718277] border-none bg-transparent text-[11px]"
        onClick={() => document.getElementById('platform')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="w-[5px] h-[5px] rounded-full bg-[#a7ff5c]" />
        <CircleDot size={9} />
        Scroll to explore <ChevronDown size={15} />
      </button>
    </section>
  );
}