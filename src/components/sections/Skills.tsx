import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import type { IconType } from "react-icons";
import { portfolioData } from "@/content/portfolio";
import { Reveal } from "@/components/motion/Reveal";
import { SkillsCodeScreen } from "@/components/sections/SkillsCodeScreen";
import {
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiGit, SiGithub,
  SiTailwindcss, SiMongodb, SiAngular, SiDjango, SiNestjs, SiAstro, SiVuedotjs, SiMui, SiShadcnui,
  SiGsap, SiDotnet, SiPython, SiOpenjdk, SiPostgresql, SiMysql, SiSqlite, SiMariadb, SiSupabase,
  SiDocker, SiKubernetes, SiTerraform, SiAnsible, SiJenkins, SiGitlab, SiPrometheus, SiGrafana,
  SiDatadog, SiElasticsearch, SiPuppet, SiChef, SiVercel, SiRender, SiHostinger, SiN8N,
  SiAnthropic, SiGoogle, SiGithubcopilot
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
  Gemini: { icon: SiGoogle, color: "#4285F4" },
  "GitHub Copilot": { icon: SiGithubcopilot, color: "#FFFFFF" },
};

function SkillMarquee({ items, direction = 1, speed = 40 }: { items: any[]; direction?: 1 | -1; speed?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const totalWidth = marquee.offsetWidth / 2;
    const tl = gsap.to(marquee, {
      x: direction === 1 ? -totalWidth : 0,
      duration: speed,
      ease: "none",
      repeat: -1,
      onReverseComplete: () => {
        tl.totalTime(tl.rawTime() + tl.duration() * 100);
      }
    });

    if (direction === -1) {
      gsap.set(marquee, { x: -totalWidth });
      tl.play();
    }

    const handleMouseEnter = () => tl.pause();
    const handleMouseLeave = () => tl.resume();

    marquee.addEventListener("mouseenter", handleMouseEnter);
    marquee.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      tl.kill();
      marquee.removeEventListener("mouseenter", handleMouseEnter);
      marquee.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [direction, speed]);

  return (
    <div ref={containerRef} className="overflow-hidden whitespace-nowrap py-6 sm:py-10 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
      <div ref={marqueeRef} className="inline-flex gap-4 px-3 sm:gap-8 sm:px-4">
        {[...items, ...items, ...items].map((skill, idx) => {
          const iconData = icons[skill.name];
          if (!iconData) return null;
          const Icon = iconData.icon;

          return (
            <div
              key={`${skill.name}-${idx}`}
              className="group flex cursor-default items-center gap-2 rounded-xl border border-white/5 px-4 py-2.5 glass transition-all duration-300 hover:border-accent-green-darker/30 sm:gap-4 sm:rounded-2xl sm:px-6 sm:py-3 md:px-8 md:py-4"
            >
              <div className="rounded-lg bg-white/5 p-1.5 transition-colors group-hover:bg-white/10 sm:p-2">
                <Icon
                  style={{ color: iconData.color }}
                  className="h-6 w-6 shrink-0 opacity-80 transition-opacity group-hover:opacity-100 drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] sm:h-7 sm:w-7 md:h-8 md:w-8"
                />
              </div>
              <span className="text-sm font-bold text-white/70 transition-colors group-hover:text-white sm:text-lg md:text-xl">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function Skills() {
  // Split skills for two rows
  const midPoint = Math.ceil(portfolioData.skills.length / 2);
  const row1Items = portfolioData.skills.slice(0, midPoint);
  const row2Items = portfolioData.skills.slice(midPoint);

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

        {/* GSAP Marquee Rows */}
        <div className="space-y-4 sm:space-y-8">
          <SkillMarquee items={row1Items} direction={1} speed={50} />
          <SkillMarquee items={row2Items} direction={-1} speed={60} />
          {/* Third row for extra variety since boxes are gone */}
          <SkillMarquee items={[...row1Items].reverse()} direction={1} speed={70} />
        </div>

        <Reveal delay={0.12}>
          <SkillsCodeScreen />
        </Reveal>
      </div>
    </section>
  );
}
