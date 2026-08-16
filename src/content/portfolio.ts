import type { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  name: "Fernando Agredano",
  role: "Full-Stack Developer",
  tagline: "Systems Engineer & Full Stack Developer @ iNBest",
  bio: "Digital craftsman specializing in building sophisticated, high-performance web applications. I bridge the gap between complex engineering and elegant design.",
  email: "hello@example.com",
  socials: {
    github: "https://github.com/fernandoagredano",
    linkedin: "https://linkedin.com/in/fernandoagredano",
    instagram: "https://instagram.com/fernandoagredano",
    facebook: "https://facebook.com/fernandoagredano",
  },
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Certificates", href: "#certifications" },
    { label: "Interests", href: "#interests" },
    { label: "Contact", href: "#contact" },
  ],
  experience: [
    {
      period: "November 2025 — Present",
      role: "Full-Stack Developer",
      company: "iNBest",
      description:
        "Promoted to lead end-to-end features, architecting scalable backend services with Node.js and Express while maintaining high-performance React/Next.js frontends on AWS. Pioneering AI-native development within the team — orchestrating multi-agent workflows with Claude Code and custom MCP servers to automate research, code review, and documentation, cutting delivery time on complex features.",
    },
    {
      period: "September 2025 — October 2025",
      role: "Front-End Developer",
      company: "iNBest",
      description:
        "Focused on crafting high-fidelity, responsive user interfaces using TypeScript and React. Optimized web performance and accessibility through Material UI and TailwindCSS, ensuring a seamless user experience from day one.",
    },
    {
      period: "2024 — Present",
      role: "Full-Stack Developer",
      company: "Freelance",
      description:
        "Delivering bespoke digital solutions using React, Node.js, and Supabase. Streamlining business operations through custom automation and building scalable internal tools that drive measurable growth and success.",
    },
    {
      period: "2024",
      role: "Full-Stack Developer",
      company: "Hotel Reservation System",
      description:
        "Engineered an internal management platform using ASP.NET MVC and SQL Server. Achieved an 85% reduction in booking errors by implementing an interactive real-time availability calendar and centralized database.",
    },
    {
      period: "2024",
      role: "Full-Stack Developer",
      company: "Medical Appointment System",
      description:
        "Developed a comprehensive clinical scheduling system with ASP.NET. Optimized patient workflows and reduced scheduling errors by 75% through an intuitive, interactive administration dashboard.",
    },
    {
      period: "2024",
      role: "Software Engineer Intern",
      company: "Wizeline",
      description:
        "Optimized internal skills-management systems using Remix and TypeScript. Integrated OpenAI's Text-to-Audio API and Firebase while improving code reliability through unit testing with Vitest.",
    },
  ],
  certifications: [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      date: "2024",
    },
  ],
  projectGroups: [
    {
      id: "product-engineering",
      title: "Product Engineering",
      description:
        "End-to-end products designed, built and shipped solo — from a financial institution's core ledger to a brand's landing page.",
      projects: [
        {
          id: "ledgerly-credit-platform",
          title: "Ledgerly — SME Private Credit Platform",
          description:
            "A full loan origination & servicing system for a private credit institution — underwriting, credit committee, disbursement, a double-entry ledger, collections buckets and portfolio risk monitoring, backed by Supabase with row-level security on every table.",
          image: "/projects/ledgerly.png",
          tags: ["React", "TypeScript", "Supabase", "PostgreSQL", "RLS"],
          links: {
            github: "https://github.com/fernando-agredano/ledgerly",
            demo: "https://ledgerly-one-psi.vercel.app",
          },
          variant: "hero",
        },
        {
          id: "financeflow-dashboard",
          title: "FinanceFlow — Personal Finance Dashboard",
          description:
            "A local-first personal finance app — income/expense tracking, monthly budgets by category, trend charts and statement-style PDF/CSV exports — with zero backend: every record lives in the browser via IndexedDB.",
          image: "/projects/financeflow.png",
          tags: ["Next.js", "TypeScript", "Material UI", "Dexie.js"],
          links: {
            github: "https://github.com/fernando-agredano/financeflow",
            demo: "https://financeflow-sigma-nine.vercel.app",
          },
          variant: "standard",
        },
        {
          id: "casta-fina-landing",
          title: "Casta Fina — Streetwear Brand Site",
          description:
            "A cinematic one-page brand site for a limited-run streetwear label — scroll storytelling, an authenticity-certificate motif for numbered pieces, and a WhatsApp-first contact flow built for conversion as much as for look.",
          image: "/projects/casta-fina.jpg",
          tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
          links: {
            github: "https://github.com/fernando-agredano/casta-fina",
            demo: "https://casta-fina.vercel.app",
          },
          variant: "standard",
        },
      ],
    },
    {
      id: "backend-architectures-lab",
      title: "Backend Architectures Lab",
      description:
        "Four takes on the same class of problem — e-commerce and inventory — each solved with a different backend architecture, probed live through a custom-built API client.",
      projects: [
        {
          id: "backend-architectures-lab-explorer",
          title: "Backend Architectures Lab",
          description:
            "A hands-on lab comparing four backend architecture styles side by side — Clean, Hexagonal, Layered and CQRS — probed live through a custom-built visual API client with JWT handling and Local/production environment switching.",
          image: "/projects/api-explorer.png",
          tags: ["React", "Vite", "API Design", "Vercel"],
          links: {
            github: "https://github.com/fernando-agredano/api-explorer",
            demo: "https://api-explorer-brown.vercel.app/",
          },
          variant: "hero",
        },
        {
          id: "clean-architecture-ecommerce",
          title: "Clean Architecture — E-commerce API",
          description:
            "Product and order management API built on strict Clean Architecture: domain entities own the business rules — stock control, order state machine — with zero knowledge of Express or PostgreSQL underneath.",
          image: "/projects/clean-architecture.svg",
          tags: ["Node.js", "Express", "Clean Architecture", "PostgreSQL"],
          links: {
            github: "https://github.com/fernando-agredano/node-express-clean",
            demo: "https://node-express-clean.onrender.com",
          },
          variant: "standard",
        },
        {
          id: "cqrs-inventory-system",
          title: "CQRS + Event-Driven — Inventory System",
          description:
            "Inventory API with commands and queries fully separated, and an event bus driving low-stock alerts and audit logging as independent side effects of every stock movement.",
          image: "/projects/cqrs-architecture.svg",
          tags: ["Node.js", "Fastify", "CQRS", "Event-Driven"],
          links: {
            github: "https://github.com/fernando-agredano/node-fastify-cqrs",
            demo: "https://node-fastify-cqrs.onrender.com",
          },
          variant: "standard",
        },
        {
          id: "layered-task-manager",
          title: "Layered Architecture — Task Manager API",
          description:
            "JWT-authenticated task manager following a classic N-tier flow — routes, services, repositories, models — with interactive Swagger docs generated straight from the FastAPI schema.",
          image: "/projects/layered-architecture.svg",
          tags: ["Python", "FastAPI", "JWT Auth", "PostgreSQL"],
          links: {
            github: "https://github.com/fernando-agredano/python-fastapi-tasks",
            demo: "https://python-fastapi-tasks.onrender.com/docs",
          },
          variant: "standard",
        },
        {
          id: "hexagonal-notifications",
          title: "Hexagonal Architecture — Notifications Service",
          description:
            "Multi-channel notification service (email, SMS, in-app) with a domain core that imports zero frameworks — every channel and datastore is a swappable adapter behind its own port.",
          image: "/projects/hexagonal-architecture.svg",
          tags: ["Python", "Flask", "Hexagonal", "Ports & Adapters"],
          links: {
            github: "https://github.com/fernando-agredano/python-flask-hexagonal",
            demo: "https://python-flask-hexagonal.onrender.com",
          },
          variant: "standard",
        },
      ],
    },
    {
      id: "ai-engineering-tooling",
      title: "AI Engineering & Tooling",
      description:
        "Developer tooling built around AI-assisted engineering: a multi-agent orchestration stack with live observability, and a codebase-aware memory system stress-tested inside a real booking engine.",
      projects: [
        {
          id: "claude-agent-stack",
          title: "Claude Agent Stack — Multi-Agent Orchestration",
          description:
            "A dev-tooling stack for orchestrating Claude Code: an orchestrator with 4 specialized subagents, a persistent memory MCP server backed by SQLite, an Obsidian vault bridge, and a live React + D3 dashboard observing every agent, memory write and event as it happens.",
          image: "/projects/claude-agent-stack.png",
          tags: ["TypeScript", "MCP", "Express", "WebSocket", "D3.js"],
          links: {
            github: "https://github.com/fernando-agredano/claude-agent-stack",
          },
          variant: "standard",
        },
        {
          id: "flight-booking-engine",
          title: "Aerolit — AI Code Tooling Case Study",
          description:
            "A flight booking engine — search, seat inventory, fare rules, cancellations — built as a real-world test bed for two AI dev tools: Graphify, which maps a codebase into an interactive knowledge graph, and Engram, a persistent memory layer for coding agents.",
          image: "/projects/flight-booking-engine.png",
          tags: ["Node.js", "Express", "React", "Vite", "Knowledge Graphs"],
          links: {
            github: "https://github.com/fernando-agredano/flight-booking-engine",
          },
          variant: "standard",
        },
        {
          id: "project-notes-graph",
          title: "Project Notes Graph — Portfolio Knowledge Graph",
          description:
            "A scanner that reads every repo in a projects folder — package.json, requirements.txt, go.mod, git history — and auto-generates a note per project, then renders them as an interactive Graphify graph with a live tech-stack dashboard and an Engram-backed memory panel of real design decisions.",
          image: "/projects/project-notes-graph.png",
          tags: ["Node.js", "Express", "React", "Graphify", "Engram"],
          links: {
            github: "https://github.com/fernando-agredano/project-notes-graph",
          },
          variant: "standard",
        },
      ],
    },
  ],
  skills: [
    { name: "Next.js", category: "Frameworks" },
    { name: "AngularJS", category: "Frameworks" },
    { name: "Django", category: "Frameworks" },
    { name: "NestJS", category: "Frameworks" },
    { name: "Astro", category: "Frameworks" },
    { name: "Vite", category: "Frameworks" },

    { name: "JavaScript", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "Vue", category: "Frontend" },
    { name: "MUI", category: "Frontend" },
    { name: "shadcn/ui", category: "Frontend" },
    { name: "GSAP", category: "Frontend" },
    { name: "anime.js", category: "Frontend" },
    { name: "Framer Motion", category: "Frontend" },
    { name: "D3.js", category: "Frontend" },

    { name: "Node.js", category: "Backend" },
    { name: "Express", category: "Backend" },
    { name: "Fastify", category: "Backend" },
    { name: ".NET", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "FastAPI", category: "Backend" },
    { name: "Flask", category: "Backend" },
    { name: "Java", category: "Backend" },

    { name: "PostgreSQL", category: "Databases" },
    { name: "MySQL", category: "Databases" },
    { name: "MongoDB", category: "Databases" },
    { name: "SQLite", category: "Databases" },
    { name: "MariaDB", category: "Databases" },
    { name: "Supabase", category: "Databases" },

    { name: "Docker", category: "DevOps" },
    { name: "Kubernetes", category: "DevOps" },
    { name: "Terraform", category: "DevOps" },
    { name: "Elasticsearch", category: "DevOps" },
    { name: "Jenkins", category: "DevOps" },
    { name: "GitLab", category: "DevOps" },
    { name: "GitHub", category: "DevOps" },

    { name: "Claude", category: "AI Tools" },
    { name: "MCP", category: "AI Tools" },
    { name: "Gemini", category: "AI Tools" },
    { name: "GitHub Copilot", category: "AI Tools" },
    { name: "Cursor", category: "AI Tools" },
    { name: "n8n", category: "AI Tools" },

    { name: "Vercel", category: "Hosting" },
    { name: "Render", category: "Hosting" },
    { name: "Hostinger", category: "Hosting" },
  ],
  interests: [
    {
      id: "music-1",
      title: "Memorable Concerts",
      description: "The energy of live music is my main source of inspiration.",
      image: "/music-1.jpeg",
      category: "music",
    },
    {
      id: "sports-1",
      title: "Soccer",
      description:
        "Learning discipline, strategy, and perseverance through soccer.",
      image: "/sports.jpeg",
      category: "sports",
    },
    {
      id: "travel-1",
      title: "Extreme Adventures",
      description:
        "Finding freedom beyond the comfort zone through extreme adventures.",
      image: "/travel.jpeg",
      category: "travel",
    },
  ],
};
