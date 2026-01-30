"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Badge } from "@/components/ui/badge";
import { ProductCard } from "./product-card";
import { products } from "@/data/products";

gsap.registerPlugin(ScrollTrigger);

/**
 * Products section with scroll-triggered animations
 */
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
      aria-labelledby="products-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <header className="header-container text-center mb-24">
          <div className="header-element inline-block">
            <Badge
              variant="outline"
              className="mb-6 py-1.5 px-4 border-primary/20 bg-primary/5 text-primary text-sm font-medium tracking-wide uppercase"
            >
              Our Ecosystem
            </Badge>
          </div>
          <h2
            id="products-heading"
            className="header-element font-serif text-5xl md:text-6xl font-bold mb-6 text-foreground"
          >
            Tools for the <span className="italic text-primary">Bold</span>
          </h2>
          <p className="header-element text-muted-foreground/80 max-w-2xl mx-auto text-xl leading-relaxed">
            Discover our suite of products designed to empower developers and
            businesses.
          </p>
        </header>

        {/* Products List */}
        <div className="flex flex-col gap-32">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              title={product.title}
              icon={product.icon}
              iconStyle={product.iconStyle}
              description={product.description}
              quote={"quote" in product ? product.quote : undefined}
              tags={"tags" in product ? product.tags : undefined}
              cta={product.cta}
              images={product.images}
              gradient={product.gradient}
              reversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
