import { Activity, ArrowRight, Network, Zap } from 'lucide-react';
import { featureCards } from '../../data/cryptoData';

const icons = { network: <Network />, activity: <Activity />, zap: <Zap /> };

export default function Platform() {
  return (
    <section id="platform" className="px-[7vw] py-[160px] bg-[#f3f7f0] text-[#07150d] relative overflow-hidden">
      {/* soft bg blob */}
      <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#baff78] blur-[140px] opacity-[0.15] pointer-events-none" />

      <div className="relative max-w-[1500px] mx-auto">
        {/* Header — left aligned, larger */}
        <div className="grid grid-cols-[1.1fr_0.9fr] gap-[80px] items-end mb-[90px] max-[950px]:grid-cols-1 max-[950px]:gap-10">
          <div>
            <div className="w-fit flex items-center gap-[9px] px-[14px] py-[9px] rounded-[20px] text-[10px] font-semibold tracking-[0.14em] text-[#34704a] border border-[rgba(15,100,45,0.14)] bg-[rgba(63,255,116,0.06)]">
              <span className="w-[7px] h-[7px] rounded-full bg-[#9cff43] shadow-[0_0_12px_#91ff50]" />
              CRYPTOGRAPHIC VISIBILITY / 02
            </div>

            <h2 className="mt-[26px] font-serif font-normal text-[clamp(48px,5.6vw,82px)] leading-[0.96] tracking-[-0.04em]">
              See the cryptography
              <br />
              <span className="text-[#13a864] italic">behind your systems.</span>
            </h2>
          </div>

          <div>
            <p className="text-[#4d5f52] leading-[1.7] text-[17px]">
              Your first step toward quantum-safe migration is knowing where cryptography
              exists, what algorithms are being used, and which systems need attention first.
            </p>
            <button
              onClick={() => document.getElementById('readiness')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-6 inline-flex items-center gap-2 text-[#0e9c5b] font-semibold text-[14px] group"
            >
              Run a visibility scan
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-6 grid-rows-2 gap-[18px] max-[950px]:grid-cols-1 max-[950px]:grid-rows-none">
          {featureCards.map((card, i) => {
            /* Asymmetric layout:
               0 → large (col-span-4 row-span-2)
               1 → small (col-span-2 row-span-1)
               2 → small (col-span-2 row-span-1)
            */
            const span =
              i === 0
                ? 'col-span-4 row-span-2 min-h-[460px]'
                : 'col-span-2 row-span-1 min-h-[220px]';
            const titleSize = i === 0 ? 'text-[42px]' : 'text-[30px]';
            const iconSize = i === 0 ? 'w-[58px] h-[58px] rounded-[16px]' : 'w-[48px] h-[48px] rounded-[14px]';
            const pad = i === 0 ? 'p-[44px]' : 'p-[30px]';

            return (
              <article
                key={card.number}
                className={`relative ${span} ${pad} border border-[#dce7dc] rounded-[26px] bg-white transition-all duration-500 overflow-hidden hover:-translate-y-1 hover:border-[#a9d9ac] hover:shadow-[0_35px_90px_rgba(24,72,39,0.14)] group max-[950px]:col-span-1 max-[950px]:row-span-1 max-[950px]:min-h-[280px]`}
              >
                {/* hover glow */}
                <div className={`absolute rounded-full bg-[#baff78] blur-[70px] opacity-0 transition-opacity duration-500 group-hover:opacity-30 ${
                  i === 0 ? 'w-[280px] h-[280px] -right-[80px] -bottom-[100px]' : 'w-[180px] h-[180px] -right-[50px] -bottom-[70px]'
                }`} />

                <div className="relative flex flex-col h-full">
                  <div className="flex items-start justify-between">
                    <div className={`${iconSize} grid place-items-center bg-[#dcf2d7] text-[#16a961] transition-transform duration-500 group-hover:scale-110`}>
                      {icons[card.icon]}
                    </div>
                    <span className="font-mono text-[10px] text-[#8c9a90] tracking-[0.2em]">
                      {card.number}
                    </span>
                  </div>

                  <div className={i === 0 ? 'mt-auto pt-14' : 'mt-auto pt-6'}>
                    <h3 className={`font-serif font-normal leading-[1.05] ${titleSize}`}>
                      {card.title}
                    </h3>
                    <p className={`mt-4 text-[#5a6a5f] leading-[1.65] ${i === 0 ? 'text-[16px] max-w-[520px]' : 'text-[13.5px] max-w-[340px]'}`}>
                      {card.description}
                    </p>
                  </div>

                  <div className="absolute right-0 bottom-0 w-11 h-11 rounded-full grid place-items-center bg-[#07150d] text-[#c1ff6d] opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}