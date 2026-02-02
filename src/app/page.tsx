import { Navbar } from "@/components/landing/navbar";
import { HeroSection } from "@/components/landing/hero-section";
import { ProductsSection } from "@/components/landing/products-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { TeamSection } from "@/components/landing/team-section";
import { Footer } from "@/components/landing/footer";

/**
 * Home page - Server Component wrapper with client-side sections
 * Optimized by removing unnecessary "use client" from the page level
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-pittaya selection:text-white">
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
