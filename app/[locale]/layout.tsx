import type { Metadata } from "next";
import type { ReactNode } from "react";
import { isLocale, Locale, locales, getDictionary } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const dict = getDictionary(locale);
  const canonical = `https://encoreInfluence.com/${locale}`;

  return {
    title: dict.seo.title,
    description: dict.seo.description,
    metadataBase: new URL("https://encoreInfluence.com"),
    alternates: {
      canonical,
      languages: {
        en: "/en",
        "zh-CN": "/zh"
      }
    },
    openGraph: {
      title: dict.seo.title,
      description: dict.seo.description,
      url: canonical,
      siteName: "Encore Influence",
      locale: locale === "zh" ? "zh_CN" : "en_US",
      type: "website"
    }
  };
}

export default async function LocaleLayout({
  children
}: Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  return children;
}
