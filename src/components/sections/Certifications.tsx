import { portfolioData } from "@/content/portfolio";
import { Reveal } from "@/components/motion/Reveal";
import { ExternalLink, Calendar } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="page-shell">
        <Reveal>
          <div className="mb-8 flex flex-col items-center text-center sm:mb-10">
            <h2 className="mb-1.5 font-mono text-xs tracking-widest text-accent-green-darker opacity-70 uppercase sm:text-sm">
              Achievements
            </h2>
            <h3 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl">
              Certifications
            </h3>
            <div className="mt-3 h-0.5 w-12 bg-[var(--color-accent-green-darker)] sm:mt-4 sm:w-20" />
          </div>
        </Reveal>

        <div className="flex justify-center">
          <div className="mx-auto grid w-full max-w-2xl grid-cols-1 gap-4 sm:max-w-3xl">
            {portfolioData.certifications.map((cert, index) => (
              <Reveal key={index} delay={index * 0.1} direction="up" className="h-full">
                <div className="group relative flex flex-col items-center gap-4 overflow-hidden rounded-2xl glass border-2 border-white/5 p-5 transition-all duration-300 hover:border-accent-green-darker/55 sm:flex-row sm:items-center sm:gap-5 sm:p-6 md:gap-6">
                  <div className="absolute -right-8 -bottom-8 h-36 w-36 rounded-full bg-accent-green-darker/5 blur-[70px] transition-colors group-hover:bg-accent-green-darker/10" />

                  <div className="relative z-10 flex shrink-0 items-center justify-center rounded-xl border-2 border-white/10 bg-white/5 p-2.5 transition-colors group-hover:border-accent-green-darker/45 sm:p-3">
                    <img
                      src="/aws-certified-cloud-practitioner.png"
                      alt="AWS Certified Cloud Practitioner"
                      loading="lazy"
                      decoding="async"
                      className="h-24 w-24 object-contain drop-shadow-[0_0_12px_rgba(255,153,0,0.12)] transition-all duration-300 group-hover:drop-shadow-[0_0_20px_rgba(255,153,0,0.22)] sm:h-28 sm:w-28"
                    />
                  </div>

                  <div className="relative z-10 flex min-w-0 flex-1 flex-col items-center gap-2.5 text-center sm:items-start sm:text-left">
                    <div className="flex w-full flex-col items-center gap-2 sm:flex-row sm:items-center sm:gap-2.5">
                      <h4 className="text-base font-bold leading-snug text-white transition-colors group-hover:text-accent-green-darker sm:text-lg">
                        {cert.name}
                      </h4>
                      {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 rounded-lg border border-white/10 bg-white/5 p-2 transition-colors hover:bg-accent-green-darker hover:text-black"
                          aria-label="View Certificate"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>

                    <p className="text-sm font-medium leading-snug text-white/55 sm:text-base">
                      {cert.issuer}
                    </p>

                    <div className="flex items-center justify-center gap-2 rounded-full border border-white/5 bg-white/5 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-accent-green-darker/80 sm:justify-start sm:text-xs">
                      <Calendar size={12} className="shrink-0" />
                      {cert.date}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
