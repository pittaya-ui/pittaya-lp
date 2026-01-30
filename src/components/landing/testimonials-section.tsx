"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Carousel } from "@/components/ui/carousel";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

gsap.registerPlugin(ScrollTrigger);

export function TestimonialsSection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".testimonial-header", {
        scrollTrigger: {
          trigger: ".testimonial-header",
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(".testimonial-carousel", {
        scrollTrigger: {
          trigger: ".testimonial-carousel",
          start: "top 85%",
        },
        scale: 0.95,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power2.out",
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      id="testimonials"
      className="py-24 bg-background px-8"
    >
      <div className="container mx-auto px-4">
        <div className="testimonial-header mb-16 text-center">
          <h2 className="font-serif text-4xl font-bold mb-4">What They Say</h2>
          <p className="text-muted-foreground">
            Trusted by developers worldwide.
          </p>
        </div>

        <div className="testimonial-carousel">
          <Carousel
            className="w-full max-w-4xl mx-auto"
            showArrows={false}
            showDots={false}
            autoplay
          >
            {[
              {
                name: "Alex Chen",
                role: "Frontend Lead",
                text: "Pittaya UI saved us weeks of development time. The components are not just functional, they are stunning.",
                initial: "AC",
              },
              {
                name: "Sarah Miller",
                role: "DevOps Engineer",
                text: "AM I ON? is the only monitoring tool that wakes me up when it actually matters. No false positives. Pure efficiency.",
                initial: "SM",
              },
              {
                name: "David K.",
                role: "CTO at TechFlow",
                text: "The attention to detail in every Pittaya product is unmatched. It feels premium, it feels robust.",
                initial: "DK",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="h-full border-muted hover:border-primary/50 transition-colors shadow-sm cursor-pointer group mx-4"
              >
                <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                  <Avatar className="h-10 w-10 border group-hover:scale-110 transition-transform duration-300">
                    <AvatarFallback>{item.initial}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-sm">
                      {item.name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {item.role}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-sm leading-relaxed italic text-muted-foreground">
                    &quot;{item.text}&quot;
                  </p>
                </CardContent>
              </Card>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
