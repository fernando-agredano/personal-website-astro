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
        "Promoted to lead end-to-end features, architecting scalable backend services with Node.js and Express while maintaining high-performance React/Next.js frontends. Leveraging AI-driven development to streamline workflows and optimize cloud infrastructure on AWS.",
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
  projects: [
    {
      id: "1",
      title: "Premium E-commerce",
      description:
        "A high-performance e-commerce platform with smooth transitions and 3D product previews.",
      image: "/projects/project-1.jpg",
      tags: ["Next.js", "GSAP", "Three.js"],
      links: { github: "#", demo: "#" },
      featured: true,
    },
    {
      id: "2",
      title: "AI Analytics Dashboard",
      description:
        "Real-time data visualization platform with complex filtering and motion-driven insights.",
      image: "/projects/project-2.jpg",
      tags: ["TypeScript", "Tailwind", "D3.js"],
      links: { github: "#", demo: "#" },
      featured: true,
    },
    {
      id: "3",
      title: "AI Content Generator",
      description:
        "SaaS platform that generates marketing content using LLMs with customizable prompts and team workspaces.",
      image: "/projects/project-3.jpg",
      tags: ["Next.js", "OpenAI", "Prisma"],
      links: { github: "#", demo: "#" },
      featured: true,
    },
    {
      id: "4",
      title: "Real-Time Collaboration App",
      description:
        "A collaborative workspace with live editing, comments, and presence indicators powered by WebSockets.",
      image: "/projects/project-4.jpg",
      tags: ["Next.js", "Socket.io", "PostgreSQL"],
      links: { github: "#", demo: "#" },
      featured: true,
    },
    {
      id: "5",
      title: "Developer Portfolio Engine",
      description:
        "A customizable portfolio system for developers with dynamic project management and animation presets.",
      image: "/projects/project-5.jpg",
      tags: ["Next.js", "Framer Motion", "Tailwind"],
      links: { github: "#", demo: "#" },
      featured: false,
    },
    {
      id: "6",
      title: "SaaS Billing Platform",
      description:
        "Subscription management system with Stripe integration, usage tracking, and advanced analytics.",
      image: "/projects/project-6.jpg",
      tags: ["Next.js", "Stripe", "Supabase"],
      links: { github: "#", demo: "#" },
      featured: false,
    },
    {
      id: "7",
      title: "Smart Task Manager",
      description:
        "Productivity app that prioritizes tasks using AI predictions and contextual automation.",
      image: "/projects/project-7.jpg",
      tags: ["React", "Node.js", "AI"],
      links: { github: "#", demo: "#" },
      featured: false,
    },
    {
      id: "8",
      title: "Data Visualization Studio",
      description:
        "Interactive dashboard builder that allows teams to create custom analytics panels with drag-and-drop charts.",
      image: "/projects/project-8.jpg",
      tags: ["React", "D3.js", "TypeScript"],
      links: { github: "#", demo: "#" },
      featured: false,
    },
  ],
  skills: [
    { name: "Next.js", category: "Frameworks" },
    { name: "AngularJS", category: "Frameworks" },
    { name: "Django", category: "Frameworks" },
    { name: "NestJS", category: "Frameworks" },
    { name: "Astro", category: "Frameworks" },

    { name: "JavaScript", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "Vue", category: "Frontend" },
    { name: "MUI", category: "Frontend" },
    { name: "shadcn/ui", category: "Frontend" },
    { name: "GSAP", category: "Frontend" },
    { name: "anime.js", category: "Frontend" },

    { name: "Node.js", category: "Backend" },
    { name: ".NET", category: "Backend" },
    { name: "Python", category: "Backend" },
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
