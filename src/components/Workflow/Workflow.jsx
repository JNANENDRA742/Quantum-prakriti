import { ArrowRight } from 'lucide-react';
import { workflowSteps } from '../../data/cryptoData';

export default function Workflow() {
  return (
    <section
      id="how-it-works"
      className="relative min-h-[850px] px-[7vw] py-[160px] bg-[#07140c] overflow-hidden"
    >
      {/* faint grid */}
      <div
        className="absolute inset-0 opacity-[0.05] [mask-image:radial-gradient(circle_at_50%_50%,black,transparent_75%)]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(109,255,130,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(109,255,130,0.4) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-[1500px] mx-auto grid grid-cols-[0.85fr_1.15fr] gap-[100px] max-[950px]:grid-cols-1 max-[950px]:gap-[60px]">

        {/* Sticky left column */}
        <div className="max-[950px]:static">
          <div className="max-[950px]:static max-[950px]:mb-12 min-[950px]:sticky min-[950px]:top-[140px]">
            <div className="w-fit flex items-center gap-[9px] px-[14px] py-[9px] rounded-[20px] text-[10px] font-semibold tracking-[0.14em] text-[#8fac98] border border-[rgba(149,255,103,0.18)] bg-[rgba(18,71,35,0.35)]">
              <span className="w-[7px] h-[7px] rounded-full bg-[#9cff43] shadow-[0_0_12px_#91ff50]" />
              MIGRATION WORKFLOW / 03
            </div>

            <h2 className="mt-[30px] font-serif font-normal text-[clamp(52px,5.8vw,88px)] leading-[0.94] tracking-[-0.04em]">
              From
              <br />
              <em className="text-[#7bffc0]">unknown</em>
              <br />
              to
              <br />
              quantum-ready.
            </h2>

            <p className="mt-8 max-w-[380px] text-[#8fa79a] leading-[1.7] text-[15px]">
              A guided path from cryptographic discovery to a quantum-safe migration plan —
              without guesswork.
            </p>

            <div className="mt-8 flex items-center gap-3 text-[11px] text-[#5f7568] font-mono tracking-[0.2em]">
              <span className="w-8 h-px bg-[rgba(160,255,118,0.3)]" />
              04 STEPS · ~12 WEEKS
            </div>
          </div>
        </div>

        {/* Right: timeline */}
        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-[26px] top-2 bottom-2 w-px bg-gradient-to-b from-[#aaff61]/40 via-[#68f6c2]/30 to-transparent" />

          <div className="space-y-4">
            {workflowSteps.map(([number, title, text], i) => (
              <div
                key={number}
                className="relative pl-[70px] group"
              >
                {/* Dot */}
                <div className="absolute left-0 top-[26px] w-[54px] h-[54px] rounded-full grid place-items-center border border-[rgba(160,255,118,0.20)] bg-[#07140c] text-[#7db58a] font-mono text-[12px] transition-all duration-300 group-hover:border-[#aaff61] group-hover:text-[#c7ff7d] group-hover:shadow-[0_0_30px_rgba(170,255,97,0.35)] z-10">
                  {number}
                </div>

                {/* Card */}
                <div className="rounded-[20px] border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm px-7 py-6 transition-all duration-300 group-hover:bg-white/[0.05] group-hover:border-[rgba(160,255,118,0.22)] group-hover:translate-x-1">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h3 className="text-[#eef5ef] text-[22px] font-medium font-serif">{title}</h3>
                      <p className="mt-2 text-[#8ea99a] text-[14px] leading-[1.6] max-w-[520px]">
                        {text}
                      </p>
                    </div>
                    <ArrowRight
                      size={20}
                      className="text-[#4d6557] group-hover:text-[#aaff61] group-hover:translate-x-1 transition-all mt-1 shrink-0"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}