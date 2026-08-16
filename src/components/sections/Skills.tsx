import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { IconType } from "react-icons";
import type { Skill } from "@/types/portfolio";
import { portfolioData } from "@/content/portfolio";
import { Reveal } from "@/components/motion/Reveal";
import { SkillsCodeScreen } from "@/components/sections/SkillsCodeScreen";
import {
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiGit, SiGithub,
  SiTailwindcss, SiMongodb, SiAngular, SiDjango, SiNestjs, SiAstro, SiVuedotjs, SiMui, SiShadcnui,
  SiGsap, SiDotnet, SiPython, SiOpenjdk, SiPostgresql, SiMysql, SiSqlite, SiMariadb, SiSupabase,
  SiDocker, SiKubernetes, SiTerraform, SiAnsible, SiJenkins, SiGitlab, SiPrometheus, SiGrafana,
  SiDatadog, SiElasticsearch, SiPuppet, SiChef, SiVercel, SiRender, SiHostinger, SiN8N,
  SiAnthropic, SiGoogle, SiGithubcopilot, SiVite, SiFramer, SiD3, SiExpress, SiFastify,
  SiFastapi, SiFlask, SiModelcontextprotocol
} from "react-icons/si";

const icons: Record<string, { icon: IconType; color: string }> = {
  HTML5: { icon: SiHtml5, color: "#E34F26" },
  CSS: { icon: SiCss, color: "#1572B6" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  React: { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#FFFFFF" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  Git: { icon: SiGit, color: "#F05032" },
  GitHub: { icon: SiGithub, color: "#FFFFFF" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  AngularJS: { icon: SiAngular, color: "#DD0031" },
  Django: { icon: SiDjango, color: "#092E20" },
  NestJS: { icon: SiNestjs, color: "#E0234E" },
  Astro: { icon: SiAstro, color: "#FF5D01" },
  Vue: { icon: SiVuedotjs, color: "#4FC08D" },
  MUI: { icon: SiMui, color: "#007FFF" },
  "shadcn/ui": { icon: SiShadcnui, color: "#FFFFFF" },
  GSAP: { icon: SiGsap, color: "#88CE02" },
  "anime.js": { icon: SiJavascript, color: "#F7DF1E" },
  ".NET": { icon: SiDotnet, color: "#512BD4" },
  Python: { icon: SiPython, color: "#3776AB" },
  Java: { icon: SiOpenjdk, color: "#007396" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  SQLite: { icon: SiSqlite, color: "#003B57" },
  MariaDB: { icon: SiMariadb, color: "#003545" },
  Supabase: { icon: SiSupabase, color: "#3ECF8E" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  Kubernetes: { icon: SiKubernetes, color: "#326CE5" },
  Terraform: { icon: SiTerraform, color: "#7B42BC" },
  Ansible: { icon: SiAnsible, color: "#EE0000" },
  Jenkins: { icon: SiJenkins, color: "#D24939" },
  GitLab: { icon: SiGitlab, color: "#FC6D26" },
  Prometheus: { icon: SiPrometheus, color: "#E6522C" },
  Grafana: { icon: SiGrafana, color: "#F46800" },
  Datadog: { icon: SiDatadog, color: "#632CA6" },
  Elasticsearch: { icon: SiElasticsearch, color: "#005571" },
  Vercel: { icon: SiVercel, color: "#FFFFFF" },
  Render: { icon: SiRender, color: "#46E3B7" },
  Hostinger: { icon: SiHostinger, color: "#673DE6" },
  Claude: { icon: SiAnthropic, color: "#D97757" },
  MCP: { icon: SiModelcontextprotocol, color: "#FFFFFF" },
  Gemini: { icon: SiGoogle, color: "#4285F4" },
  "GitHub Copilot": { icon: SiGithubcopilot, color: "#FFFFFF" },
  Vite: { icon: SiVite, color: "#646CFF" },
  "Framer Motion": { icon: SiFramer, color: "#0055FF" },
  "D3.js": { icon: SiD3, color: "#F9A03C" },
  Express: { icon: SiExpress, color: "#FFFFFF" },
  Fastify: { icon: SiFastify, color: "#FFFFFF" },
  FastAPI: { icon: SiFastapi, color: "#009688" },
  Flask: { icon: SiFlask, color: "#FFFFFF" },
};

function SkillCarousel({ items }: { items: Skill[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByPage = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: track.clientWidth * 0.8 * dir, behavior: "smooth" });
  };

  return (
    <div>
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth py-6 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-4 sm:py-8 [&::-webkit-scrollbar]:hidden"
      >
        {items.map((skill) => {
          const iconData = icons[skill.name];
          if (!iconData) return null;
          const Icon = iconData.icon;

          return (
            <div
              key={skill.name}
              className="group flex shrink-0 snap-start cursor-default items-center gap-2 rounded-xl border border-white/5 px-4 py-2.5 glass transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.04] hover:bg-white/10 hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.6)] sm:gap-4 sm:rounded-2xl sm:px-6 sm:py-3 md:px-8 md:py-4"
            >
              <div className="rounded-lg bg-white/5 p-1.5 transition-colors group-hover:bg-white/10 sm:p-2">
                <Icon
                  style={{ color: iconData.color }}
                  className="h-6 w-6 shrink-0 opacity-80 transition-transform duration-300 group-hover:scale-110 group-hover:opacity-100 drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] sm:h-7 sm:w-7 md:h-8 md:w-8"
                />
              </div>
              <span className="whitespace-nowrap text-sm font-bold text-white/70 transition-colors group-hover:text-white sm:text-lg md:text-xl">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-2 flex items-center justify-center gap-3 sm:mt-4">
        <button
          type="button"
          onClick={() => scrollByPage(-1)}
          aria-label="Scroll skills left"
          className="glass flex items-center justify-center rounded-full border-2 p-2.5 text-white/70 transition-colors hover:border-accent-green-darker/65 hover:text-white"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => scrollByPage(1)}
          aria-label="Scroll skills right"
          className="glass flex items-center justify-center rounded-full border-2 p-2.5 text-white/70 transition-colors hover:border-accent-green-darker/65 hover:text-white"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="min-w-0 max-w-full py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="page-shell min-w-0">
        <Reveal>
          <div className="mb-10 flex flex-col items-center text-center sm:mb-16">
            <h2 className="mb-2 font-mono text-xs tracking-widest text-accent-green-darker opacity-70 uppercase sm:text-sm">
              Toolbox
            </h2>
            <h3 className="text-2xl font-bold tracking-tighter shadow-sm sm:text-3xl md:text-4xl lg:text-5xl">
              Skills & Technologies
            </h3>
            <div className="mt-4 h-0.5 w-16 bg-accent-green-darker/50 sm:mt-6 sm:w-24" />
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <SkillCarousel items={portfolioData.skills} />
        </Reveal>

        <Reveal delay={0.12}>
          <SkillsCodeScreen />
        </Reveal>
      </div>
    </section>
  );
}
