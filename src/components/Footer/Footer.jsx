import { ArrowRight, ShieldCheck } from 'lucide-react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  const columns = [
    { title: 'Platform', links: ['Cryptographic visibility', 'Algorithm inventory', 'Migration planning', 'Crypto-agility'] },
    { title: 'Solutions', links: ['For CISOs', 'For Engineering', 'For Procurement', 'For Compliance'] },
    { title: 'Resources', links: ['NIST PQC standards', 'India DST roadmap', 'Documentation', 'Security'] },
    { title: 'Company', links: ['About', 'Careers', 'Contact', 'Press'] },
  ];

  const socials = [
    { Icon: FaXTwitter, href: 'https://twitter.com',  label: 'X / Twitter' },
    { Icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { Icon: FaGithub,   href: 'https://github.com',   label: 'GitHub' },
  ];

  return (
    <>
      <footer className="bg-[#030b06] border-t border-white/[0.07] pt-[80px] pb-10 px-[7vw]">
        <div className="max-w-[1500px] mx-auto">
          {/* Top: brand + newsletter */}
          <div className="grid grid-cols-[1.2fr_1fr] gap-[80px] pb-[60px] border-b border-white/[0.07] max-[950px]:grid-cols-1 max-[950px]:gap-10">
            <div>
              <div className="flex items-center gap-[13px] mb-6">
                <div className="w-[38px] h-[38px] rounded-[11px] border-2 border-[#a8ff4e] grid place-items-center rotate-45 shadow-[0_0_22px_rgba(151,255,68,0.35)]">
                  <span className="w-[15px] h-[15px] border-2 border-[#baff68] rounded-[4px]" />
                </div>
                <div>
                  <strong className="block text-[#e8f2e9] tracking-[0.14em] text-[15px]">
                    Q PRAKRITI
                  </strong>
                  <small className="block mt-[3px] text-[7px] tracking-[0.20em] text-[#79a88a] font-mono">
                    QUANTUM SECURITY PLATFORM
                  </small>
                </div>
              </div>
              <p className="max-w-[440px] text-[#8fa79a] leading-[1.7] text-[15px]">
                Visibility today. Quantum-safe infrastructure tomorrow. Discover your
                cryptographic estate and prepare for the post-quantum transition.
              </p>

              {/* Social */}
              <div className="flex items-center gap-3 mt-7">
                {socials.map(({ Icon, href, label }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-full border border-white/[0.10] grid place-items-center text-[#8fa79a] hover:border-[#aaff61]/40 hover:text-[#aaff61] transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <div className="font-mono text-[10px] tracking-[0.24em] text-[#79a88a] mb-4">
                POST-QUANTUM BRIEFING
              </div>
              <h4 className="font-serif text-[28px] text-[#eaf6ea] leading-[1.15] mb-3">
                Monthly crypto-visibility insights.
              </h4>
              <p className="text-[#8fa79a] text-[14px] leading-[1.6] mb-6 max-w-[380px]">
                Standards updates, migration playbooks, and PQC readiness benchmarks.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex items-center gap-2 max-w-[440px]"
              >
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="flex-1 h-[52px] px-5 rounded-full border border-white/[0.10] bg-white/[0.03] text-[#eaf6ea] placeholder:text-[#5f7568] outline-none focus:border-[#aaff61]/40 transition-colors text-[14px]"
                />
                <button
                  type="submit"
                  className="h-[52px] px-5 rounded-full bg-[linear-gradient(100deg,#b4ff50,#5ff2a9)] text-[#071008] font-semibold inline-flex items-center gap-2 hover:-translate-y-[1px] hover:shadow-[0_15px_40px_rgba(80,255,126,0.30)] transition-all"
                >
                  Subscribe <ArrowRight size={15} />
                </button>
              </form>
            </div>
          </div>

          {/* Middle: link columns */}
          <div className="grid grid-cols-4 gap-10 py-[60px] max-[950px]:grid-cols-2 max-[600px]:grid-cols-1">
            {columns.map((col) => (
              <div key={col.title}>
                <div className="font-mono text-[10px] tracking-[0.24em] text-[#79a88a] mb-5">
                  {col.title.toUpperCase()}
                </div>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-[#a8b8ac] text-[14px] hover:text-[#aaff61] transition-colors"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="pt-[28px] border-t border-white/[0.07] flex items-center justify-between gap-6 text-[11px] text-[#5f7568] max-[950px]:flex-col max-[950px]:items-start">
            <span>© 2026 Q Prakriti. All rights reserved.</span>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-[#aaff61] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#aaff61] transition-colors">Terms</a>
              <a href="#" className="hover:text-[#aaff61] transition-colors">Security</a>
              <div className="flex items-center gap-2 text-[#79a88a] font-mono tracking-[0.16em]">
                <span className="w-[6px] h-[6px] rounded-full bg-[#9cff43] shadow-[0_0_10px_#91ff50] animate-[pulse_2s_infinite]" />
                ALL SYSTEMS OPERATIONAL
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating security */}
      <button
        className="fixed right-[25px] bottom-[25px] z-50 w-[60px] h-[60px] rounded-full border border-white/[0.15] bg-[#b9ff61] text-[#10200f] grid place-items-center shadow-[0_15px_40px_rgba(100,255,100,0.25)] transition-all duration-[250ms] hover:scale-[1.08] hover:-rotate-6"
        aria-label="Security status"
      >
        <ShieldCheck size={21} />
      </button>
    </>
  );
}