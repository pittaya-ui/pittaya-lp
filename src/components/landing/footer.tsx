import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

import { siteConfig, footerLinks } from "@/config/site";

/**
 * Footer component - Server Component (no client-side JS needed)
 * Optimized by removing "use client" directive
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-slate-50 text-slate-900 py-16 border-t border-border"
      role="contentinfo"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/PITTAYA-LOGO.PNG"
                alt={`${siteConfig.name} Logo`}
                width={30}
                height={30}
                className="rounded-sm"
              />
              <span className="font-serif text-2xl font-bold">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              {siteConfig.description}
            </p>
          </div>

          {/* Products Links */}
          <nav aria-label="Products navigation">
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
              Products
            </h4>
            <ul className="space-y-3 text-sm text-foreground/80">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors"
                    {...(link.external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal Links */}
          <nav aria-label="Legal navigation">
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
              Legal
            </h4>
            <ul className="space-y-3 text-sm text-foreground/80">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border mt-12 text-sm text-muted-foreground">
          <p>
            © {currentYear} {siteConfig.creator} All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <span>
              Made with{" "}
              <Heart
                className="w-3 h-3 inline text-red-500 mx-1 fill-current"
                aria-label="love"
              />{" "}
              in Brazil
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
