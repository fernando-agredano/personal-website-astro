import { portfolioData } from "@/content/portfolio";
import { Reveal } from "@/components/motion/Reveal";

export function Interests() {
  return (
    <section
      id="interests"
      className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-premium-gray/20"
    >
      <div className="page-shell">
        <Reveal>
          <div className="mb-10 flex flex-col items-center text-center sm:mb-16">
            <h2 className="mb-2 font-mono text-xs tracking-widest text-accent-green-darker opacity-70 sm:text-sm">
              BEYOND THE CODE
            </h2>
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
              Interests & Personality
            </h3>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:gap-8 md:grid-cols-3">
          {portfolioData.interests.map((interest, idx) => (
            <Reveal key={interest.id} delay={idx * 0.12}>
              <div className="group relative h-[300px] overflow-hidden rounded-2xl glass border-2 p-0.5 transition-all duration-500 hover:border-accent-green-darker/75 sm:h-[340px] sm:rounded-3xl sm:p-1 md:h-[380px]">
                <div className="relative h-full overflow-hidden rounded-[1.15rem] sm:rounded-[1.35rem]">
                  <img
                    src={interest.image}
                    alt={interest.title}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-premium-black via-premium-black/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />

                  <div className="relative z-10 flex h-full flex-col justify-end p-5 text-center sm:p-8 sm:text-left">
                    <span className="mb-1 block font-mono text-[9px] uppercase tracking-[0.2em] text-accent-green-darker sm:mb-2 sm:text-[10px]">
                      {interest.category}
                    </span>

                    <h4 className="mb-1 text-lg font-bold tracking-tight sm:mb-2 sm:text-xl md:text-2xl">
                      {interest.title}
                    </h4>

                    <p className="line-clamp-2 text-xs leading-relaxed text-foreground/70 transition-all group-hover:line-clamp-none sm:text-sm">
                      {interest.description}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
