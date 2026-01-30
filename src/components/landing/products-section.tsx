"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Terminal } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

gsap.registerPlugin(ScrollTrigger);

export function ProductsSection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const sections = gsap.utils.toArray<HTMLElement>(".product-section");

      sections.forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      });

      // Animate title elements
      gsap.from(".header-element", {
        scrollTrigger: {
          trigger: ".header-container",
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      id="products"
      className="py-24 bg-white relative px-8"
    >
      <div className="container mx-auto px-4">
        <div className="header-container text-center mb-24">
          <div className="header-element inline-block">
            <Badge
              variant="outline"
              className="mb-6 py-1.5 px-4 border-primary/20 bg-primary/5 text-primary text-sm font-medium tracking-wide uppercase"
            >
              Our Ecosystem
            </Badge>
          </div>
          <h2 className="header-element font-serif text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Tools for the <span className="italic text-primary">Bold</span>
          </h2>
          <p className="header-element text-muted-foreground/80 max-w-2xl mx-auto text-xl leading-relaxed">
            Discover our suite of products designed to empower developers and
            businesses.
          </p>
        </div>

        <div className="flex flex-col gap-32">
          {/* Product 1: Pittaya UI */}
          <div className="product-section grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              {/* Abstract background shape */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-pink-100 to-purple-100 rounded-[2.5rem] -z-10 blur-xl opacity-70 transition-opacity group-hover:opacity-100 duration-500" />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-white transition-transform duration-700 group-hover:scale-[1.02]">
                <Image
                  src="/UI.png"
                  alt="Pittaya UI Desktop"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Mobile Mockup Floating */}
              <div className="absolute -bottom-10 -right-6 w-1/3 hidden md:block shadow-2xl rounded-xl border border-border/20 overflow-hidden bg-white z-20 transition-transform duration-500 group-hover:-translate-y-4">
                <Image
                  src="/UI-MIOBILE.png"
                  alt="Pittaya UI Mobile"
                  width={300}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="flex flex-col gap-8 lg:pl-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-xl border border-primary/20 shadow-sm">
                  <Terminal className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-4xl font-bold text-foreground">
                  Pittaya UI
                </h3>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A completely open-source UI library built for React. Powered by{" "}
                <strong className="text-foreground font-semibold">
                  Tailwind CSS
                </strong>
                ,{" "}
                <strong className="text-foreground font-semibold">
                  Radix primitives
                </strong>
                , and{" "}
                <strong className="text-foreground font-semibold">
                  TypeScript
                </strong>
                . It is the foundation of beauty in web development.
              </p>

              <div className="space-y-6">
                <div className="flex flex-wrap gap-2 text-sm">
                  {["React", "Tailwind", "Radix", "Open Source"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-secondary/50 border border-secondary text-muted-foreground font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button
                  size="lg"
                  className="w-fit text-base px-8 h-12 shadow-lg hover:shadow-xl transition-all group"
                  asChild
                >
                  <Link href="https://ui.pittaya.org/" target="_blank">
                    Start Building{" "}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Product 2: AM I ON? */}
          <div className="product-section grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-8 lg:pr-8 order-2 lg:order-1">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-100/50 rounded-xl border border-emerald-200/50 shadow-sm">
                  <Shield className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-4xl font-bold text-foreground font-sans">
                  AM I ON?
                </h3>
              </div>

              <div className="pl-6 border-l-4 border-pittaya/60 py-1">
                <p className="text-2xl font-serif italic text-foreground/80">
                  &quot;Purge downtime from the face of the earth.&quot;
                </p>
              </div>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Extreme monitoring for developers who refuse to accept failure.
                Brutal tools for brutal problems. No cute emails, just alerts
                that force you to act.
              </p>

              <div className="pt-2">
                <Button
                  size="lg"
                  className="w-fit text-base px-8 h-12 shadow-lg hover:shadow-xl transition-all bg-emerald-600 hover:bg-emerald-700 text-white group"
                  asChild
                >
                  <Link href="https://amion.app/" target="_blank">
                    Start Monitoring{" "}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative group order-1 lg:order-2">
              <div className="absolute -inset-4 bg-gradient-to-tl from-emerald-100 to-teal-50 rounded-[2.5rem] -z-10 blur-xl opacity-70 transition-opacity group-hover:opacity-100 duration-500" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-white transform transition-transform duration-700 group-hover:-translate-y-2">
                <Image
                  src="/AMION.png"
                  alt="AM I ON? Dashboard"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
