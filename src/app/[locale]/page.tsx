import { setRequestLocale } from "next-intl/server";

import { Navbar } from "@/components/landing/navbar";
import { HeroSection } from "@/components/landing/hero-section";
import { ProductsSection } from "@/components/landing/products-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { TeamSection } from "@/components/landing/team-section";
import { Footer } from "@/components/landing/footer";

type Props = {
  params: Promise<{ locale: string }>;
};

/**
 * Home page - Server Component wrapper with client-side sections
 */
export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

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
