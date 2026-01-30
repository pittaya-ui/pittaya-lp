/**
 * Site configuration - Single source of truth for site metadata and links
 */
export const siteConfig = {
  name: "Pittaya",
  description:
    "Brutal tools for brutal problems. Creating tools that empower the next generation of digital creators.",
  url: "https://pittaya.org",
  ogImage: "/og-image.png",
  links: {
    twitter: "https://twitter.com/pittaya_ui",
    github: "https://github.com/pittaya-ui",
  },
  creator: "Pittaya Org.",
} as const;

export const navLinks = [
  { href: "#products", label: "Products" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#team", label: "Team" },
] as const;

export const footerLinks = {
  products: [
    { href: "https://ui.pittaya.org", label: "Pittaya UI", external: true },
    { href: "https://amion.app", label: "AM I ON?", external: true },
  ],
} as const;
