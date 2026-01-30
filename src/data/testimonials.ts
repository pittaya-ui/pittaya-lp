/**
 * Testimonials data - Extracted for better maintainability
 */
export const testimonials = [
  {
    name: "Alex Chen",
    role: "Frontend Lead",
    text: "Pittaya UI saved us weeks of development time. The components are not just functional, they are stunning.",
    initials: "AC",
  },
  {
    name: "Sarah Miller",
    role: "DevOps Engineer",
    text: "AM I ON? is the only monitoring tool that wakes me up when it actually matters. No false positives. Pure efficiency.",
    initials: "SM",
  },
  {
    name: "David K.",
    role: "CTO at TechFlow",
    text: "The attention to detail in every Pittaya product is unmatched. It feels premium, it feels robust.",
    initials: "DK",
  },
] as const;

export type Testimonial = (typeof testimonials)[number];
