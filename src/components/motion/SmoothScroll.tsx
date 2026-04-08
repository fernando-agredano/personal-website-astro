import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import Lenis from "lenis";

interface ScrollContextType {
  scrollY: number;
  scrollTo: (target: string | number | HTMLElement) => void;
}

const ScrollContext = createContext<ScrollContextType>({
  scrollY: 0,
  scrollTo: () => {},
});

export function useScroll() {
  return useContext(ScrollContext);
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  const [scrollY, setScrollY] = useState(0);
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
      setScrollY(lenis.scroll);
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
    <ScrollContext.Provider value={{ scrollY, scrollTo }}>
      {children}
    </ScrollContext.Provider>
  );
}
