"use client";

import { Navbar } from "@/components/landing/navbar";
import { HeroSection } from "@/components/landing/hero-section";
import { ProductsSection } from "@/components/landing/products-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { TeamSection } from "@/components/landing/team-section";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden selection:bg-pittaya selection:text-white">
      <Navbar />
      <main>
        <HeroSection />
        <ProductsSection />
        <TestimonialsSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
}
