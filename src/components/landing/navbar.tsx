import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig, navLinks } from "@/config/site";

/**
 * Navigation bar component - Server Component (no client-side JS needed)
 * Optimized by removing "use client" directive
 */
export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/PITTAYA-LOGO.PNG"
            alt={`${siteConfig.name} Logo`}
            width={32}
            height={32}
            className="rounded-md"
            priority
          />
          <span className="font-serif text-xl font-bold tracking-tight">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Button variant="outline" size="sm" className="hidden sm:flex" asChild>
          <Link href="mailto:contact@pittaya.org">Get in Touch</Link>
        </Button>
      </div>
    </nav>
  );
}
