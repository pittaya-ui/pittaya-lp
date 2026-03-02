<div align="center">

# Pittaya

**Brutal tools for brutal problems.**

_Official landing page of Pittaya — a company building tools that empower the next generation of digital creators._

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![i18n](https://img.shields.io/badge/i18n-EN_|_PT_|_ES-orange?style=flat-square)](https://next-intl-docs.vercel.app)

🌐 **[pittaya.org](https://pittaya.org)**

</div>

---

## Overview

This repository contains the **official Pittaya landing page**, built with Next.js App Router with a strong focus on performance, accessibility, and internationalization. The page showcases the organization's products, user testimonials, and the founding team.

---

## Products

### 🧩 Pittaya UI

A completely open-source UI library built for React. Powered by Tailwind CSS, Radix primitives, and TypeScript — the foundation of beauty in web development.

- React · Tailwind CSS · Radix UI · TypeScript · Open Source
- 🔗 [ui.pittaya.org](https://ui.pittaya.org)

### 🛡️ AM I ON?

Extreme monitoring for developers who refuse to accept failure. Brutal tools for brutal problems. No cute emails — just alerts that force you to act.

- 🔗 [amion.app](https://amion.app)

### 🎨 Pittaya Theme

A minimalist theme for VSCode, Cursor, Windsurf, and other VSCode-based IDEs. Elegant dark and light modes, open-source, with 1.1k+ downloads across all marketplaces.

- VSCode · Cursor · Windsurf · Dark Mode · Light Mode · Open Source
- 🔗 [VS Marketplace](https://marketplace.visualstudio.com/items?itemName=pittaya-org.pittaya-theme) · [GitHub](https://github.com/pittaya-ui/pittaya-theme)

---

## Tech Stack

| Category      | Technology                                                                                 |
| ------------- | ------------------------------------------------------------------------------------------ |
| Framework     | [Next.js 16](https://nextjs.org) — App Router, React Server Components                     |
| UI            | [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org) (strict mode) |
| Styling       | [Tailwind CSS 4](https://tailwindcss.com)                                                  |
| Components    | [Radix UI](https://www.radix-ui.com) + [Shadcn UI](https://ui.shadcn.com)                  |
| Animations    | [Framer Motion](https://www.framer.com/motion) + [GSAP](https://gsap.com)                  |
| Scroll        | [Lenis](https://lenis.darkroom.engineering) — smooth scrolling                             |
| i18n          | [next-intl](https://next-intl-docs.vercel.app) — EN, PT, ES                                |
| Icons         | [Lucide React](https://lucide.dev)                                                         |
| Notifications | [Sonner](https://sonner.emilkowal.ski)                                                     |

---

## Project Structure

```
pittaya-lp/
├── messages/                   # Translations (EN, PT, ES)
│   ├── en.json
│   ├── pt.json
│   └── es.json
├── public/
│   ├── products/               # Product screenshots
│   └── team/                   # Team photos
└── src/
    ├── app/
    │   ├── [locale]/           # Internationalized routes
    │   │   ├── layout.tsx      # Layout with fonts and providers
    │   │   ├── page.tsx        # Main page (section composition)
    │   │   └── opengraph-image.tsx
    │   └── globals.css
    ├── components/
    │   ├── landing/            # Landing page sections
    │   │   ├── navbar.tsx
    │   │   ├── hero-section.tsx
    │   │   ├── products-section.tsx
    │   │   ├── product-card.tsx
    │   │   ├── testimonials-section.tsx
    │   │   ├── team-section.tsx
    │   │   └── footer.tsx
    │   ├── ui/                 # Shadcn UI components
    │   └── animations/         # Animation wrappers
    ├── config/
    │   └── site.ts             # Site metadata and links
    ├── data/                   # Static data (products, team, etc.)
    │   ├── hero.ts
    │   ├── products.ts
    │   ├── team.ts
    │   └── testimonials.ts
    └── i18n/                   # Internationalization config
        ├── config.ts
        ├── routing.ts
        └── navigation.ts
```

---

## Prerequisites

- [Node.js](https://nodejs.org) **18+**
- npm, yarn, pnpm, or bun

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/pittaya-ui/pittaya-lp.git
cd pittaya-lp

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The root route automatically redirects to the default locale (`/en`).

### Available Scripts

| Command         | Description                       |
| --------------- | --------------------------------- |
| `npm run dev`   | Development server with Turbopack |
| `npm run build` | Production build                  |
| `npm run start` | Production server                 |
| `npm run lint`  | ESLint check                      |

---

## Internationalization

The landing page supports three languages, managed via [next-intl](https://next-intl-docs.vercel.app):

| Locale | Language     | Route |
| ------ | ------------ | ----- |
| `en`   | 🇺🇸 English   | `/en` |
| `pt`   | 🇧🇷 Português | `/pt` |
| `es`   | 🇪🇸 Español   | `/es` |

To add or edit translations, update the files inside `messages/`:

```json
// messages/en.json
{
  "hero": {
    "title": "Brutal tools for brutal problems."
  }
}
```

---

## Team

The Pittaya co-founders:

|     | Name               | GitHub                                           | Twitter                                           |
| --- | ------------------ | ------------------------------------------------ | ------------------------------------------------- |
| 👤  | **Lucas Ribeiro**  | [@lucasadsr](https://github.com/lucasadsr)       | [@lucasribeirodev](https://x.com/lucasribeirodev) |
| 👤  | **Marcos Bueno**   | [@marcosvbueno](https://github.com/marcosvbueno) | [@MarcosBuenoDev](https://x.com/MarcosBuenoDev)   |
| 👤  | **Jarbas Gouveia** | [@jjgouveia](https://github.com/jjgouveia)       | [@jarbas_gouveia](https://x.com/jarbas_gouveia)   |

---

## Links

- 🌐 Website: [pittaya.org](https://pittaya.org)
- 💻 GitHub: [github.com/pittaya-ui](https://github.com/pittaya-ui)

---

<div align="center">

_Made by the Pittaya team_

</div>
