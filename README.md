# Fernando Agredano — Portfolio

Personal portfolio site for Fernando Agredano, Full-Stack Developer & AI Developer. Built with Astro and React, showcasing experience, projects, skills, and ways to get in touch.

**Live site:** [personal-website-astro-wheat.vercel.app](https://personal-website-astro-wheat.vercel.app)

---

## Overview

A single-page, dark-themed portfolio with:

- **Hero** — intro, role, and quick actions (contact, projects, download CV).
- **About** — bio plus a stats grid (years of experience, projects built, technologies, deployments).
- **Experience** — career timeline.
- **Featured Projects** — grouped case studies (Product Engineering, Backend Architectures Lab, AI Engineering & Tooling), each with tags and links to GitHub/live demos.
- **Skills & Technologies** — a manually-driven carousel of tech chips plus a live "code snapshot" view of the stack.
- **Certifications** — professional certifications.
- **Interests** — a few personal interests outside of code.
- **Contact** — direct links to email and social profiles.

Scroll reveal animations (GSAP) and smooth scrolling (Lenis) are used throughout, with `prefers-reduced-motion` respected.

## Tech Stack

- [Astro](https://astro.build/) 6 — static site framework
- [React](https://react.dev/) 19 — interactive islands
- TypeScript
- [Tailwind CSS](https://tailwindcss.com/) 4
- [GSAP](https://gsap.com/) — scroll-reveal animations
- [Lenis](https://lenis.darkroom.engineering/) — smooth scrolling
- [lucide-react](https://lucide.dev/) / [react-icons](https://react-icons.github.io/react-icons/) — icons
- [next-themes](https://github.com/pacocoursey/next-themes) — theme handling

## Getting Started

Requires **Node.js 22.12+**.

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:4321`.

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local dev server |
| `npm run build` | Build the production site to `dist/` |
| `npm run preview` | Preview the production build locally |

## Project Structure

```
src/
├── components/
│   ├── sections/     # Hero, About, Experience, FeaturedWork, Skills, Certifications, Interests, Contact
│   ├── motion/        # Reveal (scroll-in animation) and SmoothScroll (Lenis wrapper)
│   ├── Navbar.tsx
│   └── Footer.tsx
├── content/
│   ├── portfolio.ts   # All portfolio copy: experience, projects, skills, interests, certifications
│   └── fernandoStack.ts
├── layouts/
│   └── Layout.astro
├── pages/
│   └── index.astro
└── styles/
    └── globals.css
```

All content (experience entries, project groups, skills, interests) is centralized in `src/content/portfolio.ts` — update it there rather than editing components directly.
