import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function Readiness({ onScan }) {
  return (
    <section id="readiness" className="px-[7vw] py-[120px] bg-[#f4f7f1]">
      <div className="min-h-[560px] rounded-[30px] overflow-hidden grid grid-cols-2 bg-[radial-gradient(circle_at_80%_50%,rgba(85,255,130,0.22),transparent_35%),#dcebdc] max-[950px]:grid-cols-1">
        <div className="p-[70px] max-[600px]:p-[35px_25px]">
          <div className="w-fit flex items-center gap-[9px] px-[14px] py-[9px] rounded-[20px] text-[10px] font-semibold tracking-[0.12em] text-[#8fac98] border border-[rgba(149,255,103,0.17)] bg-[rgba(18,71,35,0.25)]">
            <span className="w-[7px] h-[7px] rounded-full bg-[#9cff43] shadow-[0_0_12px_#91ff50]" />
            QUANTUM READINESS / 04
          </div>

          <h2 className="mt-[25px] mb-[18px] font-serif font-normal text-[clamp(50px,5vw,75px)] leading-[0.96] tracking-[-0.04em]">
            How ready is
            <br />
            your cryptography?
          </h2>

          <p className="max-w-[540px] text-[#5d6d61] leading-[1.7]">
            Run a guided readiness check to understand your current cryptographic posture
            and identify where migration should begin.
          </p>

          <button
            className="mt-[25px] flex items-center gap-[10px] border-none bg-[#07140c] text-[#d0ff82] px-[23px] py-[17px] rounded-[30px] font-semibold"
            onClick={onScan}
          >
            Run readiness check <ArrowRight size={17} />
          </button>
        </div>

        <div className="relative grid place-items-center bg-[radial-gradient(circle,rgba(59,255,121,0.15),transparent_50%)] max-[950px]:min-h-[500px]">
          <div className="relative w-[390px] h-[390px] rounded-full max-[600px]:w-[300px] max-[600px]:h-[300px]">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-[rgba(26,141,76,0.2)] rounded-full" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] border border-[rgba(26,141,76,0.2)] rounded-full" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] border border-[rgba(26,141,76,0.2)] rounded-full" />
            <div className="absolute left-1/2 top-1/2 w-1/2 h-[1px] origin-left bg-[#29c776] animate-[rotateRadar_4s_linear_infinite]" />
            <div className="absolute left-1/2 top-1/2 w-[70px] h-[70px] -translate-x-1/2 -translate-y-1/2 rounded-full grid place-items-center text-[#d5ff9b] bg-[#092315] shadow-[0_0_40px_rgba(27,255,112,0.22)]">
              <ShieldCheck size={26} />
            </div>

            <span className="absolute top-[15%] left-[5%] px-[11px] py-[7px] border border-[rgba(32,136,77,0.2)] rounded-lg bg-white/45 font-mono text-[8px] text-[#387250]">
              CRYPTO
            </span>
            <span className="absolute top-[17%] right-[2%] px-[11px] py-[7px] border border-[rgba(32,136,77,0.2)] rounded-lg bg-white/45 font-mono text-[8px] text-[#387250]">
              TLS
            </span>
            <span className="absolute bottom-[15%] right-[7%] px-[11px] py-[7px] border border-[rgba(32,136,77,0.2)] rounded-lg bg-white/45 font-mono text-[8px] text-[#387250]">
              PQC
            </span>
            <span className="absolute bottom-[12%] left-[12%] px-[11px] py-[7px] border border-[rgba(32,136,77,0.2)] rounded-lg bg-white/45 font-mono text-[8px] text-[#387250]">
              KEYS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}