/**
 * Team members data - Extracted for better maintainability
 */
export const teamMembers = [
  {
    name: "Lucas Ribeiro",
    roleKey: "lucas",
    src: "/lucas.jpeg",
    socials: {
      twitter: "https://x.com/lucasribeirodev",
      github: "https://github.com/lucasadsr",
    },
  },
  {
    name: "Marcos Bueno",
    roleKey: "marcos",
    src: "/marcos.jpeg",
    socials: {
      twitter: "https://x.com/MarcosBuenoDev",
      github: "https://github.com/marcosvbueno",
    },
  },
  {
    name: "Jarbas Gouveia",
    roleKey: "jarbas",
    src: "/jarbas.jpeg",
    socials: {
      twitter: "https://x.com/jarbas_gouveia",
      github: "https://github.com/jjgouveia",
    },
  },
] as const;

export type TeamMember = (typeof teamMembers)[number];
