/** Stack snapshot shown in the Skills “code screen” panel. */
export const fernandoStack = {
  name: "Fernando Agredano",
  role: "Full Stack Developer | AI Engineer",

  stack: {
    languages: ["JavaScript", "TypeScript", "Python", "C#"],

    frontend: {
      core: ["React", "Next.js", "Vite", "Astro"],
      styling: [
        "Tailwind CSS",
        "Material UI",
        "Shadcn/ui",
        "Aceternity UI",
        "Magic UI",
        "Origin UI",
      ],
      animation: ["GSAP", "Framer Motion", "ReactBits", "Lenis (smooth scroll)"],
      dataViz: ["D3.js", "Recharts"],
    },

    backend: ["Node.js", "Express", "Fastify", "NestJS", "FastAPI", "Flask", "ASP.NET"],

    databases: [
      "PostgreSQL",
      "MySQL",
      "SQL Server",
      "SQLite",
      "MongoDB",
      "Supabase (RLS)",
      "Firebase",
      "IndexedDB (Dexie.js)",
    ],

    devops: ["Docker", "GitHub Actions", "CI/CD"],

    cloud: ["AWS (EC2, S3, Lambda)", "Vercel", "Render"],

    testing: ["Vitest", "Cypress"],
  },

  ai: {
    tools: ["Claude Code", "Claude Agent SDK", "OpenCode", "Codex"],
    focus: [
      "Multi-agent orchestration",
      "Agent Skills",
      "MCP servers",
      "LLM integrations",
      "Automation (n8n)",
      "Prompt engineering",
    ],
  },

  expertise: [
    "Full-stack development",
    "AI-driven workflows",
    "Backend architecture patterns (Clean, CQRS, Hexagonal)",
    "API design (REST)",
    "Scalable architecture",
    "Process automation",
  ],

  currentFocus:
    "Building AI-powered apps, multi-agent systems, and automated engineering workflows",
} as const;
