"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface AnimatedContainerProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "scale";
  delay?: number;
  duration?: number;
}

/**
 * Reusable animated container that handles GSAP animations
 * Extracted to avoid "use client" in every component
 */
export function AnimatedContainer({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 1,
}: AnimatedContainerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const animations = {
        "fade-up": { y: 50, opacity: 0 },
        "fade-in": { opacity: 0 },
        scale: { scale: 0.95, opacity: 0 },
      };

      gsap.from(ref.current, {
        ...animations[animation],
        duration,
        delay,
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
