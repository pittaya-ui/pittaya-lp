"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimatedContainerProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "scale";
  triggerStart?: string;
  duration?: number;
  stagger?: number;
  selector?: string;
}

/**
 * Scroll-triggered animated container using GSAP ScrollTrigger
 */
export function ScrollAnimatedContainer({
  children,
  className,
  animation = "fade-up",
  triggerStart = "top 80%",
  duration = 1,
  stagger,
  selector,
}: ScrollAnimatedContainerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const animations = {
        "fade-up": { y: 50, opacity: 0 },
        "fade-in": { opacity: 0 },
        scale: { scale: 0.95, opacity: 0 },
      };

      const target = selector
        ? gsap.utils.toArray<HTMLElement>(selector)
        : ref.current;

      gsap.from(target, {
        scrollTrigger: {
          trigger: ref.current,
          start: triggerStart,
          toggleActions: "play none none reverse",
        },
        ...animations[animation],
        duration,
        stagger,
        ease: "power3.out",
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
