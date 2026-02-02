import { Shield, Terminal } from "lucide-react";

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
    },
    images: {
      desktop: {
        src: "/UI.png",
        alt: "Pittaya UI Desktop",
        width: 800,
        height: 500,
      },
      mobile: {
        src: "/UI-MOBILE.png",
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
        src: "/AMION.png",
        alt: "AM I ON? Dashboard",
        width: 800,
        height: 500,
      },
    },
    gradient: "from-emerald-100 to-teal-50",
  },
] as const;

export type Product = (typeof products)[number];
