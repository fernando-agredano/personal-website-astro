import { Reveal } from "@/components/motion/Reveal";
import { Tilt } from "@/components/motion/Tilt";
import * as React from "react";
import { 
  Rocket, 
  Cpu, 
  Globe, 
  Brain, 
  Trophy,
  History
} from "lucide-react";

function Counter({
  end,
  duration = 1400,
  suffix = "+",
}: {
  end: number;
  duration?: number;
  suffix?: string;
}) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = window.setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        window.clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => window.clearInterval(timer);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function About() {
  const stats = [
    {
      label: "Years Experience",
      value: 2,
      icon: History,
      delay: 0.2,
    },
    {
      label: "Projects Built",
      value: 20,
      icon: Rocket,
      delay: 0.25,
    },
    {
      label: "Technologies",
      value: 15,
      icon: Cpu,
      delay: 0.3,
    },
    {
      label: "Deployments",
      value: 10,
      icon: Globe,
      delay: 0.35,
    },
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-premium-gray/30"
    >
      <div className="page-shell">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="flex max-w-2xl flex-col gap-5 text-center lg:text-left sm:gap-6">
            <Reveal>
              <div>
                <h2 className="mb-2 font-mono text-xs tracking-widest text-accent-green-darker opacity-70 uppercase sm:text-sm">
                  About Me
                </h2>

                <h3 className="text-2xl font-bold leading-tight tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
                  Building modern digital experiences with purpose.
                </h3>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-sm leading-relaxed text-foreground/65 md:text-base lg:text-lg">
                I’m a{" "}
                <span className="text-white font-medium">Systems Engineer</span>{" "}
                with a professional degree and license, focused on building
                scalable, modern, and user-centered digital products.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="text-sm leading-relaxed text-foreground/65 md:text-base lg:text-lg">
                With over{" "}
                <span className="text-white font-medium">
                  2 years of experience
                </span>
                , I work as a full-stack developer, connecting clean interfaces,
                solid backend architecture, reliable deployments, and AI-powered
                solutions into meaningful products.
              </p>
            </Reveal>

            <Reveal delay={0.35}>
              <p className="text-sm leading-relaxed text-foreground/65 md:text-base lg:text-lg">
                I enjoy turning ideas into high-performance experiences where
                engineering, design, usability, and artificial intelligence come
                together naturally to create smarter and more impactful digital
                solutions.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-6">
            {stats.map((stat, idx) => (
              <Reveal key={idx} delay={stat.delay}>
                <Tilt intensity={12}>
                  <div className="group relative glass p-4 text-center transition-all duration-500 hover:border-accent-green-darker/30 hover:shadow-[0_0_30px_rgba(14,219,171,0.1)] overflow-hidden rounded-xl border-white/5 sm:rounded-2xl sm:p-7">
                    {/* Decorative background pulse */}
                    <div className="absolute -right-4 -top-4 text-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <stat.icon size={80} />
                    </div>
                    
                    <div className="relative z-10">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/5 group-hover:border-accent-green-darker/20 group-hover:bg-accent-green-darker/10 transition-all duration-300">
                          <stat.icon size={24} className="text-white/40 group-hover:text-accent-green-darker" />
                        </div>
                      </div>
                      
                      <h4 className="mb-1 text-2xl font-bold text-accent-green-darker transition-transform duration-300 group-hover:scale-105 sm:mb-2 sm:text-3xl md:text-4xl">
                        <Counter end={stat.value} />
                      </h4>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-white/50 sm:text-xs">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </Tilt>
              </Reveal>
            ))}

            <Reveal delay={0.4} className="col-span-2">
              <Tilt intensity={8}>
                <div className="group relative glass overflow-hidden rounded-xl border-white/5 p-5 transition-all duration-500 hover:border-accent-green-darker/30 hover:shadow-[0_0_40px_rgba(14,219,171,0.15)] sm:rounded-2xl sm:p-8">
                  <div className="absolute -right-10 -top-10 text-accent-green-darker/5 group-hover:text-accent-green-darker/10 transition-colors duration-500">
                    <Brain size={240} />
                  </div>
                  
                  <div className="relative z-10 flex flex-col items-center gap-4 text-center md:flex-row md:items-start md:justify-between md:text-left md:gap-6">
                    <div className="flex-1 max-w-md">
                      <h4 className="mb-2 text-xl font-bold text-accent-green-darker transition-colors group-hover:text-white sm:text-2xl md:text-3xl">
                        AI Developer
                      </h4>
                      <p className="text-xs leading-relaxed text-white/60 sm:text-sm">
                        Building intelligent experiences through AI integration,
                        automation, and modern full-stack development.
                      </p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5 group-hover:border-accent-green-darker/40 group-hover:bg-accent-green-darker/10 transition-all duration-500 animate-pulse">
                      <Brain size={40} className="text-accent-green-darker" />
                    </div>
                  </div>
                </div>
              </Tilt>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
