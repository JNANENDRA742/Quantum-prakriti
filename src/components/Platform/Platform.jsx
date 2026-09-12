import { Activity, ArrowRight, Network, Zap } from 'lucide-react';
import { featureCards } from '../../data/cryptoData';

const icons = { network: <Network />, activity: <Activity />, zap: <Zap /> };

export default function Platform() {
  return (
    <section id="platform" className="px-[7vw] py-[140px] bg-[#f3f7f0] text-[#07150d]">
      <div className="max-w-[850px]">
        <div className="w-fit flex items-center gap-[9px] px-[14px] py-[9px] rounded-[20px] text-[10px] font-semibold tracking-[0.12em] text-[#34704a] border border-[rgba(15,100,45,0.14)] bg-[rgba(63,255,116,0.06)]">
          <span className="w-[7px] h-[7px] rounded-full bg-[#9cff43] shadow-[0_0_12px_#91ff50]" />
          CRYPTOGRAPHIC VISIBILITY / 02
        </div>

        <h2 className="mt-[25px] mb-[18px] font-serif font-normal text-[clamp(50px,6vw,85px)] leading-[0.96] tracking-[-0.04em]">
          See the cryptography
          <br />
          <span className="text-[#13a864] italic">behind your systems.</span>
        </h2>

        <p className="max-w-[700px] text-[#657269] leading-[1.7] text-base">
          Your first step toward quantum-safe migration is knowing where cryptography exists,
          what algorithms are being used, and which systems need attention first.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-[17px] mt-[75px] max-[950px]:grid-cols-1">
        {featureCards.map((card) => (
          <article
            key={card.number}
            className="relative min-h-[310px] p-[30px] border border-[#dce7dc] rounded-[22px] bg-[#edf4eb] transition-all duration-[350ms] overflow-hidden hover:-translate-y-2 hover:border-[#a9d9ac] hover:shadow-[0_30px_70px_rgba(24,72,39,0.1)] group"
          >
            <div className="absolute w-[160px] h-[160px] right-[-60px] bottom-[-70px] rounded-full bg-[#baff78] blur-[55px] opacity-0 transition-all duration-[400ms] group-hover:opacity-35" />
            <div className="flex justify-between items-center">
              <div className="w-[45px] h-[45px] rounded-[13px] grid place-items-center bg-[#dcf2d7] text-[#16a961]">
                {icons[card.icon]}
              </div>
              <span className="text-[#8c9a90] font-mono text-[10px]">{card.number}</span>
            </div>
            <h3 className="mt-[75px] font-serif text-[31px] font-normal">{card.title}</h3>
            <p className="text-[#68756b] leading-[1.65] text-sm max-w-[390px]">
              {card.description}
            </p>
            <div className="absolute right-[27px] bottom-[25px] w-9 h-9 rounded-full grid place-items-center bg-[#07150d] text-[#c1ff6d]">
              <ArrowRight size={18} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}