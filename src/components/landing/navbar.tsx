"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig, navLinks } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * Navigation bar component
 */
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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
        "fixed left-1/2 z-50 flex -translate-x-1/2 items-center justify-center transition-all duration-500 ease-in-out bg-background/80 backdrop-blur-md",
        isScrolled
          ? "top-4 w-[90%] max-w-4xl rounded-full border border-border/40 shadow-md"
          : "top-0 w-full max-w-full rounded-none border-b border-border/40",
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between transition-all duration-500 ease-in-out",
          isScrolled ? "w-full px-6 h-14" : "w-full max-w-7xl px-8 h-16",
        )}
      >
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
