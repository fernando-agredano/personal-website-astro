export interface NavLink {
  label: string;
  href: string;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
}
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    github?: string;
    demo?: string;
  };
  variant?: "hero" | "standard";
}

export interface ProjectGroup {
  id: string;
  title: string;
  description: string;
  projects: Project[];
}

export interface Skill {
  name: string;
  category:
    | "Frameworks"
    | "Frontend"
    | "Backend"
    | "Databases"
    | "DevOps"
    | "Hosting"
    | "AI Tools";
}

export interface Interest {
  id: string;
  title: string;
  description: string;
  image: string;
  category: "music" | "sports" | "travel";
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  email: string;
  socials: {
    github: string;
    linkedin: string;
    instagram?: string;
    facebook?: string;
  };
  navLinks: NavLink[];
  experience: Experience[];
  certifications: Certification[];
  projectGroups: ProjectGroup[];
  skills: Skill[];
  interests: Interest[];
}
