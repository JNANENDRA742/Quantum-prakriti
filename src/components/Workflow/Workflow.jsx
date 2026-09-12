import { ArrowRight } from 'lucide-react';
import { workflowSteps } from '../../data/cryptoData';

export default function Workflow() {
  return (
    <section
      id="how-it-works"
      className="min-h-[750px] px-[7vw] py-[140px] grid grid-cols-[0.8fr_1.2fr] gap-[100px] bg-[#07140c] max-[950px]:grid-cols-1 max-[950px]:gap-[50px]"
    >
      <div>
        <div className="w-fit flex items-center gap-[9px] px-[14px] py-[9px] rounded-[20px] text-[10px] font-semibold tracking-[0.12em] text-[#8fac98] border border-[rgba(149,255,103,0.17)] bg-[rgba(18,71,35,0.25)]">
          <span className="w-[7px] h-[7px] rounded-full bg-[#9cff43] shadow-[0_0_12px_#91ff50]" />
          MIGRATION WORKFLOW / 03
        </div>

        <h2 className="mt-[30px] font-serif font-normal text-[clamp(55px,6vw,85px)] leading-[0.94] tracking-[-0.04em]">
          From
          <br />
          <em className="text-[#7bffc0]">unknown</em>
          <br />
          to
          <br />
          quantum-ready.
        </h2>
      </div>

      <div className="border-t border-white/[0.12]">
        {workflowSteps.map(([number, title, text]) => (
          <div
            key={number}
            className="min-h-[112px] border-b border-white/10 grid grid-cols-[70px_1fr_30px] items-center gap-5 text-[#a8b5aa] transition-all duration-[250ms] hover:pl-3 hover:text-white"
          >
            <span className="font-mono text-[#5b7a65] text-[11px]">{number}</span>
            <div>
              <h3 className="mb-[5px] text-[#eef5ef] text-xl font-medium">{title}</h3>
              <p className="text-[13px] leading-[1.5]">{text}</p>
            </div>
            <ArrowRight size={18} />
          </div>
        ))}
      </div>
    </section>
  );
}