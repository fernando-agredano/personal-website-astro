import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import Lenis from "lenis";

interface ScrollContextType {
  isScrolled: boolean;
  scrollTo: (target: string | number | HTMLElement) => void;
}

const ScrollContext = createContext<ScrollContextType>({
  isScrolled: false,
  scrollTo: () => {},
});

export function useScroll() {
  return useContext(ScrollContext);
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lenisRef, setLenisRef] = useState<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
      overscroll: false,
    });

    setLenisRef(lenis);

    function raf(time: number) {
      lenis.raf(time);
      // Only flips React state (and re-renders scroll consumers) when the
      // threshold is crossed, instead of every frame at 60fps.
      setIsScrolled(lenis.scroll > 20);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const scrollTo = (target: string | number | HTMLElement) => {
    lenisRef?.scrollTo(target, {
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  };

  return (
    <ScrollContext.Provider value={{ isScrolled, scrollTo }}>
      {children}
    </ScrollContext.Provider>
  );
}
