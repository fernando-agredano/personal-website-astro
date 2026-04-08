import { portfolioData } from "@/content/portfolio";
import { Reveal } from "@/components/motion/Reveal";

export function Experience() {
  const experiences = portfolioData.experience;

  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="page-shell">
        <Reveal>
          <div className="mb-12 flex flex-col items-center text-center sm:mb-16 md:mb-20">
            <h2 className="mb-2 font-mono text-xs tracking-widest text-accent-green-darker opacity-70 uppercase sm:mb-3 sm:text-sm">
              Career Path
            </h2>

            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
              Experience & Journey
            </h3>

            <div className="mt-4 h-0.5 w-16 bg-[var(--color-accent-green-darker)] sm:mt-6 sm:w-24" />
          </div>
        </Reveal>

        <div className="relative">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/15 md:block" />

          <div className="flex flex-col gap-10 md:gap-16">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <Reveal key={index} delay={index * 0.12}>
                  <div className="relative grid grid-cols-1 md:grid-cols-2 items-center">
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
                      <div className="h-4 w-4 rounded-full bg-[var(--color-accent-green-darker)] border border-white/40" />
                    </div>

                    {isLeft && (
                      <div className="flex justify-center md:justify-end md:pr-14">
                        <div className="max-w-md text-center md:text-right">
                          <span className="text-xs font-mono tracking-widest text-white/40 sm:text-sm">
                            {exp.period}
                          </span>

                          <h4 className="mt-2 text-lg font-bold text-white sm:text-xl md:text-2xl">
                            {exp.role}
                          </h4>

                          <p className="mt-1 font-semibold text-[var(--color-accent-green-darker)]">
                            {exp.company}
                          </p>

                          <p className="mt-3 text-xs leading-relaxed text-white/55 sm:mt-4 sm:text-sm">
                            {exp.description}
                          </p>
                        </div>
                      </div>
                    )}

                    {isLeft && <div />}

                    {!isLeft && (
                      <>
                        <div />

                        <div className="flex justify-center md:justify-start md:pl-14">
                          <div className="max-w-md text-center md:text-left">
                            <span className="text-xs font-mono tracking-widest text-white/40 sm:text-sm">
                              {exp.period}
                            </span>

                            <h4 className="mt-2 text-lg font-bold text-white sm:text-xl md:text-2xl">
                              {exp.role}
                            </h4>

                            <p className="mt-1 font-semibold text-[var(--color-accent-green-darker)]">
                              {exp.company}
                            </p>

                            <p className="mt-3 text-xs leading-relaxed text-white/55 sm:mt-4 sm:text-sm">
                              {exp.description}
                            </p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
