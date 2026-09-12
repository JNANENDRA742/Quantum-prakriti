import { ArrowRight, Cpu, FileKey2, ShieldCheck } from 'lucide-react';

const cards = [
  ['ciso', <ShieldCheck />, 'For CISOs', 'Understand organizational exposure, communicate risk and track quantum readiness at a strategic level.'],
  ['engineering', <Cpu />, 'For Engineering', 'Find vulnerable algorithms, dependencies and services and understand what needs to change.'],
  ['procurement', <FileKey2 />, 'For Procurement', 'Ask vendors the right cryptographic questions and build quantum-safe requirements into technology decisions.'],
];

export default function Audience() {
  return (
    <section className="px-[7vw] py-[140px] bg-[#f4f7f1] text-[#08140d]">
      <div className="text-center mx-auto">
        <div className="w-fit mx-auto flex items-center gap-[9px] px-[14px] py-[9px] rounded-[20px] text-[10px] font-semibold tracking-[0.12em] text-[#34704a] border border-[rgba(15,100,45,0.14)] bg-[rgba(63,255,116,0.06)]">
          <span className="w-[7px] h-[7px] rounded-full bg-[#9cff43] shadow-[0_0_12px_#91ff50]" />
          BUILT FOR THE PEOPLE WHO MOVE SYSTEMS
        </div>
        <h2 className="mt-[25px] mb-[18px] font-serif font-normal text-[clamp(50px,6vw,85px)] leading-[0.96] tracking-[-0.04em]">
          One cryptographic picture.
          <br />
          <span className="text-[#13a864] italic">Different decisions.</span>
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-[17px] mt-[70px] max-[950px]:grid-cols-1">
        {cards.map(([id, icon, title, text]) => (
          <article
            id={id}
            key={id}
            className="min-h-[350px] p-[30px] border border-[#dbe6db] rounded-[22px] bg-white transition-all duration-300 hover:-translate-y-[7px] hover:shadow-[0_25px_60px_rgba(22,64,36,0.1)]"
          >
            <div className="w-[45px] h-[45px] rounded-[13px] grid place-items-center bg-[#dcf2d7] text-[#16a961]">
              {icon}
            </div>
            <h3 className="mt-[50px] font-serif font-normal text-[32px]">{title}</h3>
            <p className="text-[#657067] leading-[1.65] text-sm">{text}</p>
            <button
              onClick={() => document.getElementById('platform')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-[25px] flex items-center gap-2 border-none bg-transparent text-[#0e9c5b] font-semibold"
            >
              Explore <ArrowRight size={15} />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}