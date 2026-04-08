import { portfolioData } from "@/content/portfolio";
import { Reveal } from "@/components/motion/Reveal";
import type { Project } from "@/types/portfolio";

export function FeaturedWork() {
  const featuredProjects: Project[] = portfolioData.projects.filter(
    (p: Project) => p.featured,
  );

  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="page-shell">
        <Reveal>
          <div className="mb-10 flex flex-col items-center text-center sm:mb-12">
            <h2 className="mb-2 font-mono text-xs tracking-widest text-accent-green-darker opacity-70 sm:text-sm">
              FEATURED WORKS
            </h2>
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
              Selected Projects
            </h3>
          </div>
        </Reveal>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-4 sm:max-w-none sm:gap-6 md:grid-cols-2 lg:gap-8">
          {featuredProjects.map((project: Project, index: number) => (
            <Reveal key={project.id} delay={index * 0.08}>
              <div className="group relative h-full rounded-2xl overflow-hidden glass p-0.5 transition-colors duration-300 hover:border-accent-green-darker/50 sm:rounded-3xl sm:p-1">
                <div className="flex h-full flex-col items-center gap-2 rounded-[1.15rem] p-4 text-center sm:items-stretch sm:gap-3 sm:rounded-[1.35rem] sm:p-5 sm:text-left md:p-6">
                  <div className="flex flex-wrap justify-center gap-1.5 sm:justify-start">
                    {project.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="text-[9px] uppercase tracking-widest px-2 py-0.5 glass rounded-md text-foreground/60 border-white/5 sm:text-[10px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h4 className="text-lg font-bold leading-tight tracking-tight sm:text-xl md:text-2xl">
                    {project.title}
                  </h4>

                  <p className="line-clamp-3 text-xs leading-relaxed text-foreground/60 sm:line-clamp-2 sm:text-sm md:text-base">
                    {project.description}
                  </p>

                  <div className="mt-1 flex w-full max-w-xs items-center justify-center gap-4 sm:mt-2 sm:max-w-none sm:justify-start">
                    <a
                      href={project.links.github}
                      className="text-xs font-medium text-foreground/70 transition-colors hover:text-accent-green-darker sm:text-sm"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.links.demo}
                      className="text-xs font-medium text-foreground/70 transition-colors hover:text-accent-green-darker sm:text-sm"
                    >
                      Demo
                    </a>

                    <span className="ml-auto hidden text-xs text-foreground/40 transition-colors group-hover:text-accent-green-darker/70 sm:inline">
                      →
                    </span>
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
