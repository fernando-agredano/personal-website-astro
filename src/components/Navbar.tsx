import * as React from "react";
import { portfolioData } from "@/content/portfolio";
import { cn } from "@/lib/utils";
import { useScroll } from "@/components/motion/SmoothScroll";
import { Menu, X } from "lucide-react";

function normalizeHash(hash: string) {
  if (!hash || hash === "#") return "#home";
  return hash;
}

export function Navbar() {
  const { isScrolled, scrollTo } = useScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("#home");

  /** Solid bar once the user leaves the top of the page */
  const useSolidNav = isScrolled;

  const goTo = React.useCallback((hash: string) => {
    const normalized = normalizeHash(hash);
    scrollTo(normalized);
    setIsMobileMenuOpen(false);
    window.history.pushState(null, "", normalized);
  }, [scrollTo]);

  // Handle intersection observer for active link highlighting
  React.useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Detect when section is roughly in the upper middle
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Observe all sections mentioned in navLinks
    portfolioData.navLinks.forEach((link) => {
      const id = link.href.replace("#", "");
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[200] transition-all duration-500",
          useSolidNav
            ? "bg-premium-black/80 backdrop-blur-xl border-b border-white/10 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
            : "bg-transparent border-b border-transparent py-6"
        )}
      >
        <div className="px-4 sm:px-6 md:px-12 lg:px-24">
          <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between md:px-4 lg:px-8">
            {/* Logo */}
            <button
              type="button"
              onClick={() => goTo("#home")}
              className="inline-flex shrink-0 items-center gap-1.5 sm:gap-2 group relative z-[210] -ml-0.5"
              aria-label="Go to home"
            >
              <span className="font-mono font-bold text-base sm:text-lg text-[var(--color-accent-green-darker)] transition-transform duration-300 ease-out group-hover:rotate-[-8deg]">
                {"</>"}
              </span>
              <span className="text-xs sm:text-sm md:text-base font-bold tracking-tight">
                <span className="text-white/90 transition-colors duration-300 group-hover:text-white">
                  AGREDANO
                </span>
                <span className="text-[var(--color-accent-green-darker)] transition-all duration-300 group-hover:tracking-[0.1em]">
                  .DEV
                </span>
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {portfolioData.navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <button
                    key={link.href}
                    type="button"
                    onClick={() => goTo(link.href)}
                    className={cn(
                      "px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full relative",
                      isActive
                        ? "text-white"
                        : "text-white/60 hover:text-white/90 hover:bg-white/5"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[var(--color-accent-green-darker)] rounded-full shadow-[0_0_8px_var(--color-accent-green-darker)]" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className="md:hidden relative z-[210] -mr-1 shrink-0 p-2 text-white/90 active:scale-95 transition-transform"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[190] bg-premium-black/95 backdrop-blur-2xl md:hidden transition-all duration-500 ease-in-out",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        )}
      >
        <div className="flex h-full flex-col justify-center px-5 pt-16 pb-10 sm:px-8">
          <nav className="flex max-w-md flex-col items-start gap-1">
            {portfolioData.navLinks.map((link, index) => (
              <button
                key={link.href}
                type="button"
                onClick={() => goTo(link.href)}
                className={cn(
                  "w-full rounded-lg py-2.5 pl-1 pr-3 text-left text-base font-semibold transition-all duration-300 sm:text-lg",
                  activeSection === link.href
                    ? "text-[var(--color-accent-green-darker)]"
                    : "text-white/65 hover:text-white"
                )}
                style={{
                  transitionDelay: `${index * 40}ms`,
                  transform: isMobileMenuOpen ? "translateY(0)" : "translateY(12px)",
                  opacity: isMobileMenuOpen ? 1 : 0,
                }}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
