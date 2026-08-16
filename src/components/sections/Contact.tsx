import type { LucideIcon } from "lucide-react";
import { portfolioData } from "@/content/portfolio";
import { Reveal } from "@/components/motion/Reveal";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Github,
  ArrowUpRight,
} from "lucide-react";

const socialMeta: Record<
  string,
  { label: string; Icon: LucideIcon; href?: string }
> = {
  facebook: { label: "Facebook", Icon: Facebook },
  instagram: { label: "Instagram", Icon: Instagram },
  linkedin: { label: "LinkedIn", Icon: Linkedin },
  github: { label: "GitHub", Icon: Github },
};

export function Contact() {
  const email = portfolioData.email;

  const socials = Object.entries(portfolioData.socials || {}).map(
    ([platform, url]) => {
      const key = platform.toLowerCase();
      const meta = socialMeta[key];
      return meta
        ? { platform: key, label: meta.label, Icon: meta.Icon, url }
        : {
            platform: key,
            label: platform,
            Icon: ArrowUpRight,
            url,
          };
    },
  );

  const emailItem = {
    platform: "gmail",
    label: "Gmail",
    Icon: Mail,
    url: `mailto:${email}`,
  };

  const EmailIcon = emailItem.Icon;

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="page-shell">
        <div className="grid grid-cols-1 items-start gap-12 text-center lg:grid-cols-2 lg:gap-16 lg:text-left">
          <Reveal>
            <div className="flex w-full flex-col items-center gap-6 sm:gap-8 lg:items-start">
              <div className="flex w-full flex-col items-center gap-3 sm:gap-4 lg:items-start">
                <h2 className="font-mono text-xs uppercase leading-none tracking-widest text-accent-green-darker opacity-70 sm:text-sm">
                  Contact
                </h2>

                <h3 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl">
                  Let&apos;s connect.
                </h3>

                <p className="max-w-md text-sm leading-relaxed text-foreground/50 sm:text-base">
                  Reach out through any of these platforms. I&apos;m always open
                  to new ideas, collaborations, and opportunities.
                </p>
              </div>

              <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                <a
                  href={emailItem.url}
                  className="flex items-center gap-4 p-4 glass rounded-xl border-2 border-white/5 hover:border-[var(--color-accent-green-darker)]/65 hover:bg-[var(--color-accent-green-darker)]/5 transition-all duration-300 group"
                >
                  <EmailIcon
                    size={22}
                    className="text-white/70 group-hover:text-[var(--color-accent-green-darker)] transition-colors"
                  />
                  <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                    {emailItem.label}
                  </span>
                </a>

                {socials.map(({ platform, label, Icon, url }) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 glass rounded-xl border-2 border-white/5 hover:border-[var(--color-accent-green-darker)]/65 hover:bg-[var(--color-accent-green-darker)]/5 transition-all duration-300 group"
                  >
                    <Icon
                      size={22}
                      className="text-white/70 group-hover:text-[var(--color-accent-green-darker)] transition-colors"
                    />
                    <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                      {label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="flex w-full flex-col items-center gap-6 sm:gap-8 lg:items-start">
            <Reveal>
              <div className="flex w-full flex-col items-center gap-3 sm:gap-4 lg:items-start">
                <h2 className="font-mono text-xs uppercase leading-none tracking-widest text-accent-green-darker opacity-70 sm:text-sm">
                  Do you have a project?
                </h2>

                <h3 className="text-2xl font-bold leading-tight tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                  Let&apos;s talk about your next big idea.
                </h3>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="max-w-xl text-base leading-relaxed text-foreground/50 sm:text-lg md:text-xl">
                If you&apos;re looking for someone who prioritizes performance,
                aesthetics, and user experience, I&apos;d love to hear from you.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <a
                href={`mailto:${portfolioData.email}`}
                className="
      group relative inline-flex items-center justify-center gap-3
      px-8 py-4 sm:px-10 sm:py-5
      border-2 border-[var(--color-accent-green-darker)]
      text-white
      font-semibold
      rounded-xl
      overflow-hidden
    "
              >
                <span
                  className="
        absolute inset-0
        bg-[var(--color-accent-green-darker)]
        translate-y-full
        group-hover:translate-y-0
        transition-transform duration-300 ease-out
      "
                />

                <span className="relative z-10 flex items-center gap-3 group-hover:text-black transition-colors duration-300">
                  <Mail size={20} />
                  Send Email
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
