"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/PITTAYA-LOGO.PNG"
            alt="Pittaya Logo"
            width={32}
            height={32}
            className="rounded-md"
          />
          <span className="font-serif text-xl font-bold tracking-tight">
            Pittaya
          </span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link
            href="#products"
            className="hover:text-foreground transition-colors"
          >
            Products
          </Link>
          <Link
            href="#testimonials"
            className="hover:text-foreground transition-colors"
          >
            Testimonials
          </Link>
          <Link
            href="#team"
            className="hover:text-foreground transition-colors"
          >
            Team
          </Link>
        </div>
        <Button variant="outline" size="sm" className="hidden sm:flex">
          Get in Touch
        </Button>
      </div>
    </nav>
  );
}
