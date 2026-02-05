"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig, navLinks } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * Navigation bar component
 */
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed left-1/2 z-50 flex flex-col -translate-x-1/2 items-center transition-all duration-500 ease-in-out bg-background/80 backdrop-blur-md",
        isScrolled
          ? "top-4 w-[90%] max-w-4xl border border-border/40 shadow-md"
          : "top-0 w-full max-w-full border-b border-border/40",
        isScrolled ? "rounded-3xl" : "rounded-none",
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between transition-all duration-500 ease-in-out w-full",
          isScrolled ? "px-6 h-14" : "max-w-7xl px-8 h-16",
        )}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <Image
            src="/PITTAYA-LOGO.PNG"
            alt={`${siteConfig.name} Logo`}
            width={32}
            height={32}
            className="rounded-md"
            priority
          />
          <span className="font-sans text-xl font-medium">
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

        {/* CTA Button and Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            className="hidden sm:flex"
            asChild
          >
            <Link href="mailto:team@pittaya.org">Get in Touch</Link>
          </Button>

          <button
            className="md:hidden text-foreground focus:outline-none relative w-6 h-6 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu
              size={24}
              className={cn(
                "absolute transition-all duration-300 ease-in-out",
                isMobileMenuOpen
                  ? "opacity-0 rotate-90 scale-50"
                  : "opacity-100 rotate-0 scale-100",
              )}
            />
            <X
              size={24}
              className={cn(
                "absolute transition-all duration-300 ease-in-out",
                isMobileMenuOpen
                  ? "opacity-100 rotate-0 scale-100"
                  : "opacity-0 -rotate-90 scale-50",
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div
        className={cn(
          "w-full overflow-hidden transition-all duration-500 ease-in-out md:hidden flex flex-col items-center",
          isMobileMenuOpen
            ? "max-h-[300px] opacity-100 pb-6"
            : "max-h-0 opacity-0",
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors w-full text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <div className="mt-2 sm:hidden">
          <Button
            variant="outline"
            size="sm"
            asChild
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Link href="mailto:team@pittaya.org">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
