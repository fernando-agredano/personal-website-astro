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
      animation: ["GSAP", "ReactBits", "Lenis (smooth scroll)"],
    },

    backend: ["Node.js", "Express", "NestJS", "ASP.NET"],

    databases: [
      "PostgreSQL",
      "MySQL",
      "SQL Server",
      "MongoDB",
      "Supabase",
      "Firebase",
    ],

    devops: ["Docker", "GitHub Actions", "CI/CD"],

    cloud: ["AWS (EC2, S3, Lambda)"],

    testing: ["Vitest", "Cypress"],
  },

  ai: {
    tools: ["OpenCode", "Codex", "Claude"],
    focus: [
      "AI agents",
      "LLM integrations",
      "Automation (n8n)",
      "Prompt engineering",
      "Agent Skills",
      "MCP Servers",
    ],
  },

  expertise: [
    "Full-stack development",
    "AI-driven workflows",
    "API design (REST)",
    "Scalable architecture",
    "Process automation",
  ],

  currentFocus:
    "Building AI-powered apps, intelligent agents, and automated systems",
} as const;
