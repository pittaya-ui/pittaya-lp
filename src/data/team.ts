/**
 * Team members data - Extracted for better maintainability
 */
export const teamMembers = [
  {
    name: "Lucas Ribeiro",
    role: "Co-Founder & Most Beautiful Developer",
    src: "/lucas.jpeg",
    socials: {
      twitter: "https://x.com/lucasribeirodev",
      github: "https://github.com/lucasadsr",
    },
  },
  {
    name: "Marcos Bueno",
    role: "Co-Founder & The best from Olinda",
    src: "/marcos.jpeg",
    socials: {
      twitter: "https://x.com/MarcosBuenoDev",
      github: "https://github.com/marcosvbueno",
    },
  },
  {
    name: "Jarbas Gouveia",
    role: "Co-Founder & The best from Ibura",
    src: "/jarbas.jpeg",
    socials: {
      twitter: "https://x.com/jarbas_gouveia",
      github: "https://github.com/jjgouveia",
    },
  },
] as const;

export type TeamMember = (typeof teamMembers)[number];
