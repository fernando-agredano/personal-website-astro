import { Reveal } from "@/components/motion/Reveal";
import { FileText, FolderGit2 } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[#070A10]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_15%_35%,rgba(14,219,171,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_80%_30%,rgba(14,219,171,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-black/40" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <div className="dark-noise" />
      </div>

      <div className="relative w-full px-4 sm:px-6 md:px-12 lg:px-24 pt-24 pb-12 sm:pt-28 sm:pb-16">
        <div className="page-shell">
          <div className="grid items-center gap-8 sm:gap-14 lg:grid-cols-2 lg:gap-10">
            <div className="order-2 mx-auto max-w-xl text-center lg:order-1 lg:mx-0 lg:text-left">
              <Reveal direction="up" delay={0.05}>
                <div className="mb-6 flex items-center justify-center gap-3 sm:mb-8 lg:justify-start">
                  <span className="hidden h-px w-10 bg-[var(--color-accent-green-darker)] opacity-75 sm:block lg:w-16" />
                  <span className="text-white/90 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                    Hello
                    <span className="text-[var(--color-accent-green-darker)]">
                      .
                    </span>
                  </span>
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.12}>
                <p className="mb-3 text-lg font-medium text-white/70 sm:text-2xl md:text-3xl">
                  I&apos;m <span className="text-white/90">Fernando</span>
                </p>
              </Reveal>

              <Reveal direction="up" delay={0.18}>
                <div className="mb-6 sm:mb-8">
                  <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                    Full-Stack Developer
                  </h1>
                  <p className="mt-2 text-base font-semibold tracking-wide text-[var(--color-accent-green-darker)] sm:mt-3 sm:text-xl md:text-2xl">
                    AI Developer
                  </p>
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.24}>
                <p className="mx-auto mb-8 max-w-lg text-sm leading-relaxed text-white/55 sm:mb-10 sm:text-base lg:mx-0">
                  Passionate about building fast, elegant digital experiences
                  and AI-powered solutions. I enjoy turning ideas into
                  meaningful products where solid engineering, intelligent
                  systems, and thoughtful design come together.
                </p>
              </Reveal>

              <Reveal direction="up" delay={0.3}>
                <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4 lg:items-stretch lg:justify-start">
                  <a
                    href="#contact"
                    className="
                      inline-flex w-full max-w-[280px] items-center justify-center
                      sm:min-w-[200px] sm:max-w-none
                      px-6 py-3.5 sm:px-7 sm:py-4
                      rounded-xl
                      font-semibold
                      border border-[var(--color-accent-green-darker)]
                      bg-[var(--color-accent-green-darker)]
                      text-black
                      hover:brightness-110
                      hover:shadow-[0_0_18px_rgba(14,219,171,0.45),0_0_38px_rgba(14,219,171,0.2)]
                      transition-all duration-300
                    "
                  >
                    Got a project?
                  </a>

                  <a
                    href="#projects"
                    className="
                      group inline-flex w-full max-w-[280px] items-center justify-center gap-3
                      sm:min-w-[200px] sm:max-w-none
                      px-6 py-3.5 sm:px-7 sm:py-4
                      rounded-xl
                      font-semibold
                      glass border-2 border-white/5
                      text-white/70
                      hover:border-[var(--color-accent-green-darker)]/65
                      hover:bg-[var(--color-accent-green-darker)]/5
                      transition-all duration-300
                    "
                  >
                    <FolderGit2
                      size={18}
                      className="text-white/70 transition-colors group-hover:text-[var(--color-accent-green-darker)]"
                    />
                    <span className="transition-colors group-hover:text-white">
                      My projects
                    </span>
                  </a>
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.38}>
                <div className="mt-4 flex justify-center lg:justify-start sm:mt-6">
                  <a
                    href="/Fernando-Agredano-CV.pdf"
                    download
                    className="
                      group inline-flex w-full max-w-[280px] items-center justify-center gap-3
                      sm:min-w-[200px] sm:max-w-none
                      px-6 py-3.5 sm:px-7 sm:py-4
                      rounded-xl
                      font-semibold
                      glass border-2 border-white/5
                      text-white/70
                      hover:border-[var(--color-accent-green-darker)]/65
                      hover:bg-[var(--color-accent-green-darker)]/5
                      transition-all duration-300
                    "
                  >
                    <FileText
                      size={18}
                      className="text-white/70 transition-colors group-hover:text-[var(--color-accent-green-darker)]"
                    />
                    <span className="transition-colors group-hover:text-white">
                      Download CV
                    </span>
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="relative order-1 lg:order-2 lg:justify-self-end">
              <div className="relative mx-auto w-full max-w-[400px] sm:max-w-[520px]">
                <div className="pointer-events-none absolute -inset-4 z-0 sm:-inset-10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="h-[280px] w-[280px] rounded-full border-[10px] border-[var(--color-accent-green-darker)] opacity-80 sm:h-[380px] sm:w-[380px] sm:border-[14px] md:h-[430px] md:w-[430px] md:border-[16px]"
                    />
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle,rgba(14,219,171,0.16),transparent_60%)] sm:h-[360px] sm:w-[360px] md:h-[410px] md:w-[410px]"
                    />
                  </div>
                </div>

                <Reveal direction="up" delay={0.12}>
                  <div className="relative z-20 mx-auto h-[320px] w-[260px] sm:h-[440px] sm:w-[320px] md:h-[500px] md:w-[360px] lg:h-[540px] lg:w-[380px]">
                    <img
                      src="/professional-photo-3.png"
                      alt="Fernando Agredano"
                      width={380}
                      height={540}
                      fetchPriority="high"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-contain object-center select-none"
                    />
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
