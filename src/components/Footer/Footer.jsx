import { ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <>
      <footer className="min-h-[180px] px-[7vw] py-[50px] bg-[#030b06] flex items-center justify-between gap-[30px] text-[#718077] border-t border-white/[0.07] max-[950px]:flex-col max-[950px]:items-start">
        <div className="flex items-center gap-[13px]">
          <div className="w-[34px] h-[34px] rounded-[10px] border-2 border-[#a8ff4e] grid place-items-center rotate-45 shadow-[0_0_22px_rgba(151,255,68,0.3)]">
            <span className="w-[14px] h-[14px] border-2 border-[#baff68] rounded-[4px]" />
          </div>
          <div>
            <strong className="block text-[#e8f2e9] tracking-[0.12em]">Q PRAKRITI</strong>
            <small className="block mt-[3px] text-[7px] tracking-[0.16em]">
              QUANTUM SECURITY PLATFORM
            </small>
          </div>
        </div>
        <p>Visibility today. Quantum-safe infrastructure tomorrow.</p>
        <span className="text-[11px]">© 2026 Q Prakriti</span>
      </footer>

      <button
        className="fixed right-[25px] bottom-[25px] z-50 w-[60px] h-[60px] rounded-full border border-white/[0.15] bg-[#b9ff61] text-[#10200f] grid place-items-center shadow-[0_15px_40px_rgba(100,255,100,0.22)] transition-all duration-[250ms] hover:scale-[1.08] hover:-rotate-6"
        aria-label="Security status"
      >
        <ShieldCheck size={21} />
      </button>
    </>
  );
}