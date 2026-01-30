/**
 * Hero section data and configuration
 */
export const heroContent = {
  announcement: {
    text: "New: AM I ON? is now live!",
    href: "https://amion.app",
  },
  headline: {
    main: "Refining Digital",
    accent: "Excellence",
  },
  description:
    "We build tools that bridge functionality and luxury. Experience the next generation of development with Pittaya.",
  cta: {
    primary: {
      label: "Explore Products",
      href: "#products",
    },
    secondary: {
      label: "Who We Are",
      href: "#team",
    },
  },
} as const;

export const heroCode = `const pittayaIndex = {
  interface: "Modern & Minimal",
  performance: "Optimized",
  architecture: ["Next.js 16", "React 19"],
  
  initialize: async () => {
    await loadExperience();
    return "Ready to Ship";
  }
};`;
