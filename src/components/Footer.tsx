import { portfolioData } from "@/content/portfolio";
import {
  Github,
  Linkedin,
  Mail,
  Instagram,
  Facebook,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-premium-black/50 py-16">
      <div className="px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="page-shell lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-10 text-center md:grid-cols-3 lg:items-start lg:gap-12 lg:text-left">
            <div className="flex flex-col items-center gap-3 lg:items-start">
              <div className="relative inline-flex items-center gap-2">
                <div
                  className="pointer-events-none absolute -inset-3 rounded-lg blur-lg opacity-20"
                  style={{
                    background:
                      "radial-gradient(circle at 20% 50%, rgba(14,219,171,0.45), transparent 60%), radial-gradient(circle at 70% 50%, rgba(255,255,255,0.25), transparent 60%)",
                  }}
                />

                <span
                  className="relative font-mono text-base font-bold text-[var(--color-accent-green-darker)] sm:text-lg"
                  style={{ textShadow: "0 0 10px rgba(14,219,171,0.45)" }}
                  aria-hidden="true"
                >
                  {"</>"}
                </span>

                <span className="relative text-sm font-bold tracking-tight sm:text-base">
                  <span
                    className="text-white/90"
                    style={{ textShadow: "0 0 8px rgba(255,255,255,0.18)" }}
                  >
                    AGREDANO
                  </span>
                  <span
                    className="text-[var(--color-accent-green-darker)]"
                    style={{ textShadow: "0 0 10px rgba(14,219,171,0.45)" }}
                  >
                    .DEV
                  </span>
                </span>
              </div>

              <p className="max-w-xs text-sm text-foreground/50">
                Systems Engineer and Full-Stack Developer focused on building
                performant, elegant and scalable digital experiences.
              </p>

              <p className="text-xs text-foreground/40">
                © {new Date().getFullYear()} — All rights reserved.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <span className="text-sm font-semibold uppercase tracking-widest text-white/70">
                Navigation
              </span>

              <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-white/50">
                {[
                  { label: "Home", href: "#home" },
                  { label: "Experience", href: "#experience" },
                  { label: "About", href: "#about" },
                  { label: "Projects", href: "#projects" },
                  { label: "Skills", href: "#skills" },
                  { label: "Contact", href: "#contact" },
                ].map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="transition-colors duration-200 hover:text-[var(--color-accent-green-darker)]"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 lg:justify-self-end">
              <span className="text-sm font-semibold uppercase tracking-widest text-white/70">
                Connect
              </span>

              <div className="flex justify-center gap-5">
                <a
                  href={portfolioData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border-2 border-white/10 p-2 transition-all hover:border-[var(--color-accent-green-darker)] hover:text-[var(--color-accent-green-darker)]"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>

                <a
                  href={portfolioData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border-2 border-white/10 p-2 transition-all hover:border-[var(--color-accent-green-darker)] hover:text-[var(--color-accent-green-darker)]"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>

                {portfolioData.socials.instagram && (
                  <a
                    href={portfolioData.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border-2 border-white/10 p-2 transition-all hover:border-[var(--color-accent-green-darker)] hover:text-[var(--color-accent-green-darker)]"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} />
                  </a>
                )}

                {portfolioData.socials.facebook && (
                  <a
                    href={portfolioData.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border-2 border-white/10 p-2 transition-all hover:border-[var(--color-accent-green-darker)] hover:text-[var(--color-accent-green-darker)]"
                    aria-label="Facebook"
                  >
                    <Facebook size={18} />
                  </a>
                )}

                <a
                  href={`mailto:${portfolioData.email}`}
                  className="rounded-lg border-2 border-white/10 p-2 transition-all hover:border-[var(--color-accent-green-darker)] hover:text-[var(--color-accent-green-darker)]"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
