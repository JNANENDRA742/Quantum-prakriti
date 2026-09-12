import { ArrowRight, CircleDot } from 'lucide-react';
import { useState } from 'react';
import { cryptoNodes } from '../../data/cryptoData';

export default function CryptoNetwork() {
  const [active, setActive] = useState(null);
  const selected = cryptoNodes.find((n) => n.name === active);

  return (
    <div className="absolute z-[4] right-[4vw] top-[220px] w-1/2 max-w-[750px] max-[950px]:relative max-[950px]:top-auto max-[950px]:right-auto max-[950px]:w-full max-[950px]:mt-20">
      <div className="flex justify-between text-[#7e9a86] font-mono text-[8px] tracking-[0.15em] mb-[10px]">
        <div className="flex items-center gap-2">
          <span className="w-[7px] h-[7px] rounded-full bg-[#65ff9c] shadow-[0_0_15px_#65ff9c] animate-[pulse_1.8s_infinite]" />
          LIVE ENVIRONMENT VIEW
        </div>
        <span>SIMULATED SIGNALS · CONTEXT REQUIRED</span>
      </div>

      <div className="relative h-[510px] rounded-[25px] overflow-hidden border border-[rgba(145,255,162,0.14)] backdrop-blur-[9px] shadow-[inset_0_0_80px_rgba(50,255,105,0.05),0_30px_100px_rgba(0,0,0,0.2)] bg-[radial-gradient(circle_at_center,rgba(72,255,128,0.1),transparent_30%),rgba(7,37,19,0.46)] max-[600px]:h-[420px]">
        {/* dot grid */}
        <div
          className="absolute inset-0 opacity-[0.13]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(149,255,150,0.45) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* orbits */}
        <div className="absolute left-1/2 top-1/2 w-[70%] h-[45%] border border-[rgba(111,255,153,0.12)] rounded-full -translate-x-1/2 -translate-y-1/2 -rotate-[15deg]" />
        <div className="absolute left-1/2 top-1/2 w-[90%] h-[65%] border border-[rgba(111,255,153,0.12)] rounded-full -translate-x-1/2 -translate-y-1/2 rotate-[30deg]" />
        <div className="absolute left-1/2 top-1/2 w-[45%] h-[85%] border border-[rgba(111,255,153,0.12)] rounded-full -translate-x-1/2 -translate-y-1/2 rotate-[65deg]" />

        {/* svg lines */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <g stroke="rgba(121,255,159,0.13)" strokeWidth="0.22" strokeDasharray="1 1" className="animate-[dash_6s_linear_infinite]">
            <line x1="15" y1="25" x2="40" y2="13" />
            <line x1="40" y1="13" x2="78" y2="27" />
            <line x1="15" y1="25" x2="52" y2="42" />
            <line x1="52" y1="42" x2="78" y2="27" />
            <line x1="19" y1="65" x2="48" y2="72" />
            <line x1="48" y1="72" x2="82" y2="69" />
            <line x1="73" y1="49" x2="78" y2="27" />
            <line x1="73" y1="49" x2="82" y2="69" />
          </g>
        </svg>

        {/* center */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] border border-[rgba(123,255,154,0.2)] rounded-full flex flex-col justify-center items-center text-[#7ca489] font-mono text-[8px] tracking-[0.16em] bg-[rgba(4,25,13,0.6)] shadow-[0_0_60px_rgba(77,255,121,0.07)]">
          <div className="absolute w-[35px] h-[35px] border border-[rgba(120,255,152,0.5)] rounded-full animate-[radarPulse_2.5s_infinite]" />
          <span>CONTEXT</span>
          <strong className="mt-[5px] text-[#b8d6be] font-medium">REQUIRED</strong>
        </div>

        {/* nodes */}
        {cryptoNodes.map((node) => {
          const isActive = active === node.name;
          const isDanger = node.danger;
          return (
            <button
              key={node.name}
              className={`absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-[7px] px-3 py-[9px] rounded-[9px] font-mono text-[9px] tracking-[0.08em] transition-all z-[5] max-[600px]:text-[7px] max-[600px]:px-2 max-[600px]:py-[7px] hover:-translate-x-1/2 hover:-translate-y-1/2 hover:scale-[1.12] hover:z-10 ${
                isActive ? 'scale-[1.12] z-10' : ''
              } ${
                isDanger
                  ? 'text-[#d6dfd5] border border-[rgba(255,191,120,0.16)] bg-[rgba(71,51,25,0.35)] [&_svg]:text-[#ffbf68]'
                  : 'text-[#d8e8da] border border-[rgba(132,255,166,0.16)] bg-[rgba(23,67,35,0.5)] [&_svg]:text-[#88ffb1]'
              }`}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              onClick={() => setActive(node.name)}
            >
              <CircleDot size={12} />
              {node.name}
            </button>
          );
        })}

        {/* migration path */}
        <div className="absolute right-7 top-7 text-[#809d88] font-mono text-[8px] tracking-[0.15em] flex items-center">
          <span>MIGRATION PATH</span>
          <span className="inline-block w-[65px] mx-[7px] border-t border-dashed border-[rgba(130,255,157,0.3)] align-middle" />
          <ArrowRight size={14} />
        </div>

        {/* scan line */}
        <div className="absolute left-0 right-0 h-[1px] bg-[linear-gradient(90deg,transparent,#9dff72,transparent)] opacity-0 shadow-[0_0_18px_#9dff72] animate-[scanline_5s_ease-in-out_infinite]" />
      </div>

      {selected && (
        <div className="absolute left-5 bottom-5 right-5 z-20 flex items-center justify-between px-[18px] py-[14px] border border-[rgba(159,255,173,0.15)] bg-[rgba(5,20,11,0.88)] backdrop-blur-[15px] rounded-[14px] max-[600px]:left-[10px] max-[600px]:right-[10px] max-[600px]:bottom-[10px]">
          <div>
            <span className="block font-mono text-[8px] text-[#789381] tracking-[0.14em]">
              SELECTED ASSET · {selected.type}
            </span>
            <strong className="block mt-1 text-sm">{selected.name}</strong>
            <p className="max-w-[560px] mt-[5px] text-[#91a296] text-[11px] leading-[1.45] max-[600px]:hidden">
              {selected.description}
            </p>
          </div>
          <button
            onClick={() => setActive(null)}
            className="bg-transparent border border-white/[0.12] text-[#9eada1] rounded-[18px] px-3 py-[7px]"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}