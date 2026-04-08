import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface RevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
}

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  className = "",
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    if (shouldReduceMotion) {
      gsap.set(el, { clearProps: "opacity,x,y,visibility" });
      return;
    }

    let played = false;
    const axis = { x: 0, y: 0 };
    switch (direction) {
      case "up":
        axis.y = 40;
        break;
      case "down":
        axis.y = -40;
        break;
      case "left":
        axis.x = 40;
        break;
      case "right":
        axis.x = -40;
        break;
    }

    gsap.set(el, {
      opacity: 0,
      x: axis.x,
      y: axis.y,
      visibility: "visible",
    });

    const runReveal = () => {
      if (played) return;
      played = true;
      observer.disconnect();
      gsap.to(el, {
        opacity: 1,
        x: 0,
        y: 0,
        duration,
        delay,
        ease: "power3.out",
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            runReveal();
            return;
          }
        }
      },
      {
        root: null,
        threshold: 0.08,
        rootMargin: "0px 0px -12% 0px",
      },
    );

    observer.observe(el);

    requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.top < vh * 0.88 && rect.bottom > 0) {
        runReveal();
      }
    });

    return () => {
      observer.disconnect();
      gsap.killTweensOf(el);
    };
  }, [direction, delay, duration, shouldReduceMotion]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
