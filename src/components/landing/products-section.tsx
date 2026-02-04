"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { products } from "@/data/products";

gsap.registerPlugin(ScrollTrigger);

export function ProductsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeProductIndex, setActiveProductIndex] = useState(0);

  useGSAP(
    () => {
      // Header Animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".header-container",
          start: "top 80%",
        },
      });

      tl.from(".header-element", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });

      // Product Scroll Logic
      const productSections = gsap.utils.toArray<HTMLElement>(
        ".product-description-block",
      );

      productSections.forEach((section, index) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveProductIndex(index),
          onEnterBack: () => setActiveProductIndex(index),
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      id="products"
      className="bg-white relative px-4"
      aria-labelledby="products-heading"
    >
      <div className="container mx-auto px-4 py-24">
        {/* Section Header */}
        <header className="header-container text-center mb-24 max-w-3xl mx-auto">
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
          <p className="header-element text-muted-foreground/80 text-xl leading-relaxed">
            Discover our suite of products designed to empower developers and
            businesses with modern solutions.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-0 relative">
          {/* Left Column: Scrollable Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-24 lg:gap-0 z-10">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={cn(
                  "product-description-block min-h-[25vh] lg:h-screen flex flex-col justify-center lg:pr-24",
                  index === products.length - 1 ? "lg:mb-0" : "lg:mb-0",
                )}
              >
                <div className="space-y-8 p-6 lg:p-0 bg-white/50 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none rounded-3xl lg:rounded-none border lg:border-none border-border/50">
                  <div className="flex items-center gap-4">
                    <div
                      className={cn(
                        "p-3 rounded-xl border shadow-sm",
                        product.iconStyle.container,
                      )}
                    >
                      <product.icon
                        className={cn("w-6 h-6", product.iconStyle.icon)}
                      />
                    </div>
                    <h3 className="text-3xl font-bold tracking-tight">
                      {product.title}
                    </h3>
                  </div>

                  {"quote" in product && product.quote && (
                    <blockquote className="border-l-4 border-primary/30 pl-4 py-1">
                      <p className="text-lg italic text-muted-foreground font-serif">
                        &quot;{product.quote}&quot;
                      </p>
                    </blockquote>
                  )}

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>

                  {"tags" in product && product.tags && (
                    <div className="flex flex-wrap gap-2">
                      {product.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-secondary/50 text-secondary-foreground/80 font-normal"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}

                  <div className="pt-4 flex flex-wrap gap-3">
                    {Array.isArray(product.cta) ? (
                      product.cta.map((ctaItem, ctaIndex) => (
                        <Button
                          key={ctaIndex}
                          asChild
                          size="lg"
                          className={cn(
                            "rounded-full gap-2 text-base px-8 h-12 shadow-lg shadow-primary/10 hover:shadow-primary/20",
                            "className" in ctaItem
                              ? ctaItem.className
                              : undefined,
                          )}
                        >
                          <Link href={ctaItem.href} target="_blank">
                            {ctaItem.label}
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        </Button>
                      ))
                    ) : (
                      <Button
                        asChild
                        size="lg"
                        className={cn(
                          "rounded-full gap-2 text-base px-8 h-12 shadow-lg shadow-primary/10 hover:shadow-primary/20",
                          "className" in product.cta
                            ? product.cta.className
                            : undefined,
                        )}
                      >
                        <Link
                          href={"href" in product.cta ? product.cta.href : "#"}
                          target="_blank"
                        >
                          {"label" in product.cta
                            ? product.cta.label
                            : "Learn More"}
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </Button>
                    )}
                  </div>

                  {/* Mobile Image Render (Visible only on mobile) */}
                  <div className="lg:hidden mt-8 block">
                    <div className="relative w-full max-w-md mx-auto group">
                      <div
                        className={cn(
                          "absolute -inset-4 rounded-[2.5rem] -z-10 blur-xl opacity-70 bg-gradient-to-tr",
                          product.gradient,
                        )}
                      />
                      <div className="relative rounded-2xl shadow-xl border border-border/50 bg-white">
                        <div className="rounded-2xl overflow-hidden">
                          <Image
                            src={product.images.desktop.src}
                            alt={product.images.desktop.alt}
                            width={product.images.desktop.width}
                            height={product.images.desktop.height}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Sticky Images Display */}
          <div className="hidden lg:block w-1/2 sticky top-0 h-screen overflow-hidden">
            <div className="relative w-full h-full flex items-center justify-center p-12">
              {/* Background Decoration */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-50 via-white to-white -z-10" />

              {products.map((product, index) => (
                <div
                  key={product.id}
                  className={cn(
                    "absolute inset-0 flex items-center justify-center p-12 transition-all duration-700 ease-in-out",
                    activeProductIndex === index
                      ? "opacity-100 translate-y-0 scale-100 blur-0"
                      : "opacity-0 translate-y-12 scale-95 blur-sm pointer-events-none",
                  )}
                >
                  <div className="relative w-full max-w-2xl group">
                    {/* Gradient Blob */}
                    <div
                      className={cn(
                        "absolute -inset-3 rounded-[2.5rem] -z-10 blur-xl opacity-60 transition-opacity duration-1000 bg-gradient-to-tr",
                        product.gradient,
                      )}
                    />

                    {/* Desktop Image */}
                    <div className="relative rounded-2xl shadow-2xl border border-border/50 bg-white transform transition-transform duration-700 hover:scale-[1.01]">
                      <div className="rounded-2xl overflow-hidden">
                        <Image
                          src={product.images.desktop.src}
                          alt={product.images.desktop.alt}
                          width={product.images.desktop.width}
                          height={product.images.desktop.height}
                          className="w-full h-auto object-cover"
                          priority={index === 0}
                        />
                      </div>
                    </div>

                    {/* Mobile Mockup (if exists) */}
                    {"mobile" in product.images && product.images.mobile && (
                      <div
                        className={cn(
                          "absolute -bottom-10 -right-8 w-1/3 z-20 transition-transform duration-700 delay-100 hover:-translate-y-4",
                          product.id === "pittaya-theme"
                            ? "shadow-none"
                            : "shadow-2xl rounded-xl border border-border/20 bg-white",
                        )}
                      >
                        <div
                          className={cn(
                            product.id === "pittaya-theme"
                              ? ""
                              : "rounded-xl overflow-hidden",
                          )}
                        >
                          <Image
                            src={product.images.mobile.src}
                            alt={product.images.mobile.alt}
                            width={product.images.mobile.width}
                            height={product.images.mobile.height}
                            className="w-full h-auto"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
