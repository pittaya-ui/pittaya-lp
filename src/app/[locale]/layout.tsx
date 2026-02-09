import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { siteConfig } from "@/config/site";
import { LenisScrollProvider } from "@/components/lenis-scroll-provider";
import { routing } from "@/i18n/routing";
import { Locale } from "@/i18n/config";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`../../../messages/${locale}.json`)).default;

  const localeMap: Record<string, string> = {
    en: "en_US",
    pt: "pt_BR",
    es: "es_ES",
  };

  return {
    title: {
      default: messages.metadata.title,
      template: messages.metadata.titleTemplate.replace("{title}", "%s"),
    },
    description: messages.metadata.description,
    keywords: [
      "Pittaya",
      "UI library",
      "React components",
      "Tailwind CSS",
      "monitoring",
      "developer tools",
      "AM I ON?",
    ],
    authors: [{ name: siteConfig.creator }],
    creator: siteConfig.creator,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      type: "website",
      locale: localeMap[locale] || "en_US",
      url: siteConfig.url,
      title: siteConfig.name,
      description: messages.metadata.description,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.name,
      description: messages.metadata.description,
      images: [siteConfig.ogImage],
      creator: "Pittaya",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png",
    },
    alternates: {
      canonical: `${siteConfig.url}/${locale}`,
      languages: {
        en: `${siteConfig.url}/en`,
        pt: `${siteConfig.url}/pt`,
        es: `${siteConfig.url}/es`,
      },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased font-sans overflow-x-hidden`}
      >
        <NextIntlClientProvider messages={messages}>
          <LenisScrollProvider>{children}</LenisScrollProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
