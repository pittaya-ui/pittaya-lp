"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { Button } from "@/components/ui/button";
import { CodeWindow } from "@/components/ui/code-window";
import {
  AnnouncementContainer,
  AnnouncementTitle,
} from "@/components/ui/announcement-badge";
import { heroContent, heroCode } from "@/data/hero";

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-text-element", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
      }).from(
        ".hero-image-container",
        {
          x: 50,
          opacity: 0,
          duration: 1.2,
          scale: 0.95,
        },
        "-=0.5",
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden px-8 h-screen flex items-center"
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #d1d5db 1px, transparent 1px),
            linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="flex flex-col items-start gap-6 max-w-2xl">
          <div className="hero-text-element">
            <AnnouncementContainer variant="default">
              <AnnouncementTitle>
                {heroContent.announcement.text}
                <ArrowRight
                  className="ml-2 w-4 h-4 inline"
                  aria-hidden="true"
                />
              </AnnouncementTitle>
            </AnnouncementContainer>
          </div>

          <h1 className="hero-text-element font-serif text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-foreground">
            {heroContent.headline.main}{" "}
            <span className="text-primary italic">
              {heroContent.headline.accent}
            </span>
            .
          </h1>

          <p className="hero-text-element text-xl text-muted-foreground leading-relaxed max-w-lg">
            {heroContent.description}
          </p>

          <div className="hero-text-element flex flex-wrap gap-4 pt-4">
            <Button
              size="lg"
              className="rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 duration-300"
              asChild
            >
              <Link href={heroContent.cta.primary.href}>
                {heroContent.cta.primary.label}
                <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="rounded-full hover:bg-secondary/80 hover:scale-105 active:scale-95 transition-all"
              asChild
            >
              <Link href={heroContent.cta.secondary.href}>
                {heroContent.cta.secondary.label}
              </Link>
            </Button>
          </div>
        </div>

        {/* Code Window */}
        <div className="hero-image-container relative hidden lg:flex justify-center items-center [perspective:1000px]">
          <div className="relative w-full max-w-[550px] [transform:rotateY(-5deg)_rotateX(5deg)] hover:[transform:rotateY(0deg)_rotateX(0deg)] transition-transform duration-700 ease-out [transform-style:preserve-3d]">
            {/* Abstract Glow */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-primary/30 rounded-full blur-[100px] -z-10"
              aria-hidden="true"
            />
            <CodeWindow codeString={heroCode} />
          </div>
        </div>
      </div>
    </section>
  );
}
