"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Carousel } from "@/components/ui/carousel";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

gsap.registerPlugin(ScrollTrigger);

/**
 * Testimonials section with auto-playing carousel
 */
export function TestimonialsSection() {
  const t = useTranslations("testimonials");
  const containerRef = useRef<HTMLElement>(null);

  const testimonials = [
    {
      key: "alexChen",
      initials: "AC",
    },
    {
      key: "sarahMiller",
      initials: "SM",
    },
    {
      key: "davidK",
      initials: "DK",
    },
  ];

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
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <header className="testimonial-header mb-16 text-center">
          <h2
            id="testimonials-heading"
            className="font-serif text-4xl font-bold mb-4"
          >
            {t("title")}
          </h2>
          <p className="text-muted-foreground">{t("subtitle")}</p>
        </header>

        {/* Testimonials Carousel */}
        <div className="testimonial-carousel">
          <Carousel
            className="w-full max-w-4xl mx-auto"
            showArrows={false}
            showDots={false}
            autoplay
          >
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="h-full border-muted hover:border-primary/50 transition-colors shadow-sm cursor-pointer group mx-4"
              >
                <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                  <Avatar className="h-10 w-10 border group-hover:scale-110 transition-transform duration-300">
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-sm">
                      {t(`items.${testimonial.key}.name`)}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {t(`items.${testimonial.key}.role`)}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <blockquote className="text-sm leading-relaxed italic text-muted-foreground">
                    &quot;{t(`items.${testimonial.key}.text`)}&quot;
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
