"use client";

import { useRef } from "react";
import { Github, Twitter } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

gsap.registerPlugin(ScrollTrigger);

export function TeamSection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Header Animation
      gsap.from(".team-header", {
        scrollTrigger: {
          trigger: ".team-header",
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      // Cards Stagger Animation
      gsap.from(".team-card", {
        scrollTrigger: {
          trigger: ".team-grid",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
      });

      // Hover effects
      const cards = gsap.utils.toArray<HTMLElement>(".team-card");
      cards.forEach((card) => {
        const hoverTl = gsap.timeline({ paused: true });
        hoverTl.to(card, { y: -10, duration: 0.3, ease: "power2.out" });

        card.addEventListener("mouseenter", () => hoverTl.play());
        card.addEventListener("mouseleave", () => hoverTl.reverse());
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      id="team"
      className="py-24 bg-secondary/20 border-t border-border/50"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="team-header font-serif text-4xl font-bold mb-12">
          Who is Behind the Business
        </h2>
        <div className="team-grid grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              name: "Lucas Ribeiro",
              role: "Founder & Most Beautiful Developer",
              src: "https://github.com/lucasadsr.png",
            },
            {
              name: "Pittaya Design",
              role: "Product Design",
              src: "/PITTAYA-LOGO.PNG",
            },
            {
              name: "Community",
              role: "Open Source Contributors",
              src: null,
            },
          ].map((member, i) => (
            <div
              key={i}
              className="team-card flex flex-col items-center gap-4 p-6 rounded-2xl bg-background border border-border shadow-sm cursor-default"
            >
              <Avatar className="w-24 h-24 border-4 border-secondary shadow-inner">
                <AvatarImage src={member.src || ""} />
                <AvatarFallback>{member.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-sans text-xl font-bold">{member.name}</h3>
                <p className="text-sm text-muted-foreground uppercase tracking-widest mt-1">
                  {member.role}
                </p>
              </div>
              <div className="flex gap-2 mt-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full hover:bg-secondary transition-colors"
                >
                  <Twitter className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full hover:bg-secondary transition-colors"
                >
                  <Github className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
