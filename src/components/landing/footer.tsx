"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-900 py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/PITTAYA-LOGO.PNG"
                alt="Logo"
                width={30}
                height={30}
                className="rounded-sm"
              />
              <span className="font-serif text-2xl font-bold">Pittaya</span>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Creating tools that empower the next generation of digital
              creators. Minimalist, brutal, and effective.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
              Products
            </h4>
            <ul className="space-y-3 text-sm text-foreground/80">
              <li>
                <Link
                  href="https://ui.pittaya.org"
                  className="hover:text-primary transition-colors"
                >
                  Pittaya UI
                </Link>
              </li>
              <li>
                <Link
                  href="https://amion.app"
                  className="hover:text-primary transition-colors"
                >
                  AM I ON?
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
              Legal
            </h4>
            <ul className="space-y-3 text-sm text-foreground/80">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border mt-12 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Pittaya Inc. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <span>
              Made with{" "}
              <Heart className="w-3 h-3 inline text-red-500 mx-1 fill-current" />{" "}
              in Brazil
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
