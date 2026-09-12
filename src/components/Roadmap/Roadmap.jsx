const items = [
  ['NOW', 'Discover', 'Know your cryptographic estate.'],
  ['NEXT', 'Assess', 'Prioritize quantum-vulnerable systems.'],
  ['THEN', 'Migrate', 'Adopt quantum-safe cryptography.'],
  ['ALWAYS', 'Adapt', 'Build crypto-agility into your architecture.'],
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="px-[7vw] py-[150px] bg-[#07140c]">
      <div className="w-fit flex items-center gap-[9px] px-[14px] py-[9px] rounded-[20px] text-[10px] font-semibold tracking-[0.12em] text-[#8fac98] border border-[rgba(149,255,103,0.17)] bg-[rgba(18,71,35,0.25)]">
        <span className="w-[7px] h-[7px] rounded-full bg-[#9cff43] shadow-[0_0_12px_#91ff50]" />
        INDIA'S QUANTUM ROADMAP / 05
      </div>

      <h2 className="mt-[25px] mb-[18px] font-serif font-normal text-[clamp(50px,6vw,85px)] leading-[0.96] tracking-[-0.04em] text-[#edf5ed]">
        Prepare before
        <br />
        the transition becomes urgent.
      </h2>

      <div className="mt-[100px] grid grid-cols-4 relative max-[950px]:grid-cols-1 max-[950px]:gap-[30px]">
        {/* horizontal line */}
        <div className="absolute top-[10px] left-0 right-0 h-[1px] bg-[rgba(150,255,170,0.18)] max-[950px]:top-0 max-[950px]:bottom-0 max-[950px]:left-[6px] max-[950px]:right-auto max-[950px]:w-[1px] max-[950px]:h-auto" />

        {items.map(([when, title, text], i) => (
          <div
            key={when}
            className="relative pt-[35px] pr-[35px] max-[950px]:pt-0 max-[950px]:pr-0 max-[950px]:pl-[35px]"
          >
            <div
              className={`absolute top-[4px] left-0 w-[13px] h-[13px] rounded-full border-2 bg-[#07140c] max-[950px]:top-[2px] ${
                i === 0
                  ? 'border-[#aaff61] bg-[#aaff61] shadow-[0_0_20px_rgba(170,255,97,0.5)]'
                  : 'border-[#53775e]'
              }`}
            />
            <span className="text-[#789481] font-mono text-[9px]">{when}</span>
            <strong className="block mt-[9px] text-[#eef4ee] font-serif text-[27px] font-normal">
              {title}
            </strong>
            <p className="text-[#75877b] text-[13px] leading-[1.5]">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}