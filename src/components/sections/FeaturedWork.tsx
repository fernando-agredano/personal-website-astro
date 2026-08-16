import { portfolioData } from "@/content/portfolio";
import { Reveal } from "@/components/motion/Reveal";
import type { Project, ProjectGroup } from "@/types/portfolio";

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl glass border-2 p-0.5 transition-colors duration-300 hover:border-accent-green-darker/75 sm:rounded-3xl sm:p-1">
      <div className="flex h-full flex-col rounded-[1.15rem] sm:rounded-[1.35rem]">
        <div className="aspect-video w-full overflow-hidden rounded-t-[1.15rem] sm:rounded-t-[1.35rem]">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top"
          />
        </div>

        <div className="flex flex-1 flex-col items-center gap-2 p-4 text-center sm:items-start sm:gap-3 sm:p-5 sm:text-left md:p-6">
          <div className="flex flex-wrap justify-center gap-1.5 sm:justify-start">
            {project.tags.map((tag: string) => (
              <span
                key={tag}
                className="text-[9px] uppercase tracking-widest px-2 py-0.5 glass border rounded-md text-foreground/60 border-white/5 sm:text-[10px]"
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
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-medium text-foreground/70 transition-colors hover:text-accent-green-darker sm:text-sm"
              >
                GitHub
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-medium text-foreground/70 transition-colors hover:text-accent-green-darker sm:text-sm"
              >
                Demo
              </a>
            )}

            <span className="ml-auto hidden text-xs text-foreground/40 transition-colors group-hover:text-accent-green-darker/70 sm:inline">
              →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectGroupSection({
  group,
  isFirst,
}: {
  group: ProjectGroup;
  isFirst: boolean;
}) {
  // Backend Architectures Lab is the only group where its "hero" project
  // (the API explorer) gets its own centered row instead of joining the grid.
  const soloProject =
    group.id === "backend-architectures-lab"
      ? group.projects.find((p) => p.variant === "hero")
      : undefined;
  const gridProjects = soloProject
    ? group.projects.filter((p) => p.id !== soloProject.id)
    : group.projects;

  return (
    <div className={isFirst ? "" : "mt-16 sm:mt-20"}>
      <Reveal>
        <div className="mb-6 flex flex-col items-center gap-2 text-center sm:mb-8 sm:items-start sm:text-left">
          <h4 className="text-lg font-bold tracking-tight sm:text-xl md:text-2xl">
            {group.title}
          </h4>
          <p className="max-w-2xl text-xs leading-relaxed text-foreground/50 sm:text-sm">
            {group.description}
          </p>
        </div>
      </Reveal>

      {soloProject && (
        <Reveal>
          <div className="mx-auto mb-4 w-full max-w-2xl sm:mb-6 sm:w-[calc(50%-0.75rem)] sm:max-w-none lg:w-[calc(50%-1rem)]">
            <ProjectCard project={soloProject} />
          </div>
        </Reveal>
      )}

      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-4 sm:max-w-none sm:gap-6 md:grid-cols-2 lg:gap-8">
        {gridProjects.map((project: Project, index: number) => (
          <Reveal key={project.id} delay={index * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export function FeaturedWork() {
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

        {portfolioData.projectGroups.map((group: ProjectGroup, index: number) => (
          <ProjectGroupSection key={group.id} group={group} isFirst={index === 0} />
        ))}
      </div>
    </section>
  );
}
