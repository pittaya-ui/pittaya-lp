import { Code, Shield, Terminal } from "lucide-react";

/**
 * Products data - Extracted from components for better maintainability
 */
export const products = [
  {
    id: "pittaya-ui",
    title: "Pittaya UI",
    icon: Terminal,
    iconStyle: {
      container: "bg-primary/10 border-primary/20",
      icon: "text-primary",
    },
    description: `A completely open-source UI library built for React. Powered by Tailwind CSS, Radix primitives, and TypeScript. It is the foundation of beauty in web development.`,
    tags: ["React", "Tailwind", "Radix", "Open Source"],
    cta: {
      label: "Start Building",
      href: "https://ui.pittaya.org/",
      className: "bg-pittaya hover:bg-pittaya/90 text-white",
    },
    images: {
      desktop: {
        src: "/products/ui/UI.png",
        alt: "Pittaya UI Desktop",
        width: 800,
        height: 500,
      },
      mobile: {
        src: "/products/ui/UI-MOBILE.png",
        alt: "Pittaya UI Mobile",
        width: 300,
        height: 600,
      },
    },
    gradient: "from-pink-100 to-purple-100",
  },
  {
    id: "am-i-on",
    title: "AM I ON?",
    icon: Shield,
    iconStyle: {
      container: "bg-emerald-100/50 border-emerald-200/50",
      icon: "text-emerald-600",
    },
    quote: "Purge downtime from the face of the earth.",
    description:
      "Extreme monitoring for developers who refuse to accept failure. Brutal tools for brutal problems. No cute emails, just alerts that force you to act.",
    cta: {
      label: "Start Monitoring",
      href: "https://amion.app/",
      className: "bg-emerald-600 hover:bg-emerald-700 text-white",
    },
    images: {
      desktop: {
        src: "/products/amion/AMION.png",
        alt: "AM I ON? Dashboard",
        width: 800,
        height: 500,
      },
    },
    gradient: "from-emerald-100 to-teal-50",
  },
  {
    id: "pittaya-theme",
    title: "Pittaya Theme",
    icon: Code,
    iconStyle: {
      container: "bg-purple-100/50 border-purple-200/50",
      icon: "text-purple-600",
    },
    description:
      "A minimalist theme for VSCode, Cursor, Windsurf, and other VSCode-based IDEs. Built by the Pittaya team, featuring elegant dark and light modes. Open-source and ready for contributions. With 400+ downloads across all marketplaces and support for the most popular technologies including Go, Python, React, TypeScript, JavaScript, HTML, and CSS.",
    tags: [
      "VSCode",
      "Theme",
      "Dark Mode",
      "Light Mode",
      "Open Source",
      "Cursor",
      "Windsurf",
    ],
    cta: [
      {
        label: "Install Theme",
        href: "https://marketplace.visualstudio.com/items?itemName=pittaya-org.pittaya-theme",
        className: "bg-purple-600 hover:bg-purple-700 text-white",
      },
      {
        label: "View on GitHub",
        href: "https://github.com/pittaya-ui/pittaya-theme",
        className: "bg-gray-800 hover:bg-gray-900 text-white",
      },
    ],
    images: {
      desktop: {
        src: "/products/theme/pittaya-theme-screenshot.png",
        alt: "Pittaya Theme Preview",
        width: 800,
        height: 500,
      },
      mobile: {
        src: "/products/theme/PITTAINHO.png",
        alt: "Pittaya Theme Icon",
        width: 512,
        height: 512,
      },
    },
    gradient: "from-purple-100 to-pink-50",
  },
] as const;

export type Product = (typeof products)[number];
