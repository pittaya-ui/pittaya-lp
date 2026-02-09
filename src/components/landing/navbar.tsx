"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, Globe } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { locales, localeNames, localeFlags, Locale } from "@/i18n/config";

/**
 * Navigation bar component
 */
export function Navbar() {
  const t = useTranslations("navbar");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const navLinks = [
    { href: "#products", label: t("products") },
    { href: "#testimonials", label: t("testimonials") },
    { href: "#team", label: t("team") },
  ];

  const handleLocaleChange = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
    setIsLangMenuOpen(false);
  };

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

        {/* CTA Button, Language Selector and Mobile Toggle */}
        <div className="flex items-center gap-2">
          {/* Language Selector */}
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              className="gap-1.5 px-2"
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              aria-label="Select language"
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline text-xs">
                {localeFlags[locale as Locale]}
              </span>
            </Button>
            {isLangMenuOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setIsLangMenuOpen(false)}
                />
                <div className="absolute right-0 top-full mt-2 bg-background border border-border rounded-lg shadow-lg py-1 z-50 min-w-[140px]">
                  {locales.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => handleLocaleChange(loc)}
                      className={cn(
                        "w-full px-3 py-2 text-sm text-left hover:bg-secondary/50 transition-colors flex items-center gap-2",
                        locale === loc && "bg-secondary/30 font-medium",
                      )}
                    >
                      <span>{localeFlags[loc]}</span>
                      <span>{localeNames[loc]}</span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          <Button
            variant="outline"
            size="sm"
            className="hidden sm:flex"
            asChild
          >
            <a href="mailto:team@pittaya.org">{t("getInTouch")}</a>
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
        <div className="mt-2 sm:hidden flex flex-col items-center gap-2">
          {/* Mobile Language Selector */}
          <div className="flex gap-2">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => {
                  handleLocaleChange(loc);
                  setIsMobileMenuOpen(false);
                }}
                className={cn(
                  "px-3 py-1.5 text-sm rounded-full border transition-colors",
                  locale === loc
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border hover:bg-secondary/50",
                )}
              >
                {localeFlags[loc]}
              </button>
            ))}
          </div>
          <Button
            variant="outline"
            size="sm"
            asChild
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <a href="mailto:team@pittaya.org">{t("getInTouch")}</a>
          </Button>
        </div>
      </div>
    </nav>
  );
}
